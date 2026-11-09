"""ใช้: python3 tools/build_catalog.py data/sports_registration_structure.xlsx assets/js/catalog.js supabase/seed.sql

แปลง sports_registration_structure.xlsx เป็นรายการกีฬา/รายการแข่งขันของระบบ
ระดับความละเอียด = ชีต "โครงสร้างระบบรับสมัคร" โดยแยกแถวที่รวมหลายเพศ/หลายประเภทออกเป็นรายการย่อย
"""
import json, sys, openpyxl

src, out_js = sys.argv[1], sys.argv[2]
wb = openpyxl.load_workbook(src)
summary = {}
for r in wb['สรุปชนิดกีฬา'].iter_rows(min_row=5, values_only=True):
    if r[0] is None:
        continue
    summary[r[1]] = {'venue': r[5] or '', 'note': r[6] or ''}

# หมายเหตุ/จำกัดจำนวน: ใช้แถวที่ตรงเพศก่อน ถ้าไม่มีใช้แถวแรกของกีฬานั้น
limits, limits_by_gender = {}, {}
for r in wb['โครงสร้างระบบรับสมัคร'].iter_rows(min_row=4, values_only=True):
    if r[0]:
        limits.setdefault(r[0], r[5] or '')
        g = str(r[4] or '')
        for one in ('ชาย', 'หญิง'):
            if g.startswith(one) and '/' not in g:
                limits_by_gender.setdefault((r[0], one), r[5] or '')

AGES = ['ไม่เกิน 14 ปี', 'ไม่เกิน 16 ปี', 'ไม่เกิน 18 ปี']
MF = ['ชาย', 'หญิง']
BOX_AGE = '15–19 ปี (เกิด พ.ศ. 2550–2554)'

# (code, name, kind, summary-sheet name, [(category, gender, division, note)])
def grid(category, genders=MF, ages=AGES, note=None):
    return [(category, g, a, note) for g in genders for a in ages]

sports = [
    ('ATH', 'กรีฑา', 'บุคคล', 'กรีฑา', None),   # แยกรายละเอียดจากชีต "รายละเอียดกรีฑาและว่ายน้ำ"
    ('SWM', 'ว่ายน้ำ', 'บุคคล', 'ว่ายน้ำ', None),
    ('TT', 'เทเบิลเทนนิส', 'บุคคล', 'เทเบิลเทนนิส',
        [(c, g, a, None) for (c, g) in [('เดี่ยว', 'ชาย'), ('เดี่ยว', 'หญิง'), ('คู่', 'ชาย'), ('คู่', 'หญิง'), ('คู่ผสม', 'ผสม')] for a in AGES]),
    ('BAD', 'แบดมินตัน', 'บุคคล', 'แบดมินตัน',
        [(c, g, a, None) for (c, g) in [('เดี่ยว', 'ชาย'), ('เดี่ยว', 'หญิง'), ('คู่', 'ชาย'), ('คู่', 'หญิง'), ('คู่ผสม', 'ผสม')] for a in AGES]),
    ('BOX', 'มวยสากลสมัครเล่น', 'บุคคล', 'มวยสากลสมัครเล่น',
        [(w, 'ชาย', BOX_AGE, None) for w in ['เปเปอร์เวท (>39–42 กก.)', 'พินเวท (>42–46 กก.)', 'ไลท์ฟลายเวท (>46–49 กก.)', 'ฟลายเวท (>49–52 กก.)', 'แบนตั้มเวท (>52–56 กก.)', 'ไลท์เวท (>56–60 กก.)', 'ไลท์เวลเตอร์เวท (>60–64 กก.)']]
        + [(w, 'หญิง', BOX_AGE, None) for w in ['เปเปอร์เวท (>39–42 กก.)', 'พินเวท (>42–45 กก.)', 'ไลท์ฟลายเวท (>45–48 กก.)', 'ฟลายเวท (>48–51 กก.)', 'แบนตั้มเวท (>51–54 กก.)', 'เฟเธอร์เวท (>54–57 กก.)', 'ไลท์เวท (>57–60 กก.)']]),
    ('MBX', 'มวยไทยสมัครเล่น', 'บุคคล', 'มวยไทยสมัครเล่น', [('11 รุ่นพิกัดน้ำหนัก (39–75 กก.)', 'ชาย', BOX_AGE, None)]),
    ('WLF', 'ยกน้ำหนัก', 'บุคคล/ทีม', 'ยกน้ำหนัก',
        [('ทีม 7 รุ่นน้ำหนัก (55–89+ กก.)', 'ชาย', 'ไม่เกิน 18 ปี', None), ('ทีม 7 รุ่นน้ำหนัก (45–71+ กก.)', 'หญิง', 'ไม่เกิน 18 ปี', None)]),
    ('FTB', 'ฟุตบอล', 'ทีม', 'ฟุตบอล', grid('ทีม', ['ชาย']) + [('ทีม', 'หญิง', 'ไม่เกิน 18 ปี', None)]),
    ('FTS', 'ฟุตซอล', 'ทีม', 'ฟุตซอล', grid('ทีม')),
    ('VOL', 'วอลเลย์บอลในร่ม', 'ทีม', 'วอลเลย์บอลในร่ม', grid('ทีม')),
    ('BVL', 'วอลเลย์บอลชายหาด', 'ทีม', 'วอลเลย์บอลชายหาด', grid('ทีม 2 คน')),
    ('BSK', 'บาสเกตบอล 5x5', 'ทีม', 'บาสเกตบอล & 3x3', grid('ทีม 5 คน')),
    ('B33', 'บาสเกตบอล 3x3', 'ทีม', 'บาสเกตบอล & 3x3', grid('ทีม 3 คน')),
    ('TAK', 'เซปักตะกร้อ', 'ทีม', 'เซปักตะกร้อ', grid('ทีมชุด', ['ชาย']) + grid('ทีมเดี่ยว')),
    ('HDB', 'แฮนด์บอล', 'ทีม', 'แฮนด์บอล', grid('ทีม')),
    ('PTQ', 'เปตอง', 'ทีม', 'เปตอง', grid('ทีม 3 คน')),
    ('ESP', 'อีสปอร์ต', 'ทีม/บุคคล', 'อีสปอร์ต',
        [('ROV (ทีม 5 คน)', 'ไม่จำกัดเพศ', 'ไม่เกิน 18 ปี (13–18 ปี)', 'สำรองได้ไม่เกิน 3 คน'),
         ('EA SPORTS FC Mobile (บุคคล)', 'ไม่จำกัดเพศ', 'ไม่เกิน 18 ปี (13–18 ปี)', 'ประเภทบุคคล')]),
    ('TQB', 'เทคบอล', 'บุคคล/ทีม', 'เทคบอล', [('ตามประกาศ', 'ชาย', 'ตามประกาศ', None), ('ตามประกาศ', 'หญิง', 'ตามประกาศ', None)]),
]

# ---- กรีฑาและว่ายน้ำ: 1 รายการ = ชื่อรายการ × เพศ × รุ่น ตามชีตรายละเอียด
import re
DETAIL_PREFIX = {'วิ่งข้ามรั้ว': 'รั้วสูง ', 'เขย่งก้าวกระโดด': 'วัดระยะตั้งแต่ '}
THROW = ('ทุ่มน้ำหนัก', 'ขว้างจักร', 'พุ่งแหลน')

def genders_in(cell):
    """คืน {เพศ: รายละเอียดในวงเล็บ} จากข้อความเช่น 'ชาย (4 กก.) / หญิง (3.63 กก.)', 'หญิงเท่านั้น (0.762 ม.)'"""
    cell = str(cell or '').strip()
    if cell in ('', '-'):
        return {}
    out = {}
    for part in cell.split('/'):
        part = part.strip()
        m = re.match(r'(ชาย|หญิง)(?:เท่านั้น)?\s*(?:\((.*)\))?', part)
        if m:
            out[m.group(1)] = (m.group(2) or '').strip()
    return out

def detail_events(sport_name):
    rows = []
    for r in wb['รายละเอียดกรีฑาและว่ายน้ำ'].iter_rows(min_row=4, values_only=True):
        if r[0] != sport_name:
            continue
        group, name, cells, remark = r[1], r[2], r[3:6], (r[6] or '').strip()
        remark = '' if remark in ('-', 'ความสูงรั้วตามรุ่น', 'น้ำหนักอุปกรณ์ตามรุ่น') else remark
        # 'ฟรีสไตล์ 50 ม. / 100 ม.' -> 2 รายการ
        m = re.match(r'^(.*?)(\d[\d,]*\s*ม\.)\s*/\s*(\d[\d,]*\s*ม\.)$', name)
        names = [m.group(1) + m.group(2), m.group(1) + m.group(3)] if m else [name]
        for nm in names:
            for g in ('ชาย', 'หญิง'):
                for age, cell in zip(AGES, cells):
                    gd = genders_in(cell)
                    if g not in gd:
                        continue
                    detail = gd[g]
                    if detail:
                        prefix = 'น้ำหนักอุปกรณ์ ' if name in THROW else DETAIL_PREFIX.get(name, DETAIL_PREFIX.get(group, ''))
                        detail = prefix + detail.replace('ม.', ' ม.').replace('  ', ' ').strip()
                    rem = remark
                    # หมายเหตุที่ระบุค่าแยกเพศ เช่น 'วัดระยะตั้งแต่ 3 ม. (หญิง) / 4 ม. (ชาย) ขึ้นไป' -> เอาเฉพาะเพศนี้
                    per = dict((gg, v) for v, gg in re.findall(r'([\d.]+\s*ม\.)\s*\((ชาย|หญิง)\)', remark))
                    if per:
                        rem = '' if detail else 'วัดระยะตั้งแต่ ' + per[g].replace('ม.', ' ม.').replace('  ', ' ') + (' ขึ้นไป' if 'ขึ้นไป' in remark else '')
                    note = ' · '.join(x for x in (detail, rem) if x)
                    rows.append((nm, g, age, note))
    return rows

sports = [(c, n, k, sn, ev if ev is not None else detail_events(sn)) for (c, n, k, sn, ev) in sports]

out_sports, out_events = [], []
order = 0
for si, (code, name, kind, sname, events) in enumerate(sports, 1):
    meta = summary[sname]
    out_sports.append({'id': code, 'name': name, 'kind': kind, 'venue': meta['venue'],
                       'note': meta['note'], 'sort': si, 'active': True})
    for ei, (cat, gender, div, note) in enumerate(events, 1):
        order += 1
        out_events.append({'id': f'{code}-{ei:02d}', 'sport_id': code, 'category': cat, 'gender': gender,
                           'division': div, 'note': note if note is not None else limits_by_gender.get((code, gender), limits.get(code, '')),
                           'sort': order, 'active': True})

# ตรวจความถูกต้อง
assert len({e['id'] for e in out_events}) == len(out_events)
keys = [(e['sport_id'], e['category'], e['gender'], e['division']) for e in out_events]
assert len(set(keys)) == len(keys), 'duplicate event'

with open(out_js, 'w', encoding='utf-8') as f:
    f.write('// รายการกีฬาและรายการแข่งขันตั้งต้น\n')
    f.write('// แปลงจาก sports_registration_structure.xlsx (ร่าง ได้รับ 10 พ.ย. 2569) โดย tools/build_catalog.py\n')
    f.write('// ใช้เป็นข้อมูลตั้งต้นของโหมดสาธิตและ supabase/seed.sql หลังเปิดใช้งาน ทีมแอดมินแก้ในหน้าผู้ดูแล\n')
    f.write('window.CATALOG = ')
    json.dump({'sports': out_sports, 'events': out_events}, f, ensure_ascii=False, indent=1)
    f.write(';\n')
print(len(out_sports), 'sports', len(out_events), 'events')
for s in out_sports:
    print(s['id'], s['name'], sum(1 for e in out_events if e['sport_id'] == s['id']))

# ไฟล์ SQL ตั้งต้นสำหรับ Supabase (ถ้าระบุ path ที่ 3)
if len(sys.argv) > 3:
    q = lambda v: "'" + str(v).replace("'", "''") + "'"
    lines = [
        '-- ข้อมูลตั้งต้น: ชนิดกีฬาและรายการแข่งขัน สร้างโดย tools/build_catalog.py',
        '-- จาก data/sports_registration_structure.xlsx (ร่าง) · รันหลัง schema.sql',
        '-- หลังเปิดใช้งาน ทีมแอดมินแก้รายการในหน้าผู้ดูแล ไม่ต้องรันไฟล์นี้ซ้ำ',
        '-- (รันซ้ำได้: ทับเฉพาะรายการที่ id ตรงกัน ไม่ลบรายการที่แอดมินเพิ่มเอง)',
        '',
        'insert into public.sports (id, name, kind, venue, note, sort, active) values',
        ',\n'.join(f"  ({q(s['id'])}, {q(s['name'])}, {q(s['kind'])}, {q(s['venue'])}, {q(s['note'])}, {s['sort']}, true)" for s in out_sports),
        'on conflict (id) do update set name = excluded.name, kind = excluded.kind, venue = excluded.venue,',
        '  note = excluded.note, sort = excluded.sort;',
        '',
        'insert into public.events (id, sport_id, category, gender, division, note, sort, active) values',
        ',\n'.join(f"  ({q(e['id'])}, {q(e['sport_id'])}, {q(e['category'])}, {q(e['gender'])}, {q(e['division'])}, {q(e['note'])}, {e['sort']}, true)" for e in out_events),
        'on conflict (id) do update set sport_id = excluded.sport_id, category = excluded.category, gender = excluded.gender,',
        '  division = excluded.division, note = excluded.note, sort = excluded.sort;',
        '',
    ]
    with open(sys.argv[3], 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    print('wrote', sys.argv[3])
