// 한국어 · English · 日本語
// 화면의 한국어 글자를 아래 표에서 찾아 바꿔 끼운다 (나중에 스크립트가 그리는 내용도 자동으로).
// 표에 없는 글자는 한국어 그대로 보인다. 시트 내용 번역은 시트의 "번역" 탭에 한 줄씩 추가.
// '한국어': ['English', '日本語']
const I18N = {
  // 메뉴 · 탭
  '행사안내': ['Event Info', 'イベント案内'],
  '일정': ['Schedule', '日程'],
  '조 편성': ['Groups', 'グループ'],
  '오는 길': ['Directions', 'アクセス'],
  '영상': ['Videos', '動画'],
  '홈': ['Home', 'ホーム'],
  '언어': ['Language', '言語'],
  'tab.info': ['Info', '案内'], // 아래 탭은 칸이 좁아 짧게
  '메뉴 열기': ['Open menu', 'メニューを開く'],
  '메뉴 닫기': ['Close menu', 'メニューを閉じる'],
  '뒤로 가기': ['Go back', '戻る'],
  '뒤로': ['Back', '戻る'],
  '모바일 내비게이션': ['Mobile navigation', 'モバイルナビゲーション'],
  '식사': ['Meals', '食事'],
  '층별': ['Floors', 'フロア'],
  '문의': ['Contact', 'お問い合わせ'],
  '↑ 맨 위로': ['↑ Back to top', '↑ ページトップへ'],

  // 첫 화면
  '2026년 11월 20일(금) — 22일(일)': ['Fri, Nov 20 — Sun, Nov 22, 2026', '2026年11月20日(金) — 22日(日)'],
  '11월 20일(금) — 22일(일)': ['Nov 20 (Fri) — 22 (Sun)', '11月20日(金) — 22日(日)'],
  'B-con Plaza · 벳부, 오이타, 일본': ['B-con Plaza · Beppu, Oita, Japan', 'B-con Plaza · 日本 大分県別府市'],
  '벳부, 오이타, 일본': ['Beppu, Oita, Japan', '日本 大分県別府市'],
  '이벤트까지 남은 시간': ['Time until the event', '開催までの残り時間'],
  'D-Day까지': ['Until D-Day', '開催まで'],
  'cd.d': ['days', '日'],
  'cd.h': ['hrs', '時間'],
  'cd.m': ['min', '分'],
  '일정 보기': ['View schedule', '日程を見る'],
  '오늘 일정 보기': ["Today's schedule", '今日の日程'],
  '빠른 이동': ['Quick links', 'クイックリンク'],
  '스케줄': ['Schedule', 'スケジュール'],
  '3일 전체 일정': ['Full 3-day schedule', '3日間の全日程'],
  '공지': ['Notices', 'お知らせ'],
  '공지사항': ['Announcements', 'お知らせ一覧'],
  '식사안내': ['Meals', '食事案内'],
  '3식 제공': ['3 meals provided', '3食提供'],
  '각층별안내': ['Floor guide', 'フロア案内'],
  '한국 교회': ['Korean churches', '韓国の教会'],
  '행사 포스터': ['Event posters', 'イベントポスター'],
  '포스터 1': ['Poster 1', 'ポスター 1'],
  '포스터 2': ['Poster 2', 'ポスター 2'],
  '우표 포스터 1': ['Stamp poster 1', '切手ポスター 1'],
  '우표 포스터 2': ['Stamp poster 2', '切手ポスター 2'],

  // 행사안내 · 공지
  '전체': ['All', 'すべて'],
  '필독': ['Must read', '必読'],
  '안내': ['Info', '案内'],
  '변경': ['Update', '変更'],
  '층별 안내': ['Floor guide', 'フロア案内'],
  '행사 안내': ['Event info', 'イベント案内'],
  '바로가기': ['Shortcuts', 'ショートカット'],
  '좌석안내': ['Seating', '座席案内'],
  '로비안내': ['Lobby', 'ロビー案内'],
  '자주묻는 질문': ['FAQ', 'よくある質問'],
  '자주 묻는 질문': ['FAQ', 'よくある質問'],
  '해당 공지가 없습니다.': ['No notices.', '該当するお知らせはありません。'],
  '운영팀': ['Organizers', '運営チーム'],
  '목록으로': ['Back to list', '一覧へ'],
  '자세히 보기': ['Details', '詳しく見る'],
  '로비 안내 보기': ['View lobby info', 'ロビー案内を見る'],
  '식사 안내 보기': ['View meal info', '食事案内を見る'],
  '조 편성 보기': ['View groups', 'グループを見る'],
  '현장 등록은 불가합니다': ['No on-site registration', '当日登録はできません'],
  '사전에 등록을 완료하신 분만 입장 가능합니다. 등록 데스크에서 사전 등록 확인증을 보여주세요.': ['Only pre-registered attendees may enter. Please show your pre-registration confirmation at the registration desk.', '事前登録を済ませた方のみ入場できます。受付デスクで事前登録確認証をご提示ください。'],
  'Day 1(금) 저녁 식사는 제공되지 않습니다': ['No dinner on Day 1 (Fri)', 'Day 1(金)の夕食は提供されません'],
  '식사는 총 3끼 제공됩니다. 세부 메뉴와 장소는 추후 공지됩니다.': ['3 meals are provided in total. Menus and locations will be announced later.', '食事は全3食提供されます。メニューと場所は後日お知らせします。'],
  '조 편성은 확정되는 대로 공지됩니다': ['Groups will be announced once confirmed', 'グループは確定次第お知らせします'],
  '조 편성이 확정되면 이 공지와 조 편성 페이지에 업데이트됩니다.': ['Once groups are confirmed, this notice and the Groups page will be updated.', 'グループが確定次第、このお知らせとグループのページで更新します。'],
  '시간': ['Time', '時間'],
  '장소': ['Place', '場所'],
  '준비물': ['What to bring', '持ち物'],
  '제공': ['Provided', '提供'],
  '미제공': ['None', 'なし'],
  'Day 1(금) 17:00 ~': ['Day 1 (Fri) 17:00 ~', 'Day 1(金) 17:00〜'],

  // 층별 · 안내 칸
  '메인홀': ['Main Hall', 'メインホール'],
  '등록 데스크': ['Registration desk', '受付デスク'],
  '로비 부스': ['Lobby booths', 'ロビーブース'],
  '부스': ['Booths', 'ブース'],
  '로비': ['Lobby', 'ロビー'],
  '화장실': ['Restrooms', 'トイレ'],
  '이동동선': ['Getting around', '移動ルート'],
  '이동': ['Getting around', '移動'],
  '좌석': ['Seats', '座席'],
  '주차': ['Parking', '駐車場'],
  '주차장': ['Parking', '駐車場'],
  '정문': ['Main entrance', '正面入口'],
  '정문 로비 우측': ['Right of the main lobby', '正面ロビー右側'],
  '메인홀 입구 좌측': ['Left of the Main Hall entrance', 'メインホール入口左側'],
  '메인홀 1층 지정석 (조별 배정)': ['Main Hall 1F, assigned seats (by group)', 'メインホール1階 指定席(グループ別)'],
  '굿즈 · 의료 부스 (위치 추후 공지)': ['Merch & medical booths (location TBA)', 'グッズ・救護ブース(場所は後日お知らせ)'],
  '메인홀 2층 자유석': ['Main Hall 2F, open seating', 'メインホール2階 自由席'],
  '식사 공간': ['Dining area', '食事スペース'],
  '계단 옆 복도': ['Hallway next to the stairs', '階段横の廊下'],
  '1층 계단 또는 엘리베이터': ['Stairs from 1F or elevator', '1階の階段またはエレベーター'],
  '1층 계단 또는 엘리베이터 이용': ['Use the stairs from 1F or the elevator', '1階の階段またはエレベーターをご利用ください'],
  '추후 공지': ['To be announced', '後日お知らせ'],
  '세부 안내는 추후 업데이트됩니다.': ['Details will be updated later.', '詳細は後日更新します。'],
  'B-con Plaza 지하 주차장': ['B-con Plaza underground parking', 'B-con Plaza 地下駐車場'],
  '엘리베이터로 각 층 이동': ['Elevator to every floor', 'エレベーターで各階へ'],
  '엘리베이터로 각 층 이동 가능': ['Elevator access to every floor', 'エレベーターで各階へ移動できます'],
  '안내도 준비 중': ['Floor map coming soon', '案内図準備中'],
  '오늘 식사': ["Today's meals", '今日の食事'],
  '제공되지 않습니다': ['Not provided', '提供されません'],
  '내 조 · 모임 장소 확인': ['Find your group & meeting spot', '自分のグループ・集合場所を確認'],
  '1층 지정석': ['1F assigned', '1階 指定席'],
  '2층 자유석': ['2F open seating', '2階 自由席'],
  'Day 1 17:00부터 1층 정문 로비': ['From 17:00 on Day 1, 1F main lobby', 'Day 1 17:00から 1階正面ロビー'],
  '벳부역에서 약 10분': ['About 10 min from Beppu Station', '別府駅から約10分'],
  '분실물': ['Lost & found', '落とし物'],
  '의료부스': ['Medical booth', '救護ブース'],
  '의료 부스': ['Medical booth', '救護ブース'],
  '아침': ['Breakfast', '朝食'],
  '점심': ['Lunch', '昼食'],
  '저녁': ['Dinner', '夕食'],

  // 일정
  '접수': ['Check-in', '受付'],
  '1층 정문 로비 등록 데스크': ['Registration desk, 1F main lobby', '1階正面ロビー 受付デスク'],
  '저녁집회': ['Evening session', '夜の集会'],
  '오전집회': ['Morning session', '午前の集会'],
  '오후집회': ['Afternoon session', '午後の集会'],
  '클로징': ['Closing', 'クロージング'],
  '집회 후': ['After session', '集会後'],
  '정리 및 숙소 이동': ['Wrap-up & move to lodging', '片付け・宿舎へ移動'],
  '점심 식사': ['Lunch', '昼食'],
  '저녁 식사': ['Dinner', '夕食'],
  'Day 1 저녁식사는 제공되지 않습니다.': ['Dinner is not provided on Day 1.', 'Day 1 の夕食は提供されません。'],
  '특별 순서는 세부 내용 추후 안내 예정입니다.': ['Details of the special program will be announced later.', '特別プログラムの詳細は後日ご案内します。'],
  '위 일정은 현장 상황에 따라 일부 변경될 수 있습니다.': ['The schedule may change depending on conditions on site.', '日程は現場の状況により一部変更される場合があります。'],
  '세부 메뉴 및 식사 장소는 추후 공지됩니다.': ['Menus and meal locations will be announced later.', 'メニューと食事場所は後日お知らせします。'],

  // 영상
  '티저 영상 3편': ['3 teaser videos', 'ティーザー映像 3本'],
  '공개 예정': ['Coming soon', '公開予定'],

  // 조 편성
  '조장': ['Leader', 'リーダー'],
  '조 편성이 확정되면 이 페이지에 업데이트됩니다.': ['This page will be updated once groups are confirmed.', 'グループが確定次第、このページで更新します。'],
  '이름으로 내 조 찾기': ['Find my group by name', '名前で自分のグループを検索'],
  '찾는 이름이 없습니다.': ['No matching name.', '該当する名前がありません。'],
  '전체 조': ['All groups', '全グループ'],
  '전체 교회': ['All churches', '全教会'],
  '조별': ['By group', 'グループ別'],
  '교회별': ['By church', '教会別'],
  '교회 목록': ['Church list', '教会一覧'],
  '기타': ['Other', 'その他'],
  '영어조': ['English', '英語班'],
  '일본어조': ['Japanese', '日本語班'],
  '프뉴마조': ['Pneuma', 'プニューマ班'],

  // 오는 길
  'B-con Plaza 지도': ['Map of B-con Plaza', 'B-con Plaza 地図'],
  '벳부역 → B-con Plaza': ['Beppu Station → B-con Plaza', '別府駅 → B-con Plaza'],
  '서쪽 출구에서 택시 · 노선버스': ['Taxi or bus from the West Exit', '西口からタクシー・路線バス'],
  '10분': ['10 min', '10分'],
  '약 10분': ['About 10 min', '約10分'],
  '지하 1층 주차장': ['Underground parking (B1)', '地下1階 駐車場'],
  '1층 정문 로비': ['1F main lobby', '1階正面ロビー'],
  'Google 지도': ['Google Maps', 'Google マップ'],
  '주소 복사': ['Copy address', '住所をコピー'],
  '복사됨': ['Copied', 'コピーしました'],
  '주소를 길게 눌러 복사하세요': ['Press and hold to copy the address', '住所を長押ししてコピーしてください'],
  '택시 또는 노선버스 이용. 벳부역 서쪽 출구에서 승차.': ['Take a taxi or bus from the West Exit of Beppu Station.', 'タクシーまたは路線バスをご利用ください。別府駅西口から乗車。'],
  'B-con Plaza 내 주차장 이용 가능.': ['Parking is available at B-con Plaza.', 'B-con Plaza の駐車場をご利用いただけます。'],
  'Day 1 오후 5시부터 정문 로비에서 운영. 사전 등록 확인 후 입장.': ['Open from 5 PM on Day 1 in the main lobby. Entry after checking your pre-registration.', 'Day 1 の17時から正面ロビーで受付。事前登録の確認後に入場。'],

  // 좌석 · 로비
  '1층': ['1F', '1階'],
  '2층': ['2F', '2階'],
  '지정 좌석 (조별 배정)': ['Assigned seats (by group)', '指定席(グループ別)'],
  '자유석': ['Open seating', '自由席'],
  '조 배정': ['Group seats', 'グループ割り当て'],
  '유의사항': ['Please note', 'ご注意'],
  '등록': ['Registration', '受付'],
  '등록 완료 후 입장': ['Enter after registering', '受付完了後に入場'],
  '세션 중 이동 자제': ['Please stay seated during sessions', 'セッション中の移動はお控えください'],
  '지정석': ['Assigned seats', '指定席'],
  '배정 좌석 이외 착석 금지': ['Sit only in your assigned seat', '指定された座席にお座りください'],
  '운영시간': ['Hours', '受付時間'],
  '위치': ['Location', '場所'],
  '사전 등록 확인증': ['Pre-registration confirmation', '事前登録確認証'],
  '현장 등록': ['On-site registration', '当日登録'],
  '불가 (사전 등록자만 입장)': ['Not available (pre-registered only)', '不可(事前登録者のみ入場)'],
  '굿즈 부스': ['Merch booth', 'グッズブース'],
  '1층 로비 내 위치 (세부 추후 공지)': ['In the 1F lobby (details TBA)', '1階ロビー内(詳細は後日お知らせ)'],
  '위치 추후 공지': ['Location TBA', '場所は後日お知らせ'],
  '등록 데스크로 문의': ['Ask at the registration desk', '受付デスクへお問い合わせください'],
  '화장실 · 이동동선 세부 안내는 현장 안내판을 참고해주세요.': ['For restrooms and routes, please follow the signs on site.', 'トイレ・移動ルートの詳細は現場の案内板をご覧ください。'],

  // FAQ
  'faq.h': ['Frequently asked questions', 'よくある質問'],
  '각 층 화장실은 어디에 있나요?': ['Where are the restrooms on each floor?', '各階のトイレはどこですか?'],
  '1층 화장실은 정문 로비 우측 및 메인홀 입구 좌측에 위치해 있습니다. 2층은 계단 옆 복도에 있습니다. 현장 안내판을 참고해 주세요.': ['On 1F, restrooms are to the right of the main lobby and to the left of the Main Hall entrance. On 2F, they are in the hallway next to the stairs. Please follow the signs on site.', '1階のトイレは正面ロビー右側とメインホール入口左側にあります。2階は階段横の廊下にあります。現場の案内板をご覧ください。'],
  '로비에서 굿즈 등을 구입할 수 있나요?': ['Can I buy merch in the lobby?', 'ロビーでグッズなどを購入できますか?'],
  '네, 1층 로비에 굿즈 부스가 운영될 예정입니다. 세부 운영시간 및 품목은 추후 공지될 예정입니다.': ['Yes, there will be a merch booth in the 1F lobby. Hours and items will be announced later.', 'はい、1階ロビーにグッズブースを設ける予定です。営業時間と品目は後日お知らせします。'],
  '현장 등록이 가능한가요?': ['Can I register on site?', '当日登録はできますか?'],
  '현장 등록은 불가합니다. 사전에 등록을 완료하신 분만 입장 가능합니다. 등록 확인증을 지참해 주세요.': ['No. Only pre-registered attendees may enter. Please bring your registration confirmation.', '当日登録はできません。事前登録を済ませた方のみ入場できます。登録確認証をお持ちください。'],
  '분실물을 발견했거나 물건을 잃어버렸을 때 어떻게 해야하나요?': ['What should I do if I find or lose something?', '落とし物を見つけた、または物をなくした場合はどうすればいいですか?'],
  '분실물은 1층 등록 데스크로 문의해 주세요. 발견하신 물건도 동일하게 등록 데스크에 맡겨주시면 감사하겠습니다.': ['Please ask at the registration desk on 1F. If you find something, please bring it to the registration desk as well.', '落とし物は1階の受付デスクへお問い合わせください。見つけた物も受付デスクへお届けください。'],
  '의료부스는 어디에 위치해 있나요?': ['Where is the medical booth?', '救護ブースはどこにありますか?'],
  '의료부스 위치는 추후 공지됩니다. 긴급 상황 시 근처 스텝에게 도움을 요청해 주세요.': ['The location will be announced later. In an emergency, please ask any nearby staff member for help.', '救護ブースの場所は後日お知らせします。緊急時は近くのスタッフにお声がけください。'],

  // 문의 · 아래
  '컨퍼런스 관련 문의는': ['For questions about the conference,', '大会に関するお問い合わせは'],
  '아래로 연락주세요.': ['please contact us below.', '下記までご連絡ください。'],
  '2026년 11월 20-22일': ['November 20–22, 2026', '2026年11月20〜22日'],
  '벳부, 일본': ['Beppu, Japan', '日本 別府'],
};

// 숫자 · 날짜가 들어간 문장, 여러 조각을 이은 문장
const L = { ko: -1, en: 0, ja: 1 };
const DAYS = { 일: ['Sun', '日'], 월: ['Mon', '月'], 화: ['Tue', '火'], 수: ['Wed', '水'], 목: ['Thu', '木'], 금: ['Fri', '金'], 토: ['Sat', '土'] };
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const RULES = [
  [/^새 공지 (\d+)건$/, (m, i) => [`${m[1]} new`, `新着 ${m[1]}件`][i]],
  [/^총 (\d+)끼 제공$/, (m, i) => [`${m[1]} meals in total`, `全${m[1]}食提供`][i]],
  [/^총 (\d+)끼$/, (m, i) => [`${m[1]} meals`, `全${m[1]}食`][i]],
  [/^(\d+)끼 제공$/, (m, i) => [`${m[1]} meals`, `${m[1]}食提供`][i]],
  [/^([\d,]+)명$/, (m, i) => [`${m[1]} people`, `${m[1]}名`][i]],
  [/^(\d+)월 (\d+)일 \((.)\)$/, (m, i) => [`${MONTHS[m[1] - 1]} ${m[2]} (${DAYS[m[3]][0]})`, `${m[1]}月${m[2]}日(${DAYS[m[3]][1]})`][i]],
  [/^(기혼)?(\d+)조$/, (m, i) => [`${m[1] ? 'Married' : 'Group'} ${m[2]}`, `${m[1] ? '既婚' : ''}${m[2]}班`][i]],
  [/^THE B 티저 (\d+)$/, (m, i) => [`THE B Teaser ${m[1]}`, `THE B ティーザー ${m[1]}`][i]],
  [/^(.+) 재생$/, (m, i) => [`Play ${T(m[1])}`, `${T(m[1])}を再生`][i]],
  [/^(\S+) 안내도$/, (m, i) => [`${m[1]} floor map`, `${m[1]} 案内図`][i]],
  [/^([※*] )(.+)$/, m => m[1] + T(m[2])],
  [/^(.+) →$/, m => T(m[1]) + ' →'],
  [/^(.+) \((.+)\)$/, m => `${T(m[1])} (${T(m[2])})`],
  ...[' — ', ', ', ' · ', ' / ', ' → ', ': '].map(sep => [{ test: s => s.includes(sep) }, (m, i, s) => s.split(sep).map(T).join(sep)]),
  [/^(일|월|화|수|목|금|토) (.+)$/, (m, i) => `${DAYS[m[1]][i]} ${T(m[2])}`],
  [/^(.+) 제공$/, (m, i) => [`${T(m[1])} provided`, `${T(m[1])}提供`][i]],
];

let LANG = 'ko';
const HANGUL = /[가-힣]/;
function T(s) {
  const i = L[LANG];
  if (i < 0 || !HANGUL.test(s)) return s;
  if (I18N[s]) return I18N[s][i] || s;
  for (const [re, f] of RULES) {
    const m = re.exec ? re.exec(s) : re.test(s) && [s];
    if (m) return f(m, i, s);
  }
  return s;
}

// ── 화면에 적용 ──
// 원래 한국어는 노드에 기억해 두고, 언어를 바꿀 때마다 거기서 다시 번역
const ATTRS = ['aria-label', 'placeholder', 'alt', 'title'];
function trText(n) {
  const p = n.parentNode;
  if (!p || /^(SCRIPT|STYLE)$/.test(p.nodeName) || (p.hasAttribute && p.hasAttribute('data-notr'))) return; // 스크립트 코드 · 사람 이름은 건드리지 않음
  if (n.__ko == null) n.__ko = n.data;
  const src = n.__ko, key = src.trim().replace(/\s+/g, ' ');
  if (!key) return;
  const tk = n.parentNode && n.parentNode.dataset && n.parentNode.dataset.tk; // 같은 글자가 다른 뜻일 때 (예: 시간)
  const out = LANG === 'ko' ? key : tk ? (I18N[tk] || [])[L[LANG]] || key : T(key);
  const v = out === key ? src : src.match(/^\s*/)[0] + out + src.match(/\s*$/)[0];
  if (n.data !== v) n.data = v;
}
function trAttrs(el) {
  el.__ka = el.__ka || {};
  for (const a of ATTRS) {
    if (!el.hasAttribute(a)) continue;
    if (el.__ka[a] == null) el.__ka[a] = el.getAttribute(a);
    const v = T(el.__ka[a]);
    if (el.getAttribute(a) !== v) el.setAttribute(a, v);
  }
}
function trTree(root) {
  if (root.nodeType === 3) return trText(root);
  if (root.nodeType !== 1 || /^(SCRIPT|STYLE)$/.test(root.tagName)) return;
  trAttrs(root);
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
    acceptNode: n => n.nodeType === 1 && /^(SCRIPT|STYLE)$/.test(n.tagName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
  });
  for (let n; (n = w.nextNode());) n.nodeType === 3 ? trText(n) : trAttrs(n);
}
// 스크립트가 글자를 새로 그리면 그 부분만 번역 (번역하며 생긴 변경은 버림)
const trObs = new MutationObserver(recs => {
  for (const r of recs) {
    if (r.type === 'childList') r.addedNodes.forEach(trTree);
    else if (r.type === 'characterData') { r.target.__ko = null; trText(r.target); }
    else { (r.target.__ka || {})[r.attributeName] = null; trAttrs(r.target); }
  }
  trObs.takeRecords();
});

function setLang(l) {
  LANG = L[l] != null ? l : 'ko';
  try { localStorage.setItem('pl-lang', LANG); } catch {}
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === LANG));
  trTree(document.body);
  trObs.takeRecords();
}
// 시트 "번역" 탭: [[한국어, English, 日本語], ...]
function addI18n(rows) {
  for (const [ko, en, ja] of rows) if (ko) { const o = I18N[ko] || []; I18N[ko] = [en || o[0] || '', ja || o[1] || '']; } // 빈 칸은 기존 번역 유지
  setLang(LANG);
}

// 처음 언어: 주소의 ?lang= → 지난번 고른 언어 → 휴대폰 언어 (한국어·일본어가 아니면 영어)
(() => {
  let l = new URLSearchParams(location.search).get('lang');
  try { l = l || localStorage.getItem('pl-lang'); } catch {}
  if (!l) { const n = (navigator.languages || [navigator.language || ''])[0].toLowerCase(); l = n.startsWith('ko') ? 'ko' : n.startsWith('ja') ? 'ja' : 'en'; }
  setLang(l);
  trObs.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  document.addEventListener('click', e => { const b = e.target.closest('[data-lang]'); if (b) setLang(b.dataset.lang); });
})();
