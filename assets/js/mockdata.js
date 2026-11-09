// ข้อมูลสมมติสำหรับโหมดสาธิต — รายชื่อโรงเรียนและความประสงค์เป็นข้อมูลสมมติ
// รายการกีฬาและรายการแข่งขันมาจาก catalog.js (ร่างจากฝ่ายจัด)
(function () {
  const districts = [
    'เมืองชัยภูมิ', 'บ้านเขว้า', 'คอนสวรรค์', 'เกษตรสมบูรณ์', 'หนองบัวแดง',
    'จัตุรัส', 'บำเหน็จณรงค์', 'หนองบัวระเหว', 'เทพสถิต', 'ภูเขียว',
    'บ้านแท่น', 'แก้งคร้อ', 'คอนสาร', 'ภักดีชุมพล', 'เนินสง่า', 'ซับใหญ่',
  ];

  // 2 โรงเรียนสมมติต่ออำเภอ (อ.เมือง 4 โรง) = 34 โรง
  const schools = [];
  let n = 1;
  districts.forEach((d) => {
    const count = d === 'เมืองชัยภูมิ' ? 4 : 2;
    for (let i = 1; i <= count; i++) {
      const code = 'CYP' + String(n).padStart(3, '0');
      schools.push({ code, name: `โรงเรียนตัวอย่าง${d} ${i}`, district: d });
      n++;
    }
  });

  const sports = window.CATALOG.sports;
  const events = window.CATALOG.events;

  // ตัวสุ่มแบบกำหนดค่าเริ่ม เพื่อให้ข้อมูลสมมติออกมาเหมือนเดิมทุกครั้ง
  function seeded(seed) {
    let s = seed >>> 0;
    return () => {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
  }

  // ความประสงค์สมมติ: ~80% ของโรงเรียนแจ้งแล้ว โอกาสส่งแต่ละรายการต่างกันตามชนิดกีฬา
  const rand = seeded(51);
  const popularity = {
    ATH: 0.3, SWM: 0.12, TT: 0.08, BAD: 0.1, BOX: 0.06, MBX: 0.2, WLF: 0.15,
    FTB: 0.35, FTS: 0.4, VOL: 0.28, BVL: 0.1, BSK: 0.12, B33: 0.1, TAK: 0.25,
    HDB: 0.08, PTQ: 0.2, ESP: 0.45, TQB: 0.05,
  };
  const intents = [];
  const submittedAt = {};
  schools.forEach((sc) => {
    if (rand() < 0.2) return; // ยังไม่แจ้ง
    const day = 1 + Math.floor(rand() * 8);
    submittedAt[sc.code] = `2026-11-${String(day).padStart(2, '0')}T09:00:00+07:00`;
    events.forEach((ev) => {
      if (rand() < (popularity[ev.sport_id] || 0.1)) intents.push({ school_code: sc.code, event_id: ev.id });
    });
  });

  window.MOCK = { schools, sports, events, intents, submittedAt, DEMO_PIN: '111111' };
})();
