-- =============================================================================
-- ระบบสำรวจความประสงค์เข้าร่วมการแข่งขันกีฬา — โครงสร้างฐานข้อมูล Supabase
-- วิธีใช้: Supabase Dashboard > SQL Editor > New query > วางทั้งไฟล์ > Run
-- รันซ้ำได้ (ใช้ if not exists / create or replace)
-- =============================================================================

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- ตารางข้อมูลหลัก
-- ---------------------------------------------------------------------------

-- โรงเรียน (ข้อมูลสาธารณะ)
create table if not exists public.schools (
  code       text primary key,          -- รหัสโรงเรียนที่ใช้เข้าระบบ เช่น CYP001
  name       text not null,
  district   text not null default '',
  created_at timestamptz not null default now()
);

-- PIN ของโรงเรียน (แยกตาราง ไม่มีใครอ่านผ่าน API ได้ เก็บแบบ hash)
create table if not exists public.school_secrets (
  school_code text primary key references public.schools(code) on delete cascade,
  pin_hash    text not null
);

-- ชนิดกีฬา
create table if not exists public.sports (
  id   text primary key,                -- เช่น football
  name text not null,                   -- เช่น ฟุตบอล
  kind text not null default '',        -- ทีม / บุคคล
  sort int  not null default 0
);

-- รายการแข่งขัน = กีฬา × ประเภท × เพศ × รุ่น (แต่ละกีฬากำหนดรุ่นเอง)
create table if not exists public.events (
  id       text primary key,            -- เช่น football-0-m-16
  sport_id text not null references public.sports(id) on delete cascade,
  category text not null,               -- เช่น ทีม, เดี่ยว, คู่, วิ่ง 100 ม.
  gender   text not null,               -- ชาย / หญิง / ผสม
  division text not null,               -- เช่น 16 ปี, ม.ต้น
  sort     int  not null default 0
);

-- คอลัมน์ที่เพิ่มภายหลัง (รันซ้ำได้กับฐานข้อมูลเดิม)
alter table public.sports add column if not exists venue  text    not null default '';
alter table public.sports add column if not exists note   text    not null default '';
alter table public.sports add column if not exists active boolean not null default true;
alter table public.events add column if not exists note   text    not null default '';
alter table public.events add column if not exists active boolean not null default true;
-- ปิดรายการแทนการลบ: ถ้าลบรายการ ความประสงค์ของทุกโรงเรียนในรายการนั้นจะหายไปด้วย
alter table public.events alter column sort type numeric using sort::numeric;
create unique index if not exists events_unique_combo on public.events (sport_id, category, gender, division);

-- ความประสงค์: มีแถว = โรงเรียนส่ง 1 ทีม/คนในรายการนั้น
create table if not exists public.intents (
  school_code text not null references public.schools(code) on delete cascade,
  event_id    text not null references public.events(id) on delete cascade,
  created_at  timestamptz not null default now(),
  primary key (school_code, event_id)
);

-- เวลาที่โรงเรียนบันทึกล่าสุด (โรงเรียนที่ยังไม่มีแถว = ยังไม่ส่ง)
create table if not exists public.submissions (
  school_code text primary key references public.schools(code) on delete cascade,
  updated_at  timestamptz not null default now()
);

-- ตั้งค่าระบบ (มีแถวเดียว id = 1)
create table if not exists public.settings (
  id       int primary key default 1 check (id = 1),
  open_at  timestamptz,                 -- null = ไม่จำกัดเวลาเริ่ม
  close_at timestamptz,                 -- null = ไม่จำกัดเวลาปิด
  note     text not null default ''
);
insert into public.settings (id) values (1) on conflict (id) do nothing;

-- ผู้ดูแลระบบ (ผูกกับบัญชี Supabase Auth แบบอีเมล/รหัสผ่าน)
create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email   text not null default ''
);

-- ---------------------------------------------------------------------------
-- สิทธิ์การเข้าถึง (RLS)
-- ทุกคนอ่านข้อมูลสาธารณะได้ แต่เขียนได้ผ่านฟังก์ชันด้านล่างเท่านั้น
-- ---------------------------------------------------------------------------
alter table public.schools        enable row level security;
alter table public.school_secrets enable row level security;
alter table public.sports         enable row level security;
alter table public.events         enable row level security;
alter table public.intents        enable row level security;
alter table public.submissions    enable row level security;
alter table public.settings       enable row level security;
alter table public.admins         enable row level security;

drop policy if exists "public read" on public.schools;
create policy "public read" on public.schools     for select using (true);
drop policy if exists "public read" on public.sports;
create policy "public read" on public.sports      for select using (true);
drop policy if exists "public read" on public.events;
create policy "public read" on public.events      for select using (true);
drop policy if exists "public read" on public.intents;
create policy "public read" on public.intents     for select using (true);
drop policy if exists "public read" on public.submissions;
create policy "public read" on public.submissions for select using (true);
drop policy if exists "public read" on public.settings;
create policy "public read" on public.settings    for select using (true);
-- school_secrets และ admins: ไม่มี policy = อ่าน/เขียนผ่าน API ไม่ได้

-- ---------------------------------------------------------------------------
-- ฟังก์ชันช่วย
-- ---------------------------------------------------------------------------
create or replace function public._check_pin(p_code text, p_pin text)
returns boolean language sql stable security definer set search_path = public, extensions as $$
  select exists (
    select 1 from school_secrets
    where school_code = upper(trim(p_code))
      and pin_hash = crypt(trim(p_pin), pin_hash)
  );
$$;

create or replace function public._is_open()
returns boolean language sql stable security definer set search_path = public as $$
  select coalesce((select (open_at is null or now() >= open_at)
                      and (close_at is null or now() <= close_at)
                   from settings where id = 1), true);
$$;

create or replace function public._is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from admins where user_id = auth.uid());
$$;

revoke all on function public._check_pin(text, text) from public, anon, authenticated;

-- ---------------------------------------------------------------------------
-- ฟังก์ชันสำหรับโรงเรียน
-- ---------------------------------------------------------------------------

-- เข้าระบบ: คืนข้อมูลโรงเรียน + รายการที่เลือกไว้
create or replace function public.school_login(p_code text, p_pin text)
returns json language plpgsql stable security definer set search_path = public as $$
declare v_school schools;
begin
  if not _check_pin(p_code, p_pin) then
    raise exception 'รหัสโรงเรียนหรือ PIN ไม่ถูกต้อง' using errcode = '28000';
  end if;
  select * into v_school from schools where code = upper(trim(p_code));
  return json_build_object(
    'school', json_build_object('code', v_school.code, 'name', v_school.name, 'district', v_school.district),
    'event_ids', coalesce((select json_agg(event_id) from intents where school_code = v_school.code), '[]'::json),
    'updated_at', (select updated_at from submissions where school_code = v_school.code),
    'is_open', _is_open()
  );
end $$;

-- บันทึกความประสงค์ (แทนที่ทั้งชุด) — ทำได้เฉพาะช่วงเปิดรับ
create or replace function public.save_intents(p_code text, p_pin text, p_event_ids text[])
returns json language plpgsql security definer set search_path = public as $$
declare v_code text := upper(trim(p_code)); v_now timestamptz := now();
begin
  if not _check_pin(v_code, p_pin) then
    raise exception 'รหัสโรงเรียนหรือ PIN ไม่ถูกต้อง' using errcode = '28000';
  end if;
  if not _is_open() then
    raise exception 'ระบบปิดรับความประสงค์แล้ว กรุณาติดต่อฝ่ายจัดการแข่งขัน' using errcode = '42501';
  end if;
  delete from intents where school_code = v_code;
  insert into intents (school_code, event_id)
    select v_code, e.id from events e join sports s on s.id = e.sport_id
    where e.id = any(coalesce(p_event_ids, '{}')) and e.active and s.active;
  insert into submissions (school_code, updated_at) values (v_code, v_now)
    on conflict (school_code) do update set updated_at = excluded.updated_at;
  return json_build_object('updated_at', v_now,
    'count', (select count(*) from intents where school_code = v_code));
end $$;

-- ---------------------------------------------------------------------------
-- ฟังก์ชันสำหรับผู้ดูแล (ต้องล็อกอินด้วยบัญชีที่อยู่ในตาราง admins)
-- ---------------------------------------------------------------------------
create or replace function public.admin_save_settings(p_open_at timestamptz, p_close_at timestamptz, p_note text)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not _is_admin() then raise exception 'ไม่มีสิทธิ์ผู้ดูแล' using errcode = '42501'; end if;
  update settings set open_at = p_open_at, close_at = p_close_at, note = coalesce(p_note, '') where id = 1;
end $$;

-- ออก PIN ใหม่ 6 หลักให้โรงเรียน คืนค่า PIN (แสดงครั้งเดียว)
create or replace function public.admin_reset_pin(p_code text)
returns text language plpgsql security definer set search_path = public, extensions as $$
declare v_pin text := lpad((floor(random() * 1000000))::int::text, 6, '0');
begin
  if not _is_admin() then raise exception 'ไม่มีสิทธิ์ผู้ดูแล' using errcode = '42501'; end if;
  insert into school_secrets (school_code, pin_hash) values (upper(trim(p_code)), crypt(v_pin, gen_salt('bf')))
    on conflict (school_code) do update set pin_hash = excluded.pin_hash;
  return v_pin;
end $$;

-- ออก PIN ให้ทุกโรงเรียนที่ยังไม่มี PIN คืนรายการ (code, name, pin) ไว้พิมพ์แจก
create or replace function public.admin_issue_missing_pins()
returns table (code text, name text, pin text) language plpgsql security definer set search_path = public, extensions as $$
declare r record; v_pin text;
begin
  if not _is_admin() then raise exception 'ไม่มีสิทธิ์ผู้ดูแล' using errcode = '42501'; end if;
  for r in select s.code, s.name from schools s
           where not exists (select 1 from school_secrets x where x.school_code = s.code)
           order by s.code loop
    v_pin := lpad((floor(random() * 1000000))::int::text, 6, '0');
    insert into school_secrets (school_code, pin_hash) values (r.code, crypt(v_pin, gen_salt('bf')));
    code := r.code; name := r.name; pin := v_pin;
    return next;
  end loop;
end $$;

-- ผู้ดูแลแก้ความประสงค์แทนโรงเรียนได้ แม้ปิดรับแล้ว
create or replace function public.admin_save_intents(p_code text, p_event_ids text[])
returns void language plpgsql security definer set search_path = public as $$
declare v_code text := upper(trim(p_code));
begin
  if not _is_admin() then raise exception 'ไม่มีสิทธิ์ผู้ดูแล' using errcode = '42501'; end if;
  delete from intents where school_code = v_code;
  insert into intents (school_code, event_id)
    select v_code, e.id from events e where e.id = any(coalesce(p_event_ids, '{}'));
  insert into submissions (school_code, updated_at) values (v_code, now())
    on conflict (school_code) do update set updated_at = excluded.updated_at;
end $$;

-- เพิ่ม/แก้ชนิดกีฬา (ไม่มีการลบ ใช้ active = false แทน)
create or replace function public.admin_save_sport(p_sport jsonb)
returns sports language plpgsql security definer set search_path = public as $$
declare v_id text := upper(trim(coalesce(p_sport->>'id', ''))); v_row sports;
begin
  if not _is_admin() then raise exception 'ไม่มีสิทธิ์ผู้ดูแล' using errcode = '42501'; end if;
  if v_id !~ '^[A-Z0-9]{2,6}$' then
    raise exception 'รหัสกีฬาต้องเป็นอักษรอังกฤษหรือตัวเลข 2–6 ตัว เช่น ATH' using errcode = '22023';
  end if;
  if coalesce((p_sport->>'isNew')::boolean, false) and exists (select 1 from sports where id = v_id) then
    raise exception 'มีรหัสกีฬา % อยู่แล้ว', v_id using errcode = '23505';
  end if;
  insert into sports (id, name, kind, venue, note, active, sort)
  values (v_id, coalesce(p_sport->>'name', v_id), coalesce(p_sport->>'kind', ''), coalesce(p_sport->>'venue', ''),
          coalesce(p_sport->>'note', ''), coalesce((p_sport->>'active')::boolean, true),
          coalesce((select max(sort) + 1 from sports), 1))
  on conflict (id) do update set
    name   = coalesce(p_sport->>'name', sports.name),
    kind   = coalesce(p_sport->>'kind', sports.kind),
    venue  = coalesce(p_sport->>'venue', sports.venue),
    note   = coalesce(p_sport->>'note', sports.note),
    active = coalesce((p_sport->>'active')::boolean, sports.active)
  returning * into v_row;
  return v_row;
end $$;

-- เพิ่ม/แก้รายการแข่งขัน: ไม่มี id = เพิ่มใหม่ ระบบตั้ง id ต่อจากรายการล่าสุดของกีฬานั้น (เช่น ATH-07)
create or replace function public.admin_save_event(p_event jsonb)
returns events language plpgsql security definer set search_path = public as $$
declare v_id text := nullif(trim(coalesce(p_event->>'id', '')), ''); v_sport text := p_event->>'sport_id'; v_row events;
begin
  if not _is_admin() then raise exception 'ไม่มีสิทธิ์ผู้ดูแล' using errcode = '42501'; end if;
  if v_id is null then
    if not exists (select 1 from sports where id = v_sport) then
      raise exception 'ไม่พบชนิดกีฬา %', v_sport using errcode = '22023';
    end if;
    select v_sport || '-' || lpad((coalesce(max(nullif(split_part(id, '-', 2), '')::int), 0) + 1)::text, 2, '0')
      into v_id from events where sport_id = v_sport and split_part(id, '-', 2) ~ '^[0-9]+$';
    insert into events (id, sport_id, category, gender, division, note, active, sort)
    values (v_id, v_sport, trim(p_event->>'category'), trim(p_event->>'gender'), trim(p_event->>'division'),
            coalesce(p_event->>'note', ''), coalesce((p_event->>'active')::boolean, true),
            coalesce((select max(sort) + 0.01 from events where sport_id = v_sport), 0))
    returning * into v_row;
  else
    update events set
      category = coalesce(trim(p_event->>'category'), category),
      gender   = coalesce(trim(p_event->>'gender'), gender),
      division = coalesce(trim(p_event->>'division'), division),
      note     = coalesce(p_event->>'note', note),
      active   = coalesce((p_event->>'active')::boolean, active)
    where id = v_id
    returning * into v_row;
    if v_row.id is null then raise exception 'ไม่พบรายการ %', v_id using errcode = '22023'; end if;
  end if;
  return v_row;
exception when unique_violation then
  raise exception 'มีรายการนี้อยู่แล้วในกีฬาเดียวกัน' using errcode = '23505';
end $$;

grant execute on function public.admin_save_sport(jsonb) to authenticated;
grant execute on function public.admin_save_event(jsonb) to authenticated;
grant execute on function public.school_login(text, text)               to anon, authenticated;
grant execute on function public.save_intents(text, text, text[])       to anon, authenticated;
grant execute on function public.admin_save_settings(timestamptz, timestamptz, text) to authenticated;
grant execute on function public.admin_reset_pin(text)                  to authenticated;
grant execute on function public.admin_issue_missing_pins()             to authenticated;
grant execute on function public.admin_save_intents(text, text[])       to authenticated;
