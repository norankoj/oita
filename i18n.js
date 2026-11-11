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

  // 초청의 글
  '초청의 글': ['Invitation', 'ご招待'],
  '확인': ['Close', '閉じる'],
  'The-B 그룹과 함께 여러분을 초대합니다': ['An invitation from The-B Group', 'The-Bグループからのご招待'],
  '하나님께서 일본을 향해 품으신 마음을 함께 바라보며, The-B 그룹과 함께 여러분을 이번 컨퍼런스에 초대합니다.': ['Looking together at the heart God holds for Japan, we invite you to this conference together with The-B Group.', '神様が日本に向けて抱いておられる御心を共に見つめながら、The-Bグループと共に皆さんをこのカンファレンスにご招待します。'],
  '이번 만남을 통해 한국과 일본의 교회가 그리스도 안에서 형제의 연합을 이루고, 함께 예배하고 기도하며 하나님의 임재를 경험하기를 원합니다.': ['Through this gathering, we long for the churches of Korea and Japan to be united as brothers and sisters in Christ, worshiping and praying together and experiencing the presence of God.', 'この出会いを通して、韓国と日本の教会がキリストにあって兄弟としての一致を成し、共に礼拝し祈りながら神様の臨在を体験することを願っています。'],
  '일본으로부터 아시아 전역에 새로운 부흥의 물결이 일어나고, 여호수아 세대와 같은 다음세대가 일어나 열방을 향한 하나님의 부르심에 함께 응답하기를 기대합니다.': ['We look forward to a new wave of revival rising from Japan across all of Asia, and to a next generation, like the Joshua generation, rising up to answer God\'s call to the nations together.', '日本からアジア全域に新しいリバイバルの波が起こり、ヨシュア世代のような次世代が立ち上がって、諸国に向けた神様の召しに共に応答することを期待しています。'],
  '일본을 향한 하나님의 마음에 여러분도 함께해 주세요. 우리의 기도와 예배 가운데 하나님께서 이루실 일들을 함께 바라보고 기대하며, 이 부흥의 여정에 함께하기를 소망합니다.': ['Please join us in God\'s heart for Japan. Watching and expecting together what God will do through our prayer and worship, we hope you will walk this journey of revival with us.', '日本に向けられた神様の御心に、皆さんもぜひ加わってください。私たちの祈りと礼拝の中で神様が成し遂げてくださることを共に見つめ期待しながら、このリバイバルの旅路を共に歩めることを願っています。'],

  // 집회 주제
  '연합, 가족, 예배': ['Unity, Family, Worship', '一致、家族、礼拝'],
  '일본선교 그리고 유업': ['Mission to Japan and Inheritance', '日本宣教、そして嗣業'],
  '부흥 (REVIVAL)': ['Revival', 'リバイバル (REVIVAL)'],
  '인터내셔널 (INTERNATIONAL)': ['International', 'インターナショナル (INTERNATIONAL)'],
  '선교 (MISSION)': ['Mission', '宣教 (MISSION)'],

  // 좌석 · 로비 · 의료 · 분실물
  'Day 1 (금)': ['Day 1 (Fri)', 'Day 1(金)'],
  'Day 2 · 3 (토 · 주일)': ['Day 2 · 3 (Sat · Sun)', 'Day 2・3(土・日)'],
  '교회별로 앉습니다': ['Seated by church', '教会ごとに着席します'],
  '조별로 앉습니다': ['Seated by group', 'グループごとに着席します'],
  '금 교회별 · 토/주일 조별': ['Fri by church · Sat/Sun by group', '金は教会別・土日はグループ別'],
  '굿즈 부스 · 안내데스크': ['Merch booth · Information desk', 'グッズブース・案内デスク'],
  '안내데스크': ['Information desk', '案内デスク'],
  '1층 로비': ['1F lobby', '1階ロビー'],
  '아래 사진 참고': ['See photos below', '下の写真をご覧ください'],
  '일본인(글로벌 교회) 외에는 어렵습니다': ['Only for Japanese attendees (Global Church)', '日本の方(グローバル教会)のみ可能です'],
  '현장등록은 일본인(글로벌 교회) 외에는 어렵습니다': ['On-site registration is only available for Japanese attendees (Global Church)', '当日登録は日本の方(グローバル教会)のみ可能です'],
  '현장등록은 일본인(글로벌 교회) 외에는 어렵습니다. 사전 등록을 완료하신 분은 등록 데스크에서 확인 후 입장해 주세요.': ['On-site registration is only available for Japanese attendees (Global Church). If you pre-registered, please check in at the registration desk before entering.', '当日登録は日本の方(グローバル教会)のみ可能です。事前登録済みの方は、受付デスクで確認後にご入場ください。'],
  '명찰은 꼭 착용해 주셔야 합니다': ['Please always wear your name tag', '名札は必ず着用してください'],
  '명찰 미착용 시 출입이 제한됩니다.': ['Entry will be restricted without a name tag.', '名札を着用していない場合、入場が制限されます。'],
  '금요일은 교회별, 토요일·주일은 조별로 좌석 및 활동이 이루어집니다': ['Friday by church, Saturday and Sunday by group for seating and activities', '金曜日は教会別、土曜日・日曜日はグループ別に着席・活動します'],
  '금요일은 교회별로, 토요일과 주일은 조별로 앉고 활동합니다.': ['On Friday you sit and take part with your church; on Saturday and Sunday, with your group.', '金曜日は教会ごとに、土曜日と日曜日はグループごとに着席し活動します。'],
  '좌석 안내 보기': ['View seating', '座席案内を見る'],
  '집회 10분 전부터 착석해 주시기 바랍니다': ['Please be seated 10 minutes before each session', '集会の10分前から着席してください'],
  '빈자리 없이 착석해 주시기 바랍니다.': ['Please fill the seats without leaving gaps.', '空席を作らないように詰めてお座りください。'],
  '토요일 저녁 세션(4세션)에 헌금 시간이 있습니다': ['There is an offering during the Saturday evening session (Session 4)', '土曜日の夜のセッション(第4セッション)で献金の時間があります'],
  '미리 준비해 주시기 바랍니다.': ['Please prepare in advance.', '事前にご準備ください。'],
  '헌금 시간이 있습니다. 미리 준비해 주세요.': ['There is an offering. Please prepare in advance.', '献金の時間があります。事前にご準備ください。'],
  '착석': ['Seating', '着席'],
  '집회 10분 전부터, 빈자리 없이': ['10 min before sessions, no empty seats between', '集会10分前から、空席なく'],
  '명찰': ['Name tag', '名札'],
  '꼭 착용 (미착용 시 출입 제한)': ['Required (no entry without it)', '必ず着用(未着用は入場制限)'],

  // 부스 안내
  '부스 안내': ['Booths', 'ブース案内'],
  '1층 로비 부스 전체 배치': ['All booths in the 1F lobby', '1階ロビーのブース全体'],
  '인사이드 부스': ['Inside booth', '屋内ブース'],
  '아웃사이드 부스': ['Outside booth', '屋外ブース'],
  '단체사진을 남기는 포토 부스': ['Take a group photo to keep', 'グループ写真を残せるフォトブース'],
  'QR로 기도문을 남기면 일본 지도에 불빛이 켜지는 미디어아트': ['Leave a prayer by QR code and light up the map of Japan', 'QRコードで祈りを書くと日本地図に光が灯るメディアアート'],
  '프라미스랜드의 발자취 전시와 기도의 벽': ['Promised Land history exhibit and a prayer wall', 'プロミスランドの歩みの展示と祈りの壁'],
  '미션에 성공하면 가챠로 선물을 받는 이벤트': ['Complete a mission and win a gift from the gacha', 'ミッションに成功するとガチャでプレゼント'],
  '첫날 두 출입구에서 맞이하는 웰컴 스태프': ['Our welcome team greets you at both entrances on Day 1', '初日、2か所の入口でお迎えするウェルカムスタッフ'],
  '사전 등록을 완료하신 분은 등록 데스크에서 확인 후 입장해 주세요.': ['If you pre-registered, please check in at the registration desk before entering.', '事前登録済みの方は、受付デスクで確認後にご入場ください。'],
  '안내데스크에 문의해주세요.': ['Please ask at the information desk.', '案内デスクにお問い合わせください。'],
  '안내데스크로 문의해주세요.': ['Please ask at the information desk.', '案内デスクにお問い合わせください。'],
  '네, 1층 로비에서 굿즈 부스를 운영합니다.': ['Yes, there is a merch booth in the 1F lobby.', 'はい、1階ロビーでグッズブースを運営します。'],
  '일본인분들을 제외한 현장등록은 어렵습니다. 사전 등록을 완료하신 분은 등록 데스크에서 확인 후 입장해 주세요.': ['On-site registration is not available, except for Japanese attendees. If you pre-registered, please check in at the registration desk before entering.', '日本の方を除き、当日登録はできません。事前登録済みの方は、受付デスクで確認後にご入場ください。'],
  '분실물은 안내데스크로 문의해 주세요. 발견하신 물건도 안내데스크에 맡겨주시면 감사하겠습니다.': ['For lost items, please ask at the information desk. If you find something, please bring it to the information desk.', '落とし物は案内デスクにお問い合わせください。見つけた物も案内デスクにお届けください。'],
  '의료 관련 도움이 필요하시면 안내데스크에 문의해 주세요. 긴급 상황 시 근처 스텝에게 도움을 요청해 주세요.': ['If you need medical help, please ask at the information desk. In an emergency, please ask any nearby staff member for help.', '医療に関するサポートが必要な方は案内デスクにお問い合わせください。緊急時は近くのスタッフにお声がけください。'],

  // 조 편성 공개
  '조 편성은 11월 20일(금) 오전에 공개됩니다.': ['Groups will be announced on the morning of Fri, Nov 20.', 'グループ分けは11月20日(金)の午前に公開されます。'],
  '조 편성은 11월 20일(금) 오전에 공개됩니다': ['Groups will be announced on the morning of Fri, Nov 20', 'グループ分けは11月20日(金)の午前に公開されます'],
  '공개되면 조 편성 페이지에서 이름으로 내 조를 찾을 수 있습니다.': ['Once announced, you can find your group by name on the Groups page.', '公開後、グループのページで名前から自分のグループを探せます。'],

  // 영상
  '본편': ['Main film', '本編'],
  '일본 사역자 인터뷰': ['Interview: Japanese ministers', '日本の牧会者インタビュー'],
};

// 숫자 · 날짜가 들어간 문장, 여러 조각을 이은 문장
const L = { ko: -1, en: 0, ja: 1 };
const DAYS = { 일: ['Sun', '日'], 월: ['Mon', '月'], 화: ['Tue', '火'], 수: ['Wed', '水'], 목: ['Thu', '木'], 금: ['Fri', '金'], 토: ['Sat', '土'] };
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const RULES = [
  [/^새 공지 (\d+)건$/, (m, i) => [`${m[1]} new`, `新着 ${m[1]}件`][i]],
  [/^총 (\d+)끼 제공$/, (m, i) => [`${m[1]} meals in total`, `全${m[1]}食提供`][i]],
  [/^영상 (\d+)편$/, (m, i) => [`${m[1]} videos`, `映像 ${m[1]}本`][i]],
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
