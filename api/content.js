// 구글 시트 → 사이트 데이터 (공지 · 일정 · 층별 · 식사 · 영상 · 조편성 · 번역)
// Vercel이 60초 동안 결과를 저장해 두고 모두에게 나눠 주므로, 접속자가 1500명이어도
// 구글 시트에는 1분에 한 번 정도만 요청이 간다. 시트를 못 읽으면 사이트는 기본 내용을 그대로 보여준다.
//
// 시트 주소는 여기(서버)에만 둔다. index.html에는 넣지 않는다 (편집 링크가 퍼지지 않게).
const SHEET_ID = process.env.SHEET_ID || '';
// 탭별 gid: 시트에서 탭을 누르면 주소 끝에 붙는 #gid=숫자
const GID = {
  공지: process.env.GID_NOTICE || '',
  일정: process.env.GID_SCHEDULE || '',
  층별: process.env.GID_FLOORS || '',
  식사: process.env.GID_MEALS || '',
  영상: process.env.GID_VIDEOS || '',
  // 선택 탭: 없으면(값이 비어 있으면) 건너뜀
  조편성: process.env.GID_GROUPS || '',
  조모임: process.env.GID_GROUP_PLACES || '',
  번역: process.env.GID_I18N || '',
};
const OPTIONAL = ['조편성', '조모임', '번역'];

// ── CSV ──
function parseCSV(text) {
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; }
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); rows.push(row); row = []; cell = '';
    } else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows;
}
// 첫 줄 = 제목 줄. 빈 줄은 건너뜀
function toObjects(rows) {
  const [head = [], ...body] = rows;
  return body.filter(r => r.some(c => c.trim()))
    .map(r => Object.fromEntries(head.map((h, i) => [h.trim(), (r[i] || '').trim()])));
}

// ── 값 정리 (스텝이 어떤 형식으로 써도 받아주기) ──
// 시트 내용은 누구나 고칠 수 있으므로 화면에 넣기 전에 모든 글자를 이스케이프한다
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const yes = s => /^(o|ㅇ|y|yes|true|1|v|✓|✔|제공|필독)$/i.test(s.trim());
function date(s) { // 2026-11-20 / 2026. 11. 20 / 2026/11/20 / 11/20/2026
  let m = s.match(/(\d{4})\D+(\d{1,2})\D+(\d{1,2})/);
  if (m) return `${m[1]}-${m[2].padStart(2, '0')}-${m[3].padStart(2, '0')}`;
  m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  return m ? `${m[3]}-${m[1].padStart(2, '0')}-${m[2].padStart(2, '0')}` : '';
}
function time(s) { // 17:00 / 17:00:00 / 오후 5:00:00 / 5:00 PM → "17:00". 시간이 아니면 ''
  const m = s.match(/(\d{1,2}):(\d{2})/);
  if (!m) return '';
  let h = +m[1];
  if (/오후|pm/i.test(s) && h < 12) h += 12;
  if (/오전|am/i.test(s) && h === 12) h = 0;
  return `${String(h).padStart(2, '0')}:${m[2]}`;
}
const hash = s => { let h = 5381; for (const c of s) h = (h * 33 + c.codePointAt(0)) >>> 0; return h.toString(36); };
const DOW = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'], DOW_KO = '일월화수목금토';
const LINKS = { 좌석: '#seating', 로비: '#lobby', 식사: '#meals', 층별: '#quicknav', '오는 길': '#venue', 오는길: '#venue', faq: '#faq', 문의: '#contact', '조 편성': '#groups', 조편성: '#groups', 일정: '#schedule' };

// ── 탭별 → 사이트 데이터 ──
const build = {
  공지: rows => rows.filter(r => r['제목']).map(r => ({
    id: hash(r['날짜'] + r['제목']),
    pin: yes(r['필독'] || ''),
    cat: esc(r['분류'] || '안내'),
    date: esc(r['날짜'] || ''),
    title: esc(r['제목']),
    body: esc(r['내용'] || '').replace(/\n/g, '<br>'),
    facts: (r['표'] || '').split('\n').map(l => l.split(/[:：]/)).filter(p => p.length > 1 && p[0].trim())
      .map(([k, ...v]) => [esc(k.trim()), esc(v.join(':').trim())]),
    link: LINKS[(r['버튼 이동'] || '').trim().toLowerCase()] ? [LINKS[(r['버튼 이동'] || '').trim().toLowerCase()], esc(r['버튼 이름'] || '자세히 보기')] : null,
  })).map(n => (n.facts.length || delete n.facts, n.link || delete n.link, n)),

  일정: rows => {
    const days = new Map();
    for (const r of rows) {
      const d = date(r['날짜'] || ''); if (!d) continue;
      if (!days.has(d)) {
        const w = new Date(d + 'T00:00:00Z').getUTCDay(), [, m, dd] = d.split('-');
        days.set(d, { date: d, dow: DOW[w], label: `${+m}월 ${+dd}일 (${DOW_KO[w]})`, items: [] });
      }
      const day = days.get(d);
      if (!r['순서']) { if (r['메모']) day.note = esc(r['메모']); continue; } // 순서 없이 메모만 = 그날 안내
      const s = time(r['시작'] || ''), e = time(r['끝'] || '');
      const item = { t: esc(s || r['시작'] || ''), name: esc(r['순서']) };
      if (s && e) item.at = [s, e];
      if (r['설명']) item.sub = esc(r['설명']);
      if (r['메모']) item.note = esc(r['메모']);
      day.items.push(item);
    }
    return [...days.values()].filter(d => d.items.length).sort((a, b) => a.date.localeCompare(b.date));
  },

  층별: rows => {
    const floors = new Map();
    for (const r of rows) {
      const f = r['층']; if (!f) continue;
      if (!floors.has(f)) floors.set(f, { f: esc(f), name: esc(r['공간 이름'] || ''), map: esc(imageUrl(r['안내도 이미지'] || '')), rows: [] });
      if (r['항목']) floors.get(f).rows.push([esc(r['항목']), esc(r['내용'] || '')]);
    }
    return [...floors.values()];
  },

  식사: rows => Object.fromEntries(rows.map(r => [date(r['날짜'] || ''), ['아침', '점심', '저녁'].filter(k => yes(r[k] || ''))]).filter(([d]) => d)),

  // 조편성: 한 줄 = 한 사람. 조장은 역할 칸에 "조장" (원본 명단처럼 "조장여부" 칸에 V여도 됨)
  // 이 탭에는 조 · 이름 · 소속만 둘 것 — 시트는 링크로 공개되므로 전화번호 등은 넣지 않는다
  조편성: rows => {
    const groups = new Map();
    for (const r of rows) {
      const g = r['조'], n = r['이름']; if (!g || !n || g === '미편') continue;
      if (!groups.has(g)) groups.set(g, { name: esc(g), places: [], members: [] });
      const role = r['역할'] || (/^v$/i.test(r['조장여부'] || '') ? '조장' : '');
      groups.get(g).members.push({ name: esc(n), org: esc(r['소속'] || r['소속교회'] || ''), role: esc(role) });
    }
    // 01조 … 59조, 기혼01조 …, 영어조 순 (숫자는 크기대로)
    return [...groups.values()].sort((a, b) => a.name.localeCompare(b.name, 'ko', { numeric: true }));
  },
  // 조모임: 한 줄 = 조의 모임 하나 (언제 · 장소). 같은 조가 여러 줄이면 모두 표시
  조모임: rows => rows.filter(r => r['조'] && r['장소']).map(r => ({ group: esc(r['조']), when: esc(r['언제'] || ''), place: esc(r['장소']) })),

  // 번역: 한 줄 = 화면에 보이는 한국어 한 덩어리 + 영어 + 일본어.
  // 화면에 글자(텍스트)로만 넣으므로 이스케이프하지 않음 — 화면의 한국어와 글자가 똑같아야 찾을 수 있다
  번역: rows => rows.filter(r => r['한국어'] && (r['English'] || r['日本語']))
    .map(r => [r['한국어'].replace(/\s+/g, ' '), r['English'] || '', r['日本語'] || '']),

  영상: rows => rows.filter(r => r['제목']).map(r => ({
    title: esc(r['제목']), len: esc(r['길이'] || ''),
    yt: /^https:\/\/(www\.)?(youtube\.com|youtu\.be)\//.test(r['유튜브 링크'] || '') ? r['유튜브 링크'] : '',
  })),
};
const KEY = { 공지: 'notices', 일정: 'schedule', 층별: 'floors', 식사: 'meals', 영상: 'videos', 조편성: 'groups', 조모임: 'groupPlaces', 번역: 'i18n' };

// 안내도 이미지: 구글 드라이브 공유 링크도 그대로 붙여넣으면 이미지로 보이게 바꿈
// (드라이브 파일은 "링크가 있는 모든 사용자 - 뷰어"로 공유돼 있어야 함)
function imageUrl(s) {
  const m = s.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=\w+&)?id=)([\w-]{20,})/);
  if (m) return `https://drive.google.com/thumbnail?id=${m[1]}&sz=w2000`;
  return /^https:\/\//.test(s) ? s : '';
}

async function readSheet(fetchCSV, tabs = Object.keys(GID)) {
  const out = {};
  await Promise.all(tabs.map(async tab => {
    const rows = toObjects(parseCSV(await fetchCSV(tab)));
    out[KEY[tab]] = build[tab](rows);
  }));
  // 조모임 장소를 각 조에 붙임
  if (out.groups) {
    for (const p of out.groupPlaces || []) {
      const g = out.groups.find(x => x.name === p.group);
      if (g) g.places.push([p.when, p.place]);
    }
  }
  delete out.groupPlaces;
  return out;
}

module.exports = async (req, res) => {
  if (!SHEET_ID || Object.entries(GID).some(([t, g]) => g === '' && !OPTIONAL.includes(t))) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(503).json({ error: 'sheet not configured' });
  }
  try {
    const data = await readSheet(async tab => {
      const r = await fetch(`https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID[tab]}`, { redirect: 'follow' });
      const text = await r.text();
      if (!r.ok || text.trimStart().startsWith('<')) throw new Error(`${tab} 탭을 읽지 못함 (${r.status})`); // 권한 없으면 로그인 페이지(HTML)가 옴
      return text;
    }, Object.keys(GID).filter(t => GID[t]));
    // 60초 동안 저장해 두고 나눠줌, 시트가 잠깐 안 돼도 하루 동안은 마지막 내용 유지
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=86400');
    res.status(200).json(data);
  } catch (e) {
    res.setHeader('Cache-Control', 'no-store');
    res.status(502).json({ error: String(e.message || e) });
  }
};
module.exports.readSheet = readSheet; // scripts/check-content.js 에서 사용
