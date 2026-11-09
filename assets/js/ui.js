// ส่วนที่ใช้ร่วมกันทุกหน้า: แถบเมนู, ป้ายโหมดสาธิต, ฟังก์ชันช่วย
(function () {
  const cfg = window.APP_CONFIG || {};

  const NAV = [
    ['index.html', 'หน้าแรก'],
    ['survey.html', 'แจ้งความประสงค์'],
    ['summary.html', 'สรุปความประสงค์'],
    ['competition.html', 'ต้นแบบจัดการแข่งขัน'],
    ['admin.html', 'ผู้ดูแล'],
  ];

  function renderChrome() {
    const here = location.pathname.split('/').pop() || 'index.html';
    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = `
      <div class="wrap header-inner">
        <a class="brand" href="index.html">
          <span class="brand-mark" aria-hidden="true">51</span>
          <span class="brand-text">
            <strong>${esc(cfg.EVENT_NICKNAME || '')}</strong>
            <small>${esc(cfg.EVENT_NAME || '')} ปีการศึกษา ${esc(cfg.ACADEMIC_YEAR || '')}</small>
          </span>
        </a>
        <button class="nav-toggle" aria-label="เปิดเมนู" aria-expanded="false"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>
        <nav class="site-nav">
          ${NAV.map(([href, label]) => `<a href="${href}" ${href === here ? 'aria-current="page"' : ''}>${label}</a>`).join('')}
        </nav>
      </div>`;
    document.body.prepend(header);
    const btn = header.querySelector('.nav-toggle');
    btn.addEventListener('click', () => {
      const open = header.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', String(open));
    });

    if (window.Store && window.Store.mode === 'demo') {
      const bar = document.createElement('div');
      bar.className = 'demo-bar';
      bar.innerHTML = '<div class="wrap">โหมดสาธิต — ใช้ข้อมูลสมมติ และบันทึกไว้ในเบราว์เซอร์เครื่องนี้เท่านั้น</div>';
      header.after(bar);
    }

    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `<div class="wrap">${esc(cfg.EVENT_NAME || '')} · ระบบต้นแบบ ไม่มีค่าใช้จ่าย · เปิดได้ทุกเบราว์เซอร์โดยไม่ต้องใช้บัญชี Google</div>`;
    document.body.append(footer);
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function thaiDateTime(iso, withTime = true) {
    if (!iso) return '—';
    const d = new Date(iso);
    const opts = { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Bangkok' };
    if (withTime) Object.assign(opts, { hour: '2-digit', minute: '2-digit' });
    return d.toLocaleString('th-TH', opts);
  }

  function eventLabel(ev, withSport, sportsById) {
    const parts = [];
    if (withSport && sportsById) parts.push(sportsById[ev.sport_id] ? sportsById[ev.sport_id].name : ev.sport_id);
    parts.push(ev.category, ev.gender, 'รุ่น ' + ev.division);
    return parts.join(' · ');
  }

  function toast(msg, kind) {
    let box = document.querySelector('.toast');
    if (!box) {
      box = document.createElement('div');
      box.className = 'toast';
      box.setAttribute('role', 'status');
      document.body.append(box);
    }
    box.textContent = msg;
    box.dataset.kind = kind || 'ok';
    box.classList.add('show');
    clearTimeout(box._t);
    box._t = setTimeout(() => box.classList.remove('show'), 3200);
  }

  // ดาวน์โหลด CSV ที่เปิดใน Excel แล้วภาษาไทยไม่เพี้ยน (ใส่ BOM)
  function downloadCSV(filename, rows) {
    const csv = rows.map((r) => r.map((c) => {
      const v = String(c == null ? '' : c);
      return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
    }).join(',')).join('\r\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  function byId(list, key) {
    const m = {};
    list.forEach((x) => { m[x[key || 'id']] = x; });
    return m;
  }

  window.UI = { esc, thaiDateTime, eventLabel, toast, downloadCSV, byId };
  document.addEventListener('DOMContentLoaded', renderChrome);
})();
