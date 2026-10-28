// 시트 → 사이트 데이터 변환 확인:  node scripts/check-content.js
const assert = require('assert');
const { readSheet } = require('../api/content.js');

const CSV = {
  공지: '필독,분류,날짜,제목,내용,표,버튼 이동,버튼 이름\n' +
    'O,안내,10.28,현장 등록은 불가합니다,"사전 등록자만<br>입장","시간: Day 1 17:00 ~\n장소: 1층 로비",로비,로비 안내 보기\n' +
    ',변경,10.29,<script>alert(1)</script>,내용,,없는화면,\n',
  일정: '날짜,시작,끝,순서,설명,메모\n' +
    '2026. 11. 20,,,,,Day 1 저녁식사는 제공되지 않습니다.\n' +
    '2026. 11. 20,오후 5:00:00,오후 6:00:00,접수,1층 로비,\n' +
    '2026-11-20,18:00,21:00,Worship Session 1,저녁집회,\n' +
    '2026-11-20,집회 후,,정리 및 숙소 이동,,\n' +
    '2026-11-21,09:00:00,12:00:00,Worship Session 2,오전집회,\n',
  층별: '층,공간 이름,항목,내용,안내도 이미지\n1F,메인홀,화장실,로비 우측,javascript:alert(1)\n1F,메인홀,이동동선,정문 → 메인홀,\nB1,주차장,주차,지하,https://example.com/b1.jpg\n',
  식사: '날짜,아침,점심,저녁\n2026-11-20,,,\n2026. 11. 21,,O,o\n',
  영상: '제목,길이,유튜브 링크\n티저 1,0:32,https://youtu.be/b-EbK3l8xeU\n티저 2,0:46,\n이상한 링크,1:00,javascript:alert(1)\n',
};

readSheet(async tab => CSV[tab]).then(d => {
  // 공지
  assert.equal(d.notices.length, 2);
  assert.equal(d.notices[0].pin, true);
  assert.equal(d.notices[0].body, '사전 등록자만&lt;br&gt;입장');              // 태그는 글자로만
  assert.deepEqual(d.notices[0].facts, [['시간', 'Day 1 17:00 ~'], ['장소', '1층 로비']]); // "17:00" 안의 : 유지
  assert.deepEqual(d.notices[0].link, ['#lobby', '로비 안내 보기']);
  assert.equal(d.notices[1].title, '&lt;script&gt;alert(1)&lt;/script&gt;');   // 스크립트 차단
  assert.equal(d.notices[1].link, undefined);                                    // 모르는 화면 이름은 버튼 없음
  assert.notEqual(d.notices[0].id, d.notices[1].id);
  // 일정
  const [d1, d2] = d.schedule;
  assert.equal(d1.date, '2026-11-20'); assert.equal(d1.dow, 'FRI'); assert.equal(d1.label, '11월 20일 (금)');
  assert.equal(d1.note, 'Day 1 저녁식사는 제공되지 않습니다.');
  assert.deepEqual(d1.items[0], { t: '17:00', name: '접수', at: ['17:00', '18:00'], sub: '1층 로비' }); // 오후 5:00:00 → 17:00
  assert.deepEqual(d1.items[2], { t: '집회 후', name: '정리 및 숙소 이동' });
  assert.deepEqual(d2.items[0].at, ['09:00', '12:00']);
  // 층별
  assert.equal(d.floors.length, 2);
  assert.equal(d.floors[0].map, '');                                             // javascript: 주소 차단
  assert.equal(d.floors[0].rows.length, 2);
  assert.equal(d.floors[1].map, 'https://example.com/b1.jpg');
  // 식사
  assert.deepEqual(d.meals, { '2026-11-20': [], '2026-11-21': ['점심', '저녁'] });
  // 영상
  assert.equal(d.videos[0].yt, 'https://youtu.be/b-EbK3l8xeU');
  assert.equal(d.videos[1].yt, '');
  assert.equal(d.videos[2].yt, '');                                              // 유튜브가 아닌 링크 차단
  console.log('ok: 시트 변환 확인 통과');
}).catch(e => { console.error(e); process.exit(1); });
