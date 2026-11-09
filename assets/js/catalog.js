// รายการกีฬาและรายการแข่งขันตั้งต้น
// แปลงจาก sports_registration_structure.xlsx (ร่าง ได้รับ 10 พ.ย. 2569) โดย tools/build_catalog.py
// ใช้เป็นข้อมูลตั้งต้นของโหมดสาธิตและ supabase/seed.sql หลังเปิดใช้งาน ทีมแอดมินแก้ในหน้าผู้ดูแล
window.CATALOG = {
 "sports": [
  {
   "id": "ATH",
   "name": "กรีฑา",
   "kind": "บุคคล",
   "venue": "มหาวิทยาลัยการกีฬาแห่งชาติ วิทยาเขตชัยภูมิ",
   "note": "นักกีฬา 1 คนลงแข่งในรุ่นอายุเดียว",
   "sort": 1,
   "active": true
  },
  {
   "id": "SWM",
   "name": "ว่ายน้ำ",
   "kind": "บุคคล",
   "venue": "โรงเรียนเมืองพญาแลวิทยา",
   "note": "ปล่อยตัวแบบ One Start Rule (Time Final)",
   "sort": 2,
   "active": true
  },
  {
   "id": "TT",
   "name": "เทเบิลเทนนิส",
   "kind": "บุคคล",
   "venue": "มหาวิทยาลัยการกีฬาแห่งชาติ วิทยาเขตชัยภูมิ",
   "note": "แพ้ 2 ครั้งคัดออก (3 ใน 5 เกม)",
   "sort": 3,
   "active": true
  },
  {
   "id": "BAD",
   "name": "แบดมินตัน",
   "kind": "บุคคล",
   "venue": "สนามแข่งขันตามประกาศ",
   "note": "แข่ง 2 ใน 3 เซต (Rally Point 3x21)",
   "sort": 4,
   "active": true
  },
  {
   "id": "BOX",
   "name": "มวยสากลสมัครเล่น",
   "kind": "บุคคล",
   "venue": "โดมเฉลิมพระเกียรติฯ โรงเรียนชัยภูมิภักดีชุมพล",
   "note": "ต้องตรวจร่างกายและชั่งน้ำหนักก่อนแข่งขัน",
   "sort": 5,
   "active": true
  },
  {
   "id": "MBX",
   "name": "มวยไทยสมัครเล่น",
   "kind": "บุคคล",
   "venue": "โดมเฉลิมพระเกียรติฯ โรงเรียนชัยภูมิภักดีชุมพล",
   "note": "น้ำหนัก >39 กก. ถึง >71-75 กก.",
   "sort": 6,
   "active": true
  },
  {
   "id": "WLF",
   "name": "ยกน้ำหนัก",
   "kind": "บุคคล/ทีม",
   "venue": "โรงเรียนกำหนดแข่งขัน",
   "note": "ส่งได้รุ่นละไม่เกิน 2 คน (รวมไม่เกิน 7 คน)",
   "sort": 7,
   "active": true
  },
  {
   "id": "FTB",
   "name": "ฟุตบอล",
   "kind": "ทีม",
   "venue": "สนามแข่งขันตามระเบียบ",
   "note": "ทีมหญิงจัดแข่งขันเฉพาะรุ่น 18 ปี",
   "sort": 8,
   "active": true
  },
  {
   "id": "FTS",
   "name": "ฟุตซอล",
   "kind": "ทีม",
   "venue": "สนามแข่งขันตามระเบียบ",
   "note": "นักกีฬาไม่เกิน 14 คน เจ้าหน้าที่ 3 คน",
   "sort": 9,
   "active": true
  },
  {
   "id": "VOL",
   "name": "วอลเลย์บอลในร่ม",
   "kind": "ทีม",
   "venue": "อาคารเอนกประสงค์ศูนย์เยาวชนเทศบาลเมืองชัยภูมิ",
   "note": "รอบแรกพบกันหมด (2 ใน 3 เซต)",
   "sort": 10,
   "active": true
  },
  {
   "id": "BVL",
   "name": "วอลเลย์บอลชายหาด",
   "kind": "ทีม",
   "venue": "สนามกีฬากลาง อบจ. ชัยภูมิ",
   "note": "ชุดแข่งขันต้องติดหมายเลข 1 และ 2",
   "sort": 11,
   "active": true
  },
  {
   "id": "BSK",
   "name": "บาสเกตบอล 5x5",
   "kind": "ทีม",
   "venue": "โรงเรียนกาญจนาภิเษกวิทยาลัย ชัยภูมิ",
   "note": "5x5 ส่งได้ไม่เกิน 12 คน / 3x3",
   "sort": 12,
   "active": true
  },
  {
   "id": "B33",
   "name": "บาสเกตบอล 3x3",
   "kind": "ทีม",
   "venue": "โรงเรียนกาญจนาภิเษกวิทยาลัย ชัยภูมิ",
   "note": "5x5 ส่งได้ไม่เกิน 12 คน / 3x3",
   "sort": 13,
   "active": true
  },
  {
   "id": "TAK",
   "name": "เซปักตะกร้อ",
   "kind": "ทีม",
   "venue": "มหาวิทยาลัยการกีฬาแห่งชาติ วิทยาเขตชัยภูมิ",
   "note": "ทีมหญิงจัดเฉพาะทีมเดี่ยวทุกรุ่น",
   "sort": 14,
   "active": true
  },
  {
   "id": "HDB",
   "name": "แฮนด์บอล",
   "kind": "ทีม",
   "venue": "วิทยาลัยเทคนิคชัยภูมิ",
   "note": "นักกีฬา 7-16 คน เจ้าหน้าที่ 4 คน",
   "sort": 15,
   "active": true
  },
  {
   "id": "PTQ",
   "name": "เปตอง",
   "kind": "ทีม",
   "venue": "สนามกีฬากลาง อบจ. ชัยภูมิ",
   "note": "ทีมละ 3 คน",
   "sort": 16,
   "active": true
  },
  {
   "id": "ESP",
   "name": "อีสปอร์ต",
   "kind": "ทีม/บุคคล",
   "venue": "ศูนย์กีฬา ชั้น 2 โรงเรียนชัยภูมิภักดีชุมพล",
   "note": "ต้องมีหนังสือยินยอมจากผู้ปกครอง",
   "sort": 17,
   "active": true
  },
  {
   "id": "TQB",
   "name": "เทคบอล",
   "kind": "บุคคล/ทีม",
   "venue": "สนามแข่งขันตามประกาศ",
   "note": "จัดแข่งขันตามระเบียบการแข่งขันโซนหุบเขา",
   "sort": 18,
   "active": true
  }
 ],
 "events": [
  {
   "id": "ATH-01",
   "sport_id": "ATH",
   "category": "ลู่ / ลาน / ผลัด",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "1 คนลงแข่งเดี่ยวได้ 1 รายการ ต่อโรงเรียน",
   "sort": 1,
   "active": true
  },
  {
   "id": "ATH-02",
   "sport_id": "ATH",
   "category": "ลู่ / ลาน / ผลัด",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "1 คนลงแข่งเดี่ยวได้ 1 รายการ ต่อโรงเรียน",
   "sort": 2,
   "active": true
  },
  {
   "id": "ATH-03",
   "sport_id": "ATH",
   "category": "ลู่ / ลาน / ผลัด",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "1 คนลงแข่งเดี่ยวได้ 1 รายการ ต่อโรงเรียน",
   "sort": 3,
   "active": true
  },
  {
   "id": "ATH-04",
   "sport_id": "ATH",
   "category": "ลู่ / ลาน / ผลัด",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "1 คนลงแข่งเดี่ยวได้ 1 รายการ ต่อโรงเรียน",
   "sort": 4,
   "active": true
  },
  {
   "id": "ATH-05",
   "sport_id": "ATH",
   "category": "ลู่ / ลาน / ผลัด",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "1 คนลงแข่งเดี่ยวได้ 1 รายการ ต่อโรงเรียน",
   "sort": 5,
   "active": true
  },
  {
   "id": "ATH-06",
   "sport_id": "ATH",
   "category": "ลู่ / ลาน / ผลัด",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "1 คนลงแข่งเดี่ยวได้ 1 รายการ ต่อโรงเรียน",
   "sort": 6,
   "active": true
  },
  {
   "id": "SWM-01",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ / กรรเชียง / กบ / ผีเสื้อ / ผลัด",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "ส่งแข่งได้รายการละ 2 คน",
   "sort": 7,
   "active": true
  },
  {
   "id": "SWM-02",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ / กรรเชียง / กบ / ผีเสื้อ / ผลัด",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "ส่งแข่งได้รายการละ 2 คน",
   "sort": 8,
   "active": true
  },
  {
   "id": "SWM-03",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ / กรรเชียง / กบ / ผีเสื้อ / ผลัด",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "ส่งแข่งได้รายการละ 2 คน",
   "sort": 9,
   "active": true
  },
  {
   "id": "SWM-04",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ / กรรเชียง / กบ / ผีเสื้อ / ผลัด",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "ส่งแข่งได้รายการละ 2 คน",
   "sort": 10,
   "active": true
  },
  {
   "id": "SWM-05",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ / กรรเชียง / กบ / ผีเสื้อ / ผลัด",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "ส่งแข่งได้รายการละ 2 คน",
   "sort": 11,
   "active": true
  },
  {
   "id": "SWM-06",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ / กรรเชียง / กบ / ผีเสื้อ / ผลัด",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "ส่งแข่งได้รายการละ 2 คน",
   "sort": 12,
   "active": true
  },
  {
   "id": "TT-01",
   "sport_id": "TT",
   "category": "เดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 13,
   "active": true
  },
  {
   "id": "TT-02",
   "sport_id": "TT",
   "category": "เดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 14,
   "active": true
  },
  {
   "id": "TT-03",
   "sport_id": "TT",
   "category": "เดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 15,
   "active": true
  },
  {
   "id": "TT-04",
   "sport_id": "TT",
   "category": "เดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 16,
   "active": true
  },
  {
   "id": "TT-05",
   "sport_id": "TT",
   "category": "เดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 17,
   "active": true
  },
  {
   "id": "TT-06",
   "sport_id": "TT",
   "category": "เดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 18,
   "active": true
  },
  {
   "id": "TT-07",
   "sport_id": "TT",
   "category": "คู่",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 19,
   "active": true
  },
  {
   "id": "TT-08",
   "sport_id": "TT",
   "category": "คู่",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 20,
   "active": true
  },
  {
   "id": "TT-09",
   "sport_id": "TT",
   "category": "คู่",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 21,
   "active": true
  },
  {
   "id": "TT-10",
   "sport_id": "TT",
   "category": "คู่",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 22,
   "active": true
  },
  {
   "id": "TT-11",
   "sport_id": "TT",
   "category": "คู่",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 23,
   "active": true
  },
  {
   "id": "TT-12",
   "sport_id": "TT",
   "category": "คู่",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 24,
   "active": true
  },
  {
   "id": "TT-13",
   "sport_id": "TT",
   "category": "คู่ผสม",
   "gender": "ผสม",
   "division": "ไม่เกิน 14 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 25,
   "active": true
  },
  {
   "id": "TT-14",
   "sport_id": "TT",
   "category": "คู่ผสม",
   "gender": "ผสม",
   "division": "ไม่เกิน 16 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 26,
   "active": true
  },
  {
   "id": "TT-15",
   "sport_id": "TT",
   "category": "คู่ผสม",
   "gender": "ผสม",
   "division": "ไม่เกิน 18 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 27,
   "active": true
  },
  {
   "id": "BAD-01",
   "sport_id": "BAD",
   "category": "เดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 28,
   "active": true
  },
  {
   "id": "BAD-02",
   "sport_id": "BAD",
   "category": "เดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 29,
   "active": true
  },
  {
   "id": "BAD-03",
   "sport_id": "BAD",
   "category": "เดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 30,
   "active": true
  },
  {
   "id": "BAD-04",
   "sport_id": "BAD",
   "category": "เดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 31,
   "active": true
  },
  {
   "id": "BAD-05",
   "sport_id": "BAD",
   "category": "เดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 32,
   "active": true
  },
  {
   "id": "BAD-06",
   "sport_id": "BAD",
   "category": "เดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 33,
   "active": true
  },
  {
   "id": "BAD-07",
   "sport_id": "BAD",
   "category": "คู่",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 34,
   "active": true
  },
  {
   "id": "BAD-08",
   "sport_id": "BAD",
   "category": "คู่",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 35,
   "active": true
  },
  {
   "id": "BAD-09",
   "sport_id": "BAD",
   "category": "คู่",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 36,
   "active": true
  },
  {
   "id": "BAD-10",
   "sport_id": "BAD",
   "category": "คู่",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 37,
   "active": true
  },
  {
   "id": "BAD-11",
   "sport_id": "BAD",
   "category": "คู่",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 38,
   "active": true
  },
  {
   "id": "BAD-12",
   "sport_id": "BAD",
   "category": "คู่",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 39,
   "active": true
  },
  {
   "id": "BAD-13",
   "sport_id": "BAD",
   "category": "คู่ผสม",
   "gender": "ผสม",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 40,
   "active": true
  },
  {
   "id": "BAD-14",
   "sport_id": "BAD",
   "category": "คู่ผสม",
   "gender": "ผสม",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 41,
   "active": true
  },
  {
   "id": "BAD-15",
   "sport_id": "BAD",
   "category": "คู่ผสม",
   "gender": "ผสม",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 42,
   "active": true
  },
  {
   "id": "BOX-01",
   "sport_id": "BOX",
   "category": "เปเปอร์เวท (>39–42 กก.)",
   "gender": "ชาย",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 43,
   "active": true
  },
  {
   "id": "BOX-02",
   "sport_id": "BOX",
   "category": "พินเวท (>42–46 กก.)",
   "gender": "ชาย",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 44,
   "active": true
  },
  {
   "id": "BOX-03",
   "sport_id": "BOX",
   "category": "ไลท์ฟลายเวท (>46–49 กก.)",
   "gender": "ชาย",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 45,
   "active": true
  },
  {
   "id": "BOX-04",
   "sport_id": "BOX",
   "category": "ฟลายเวท (>49–52 กก.)",
   "gender": "ชาย",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 46,
   "active": true
  },
  {
   "id": "BOX-05",
   "sport_id": "BOX",
   "category": "แบนตั้มเวท (>52–56 กก.)",
   "gender": "ชาย",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 47,
   "active": true
  },
  {
   "id": "BOX-06",
   "sport_id": "BOX",
   "category": "ไลท์เวท (>56–60 กก.)",
   "gender": "ชาย",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 48,
   "active": true
  },
  {
   "id": "BOX-07",
   "sport_id": "BOX",
   "category": "ไลท์เวลเตอร์เวท (>60–64 กก.)",
   "gender": "ชาย",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 49,
   "active": true
  },
  {
   "id": "BOX-08",
   "sport_id": "BOX",
   "category": "เปเปอร์เวท (>39–42 กก.)",
   "gender": "หญิง",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 50,
   "active": true
  },
  {
   "id": "BOX-09",
   "sport_id": "BOX",
   "category": "พินเวท (>42–45 กก.)",
   "gender": "หญิง",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 51,
   "active": true
  },
  {
   "id": "BOX-10",
   "sport_id": "BOX",
   "category": "ไลท์ฟลายเวท (>45–48 กก.)",
   "gender": "หญิง",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 52,
   "active": true
  },
  {
   "id": "BOX-11",
   "sport_id": "BOX",
   "category": "ฟลายเวท (>48–51 กก.)",
   "gender": "หญิง",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 53,
   "active": true
  },
  {
   "id": "BOX-12",
   "sport_id": "BOX",
   "category": "แบนตั้มเวท (>51–54 กก.)",
   "gender": "หญิง",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 54,
   "active": true
  },
  {
   "id": "BOX-13",
   "sport_id": "BOX",
   "category": "เฟเธอร์เวท (>54–57 กก.)",
   "gender": "หญิง",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 55,
   "active": true
  },
  {
   "id": "BOX-14",
   "sport_id": "BOX",
   "category": "ไลท์เวท (>57–60 กก.)",
   "gender": "หญิง",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 56,
   "active": true
  },
  {
   "id": "MBX-01",
   "sport_id": "MBX",
   "category": "11 รุ่นพิกัดน้ำหนัก (39–75 กก.)",
   "gender": "ชาย",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 57,
   "active": true
  },
  {
   "id": "WLF-01",
   "sport_id": "WLF",
   "category": "ทีม 7 รุ่นน้ำหนัก (55–89+ กก.)",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "ส่งนักกีฬาได้รุ่นละไม่เกิน 2 คน รวมไม่เกิน 7 คน",
   "sort": 58,
   "active": true
  },
  {
   "id": "WLF-02",
   "sport_id": "WLF",
   "category": "ทีม 7 รุ่นน้ำหนัก (45–71+ กก.)",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "ส่งนักกีฬาได้รุ่นละไม่เกิน 2 คน รวมไม่เกิน 7 คน",
   "sort": 59,
   "active": true
  },
  {
   "id": "FTB-01",
   "sport_id": "FTB",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "ทีมชายเท่านั้น",
   "sort": 60,
   "active": true
  },
  {
   "id": "FTB-02",
   "sport_id": "FTB",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "ทีมชายเท่านั้น",
   "sort": 61,
   "active": true
  },
  {
   "id": "FTB-03",
   "sport_id": "FTB",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "ทีมชายเท่านั้น",
   "sort": 62,
   "active": true
  },
  {
   "id": "FTB-04",
   "sport_id": "FTB",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "ทีมหญิง (จัดเฉพาะรุ่น 18 ปี)",
   "sort": 63,
   "active": true
  },
  {
   "id": "FTS-01",
   "sport_id": "FTS",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬาไม่เกิน 14 คน",
   "sort": 64,
   "active": true
  },
  {
   "id": "FTS-02",
   "sport_id": "FTS",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬาไม่เกิน 14 คน",
   "sort": 65,
   "active": true
  },
  {
   "id": "FTS-03",
   "sport_id": "FTS",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬาไม่เกิน 14 คน",
   "sort": 66,
   "active": true
  },
  {
   "id": "FTS-04",
   "sport_id": "FTS",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬาไม่เกิน 14 คน",
   "sort": 67,
   "active": true
  },
  {
   "id": "FTS-05",
   "sport_id": "FTS",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬาไม่เกิน 14 คน",
   "sort": 68,
   "active": true
  },
  {
   "id": "FTS-06",
   "sport_id": "FTS",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬาไม่เกิน 14 คน",
   "sort": 69,
   "active": true
  },
  {
   "id": "VOL-01",
   "sport_id": "VOL",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "รอบแรกพบกันหมด",
   "sort": 70,
   "active": true
  },
  {
   "id": "VOL-02",
   "sport_id": "VOL",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "รอบแรกพบกันหมด",
   "sort": 71,
   "active": true
  },
  {
   "id": "VOL-03",
   "sport_id": "VOL",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "รอบแรกพบกันหมด",
   "sort": 72,
   "active": true
  },
  {
   "id": "VOL-04",
   "sport_id": "VOL",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "รอบแรกพบกันหมด",
   "sort": 73,
   "active": true
  },
  {
   "id": "VOL-05",
   "sport_id": "VOL",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "รอบแรกพบกันหมด",
   "sort": 74,
   "active": true
  },
  {
   "id": "VOL-06",
   "sport_id": "VOL",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "รอบแรกพบกันหมด",
   "sort": 75,
   "active": true
  },
  {
   "id": "BVL-01",
   "sport_id": "BVL",
   "category": "ทีม 2 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "ชุดติดหมายเลข 1 และ 2",
   "sort": 76,
   "active": true
  },
  {
   "id": "BVL-02",
   "sport_id": "BVL",
   "category": "ทีม 2 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "ชุดติดหมายเลข 1 และ 2",
   "sort": 77,
   "active": true
  },
  {
   "id": "BVL-03",
   "sport_id": "BVL",
   "category": "ทีม 2 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "ชุดติดหมายเลข 1 และ 2",
   "sort": 78,
   "active": true
  },
  {
   "id": "BVL-04",
   "sport_id": "BVL",
   "category": "ทีม 2 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "ชุดติดหมายเลข 1 และ 2",
   "sort": 79,
   "active": true
  },
  {
   "id": "BVL-05",
   "sport_id": "BVL",
   "category": "ทีม 2 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "ชุดติดหมายเลข 1 และ 2",
   "sort": 80,
   "active": true
  },
  {
   "id": "BVL-06",
   "sport_id": "BVL",
   "category": "ทีม 2 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "ชุดติดหมายเลข 1 และ 2",
   "sort": 81,
   "active": true
  },
  {
   "id": "BSK-01",
   "sport_id": "BSK",
   "category": "ทีม 5 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬาไม่เกิน 12 คน",
   "sort": 82,
   "active": true
  },
  {
   "id": "BSK-02",
   "sport_id": "BSK",
   "category": "ทีม 5 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬาไม่เกิน 12 คน",
   "sort": 83,
   "active": true
  },
  {
   "id": "BSK-03",
   "sport_id": "BSK",
   "category": "ทีม 5 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬาไม่เกิน 12 คน",
   "sort": 84,
   "active": true
  },
  {
   "id": "BSK-04",
   "sport_id": "BSK",
   "category": "ทีม 5 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬาไม่เกิน 12 คน",
   "sort": 85,
   "active": true
  },
  {
   "id": "BSK-05",
   "sport_id": "BSK",
   "category": "ทีม 5 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬาไม่เกิน 12 คน",
   "sort": 86,
   "active": true
  },
  {
   "id": "BSK-06",
   "sport_id": "BSK",
   "category": "ทีม 5 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬาไม่เกิน 12 คน",
   "sort": 87,
   "active": true
  },
  {
   "id": "B33-01",
   "sport_id": "B33",
   "category": "ทีม 3 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬาไม่เกิน 4 คน",
   "sort": 88,
   "active": true
  },
  {
   "id": "B33-02",
   "sport_id": "B33",
   "category": "ทีม 3 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬาไม่เกิน 4 คน",
   "sort": 89,
   "active": true
  },
  {
   "id": "B33-03",
   "sport_id": "B33",
   "category": "ทีม 3 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬาไม่เกิน 4 คน",
   "sort": 90,
   "active": true
  },
  {
   "id": "B33-04",
   "sport_id": "B33",
   "category": "ทีม 3 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬาไม่เกิน 4 คน",
   "sort": 91,
   "active": true
  },
  {
   "id": "B33-05",
   "sport_id": "B33",
   "category": "ทีม 3 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬาไม่เกิน 4 คน",
   "sort": 92,
   "active": true
  },
  {
   "id": "B33-06",
   "sport_id": "B33",
   "category": "ทีม 3 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬาไม่เกิน 4 คน",
   "sort": 93,
   "active": true
  },
  {
   "id": "TAK-01",
   "sport_id": "TAK",
   "category": "ทีมชุด",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "จัดแข่งทั้งทีมชุดและทีมเดี่ยว",
   "sort": 94,
   "active": true
  },
  {
   "id": "TAK-02",
   "sport_id": "TAK",
   "category": "ทีมชุด",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "จัดแข่งทั้งทีมชุดและทีมเดี่ยว",
   "sort": 95,
   "active": true
  },
  {
   "id": "TAK-03",
   "sport_id": "TAK",
   "category": "ทีมชุด",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "จัดแข่งทั้งทีมชุดและทีมเดี่ยว",
   "sort": 96,
   "active": true
  },
  {
   "id": "TAK-04",
   "sport_id": "TAK",
   "category": "ทีมเดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "จัดแข่งทั้งทีมชุดและทีมเดี่ยว",
   "sort": 97,
   "active": true
  },
  {
   "id": "TAK-05",
   "sport_id": "TAK",
   "category": "ทีมเดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "จัดแข่งทั้งทีมชุดและทีมเดี่ยว",
   "sort": 98,
   "active": true
  },
  {
   "id": "TAK-06",
   "sport_id": "TAK",
   "category": "ทีมเดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "จัดแข่งทั้งทีมชุดและทีมเดี่ยว",
   "sort": 99,
   "active": true
  },
  {
   "id": "TAK-07",
   "sport_id": "TAK",
   "category": "ทีมเดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "จัดแข่งเฉพาะทีมเดี่ยว",
   "sort": 100,
   "active": true
  },
  {
   "id": "TAK-08",
   "sport_id": "TAK",
   "category": "ทีมเดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "จัดแข่งเฉพาะทีมเดี่ยว",
   "sort": 101,
   "active": true
  },
  {
   "id": "TAK-09",
   "sport_id": "TAK",
   "category": "ทีมเดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "จัดแข่งเฉพาะทีมเดี่ยว",
   "sort": 102,
   "active": true
  },
  {
   "id": "HDB-01",
   "sport_id": "HDB",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬา 7-16 คน",
   "sort": 103,
   "active": true
  },
  {
   "id": "HDB-02",
   "sport_id": "HDB",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬา 7-16 คน",
   "sort": 104,
   "active": true
  },
  {
   "id": "HDB-03",
   "sport_id": "HDB",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬา 7-16 คน",
   "sort": 105,
   "active": true
  },
  {
   "id": "HDB-04",
   "sport_id": "HDB",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬา 7-16 คน",
   "sort": 106,
   "active": true
  },
  {
   "id": "HDB-05",
   "sport_id": "HDB",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬา 7-16 คน",
   "sort": 107,
   "active": true
  },
  {
   "id": "HDB-06",
   "sport_id": "HDB",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬา 7-16 คน",
   "sort": 108,
   "active": true
  },
  {
   "id": "PTQ-01",
   "sport_id": "PTQ",
   "category": "ทีม 3 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "ทีมละ 3 คน",
   "sort": 109,
   "active": true
  },
  {
   "id": "PTQ-02",
   "sport_id": "PTQ",
   "category": "ทีม 3 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "ทีมละ 3 คน",
   "sort": 110,
   "active": true
  },
  {
   "id": "PTQ-03",
   "sport_id": "PTQ",
   "category": "ทีม 3 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "ทีมละ 3 คน",
   "sort": 111,
   "active": true
  },
  {
   "id": "PTQ-04",
   "sport_id": "PTQ",
   "category": "ทีม 3 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "ทีมละ 3 คน",
   "sort": 112,
   "active": true
  },
  {
   "id": "PTQ-05",
   "sport_id": "PTQ",
   "category": "ทีม 3 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "ทีมละ 3 คน",
   "sort": 113,
   "active": true
  },
  {
   "id": "PTQ-06",
   "sport_id": "PTQ",
   "category": "ทีม 3 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "ทีมละ 3 คน",
   "sort": 114,
   "active": true
  },
  {
   "id": "ESP-01",
   "sport_id": "ESP",
   "category": "ROV (ทีม 5 คน)",
   "gender": "ไม่จำกัดเพศ",
   "division": "ไม่เกิน 18 ปี (13–18 ปี)",
   "note": "สำรองได้ไม่เกิน 3 คน",
   "sort": 115,
   "active": true
  },
  {
   "id": "ESP-02",
   "sport_id": "ESP",
   "category": "EA SPORTS FC Mobile (บุคคล)",
   "gender": "ไม่จำกัดเพศ",
   "division": "ไม่เกิน 18 ปี (13–18 ปี)",
   "note": "ประเภทบุคคล",
   "sort": 116,
   "active": true
  },
  {
   "id": "TQB-01",
   "sport_id": "TQB",
   "category": "ตามประกาศ",
   "gender": "ชาย",
   "division": "ตามประกาศ",
   "note": "บรรจุตามระเบียบการแข่งขัน",
   "sort": 117,
   "active": true
  },
  {
   "id": "TQB-02",
   "sport_id": "TQB",
   "category": "ตามประกาศ",
   "gender": "หญิง",
   "division": "ตามประกาศ",
   "note": "บรรจุตามระเบียบการแข่งขัน",
   "sort": 118,
   "active": true
  }
 ]
};
