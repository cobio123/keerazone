// ชั้นข้อมูล: ทำงานได้ 2 โหมด
//  - demo : ใช้ข้อมูลสมมติ + เก็บการแก้ไขไว้ใน localStorage ของเครื่องนั้น (ไม่ต้องมีเซิร์ฟเวอร์)
//  - live : เชื่อม Supabase ผ่าน REST API (ไม่ต้องโหลดไลบรารีเพิ่ม)
(function () {
  const cfg = window.APP_CONFIG || {};
  const LIVE = Boolean(cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY);
  const DEMO_KEY = 'keerazone_demo_v1';
  const ADMIN_KEY = 'keerazone_admin_session';

  // ---------------------------------------------------------------- demo
  function demoState() {
    let s = null;
    try { s = JSON.parse(localStorage.getItem(DEMO_KEY)); } catch (e) { s = null; }
    s = s || { intents: {}, submittedAt: {}, pins: {}, settings: { open_at: null, close_at: null, note: '' } };
    s.catalog = s.catalog || { sports: {}, events: {} };
    return s;
  }
  function demoSave(s) {
    try { localStorage.setItem(DEMO_KEY, JSON.stringify(s)); } catch (e) { /* ignore */ }
  }
  function demoIntents() {
    const s = demoState();
    const base = window.MOCK.intents.filter((r) => !(r.school_code in s.intents));
    const extra = [];
    Object.entries(s.intents).forEach(([code, ids]) => ids.forEach((id) => extra.push({ school_code: code, event_id: id })));
    return base.concat(extra);
  }
  function demoSubmissions() {
    const s = demoState();
    const all = Object.assign({}, window.MOCK.submittedAt, s.submittedAt);
    return Object.entries(all).map(([school_code, updated_at]) => ({ school_code, updated_at }));
  }
  // รายการกีฬา: ข้อมูลตั้งต้นจาก catalog.js + ส่วนที่แอดมินแก้ในเครื่องนี้
  function demoCatalog() {
    const c = demoState().catalog;
    const merge = (base, over) => {
      const m = {};
      base.forEach((x) => { m[x.id] = Object.assign({}, x); });
      Object.values(over).forEach((x) => { m[x.id] = Object.assign({}, m[x.id] || {}, x); });
      return Object.values(m).sort((a, b) => (a.sort - b.sort) || String(a.id).localeCompare(String(b.id)));
    };
    return { sports: merge(window.MOCK.sports, c.sports), events: merge(window.MOCK.events, c.events) };
  }
  function nextEventId(events, sportId) {
    const nums = events.filter((e) => e.sport_id === sportId)
      .map((e) => Number(String(e.id).split('-').pop()) || 0);
    return `${sportId}-${String(Math.max(0, ...nums) + 1).padStart(2, '0')}`;
  }

  function demoPin(code) {
    const s = demoState();
    return s.pins[code] || window.MOCK.DEMO_PIN;
  }

  // ---------------------------------------------------------------- live
  function headers(token) {
    return {
      apikey: cfg.SUPABASE_ANON_KEY,
      Authorization: 'Bearer ' + (token || cfg.SUPABASE_ANON_KEY),
      'Content-Type': 'application/json',
    };
  }
  async function rest(path) {
    const res = await fetch(cfg.SUPABASE_URL + '/rest/v1/' + path, { headers: headers() });
    if (!res.ok) throw new Error('โหลดข้อมูลไม่สำเร็จ (' + res.status + ')');
    return res.json();
  }
  async function rpc(fn, body, token) {
    const res = await fetch(cfg.SUPABASE_URL + '/rest/v1/rpc/' + fn, {
      method: 'POST', headers: headers(token), body: JSON.stringify(body || {}),
    });
    const text = await res.text();
    const data = text ? JSON.parse(text) : null;
    if (!res.ok) throw new Error((data && (data.message || data.hint)) || ('เกิดข้อผิดพลาด (' + res.status + ')'));
    return data;
  }
  function adminToken() {
    try { return JSON.parse(sessionStorage.getItem(ADMIN_KEY)); } catch (e) { return null; }
  }

  // ---------------------------------------------------------------- shared
  function isOpen(settings, now) {
    now = now || new Date();
    if (!settings) return true;
    if (settings.open_at && now < new Date(settings.open_at)) return false;
    if (settings.close_at && now > new Date(settings.close_at)) return false;
    return true;
  }

  const Store = {
    mode: LIVE ? 'live' : 'demo',
    isOpen,

    async catalog() {
      if (!LIVE) {
        const c = demoCatalog();
        return { schools: window.MOCK.schools, sports: c.sports, events: c.events };
      }
      const [schools, sports, events] = await Promise.all([
        rest('schools?select=code,name,district&order=code'),
        rest('sports?select=*&order=sort,id'),
        rest('events?select=*&order=sort,id'),
      ]);
      return { schools, sports, events };
    },

    async intents() {
      if (!LIVE) return { intents: demoIntents(), submissions: demoSubmissions() };
      const [intents, submissions] = await Promise.all([
        rest('intents?select=school_code,event_id'),
        rest('submissions?select=school_code,updated_at'),
      ]);
      return { intents, submissions };
    },

    async settings() {
      if (!LIVE) return demoState().settings;
      const rows = await rest('settings?select=open_at,close_at,note&id=eq.1');
      return rows[0] || { open_at: null, close_at: null, note: '' };
    },

    async login(code, pin) {
      code = String(code || '').trim().toUpperCase();
      pin = String(pin || '').trim();
      if (!LIVE) {
        const school = window.MOCK.schools.find((s) => s.code === code);
        if (!school || pin !== demoPin(code)) throw new Error('รหัสโรงเรียนหรือ PIN ไม่ถูกต้อง');
        const s = demoState();
        const event_ids = code in s.intents
          ? s.intents[code]
          : window.MOCK.intents.filter((r) => r.school_code === code).map((r) => r.event_id);
        const updated_at = s.submittedAt[code] || window.MOCK.submittedAt[code] || null;
        return { school, event_ids, updated_at, is_open: isOpen(s.settings) };
      }
      return rpc('school_login', { p_code: code, p_pin: pin });
    },

    async saveIntents(code, pin, eventIds) {
      if (!LIVE) {
        const s = demoState();
        if (!isOpen(s.settings)) throw new Error('ระบบปิดรับความประสงค์แล้ว กรุณาติดต่อฝ่ายจัดการแข่งขัน');
        if (pin !== demoPin(code)) throw new Error('รหัสโรงเรียนหรือ PIN ไม่ถูกต้อง');
        const now = new Date().toISOString();
        const open = new Set(demoCatalog().events.filter((e) => e.active !== false).map((e) => e.id));
        eventIds = eventIds.filter((id) => open.has(id));
        s.intents[code] = eventIds.slice();
        s.submittedAt[code] = now;
        demoSave(s);
        return { updated_at: now, count: eventIds.length };
      }
      return rpc('save_intents', { p_code: code, p_pin: pin, p_event_ids: eventIds });
    },

    // ------------------------------------------------------------ admin
    admin: {
      isSignedIn() {
        return Boolean(adminToken());
      },
      async signIn(email, password) {
        if (!LIVE) {
          if (password !== 'admin') throw new Error('โหมดสาธิต: ใช้รหัสผ่าน admin');
          sessionStorage.setItem(ADMIN_KEY, JSON.stringify({ demo: true, email: email || 'demo' }));
          return;
        }
        const res = await fetch(cfg.SUPABASE_URL + '/auth/v1/token?grant_type=password', {
          method: 'POST', headers: headers(), body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error_description || data.msg || 'เข้าสู่ระบบไม่สำเร็จ');
        sessionStorage.setItem(ADMIN_KEY, JSON.stringify({ access_token: data.access_token, email }));
      },
      signOut() {
        sessionStorage.removeItem(ADMIN_KEY);
      },
      async saveSettings(open_at, close_at, note) {
        if (!LIVE) {
          const s = demoState();
          s.settings = { open_at, close_at, note: note || '' };
          demoSave(s);
          return;
        }
        await rpc('admin_save_settings', { p_open_at: open_at, p_close_at: close_at, p_note: note || '' },
          adminToken().access_token);
      },
      async resetPin(code) {
        if (!LIVE) {
          const pin = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
          const s = demoState();
          s.pins[code] = pin;
          demoSave(s);
          return pin;
        }
        return rpc('admin_reset_pin', { p_code: code }, adminToken().access_token);
      },
      // ออก PIN ให้โรงเรียนที่ยังไม่มี คืน [{code, name, pin}] ไว้พิมพ์/ส่งให้โรงเรียน
      async issueMissingPins() {
        if (!LIVE) {
          const s = demoState();
          return window.MOCK.schools.map((sc) => ({ code: sc.code, name: sc.name, pin: s.pins[sc.code] || window.MOCK.DEMO_PIN }));
        }
        return rpc('admin_issue_missing_pins', {}, adminToken().access_token);
      },
      async saveIntentsFor(code, eventIds) {
        if (!LIVE) {
          const s = demoState();
          s.intents[code] = eventIds.slice();
          s.submittedAt[code] = new Date().toISOString();
          demoSave(s);
          return;
        }
        await rpc('admin_save_intents', { p_code: code, p_event_ids: eventIds }, adminToken().access_token);
      },
      // เพิ่ม/แก้ชนิดกีฬา: ไม่มี id = เพิ่มใหม่ (id คือรหัสย่อภาษาอังกฤษ เช่น ATH)
      async saveSport(sport) {
        sport = Object.assign({}, sport);
        if (!LIVE) {
          const s = demoState();
          const all = demoCatalog().sports;
          sport.id = String(sport.id || '').trim().toUpperCase();
          if (!/^[A-Z0-9]{2,6}$/.test(sport.id)) throw new Error('รหัสกีฬาต้องเป็นอักษรอังกฤษหรือตัวเลข 2–6 ตัว เช่น ATH');
          if (sport.isNew && all.some((x) => x.id === sport.id)) throw new Error('มีรหัสกีฬา ' + sport.id + ' อยู่แล้ว');
          const prev = all.find((x) => x.id === sport.id);
          delete sport.isNew;
          if (!prev) sport.sort = Math.max(0, ...all.map((x) => x.sort || 0)) + 1;
          if (sport.active === undefined) sport.active = true;
          s.catalog.sports[sport.id] = Object.assign({}, prev || {}, sport);
          demoSave(s);
          return s.catalog.sports[sport.id];
        }
        return rpc('admin_save_sport', { p_sport: sport }, adminToken().access_token);
      },
      // เพิ่ม/แก้รายการแข่งขัน: ไม่มี id = เพิ่มใหม่ ระบบตั้ง id ให้ (เช่น ATH-07) และไม่เปลี่ยนอีก
      async saveEvent(ev) {
        ev = Object.assign({}, ev);
        ['category', 'gender', 'division'].forEach((k) => {
          ev[k] = String(ev[k] || '').trim();
          if (!ev[k]) throw new Error('กรุณากรอกประเภท เพศ และรุ่นให้ครบ');
        });
        if (!LIVE) {
          const s = demoState();
          const c = demoCatalog();
          const dup = c.events.find((x) => x.id !== ev.id && x.sport_id === ev.sport_id &&
            x.category === ev.category && x.gender === ev.gender && x.division === ev.division);
          if (dup) throw new Error('มีรายการนี้อยู่แล้ว (' + dup.id + ')');
          if (!ev.id) {
            ev.id = nextEventId(c.events, ev.sport_id);
            // ต่อท้ายรายการของกีฬานั้น (หน้าเว็บจัดกลุ่มตามกีฬาอยู่แล้ว)
            ev.sort = Math.max(0, ...c.events.filter((x) => x.sport_id === ev.sport_id).map((x) => x.sort || 0)) + 0.01;
            if (ev.active === undefined) ev.active = true;
          }
          const prev = c.events.find((x) => x.id === ev.id) || {};
          s.catalog.events[ev.id] = Object.assign({}, prev, ev);
          demoSave(s);
          return s.catalog.events[ev.id];
        }
        return rpc('admin_save_event', { p_event: ev }, adminToken().access_token);
      },
      resetDemo() {
        localStorage.removeItem(DEMO_KEY);
      },
    },
  };

  window.Store = Store;
})();
