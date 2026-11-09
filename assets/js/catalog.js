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
   "category": "วิ่ง 100 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "",
   "sort": 1,
   "active": true
  },
  {
   "id": "ATH-02",
   "sport_id": "ATH",
   "category": "วิ่ง 100 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "",
   "sort": 2,
   "active": true
  },
  {
   "id": "ATH-03",
   "sport_id": "ATH",
   "category": "วิ่ง 100 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "",
   "sort": 3,
   "active": true
  },
  {
   "id": "ATH-04",
   "sport_id": "ATH",
   "category": "วิ่ง 100 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "",
   "sort": 4,
   "active": true
  },
  {
   "id": "ATH-05",
   "sport_id": "ATH",
   "category": "วิ่ง 100 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "",
   "sort": 5,
   "active": true
  },
  {
   "id": "ATH-06",
   "sport_id": "ATH",
   "category": "วิ่ง 100 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "",
   "sort": 6,
   "active": true
  },
  {
   "id": "ATH-07",
   "sport_id": "ATH",
   "category": "วิ่ง 200 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "",
   "sort": 7,
   "active": true
  },
  {
   "id": "ATH-08",
   "sport_id": "ATH",
   "category": "วิ่ง 200 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "",
   "sort": 8,
   "active": true
  },
  {
   "id": "ATH-09",
   "sport_id": "ATH",
   "category": "วิ่ง 200 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "",
   "sort": 9,
   "active": true
  },
  {
   "id": "ATH-10",
   "sport_id": "ATH",
   "category": "วิ่ง 200 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "",
   "sort": 10,
   "active": true
  },
  {
   "id": "ATH-11",
   "sport_id": "ATH",
   "category": "วิ่ง 200 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "",
   "sort": 11,
   "active": true
  },
  {
   "id": "ATH-12",
   "sport_id": "ATH",
   "category": "วิ่ง 200 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "",
   "sort": 12,
   "active": true
  },
  {
   "id": "ATH-13",
   "sport_id": "ATH",
   "category": "วิ่ง 400 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "",
   "sort": 13,
   "active": true
  },
  {
   "id": "ATH-14",
   "sport_id": "ATH",
   "category": "วิ่ง 400 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "",
   "sort": 14,
   "active": true
  },
  {
   "id": "ATH-15",
   "sport_id": "ATH",
   "category": "วิ่ง 400 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "",
   "sort": 15,
   "active": true
  },
  {
   "id": "ATH-16",
   "sport_id": "ATH",
   "category": "วิ่ง 400 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "",
   "sort": 16,
   "active": true
  },
  {
   "id": "ATH-17",
   "sport_id": "ATH",
   "category": "วิ่ง 400 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "",
   "sort": 17,
   "active": true
  },
  {
   "id": "ATH-18",
   "sport_id": "ATH",
   "category": "วิ่ง 400 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "",
   "sort": 18,
   "active": true
  },
  {
   "id": "ATH-19",
   "sport_id": "ATH",
   "category": "วิ่ง 800 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "",
   "sort": 19,
   "active": true
  },
  {
   "id": "ATH-20",
   "sport_id": "ATH",
   "category": "วิ่ง 800 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "",
   "sort": 20,
   "active": true
  },
  {
   "id": "ATH-21",
   "sport_id": "ATH",
   "category": "วิ่ง 800 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "",
   "sort": 21,
   "active": true
  },
  {
   "id": "ATH-22",
   "sport_id": "ATH",
   "category": "วิ่ง 800 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "",
   "sort": 22,
   "active": true
  },
  {
   "id": "ATH-23",
   "sport_id": "ATH",
   "category": "วิ่ง 800 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "",
   "sort": 23,
   "active": true
  },
  {
   "id": "ATH-24",
   "sport_id": "ATH",
   "category": "วิ่ง 800 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "",
   "sort": 24,
   "active": true
  },
  {
   "id": "ATH-25",
   "sport_id": "ATH",
   "category": "วิ่ง 1,500 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "",
   "sort": 25,
   "active": true
  },
  {
   "id": "ATH-26",
   "sport_id": "ATH",
   "category": "วิ่ง 1,500 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "",
   "sort": 26,
   "active": true
  },
  {
   "id": "ATH-27",
   "sport_id": "ATH",
   "category": "วิ่ง 1,500 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "",
   "sort": 27,
   "active": true
  },
  {
   "id": "ATH-28",
   "sport_id": "ATH",
   "category": "วิ่ง 1,500 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "",
   "sort": 28,
   "active": true
  },
  {
   "id": "ATH-29",
   "sport_id": "ATH",
   "category": "วิ่ง 1,500 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "",
   "sort": 29,
   "active": true
  },
  {
   "id": "ATH-30",
   "sport_id": "ATH",
   "category": "วิ่ง 1,500 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "",
   "sort": 30,
   "active": true
  },
  {
   "id": "ATH-31",
   "sport_id": "ATH",
   "category": "วิ่ง 3,000 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "เวลาไม่เกิน 40 นาที",
   "sort": 31,
   "active": true
  },
  {
   "id": "ATH-32",
   "sport_id": "ATH",
   "category": "วิ่ง 3,000 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "เวลาไม่เกิน 40 นาที",
   "sort": 32,
   "active": true
  },
  {
   "id": "ATH-33",
   "sport_id": "ATH",
   "category": "วิ่ง 5,000 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "เวลาไม่เกิน 30 นาที",
   "sort": 33,
   "active": true
  },
  {
   "id": "ATH-34",
   "sport_id": "ATH",
   "category": "วิ่ง 5,000 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "เวลาไม่เกิน 30 นาที",
   "sort": 34,
   "active": true
  },
  {
   "id": "ATH-35",
   "sport_id": "ATH",
   "category": "วิ่งวิบาก 2,000 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "",
   "sort": 35,
   "active": true
  },
  {
   "id": "ATH-36",
   "sport_id": "ATH",
   "category": "วิ่งวิบาก 2,000 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "",
   "sort": 36,
   "active": true
  },
  {
   "id": "ATH-37",
   "sport_id": "ATH",
   "category": "วิ่งวิบาก 2,000 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "",
   "sort": 37,
   "active": true
  },
  {
   "id": "ATH-38",
   "sport_id": "ATH",
   "category": "วิ่งวิบาก 2,000 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "",
   "sort": 38,
   "active": true
  },
  {
   "id": "ATH-39",
   "sport_id": "ATH",
   "category": "วิ่งข้ามรั้ว 100 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "รั้วสูง 0.762 ม.",
   "sort": 39,
   "active": true
  },
  {
   "id": "ATH-40",
   "sport_id": "ATH",
   "category": "วิ่งข้ามรั้ว 100 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "รั้วสูง 0.762 ม.",
   "sort": 40,
   "active": true
  },
  {
   "id": "ATH-41",
   "sport_id": "ATH",
   "category": "วิ่งข้ามรั้ว 100 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "รั้วสูง 0.840 ม.",
   "sort": 41,
   "active": true
  },
  {
   "id": "ATH-42",
   "sport_id": "ATH",
   "category": "วิ่งข้ามรั้ว 110 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "รั้วสูง 0.840 ม.",
   "sort": 42,
   "active": true
  },
  {
   "id": "ATH-43",
   "sport_id": "ATH",
   "category": "วิ่งข้ามรั้ว 110 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "รั้วสูง 0.914 ม.",
   "sort": 43,
   "active": true
  },
  {
   "id": "ATH-44",
   "sport_id": "ATH",
   "category": "วิ่งข้ามรั้ว 110 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "รั้วสูง 0.990 ม.",
   "sort": 44,
   "active": true
  },
  {
   "id": "ATH-45",
   "sport_id": "ATH",
   "category": "วิ่งข้ามรั้ว 400 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "รั้ว 0.762 - 0.914 ม.",
   "sort": 45,
   "active": true
  },
  {
   "id": "ATH-46",
   "sport_id": "ATH",
   "category": "วิ่งข้ามรั้ว 400 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "รั้ว 0.762 - 0.914 ม.",
   "sort": 46,
   "active": true
  },
  {
   "id": "ATH-47",
   "sport_id": "ATH",
   "category": "วิ่งข้ามรั้ว 400 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "รั้ว 0.762 - 0.914 ม.",
   "sort": 47,
   "active": true
  },
  {
   "id": "ATH-48",
   "sport_id": "ATH",
   "category": "วิ่งข้ามรั้ว 400 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "รั้ว 0.762 - 0.914 ม.",
   "sort": 48,
   "active": true
  },
  {
   "id": "ATH-49",
   "sport_id": "ATH",
   "category": "วิ่งข้ามรั้ว 400 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "รั้ว 0.762 - 0.914 ม.",
   "sort": 49,
   "active": true
  },
  {
   "id": "ATH-50",
   "sport_id": "ATH",
   "category": "วิ่งข้ามรั้ว 400 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "รั้ว 0.762 - 0.914 ม.",
   "sort": 50,
   "active": true
  },
  {
   "id": "ATH-51",
   "sport_id": "ATH",
   "category": "เดิน 3,000 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "เวลาไม่เกิน 40 นาที",
   "sort": 51,
   "active": true
  },
  {
   "id": "ATH-52",
   "sport_id": "ATH",
   "category": "เดิน 3,000 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "เวลาไม่เกิน 40 นาที",
   "sort": 52,
   "active": true
  },
  {
   "id": "ATH-53",
   "sport_id": "ATH",
   "category": "เดิน 5,000 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "เวลาไม่เกิน 40 นาที",
   "sort": 53,
   "active": true
  },
  {
   "id": "ATH-54",
   "sport_id": "ATH",
   "category": "เดิน 5,000 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "เวลาไม่เกิน 40 นาที",
   "sort": 54,
   "active": true
  },
  {
   "id": "ATH-55",
   "sport_id": "ATH",
   "category": "วิ่งผลัด 4 x 100 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬาชุดเดียวกันต้องใส่เสื้อสีเดียวกัน",
   "sort": 55,
   "active": true
  },
  {
   "id": "ATH-56",
   "sport_id": "ATH",
   "category": "วิ่งผลัด 4 x 100 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬาชุดเดียวกันต้องใส่เสื้อสีเดียวกัน",
   "sort": 56,
   "active": true
  },
  {
   "id": "ATH-57",
   "sport_id": "ATH",
   "category": "วิ่งผลัด 4 x 100 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬาชุดเดียวกันต้องใส่เสื้อสีเดียวกัน",
   "sort": 57,
   "active": true
  },
  {
   "id": "ATH-58",
   "sport_id": "ATH",
   "category": "วิ่งผลัด 4 x 100 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬาชุดเดียวกันต้องใส่เสื้อสีเดียวกัน",
   "sort": 58,
   "active": true
  },
  {
   "id": "ATH-59",
   "sport_id": "ATH",
   "category": "วิ่งผลัด 4 x 100 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬาชุดเดียวกันต้องใส่เสื้อสีเดียวกัน",
   "sort": 59,
   "active": true
  },
  {
   "id": "ATH-60",
   "sport_id": "ATH",
   "category": "วิ่งผลัด 4 x 100 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬาชุดเดียวกันต้องใส่เสื้อสีเดียวกัน",
   "sort": 60,
   "active": true
  },
  {
   "id": "ATH-61",
   "sport_id": "ATH",
   "category": "วิ่งผลัด 4 x 400 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "",
   "sort": 61,
   "active": true
  },
  {
   "id": "ATH-62",
   "sport_id": "ATH",
   "category": "วิ่งผลัด 4 x 400 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "",
   "sort": 62,
   "active": true
  },
  {
   "id": "ATH-63",
   "sport_id": "ATH",
   "category": "วิ่งผลัด 4 x 400 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "",
   "sort": 63,
   "active": true
  },
  {
   "id": "ATH-64",
   "sport_id": "ATH",
   "category": "วิ่งผลัด 4 x 400 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "",
   "sort": 64,
   "active": true
  },
  {
   "id": "ATH-65",
   "sport_id": "ATH",
   "category": "วิ่งผลัด 4 x 400 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "",
   "sort": 65,
   "active": true
  },
  {
   "id": "ATH-66",
   "sport_id": "ATH",
   "category": "วิ่งผลัด 4 x 400 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "",
   "sort": 66,
   "active": true
  },
  {
   "id": "ATH-67",
   "sport_id": "ATH",
   "category": "วิ่งผลัดต่างระยะ",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "",
   "sort": 67,
   "active": true
  },
  {
   "id": "ATH-68",
   "sport_id": "ATH",
   "category": "วิ่งผลัดต่างระยะ",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "",
   "sort": 68,
   "active": true
  },
  {
   "id": "ATH-69",
   "sport_id": "ATH",
   "category": "วิ่งผลัดต่างระยะ",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "",
   "sort": 69,
   "active": true
  },
  {
   "id": "ATH-70",
   "sport_id": "ATH",
   "category": "วิ่งผลัดต่างระยะ",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "",
   "sort": 70,
   "active": true
  },
  {
   "id": "ATH-71",
   "sport_id": "ATH",
   "category": "วิ่งผลัดต่างระยะ",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "",
   "sort": 71,
   "active": true
  },
  {
   "id": "ATH-72",
   "sport_id": "ATH",
   "category": "วิ่งผลัดต่างระยะ",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "",
   "sort": 72,
   "active": true
  },
  {
   "id": "ATH-73",
   "sport_id": "ATH",
   "category": "วิ่งผลัด 3 x 800 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "ส่งนักกีฬา 3 คน (สำรอง 2 คน)",
   "sort": 73,
   "active": true
  },
  {
   "id": "ATH-74",
   "sport_id": "ATH",
   "category": "วิ่งผลัด 3 x 800 เมตร",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "ส่งนักกีฬา 3 คน (สำรอง 2 คน)",
   "sort": 74,
   "active": true
  },
  {
   "id": "ATH-75",
   "sport_id": "ATH",
   "category": "วิ่งผลัด 3 x 800 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "ส่งนักกีฬา 3 คน (สำรอง 2 คน)",
   "sort": 75,
   "active": true
  },
  {
   "id": "ATH-76",
   "sport_id": "ATH",
   "category": "วิ่งผลัด 3 x 800 เมตร",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "ส่งนักกีฬา 3 คน (สำรอง 2 คน)",
   "sort": 76,
   "active": true
  },
  {
   "id": "ATH-77",
   "sport_id": "ATH",
   "category": "กระโดดไกล",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "วัดระยะตั้งแต่ 4 ม. ขึ้นไป",
   "sort": 77,
   "active": true
  },
  {
   "id": "ATH-78",
   "sport_id": "ATH",
   "category": "กระโดดไกล",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "วัดระยะตั้งแต่ 4 ม. ขึ้นไป",
   "sort": 78,
   "active": true
  },
  {
   "id": "ATH-79",
   "sport_id": "ATH",
   "category": "กระโดดไกล",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "วัดระยะตั้งแต่ 4 ม. ขึ้นไป",
   "sort": 79,
   "active": true
  },
  {
   "id": "ATH-80",
   "sport_id": "ATH",
   "category": "กระโดดไกล",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "วัดระยะตั้งแต่ 3 ม. ขึ้นไป",
   "sort": 80,
   "active": true
  },
  {
   "id": "ATH-81",
   "sport_id": "ATH",
   "category": "กระโดดไกล",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "วัดระยะตั้งแต่ 3 ม. ขึ้นไป",
   "sort": 81,
   "active": true
  },
  {
   "id": "ATH-82",
   "sport_id": "ATH",
   "category": "กระโดดไกล",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "วัดระยะตั้งแต่ 3 ม. ขึ้นไป",
   "sort": 82,
   "active": true
  },
  {
   "id": "ATH-83",
   "sport_id": "ATH",
   "category": "กระโดดสูง",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "เริ่มแข่งขัน 1.10 - 1.30 ม.",
   "sort": 83,
   "active": true
  },
  {
   "id": "ATH-84",
   "sport_id": "ATH",
   "category": "กระโดดสูง",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "เริ่มแข่งขัน 1.10 - 1.30 ม.",
   "sort": 84,
   "active": true
  },
  {
   "id": "ATH-85",
   "sport_id": "ATH",
   "category": "กระโดดสูง",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "เริ่มแข่งขัน 1.10 - 1.30 ม.",
   "sort": 85,
   "active": true
  },
  {
   "id": "ATH-86",
   "sport_id": "ATH",
   "category": "กระโดดสูง",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "เริ่มแข่งขัน 1.10 - 1.30 ม.",
   "sort": 86,
   "active": true
  },
  {
   "id": "ATH-87",
   "sport_id": "ATH",
   "category": "เขย่งก้าวกระโดด",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "วัดระยะตั้งแต่ 9 ม.",
   "sort": 87,
   "active": true
  },
  {
   "id": "ATH-88",
   "sport_id": "ATH",
   "category": "เขย่งก้าวกระโดด",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "วัดระยะตั้งแต่ 9 ม.",
   "sort": 88,
   "active": true
  },
  {
   "id": "ATH-89",
   "sport_id": "ATH",
   "category": "เขย่งก้าวกระโดด",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "วัดระยะตั้งแต่ 7 ม.",
   "sort": 89,
   "active": true
  },
  {
   "id": "ATH-90",
   "sport_id": "ATH",
   "category": "เขย่งก้าวกระโดด",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "วัดระยะตั้งแต่ 7 ม.",
   "sort": 90,
   "active": true
  },
  {
   "id": "ATH-91",
   "sport_id": "ATH",
   "category": "ทุ่มน้ำหนัก",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "น้ำหนักอุปกรณ์ 4 กก.",
   "sort": 91,
   "active": true
  },
  {
   "id": "ATH-92",
   "sport_id": "ATH",
   "category": "ทุ่มน้ำหนัก",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "น้ำหนักอุปกรณ์ 4 กก.",
   "sort": 92,
   "active": true
  },
  {
   "id": "ATH-93",
   "sport_id": "ATH",
   "category": "ทุ่มน้ำหนัก",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "น้ำหนักอุปกรณ์ 5.54 กก.",
   "sort": 93,
   "active": true
  },
  {
   "id": "ATH-94",
   "sport_id": "ATH",
   "category": "ทุ่มน้ำหนัก",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "น้ำหนักอุปกรณ์ 3.63 กก.",
   "sort": 94,
   "active": true
  },
  {
   "id": "ATH-95",
   "sport_id": "ATH",
   "category": "ทุ่มน้ำหนัก",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "น้ำหนักอุปกรณ์ 3.63 กก.",
   "sort": 95,
   "active": true
  },
  {
   "id": "ATH-96",
   "sport_id": "ATH",
   "category": "ทุ่มน้ำหนัก",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "น้ำหนักอุปกรณ์ 4 กก.",
   "sort": 96,
   "active": true
  },
  {
   "id": "ATH-97",
   "sport_id": "ATH",
   "category": "ขว้างจักร",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "น้ำหนักอุปกรณ์ 1 กก.",
   "sort": 97,
   "active": true
  },
  {
   "id": "ATH-98",
   "sport_id": "ATH",
   "category": "ขว้างจักร",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "น้ำหนักอุปกรณ์ 1 กก.",
   "sort": 98,
   "active": true
  },
  {
   "id": "ATH-99",
   "sport_id": "ATH",
   "category": "ขว้างจักร",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "น้ำหนักอุปกรณ์ 1.5 กก.",
   "sort": 99,
   "active": true
  },
  {
   "id": "ATH-100",
   "sport_id": "ATH",
   "category": "ขว้างจักร",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "น้ำหนักอุปกรณ์ 1 กก.",
   "sort": 100,
   "active": true
  },
  {
   "id": "ATH-101",
   "sport_id": "ATH",
   "category": "ขว้างจักร",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "น้ำหนักอุปกรณ์ 1 กก.",
   "sort": 101,
   "active": true
  },
  {
   "id": "ATH-102",
   "sport_id": "ATH",
   "category": "ขว้างจักร",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "น้ำหนักอุปกรณ์ 1 กก.",
   "sort": 102,
   "active": true
  },
  {
   "id": "ATH-103",
   "sport_id": "ATH",
   "category": "พุ่งแหลน",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "น้ำหนักอุปกรณ์ 600 กรัม",
   "sort": 103,
   "active": true
  },
  {
   "id": "ATH-104",
   "sport_id": "ATH",
   "category": "พุ่งแหลน",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "น้ำหนักอุปกรณ์ 700 กรัม",
   "sort": 104,
   "active": true
  },
  {
   "id": "ATH-105",
   "sport_id": "ATH",
   "category": "พุ่งแหลน",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "น้ำหนักอุปกรณ์ 700 กรัม",
   "sort": 105,
   "active": true
  },
  {
   "id": "ATH-106",
   "sport_id": "ATH",
   "category": "พุ่งแหลน",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "น้ำหนักอุปกรณ์ 600 กรัม",
   "sort": 106,
   "active": true
  },
  {
   "id": "ATH-107",
   "sport_id": "ATH",
   "category": "พุ่งแหลน",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "น้ำหนักอุปกรณ์ 600 กรัม",
   "sort": 107,
   "active": true
  },
  {
   "id": "ATH-108",
   "sport_id": "ATH",
   "category": "พุ่งแหลน",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "น้ำหนักอุปกรณ์ 600 กรัม",
   "sort": 108,
   "active": true
  },
  {
   "id": "SWM-01",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ 50 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "Time Final",
   "sort": 109,
   "active": true
  },
  {
   "id": "SWM-02",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ 50 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "Time Final",
   "sort": 110,
   "active": true
  },
  {
   "id": "SWM-03",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ 50 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "Time Final",
   "sort": 111,
   "active": true
  },
  {
   "id": "SWM-04",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ 50 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "Time Final",
   "sort": 112,
   "active": true
  },
  {
   "id": "SWM-05",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ 50 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "Time Final",
   "sort": 113,
   "active": true
  },
  {
   "id": "SWM-06",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ 50 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "Time Final",
   "sort": 114,
   "active": true
  },
  {
   "id": "SWM-07",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ 100 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "Time Final",
   "sort": 115,
   "active": true
  },
  {
   "id": "SWM-08",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ 100 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "Time Final",
   "sort": 116,
   "active": true
  },
  {
   "id": "SWM-09",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ 100 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "Time Final",
   "sort": 117,
   "active": true
  },
  {
   "id": "SWM-10",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ 100 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "Time Final",
   "sort": 118,
   "active": true
  },
  {
   "id": "SWM-11",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ 100 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "Time Final",
   "sort": 119,
   "active": true
  },
  {
   "id": "SWM-12",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ 100 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "Time Final",
   "sort": 120,
   "active": true
  },
  {
   "id": "SWM-13",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ 200 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "เฉพาะรุ่น 14 ปี",
   "sort": 121,
   "active": true
  },
  {
   "id": "SWM-14",
   "sport_id": "SWM",
   "category": "ฟรีสไตล์ 200 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "เฉพาะรุ่น 14 ปี",
   "sort": 122,
   "active": true
  },
  {
   "id": "SWM-15",
   "sport_id": "SWM",
   "category": "กรรเชียง 50 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "Time Final",
   "sort": 123,
   "active": true
  },
  {
   "id": "SWM-16",
   "sport_id": "SWM",
   "category": "กรรเชียง 50 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "Time Final",
   "sort": 124,
   "active": true
  },
  {
   "id": "SWM-17",
   "sport_id": "SWM",
   "category": "กรรเชียง 50 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "Time Final",
   "sort": 125,
   "active": true
  },
  {
   "id": "SWM-18",
   "sport_id": "SWM",
   "category": "กรรเชียง 50 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "Time Final",
   "sort": 126,
   "active": true
  },
  {
   "id": "SWM-19",
   "sport_id": "SWM",
   "category": "กรรเชียง 50 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "Time Final",
   "sort": 127,
   "active": true
  },
  {
   "id": "SWM-20",
   "sport_id": "SWM",
   "category": "กรรเชียง 50 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "Time Final",
   "sort": 128,
   "active": true
  },
  {
   "id": "SWM-21",
   "sport_id": "SWM",
   "category": "กรรเชียง 100 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "Time Final",
   "sort": 129,
   "active": true
  },
  {
   "id": "SWM-22",
   "sport_id": "SWM",
   "category": "กรรเชียง 100 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "Time Final",
   "sort": 130,
   "active": true
  },
  {
   "id": "SWM-23",
   "sport_id": "SWM",
   "category": "กรรเชียง 100 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "Time Final",
   "sort": 131,
   "active": true
  },
  {
   "id": "SWM-24",
   "sport_id": "SWM",
   "category": "กรรเชียง 100 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "Time Final",
   "sort": 132,
   "active": true
  },
  {
   "id": "SWM-25",
   "sport_id": "SWM",
   "category": "กรรเชียง 100 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "Time Final",
   "sort": 133,
   "active": true
  },
  {
   "id": "SWM-26",
   "sport_id": "SWM",
   "category": "กรรเชียง 100 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "Time Final",
   "sort": 134,
   "active": true
  },
  {
   "id": "SWM-27",
   "sport_id": "SWM",
   "category": "กบ 50 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "Time Final",
   "sort": 135,
   "active": true
  },
  {
   "id": "SWM-28",
   "sport_id": "SWM",
   "category": "กบ 50 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "Time Final",
   "sort": 136,
   "active": true
  },
  {
   "id": "SWM-29",
   "sport_id": "SWM",
   "category": "กบ 50 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "Time Final",
   "sort": 137,
   "active": true
  },
  {
   "id": "SWM-30",
   "sport_id": "SWM",
   "category": "กบ 50 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "Time Final",
   "sort": 138,
   "active": true
  },
  {
   "id": "SWM-31",
   "sport_id": "SWM",
   "category": "กบ 50 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "Time Final",
   "sort": 139,
   "active": true
  },
  {
   "id": "SWM-32",
   "sport_id": "SWM",
   "category": "กบ 50 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "Time Final",
   "sort": 140,
   "active": true
  },
  {
   "id": "SWM-33",
   "sport_id": "SWM",
   "category": "กบ 100 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "Time Final",
   "sort": 141,
   "active": true
  },
  {
   "id": "SWM-34",
   "sport_id": "SWM",
   "category": "กบ 100 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "Time Final",
   "sort": 142,
   "active": true
  },
  {
   "id": "SWM-35",
   "sport_id": "SWM",
   "category": "กบ 100 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "Time Final",
   "sort": 143,
   "active": true
  },
  {
   "id": "SWM-36",
   "sport_id": "SWM",
   "category": "กบ 100 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "Time Final",
   "sort": 144,
   "active": true
  },
  {
   "id": "SWM-37",
   "sport_id": "SWM",
   "category": "กบ 100 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "Time Final",
   "sort": 145,
   "active": true
  },
  {
   "id": "SWM-38",
   "sport_id": "SWM",
   "category": "กบ 100 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "Time Final",
   "sort": 146,
   "active": true
  },
  {
   "id": "SWM-39",
   "sport_id": "SWM",
   "category": "กบ 200 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "เฉพาะรุ่น 14 ปี",
   "sort": 147,
   "active": true
  },
  {
   "id": "SWM-40",
   "sport_id": "SWM",
   "category": "กบ 200 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "เฉพาะรุ่น 14 ปี",
   "sort": 148,
   "active": true
  },
  {
   "id": "SWM-41",
   "sport_id": "SWM",
   "category": "ผีเสื้อ 50 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "Time Final",
   "sort": 149,
   "active": true
  },
  {
   "id": "SWM-42",
   "sport_id": "SWM",
   "category": "ผีเสื้อ 50 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "Time Final",
   "sort": 150,
   "active": true
  },
  {
   "id": "SWM-43",
   "sport_id": "SWM",
   "category": "ผีเสื้อ 50 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "Time Final",
   "sort": 151,
   "active": true
  },
  {
   "id": "SWM-44",
   "sport_id": "SWM",
   "category": "ผีเสื้อ 50 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "Time Final",
   "sort": 152,
   "active": true
  },
  {
   "id": "SWM-45",
   "sport_id": "SWM",
   "category": "ผีเสื้อ 50 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "Time Final",
   "sort": 153,
   "active": true
  },
  {
   "id": "SWM-46",
   "sport_id": "SWM",
   "category": "ผีเสื้อ 50 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "Time Final",
   "sort": 154,
   "active": true
  },
  {
   "id": "SWM-47",
   "sport_id": "SWM",
   "category": "ผลัดฟรีสไตล์ 4x50 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "Time Final",
   "sort": 155,
   "active": true
  },
  {
   "id": "SWM-48",
   "sport_id": "SWM",
   "category": "ผลัดฟรีสไตล์ 4x50 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "Time Final",
   "sort": 156,
   "active": true
  },
  {
   "id": "SWM-49",
   "sport_id": "SWM",
   "category": "ผลัดฟรีสไตล์ 4x50 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "Time Final",
   "sort": 157,
   "active": true
  },
  {
   "id": "SWM-50",
   "sport_id": "SWM",
   "category": "ผลัดฟรีสไตล์ 4x50 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "Time Final",
   "sort": 158,
   "active": true
  },
  {
   "id": "SWM-51",
   "sport_id": "SWM",
   "category": "ผลัดฟรีสไตล์ 4x50 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "Time Final",
   "sort": 159,
   "active": true
  },
  {
   "id": "SWM-52",
   "sport_id": "SWM",
   "category": "ผลัดฟรีสไตล์ 4x50 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "Time Final",
   "sort": 160,
   "active": true
  },
  {
   "id": "SWM-53",
   "sport_id": "SWM",
   "category": "ผลัดฟรีสไตล์ 4x100 ม.",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "เฉพาะรุ่น 14 ปี",
   "sort": 161,
   "active": true
  },
  {
   "id": "SWM-54",
   "sport_id": "SWM",
   "category": "ผลัดฟรีสไตล์ 4x100 ม.",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "เฉพาะรุ่น 14 ปี",
   "sort": 162,
   "active": true
  },
  {
   "id": "TT-01",
   "sport_id": "TT",
   "category": "เดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 163,
   "active": true
  },
  {
   "id": "TT-02",
   "sport_id": "TT",
   "category": "เดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 164,
   "active": true
  },
  {
   "id": "TT-03",
   "sport_id": "TT",
   "category": "เดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 165,
   "active": true
  },
  {
   "id": "TT-04",
   "sport_id": "TT",
   "category": "เดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 166,
   "active": true
  },
  {
   "id": "TT-05",
   "sport_id": "TT",
   "category": "เดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 167,
   "active": true
  },
  {
   "id": "TT-06",
   "sport_id": "TT",
   "category": "เดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 168,
   "active": true
  },
  {
   "id": "TT-07",
   "sport_id": "TT",
   "category": "คู่",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 169,
   "active": true
  },
  {
   "id": "TT-08",
   "sport_id": "TT",
   "category": "คู่",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 170,
   "active": true
  },
  {
   "id": "TT-09",
   "sport_id": "TT",
   "category": "คู่",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 171,
   "active": true
  },
  {
   "id": "TT-10",
   "sport_id": "TT",
   "category": "คู่",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 172,
   "active": true
  },
  {
   "id": "TT-11",
   "sport_id": "TT",
   "category": "คู่",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 173,
   "active": true
  },
  {
   "id": "TT-12",
   "sport_id": "TT",
   "category": "คู่",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 174,
   "active": true
  },
  {
   "id": "TT-13",
   "sport_id": "TT",
   "category": "คู่ผสม",
   "gender": "ผสม",
   "division": "ไม่เกิน 14 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 175,
   "active": true
  },
  {
   "id": "TT-14",
   "sport_id": "TT",
   "category": "คู่ผสม",
   "gender": "ผสม",
   "division": "ไม่เกิน 16 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 176,
   "active": true
  },
  {
   "id": "TT-15",
   "sport_id": "TT",
   "category": "คู่ผสม",
   "gender": "ผสม",
   "division": "ไม่เกิน 18 ปี",
   "note": "ห้ามเปลี่ยนตัวผู้เล่นหลังยื่นใบสมัคร",
   "sort": 177,
   "active": true
  },
  {
   "id": "BAD-01",
   "sport_id": "BAD",
   "category": "เดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 178,
   "active": true
  },
  {
   "id": "BAD-02",
   "sport_id": "BAD",
   "category": "เดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 179,
   "active": true
  },
  {
   "id": "BAD-03",
   "sport_id": "BAD",
   "category": "เดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 180,
   "active": true
  },
  {
   "id": "BAD-04",
   "sport_id": "BAD",
   "category": "เดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 181,
   "active": true
  },
  {
   "id": "BAD-05",
   "sport_id": "BAD",
   "category": "เดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 182,
   "active": true
  },
  {
   "id": "BAD-06",
   "sport_id": "BAD",
   "category": "เดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 183,
   "active": true
  },
  {
   "id": "BAD-07",
   "sport_id": "BAD",
   "category": "คู่",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 184,
   "active": true
  },
  {
   "id": "BAD-08",
   "sport_id": "BAD",
   "category": "คู่",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 185,
   "active": true
  },
  {
   "id": "BAD-09",
   "sport_id": "BAD",
   "category": "คู่",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 186,
   "active": true
  },
  {
   "id": "BAD-10",
   "sport_id": "BAD",
   "category": "คู่",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 187,
   "active": true
  },
  {
   "id": "BAD-11",
   "sport_id": "BAD",
   "category": "คู่",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 188,
   "active": true
  },
  {
   "id": "BAD-12",
   "sport_id": "BAD",
   "category": "คู่",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 189,
   "active": true
  },
  {
   "id": "BAD-13",
   "sport_id": "BAD",
   "category": "คู่ผสม",
   "gender": "ผสม",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 190,
   "active": true
  },
  {
   "id": "BAD-14",
   "sport_id": "BAD",
   "category": "คู่ผสม",
   "gender": "ผสม",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 191,
   "active": true
  },
  {
   "id": "BAD-15",
   "sport_id": "BAD",
   "category": "คู่ผสม",
   "gender": "ผสม",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬา 1 คนลงได้ไม่เกิน 2 ประเภท",
   "sort": 192,
   "active": true
  },
  {
   "id": "BOX-01",
   "sport_id": "BOX",
   "category": "เปเปอร์เวท (>39–42 กก.)",
   "gender": "ชาย",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 193,
   "active": true
  },
  {
   "id": "BOX-02",
   "sport_id": "BOX",
   "category": "พินเวท (>42–46 กก.)",
   "gender": "ชาย",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 194,
   "active": true
  },
  {
   "id": "BOX-03",
   "sport_id": "BOX",
   "category": "ไลท์ฟลายเวท (>46–49 กก.)",
   "gender": "ชาย",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 195,
   "active": true
  },
  {
   "id": "BOX-04",
   "sport_id": "BOX",
   "category": "ฟลายเวท (>49–52 กก.)",
   "gender": "ชาย",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 196,
   "active": true
  },
  {
   "id": "BOX-05",
   "sport_id": "BOX",
   "category": "แบนตั้มเวท (>52–56 กก.)",
   "gender": "ชาย",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 197,
   "active": true
  },
  {
   "id": "BOX-06",
   "sport_id": "BOX",
   "category": "ไลท์เวท (>56–60 กก.)",
   "gender": "ชาย",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 198,
   "active": true
  },
  {
   "id": "BOX-07",
   "sport_id": "BOX",
   "category": "ไลท์เวลเตอร์เวท (>60–64 กก.)",
   "gender": "ชาย",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 199,
   "active": true
  },
  {
   "id": "BOX-08",
   "sport_id": "BOX",
   "category": "เปเปอร์เวท (>39–42 กก.)",
   "gender": "หญิง",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 200,
   "active": true
  },
  {
   "id": "BOX-09",
   "sport_id": "BOX",
   "category": "พินเวท (>42–45 กก.)",
   "gender": "หญิง",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 201,
   "active": true
  },
  {
   "id": "BOX-10",
   "sport_id": "BOX",
   "category": "ไลท์ฟลายเวท (>45–48 กก.)",
   "gender": "หญิง",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 202,
   "active": true
  },
  {
   "id": "BOX-11",
   "sport_id": "BOX",
   "category": "ฟลายเวท (>48–51 กก.)",
   "gender": "หญิง",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 203,
   "active": true
  },
  {
   "id": "BOX-12",
   "sport_id": "BOX",
   "category": "แบนตั้มเวท (>51–54 กก.)",
   "gender": "หญิง",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 204,
   "active": true
  },
  {
   "id": "BOX-13",
   "sport_id": "BOX",
   "category": "เฟเธอร์เวท (>54–57 กก.)",
   "gender": "หญิง",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 205,
   "active": true
  },
  {
   "id": "BOX-14",
   "sport_id": "BOX",
   "category": "ไลท์เวท (>57–60 กก.)",
   "gender": "หญิง",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 206,
   "active": true
  },
  {
   "id": "MBX-01",
   "sport_id": "MBX",
   "category": "11 รุ่นพิกัดน้ำหนัก (39–75 กก.)",
   "gender": "ชาย",
   "division": "15–19 ปี (เกิด พ.ศ. 2550–2554)",
   "note": "ชั่งน้ำหนักตรวจร่างกายวันแข่งขัน",
   "sort": 207,
   "active": true
  },
  {
   "id": "WLF-01",
   "sport_id": "WLF",
   "category": "ทีม 7 รุ่นน้ำหนัก (55–89+ กก.)",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "ส่งนักกีฬาได้รุ่นละไม่เกิน 2 คน รวมไม่เกิน 7 คน",
   "sort": 208,
   "active": true
  },
  {
   "id": "WLF-02",
   "sport_id": "WLF",
   "category": "ทีม 7 รุ่นน้ำหนัก (45–71+ กก.)",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "ส่งนักกีฬาได้รุ่นละไม่เกิน 2 คน รวมไม่เกิน 7 คน",
   "sort": 209,
   "active": true
  },
  {
   "id": "FTB-01",
   "sport_id": "FTB",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "ทีมชายเท่านั้น",
   "sort": 210,
   "active": true
  },
  {
   "id": "FTB-02",
   "sport_id": "FTB",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "ทีมชายเท่านั้น",
   "sort": 211,
   "active": true
  },
  {
   "id": "FTB-03",
   "sport_id": "FTB",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "ทีมชายเท่านั้น",
   "sort": 212,
   "active": true
  },
  {
   "id": "FTB-04",
   "sport_id": "FTB",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "ทีมหญิง (จัดเฉพาะรุ่น 18 ปี)",
   "sort": 213,
   "active": true
  },
  {
   "id": "FTS-01",
   "sport_id": "FTS",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬาไม่เกิน 14 คน",
   "sort": 214,
   "active": true
  },
  {
   "id": "FTS-02",
   "sport_id": "FTS",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬาไม่เกิน 14 คน",
   "sort": 215,
   "active": true
  },
  {
   "id": "FTS-03",
   "sport_id": "FTS",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬาไม่เกิน 14 คน",
   "sort": 216,
   "active": true
  },
  {
   "id": "FTS-04",
   "sport_id": "FTS",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬาไม่เกิน 14 คน",
   "sort": 217,
   "active": true
  },
  {
   "id": "FTS-05",
   "sport_id": "FTS",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬาไม่เกิน 14 คน",
   "sort": 218,
   "active": true
  },
  {
   "id": "FTS-06",
   "sport_id": "FTS",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬาไม่เกิน 14 คน",
   "sort": 219,
   "active": true
  },
  {
   "id": "VOL-01",
   "sport_id": "VOL",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "รอบแรกพบกันหมด",
   "sort": 220,
   "active": true
  },
  {
   "id": "VOL-02",
   "sport_id": "VOL",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "รอบแรกพบกันหมด",
   "sort": 221,
   "active": true
  },
  {
   "id": "VOL-03",
   "sport_id": "VOL",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "รอบแรกพบกันหมด",
   "sort": 222,
   "active": true
  },
  {
   "id": "VOL-04",
   "sport_id": "VOL",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "รอบแรกพบกันหมด",
   "sort": 223,
   "active": true
  },
  {
   "id": "VOL-05",
   "sport_id": "VOL",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "รอบแรกพบกันหมด",
   "sort": 224,
   "active": true
  },
  {
   "id": "VOL-06",
   "sport_id": "VOL",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "รอบแรกพบกันหมด",
   "sort": 225,
   "active": true
  },
  {
   "id": "BVL-01",
   "sport_id": "BVL",
   "category": "ทีม 2 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "ชุดติดหมายเลข 1 และ 2",
   "sort": 226,
   "active": true
  },
  {
   "id": "BVL-02",
   "sport_id": "BVL",
   "category": "ทีม 2 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "ชุดติดหมายเลข 1 และ 2",
   "sort": 227,
   "active": true
  },
  {
   "id": "BVL-03",
   "sport_id": "BVL",
   "category": "ทีม 2 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "ชุดติดหมายเลข 1 และ 2",
   "sort": 228,
   "active": true
  },
  {
   "id": "BVL-04",
   "sport_id": "BVL",
   "category": "ทีม 2 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "ชุดติดหมายเลข 1 และ 2",
   "sort": 229,
   "active": true
  },
  {
   "id": "BVL-05",
   "sport_id": "BVL",
   "category": "ทีม 2 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "ชุดติดหมายเลข 1 และ 2",
   "sort": 230,
   "active": true
  },
  {
   "id": "BVL-06",
   "sport_id": "BVL",
   "category": "ทีม 2 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "ชุดติดหมายเลข 1 และ 2",
   "sort": 231,
   "active": true
  },
  {
   "id": "BSK-01",
   "sport_id": "BSK",
   "category": "ทีม 5 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬาไม่เกิน 12 คน",
   "sort": 232,
   "active": true
  },
  {
   "id": "BSK-02",
   "sport_id": "BSK",
   "category": "ทีม 5 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬาไม่เกิน 12 คน",
   "sort": 233,
   "active": true
  },
  {
   "id": "BSK-03",
   "sport_id": "BSK",
   "category": "ทีม 5 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬาไม่เกิน 12 คน",
   "sort": 234,
   "active": true
  },
  {
   "id": "BSK-04",
   "sport_id": "BSK",
   "category": "ทีม 5 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬาไม่เกิน 12 คน",
   "sort": 235,
   "active": true
  },
  {
   "id": "BSK-05",
   "sport_id": "BSK",
   "category": "ทีม 5 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬาไม่เกิน 12 คน",
   "sort": 236,
   "active": true
  },
  {
   "id": "BSK-06",
   "sport_id": "BSK",
   "category": "ทีม 5 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬาไม่เกิน 12 คน",
   "sort": 237,
   "active": true
  },
  {
   "id": "B33-01",
   "sport_id": "B33",
   "category": "ทีม 3 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬาไม่เกิน 4 คน",
   "sort": 238,
   "active": true
  },
  {
   "id": "B33-02",
   "sport_id": "B33",
   "category": "ทีม 3 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬาไม่เกิน 4 คน",
   "sort": 239,
   "active": true
  },
  {
   "id": "B33-03",
   "sport_id": "B33",
   "category": "ทีม 3 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬาไม่เกิน 4 คน",
   "sort": 240,
   "active": true
  },
  {
   "id": "B33-04",
   "sport_id": "B33",
   "category": "ทีม 3 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬาไม่เกิน 4 คน",
   "sort": 241,
   "active": true
  },
  {
   "id": "B33-05",
   "sport_id": "B33",
   "category": "ทีม 3 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬาไม่เกิน 4 คน",
   "sort": 242,
   "active": true
  },
  {
   "id": "B33-06",
   "sport_id": "B33",
   "category": "ทีม 3 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬาไม่เกิน 4 คน",
   "sort": 243,
   "active": true
  },
  {
   "id": "TAK-01",
   "sport_id": "TAK",
   "category": "ทีมชุด",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "จัดแข่งทั้งทีมชุดและทีมเดี่ยว",
   "sort": 244,
   "active": true
  },
  {
   "id": "TAK-02",
   "sport_id": "TAK",
   "category": "ทีมชุด",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "จัดแข่งทั้งทีมชุดและทีมเดี่ยว",
   "sort": 245,
   "active": true
  },
  {
   "id": "TAK-03",
   "sport_id": "TAK",
   "category": "ทีมชุด",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "จัดแข่งทั้งทีมชุดและทีมเดี่ยว",
   "sort": 246,
   "active": true
  },
  {
   "id": "TAK-04",
   "sport_id": "TAK",
   "category": "ทีมเดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "จัดแข่งทั้งทีมชุดและทีมเดี่ยว",
   "sort": 247,
   "active": true
  },
  {
   "id": "TAK-05",
   "sport_id": "TAK",
   "category": "ทีมเดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "จัดแข่งทั้งทีมชุดและทีมเดี่ยว",
   "sort": 248,
   "active": true
  },
  {
   "id": "TAK-06",
   "sport_id": "TAK",
   "category": "ทีมเดี่ยว",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "จัดแข่งทั้งทีมชุดและทีมเดี่ยว",
   "sort": 249,
   "active": true
  },
  {
   "id": "TAK-07",
   "sport_id": "TAK",
   "category": "ทีมเดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "จัดแข่งเฉพาะทีมเดี่ยว",
   "sort": 250,
   "active": true
  },
  {
   "id": "TAK-08",
   "sport_id": "TAK",
   "category": "ทีมเดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "จัดแข่งเฉพาะทีมเดี่ยว",
   "sort": 251,
   "active": true
  },
  {
   "id": "TAK-09",
   "sport_id": "TAK",
   "category": "ทีมเดี่ยว",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "จัดแข่งเฉพาะทีมเดี่ยว",
   "sort": 252,
   "active": true
  },
  {
   "id": "HDB-01",
   "sport_id": "HDB",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬา 7-16 คน",
   "sort": 253,
   "active": true
  },
  {
   "id": "HDB-02",
   "sport_id": "HDB",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬา 7-16 คน",
   "sort": 254,
   "active": true
  },
  {
   "id": "HDB-03",
   "sport_id": "HDB",
   "category": "ทีม",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬา 7-16 คน",
   "sort": 255,
   "active": true
  },
  {
   "id": "HDB-04",
   "sport_id": "HDB",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "นักกีฬา 7-16 คน",
   "sort": 256,
   "active": true
  },
  {
   "id": "HDB-05",
   "sport_id": "HDB",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "นักกีฬา 7-16 คน",
   "sort": 257,
   "active": true
  },
  {
   "id": "HDB-06",
   "sport_id": "HDB",
   "category": "ทีม",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "นักกีฬา 7-16 คน",
   "sort": 258,
   "active": true
  },
  {
   "id": "PTQ-01",
   "sport_id": "PTQ",
   "category": "ทีม 3 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 14 ปี",
   "note": "ทีมละ 3 คน",
   "sort": 259,
   "active": true
  },
  {
   "id": "PTQ-02",
   "sport_id": "PTQ",
   "category": "ทีม 3 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 16 ปี",
   "note": "ทีมละ 3 คน",
   "sort": 260,
   "active": true
  },
  {
   "id": "PTQ-03",
   "sport_id": "PTQ",
   "category": "ทีม 3 คน",
   "gender": "ชาย",
   "division": "ไม่เกิน 18 ปี",
   "note": "ทีมละ 3 คน",
   "sort": 261,
   "active": true
  },
  {
   "id": "PTQ-04",
   "sport_id": "PTQ",
   "category": "ทีม 3 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 14 ปี",
   "note": "ทีมละ 3 คน",
   "sort": 262,
   "active": true
  },
  {
   "id": "PTQ-05",
   "sport_id": "PTQ",
   "category": "ทีม 3 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 16 ปี",
   "note": "ทีมละ 3 คน",
   "sort": 263,
   "active": true
  },
  {
   "id": "PTQ-06",
   "sport_id": "PTQ",
   "category": "ทีม 3 คน",
   "gender": "หญิง",
   "division": "ไม่เกิน 18 ปี",
   "note": "ทีมละ 3 คน",
   "sort": 264,
   "active": true
  },
  {
   "id": "ESP-01",
   "sport_id": "ESP",
   "category": "ROV (ทีม 5 คน)",
   "gender": "ไม่จำกัดเพศ",
   "division": "ไม่เกิน 18 ปี (13–18 ปี)",
   "note": "สำรองได้ไม่เกิน 3 คน",
   "sort": 265,
   "active": true
  },
  {
   "id": "ESP-02",
   "sport_id": "ESP",
   "category": "EA SPORTS FC Mobile (บุคคล)",
   "gender": "ไม่จำกัดเพศ",
   "division": "ไม่เกิน 18 ปี (13–18 ปี)",
   "note": "ประเภทบุคคล",
   "sort": 266,
   "active": true
  },
  {
   "id": "TQB-01",
   "sport_id": "TQB",
   "category": "ตามประกาศ",
   "gender": "ชาย",
   "division": "ตามประกาศ",
   "note": "บรรจุตามระเบียบการแข่งขัน",
   "sort": 267,
   "active": true
  },
  {
   "id": "TQB-02",
   "sport_id": "TQB",
   "category": "ตามประกาศ",
   "gender": "หญิง",
   "division": "ตามประกาศ",
   "note": "บรรจุตามระเบียบการแข่งขัน",
   "sort": 268,
   "active": true
  }
 ]
};
