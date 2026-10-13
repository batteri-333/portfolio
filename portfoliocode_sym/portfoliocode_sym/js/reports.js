// 작품별 개요 · 링크
const NOTION_HOME = 'https://app.notion.com/p/3d122e626d5381d2ac04d99caa6fd77a';
const report = (title, body, point) => ({ title, body, point });
const PROJECTS = [
  // BUG HUNTER
  {
    id: 'bug-hunter',
    category: 'app',
    label: 'APP DESIGN',
    title: 'BUG HUNTER',
    subtitle: '생활 속 문제를 하나의 퀘스트로.',
    image: 'app-bughunter.png',
    extraImage: 'app-bughunter-flow.png',
    imageClass: 'app-image',
    visualClass: 'app-visual',
    bg: '#131e0c',
    type: '3인 팀 프로젝트',
    role: '기여도 33%',
    tools: 'Figma · UI/UX',
    sourceType: 'notion',
    notion: 'https://app.notion.com/p/3d122e626d5381d7a5dde9a4d304ccb1',
    link: 'https://www.figma.com/proto/a03zuor7hni6EOoocPvkt5/1%EC%A1%B0_%EC%95%B1%EB%94%94%EC%9E%90%EC%9D%B8?node-id=76-15&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=76%3A15&show-proto-sidebar=1',
    linkLabel: '프로토타입',
    slides: [
      report('도움이 필요한 순간,\n헌터와 연결되도록.', '벌레를 직접 처리하기 어려운 20~30대 1인 가구와 자취생을 위한 매칭 서비스입니다. 의뢰를 퀘스트로, 해결하는 사람을 헌터로 표현해 생활 서비스에 게임의 몰입감을 더했습니다.', '생활 문제 해결 × 퀘스트 기반 매칭'),
      report('같은 서비스,\n서로 다른 두 가지 흐름.', '진입 단계에서 의뢰자와 헌터의 역할을 구분했습니다. 의뢰자는 벌레 선택, 헌터 선택, 결제, 진행 확인으로 이동하고, 헌터는 주변 요청과 자신의 활동 상태를 중심으로 이용하도록 설계했습니다.', '역할 선택 → 문제 선택 → 매칭 → 결제 → 진행 확인'),
      report('선택의 결과가\n바로 보이는 인터페이스.', '버튼과 선택 카드, 하단 내비게이션의 상태를 컴포넌트와 베리언트로 나눴습니다. 게임의 퀘스트·레벨 표현과 카드 구조를 결합해 현재 위치와 다음 행동이 같은 규칙으로 읽히도록 구성했습니다.', '컴포넌트 · 선택 상태 · 역할별 내비게이션'),
      report('화면 사이의 연결까지\n디자인의 범위로.', '한 장의 화면보다 여러 선택과 화면 전환에서 경험이 이어지는지를 중요하게 봤습니다. 팀 작업에서도 반복 요소의 규칙을 맞추며, 개별 화면의 완성도와 전체 서비스의 일관성을 함께 확인했습니다.', '팀 프로젝트 / 노션 기재 기여도 33%')
    ]
  },
  // TERRA
  {
    id: 'terra',
    category: 'web',
    label: 'WEB DESIGN',
    title: 'TERRA × 손흥민',
    subtitle: '응원의 열기를 참여 행동으로 연결하다.',
    image: 'web-landing.png',
    bg: '#dbe9d8',
    type: '개인 디자인',
    role: '기여도 100%',
    tools: 'Figma',
    sourceType: 'notion',
    notion: 'https://app.notion.com/p/3d122e626d538199b776d9ce19eb8a73',
    link: 'https://www.figma.com/proto/9tSVr1YjeIxBNgLN9FZCI4/%EC%84%9C%EC%98%81%EB%AF%BC-%EB%9E%9C%EB%94%A9%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=74-24&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1',
    linkLabel: '프로토타입',
    slides: [
      report('응원에서 신청까지,\n하나의 분명한 목적.', '테라 7주년과 월드컵 응원 콘셉트를 결합한 프로모션 랜딩페이지입니다. 이벤트를 이해하고 참여 방법을 확인한 뒤 신청으로 이어지도록, 한 가지 행동을 중심으로 정보를 정리했습니다.', '이벤트 인지 → 참여 방법 → 경품 확인 → 신청'),
      report('무엇을 해야 하는지\n첫 화면부터 명확하게.', '선수, 제품, 캐릭터와 응원 메시지를 히어로에서 함께 보여주고 신청 CTA를 독립적으로 배치했습니다. 사용자가 페이지의 목적을 빠르게 파악하고 바로 참여할 수 있도록 구성했습니다.', 'CTA 가시성 · 메시지 위계 · 참여 동기'),
      report('어떻게 참여할지,\n왜 참여할지.', '참여 방법은 STEP 1~4 카드로 나누고, 경품은 순위와 크기로 구분했습니다. 테라 그린으로 브랜드를 이어가되 정보가 많은 구간은 화이트 배경으로 전환해 읽는 리듬을 만들었습니다.', '단계형 참여 카드 + 별도 경품 섹션'),
      report('스크롤의 순서가\n설득의 순서가 되도록.', '모든 정보를 같은 비중으로 보여주기보다 인지, 이해, 동기부여의 역할을 나눴습니다. 사용자가 목표 행동에 도달하는 데 필요한 정보를 순서대로 제공하는 연습이었습니다.', '전환율 수치가 아닌, 참여 흐름을 설계한 디자인 작업')
    ]
  },
  // 아사이볼
  {
    id: 'acai',
    category: 'design',
    label: 'CARD NEWS',
    title: '말차 아사이볼',
    subtitle: '제품의 색과 질감으로 시선을 잡다.',
    image: 'design-acai.png',
    bg: '#183c18',
    type: '개인 디자인',
    role: '비주얼 디자인',
    tools: 'Photoshop · Figma',
    sourceType: 'notion',
    notion: 'https://app.notion.com/p/3d222e626d538127a195d99d9630f439',
    slides: [
      report('한눈에 전달되는\n신선함과 에너지.', '말차의 그린과 아사이의 퍼플을 대비시킨 비주얼 중심 카드뉴스입니다. 정보의 양을 늘리기보다 메뉴의 색감과 질감이 첫 시선을 끌도록 제품을 화면 중심에 크게 배치했습니다.', 'Fresh · Bold · Healthy'),
      report('제품을 중심으로\n시선의 순서를 정리했습니다.', '제품 이미지 뒤로 말차 스플래시와 큰 타이포그래피를 겹쳤습니다. 주변 요소가 제품을 감싸도록 배치해 작은 화면에서도 무엇을 보여주는 디자인인지 즉시 이해되도록 했습니다.', '제품 → 스플래시와 컬러 → 타이포 → 브랜드'),
      report('글자도 하나의\n그래픽이 되도록.', '크림색 영문 타이포를 화면 바깥까지 확장하고 일부를 제품 뒤로 가렸습니다. 타이포, 스플래시, 제품이 서로 다른 깊이에 놓이면서 포스터처럼 힘 있는 구성을 만듭니다.', '그린·퍼플 대비 / 전경과 배경의 레이어'),
      report('많은 설명보다\n강한 첫인상을.', '브랜드 로고는 상단과 컵 전면에서 자연스럽게 읽히도록 두고, 제품이 가장 강한 시각 요소가 되게 했습니다. 색, 크기, 겹침으로 메시지의 우선순위를 만드는 작업입니다.', '개인 비주얼 디자인 / 실제 캠페인 성과와는 별개')
    ]
  },
  // 다우오피스
  {
    id: 'dauoffice',
    category: 'clone',
    label: 'TEAM CLONE CODING',
    title: '다우오피스',
    subtitle: '팀의 공통 기준에서 시작한 구현.',
    image: 'clone-dauoffice.png',
    visualClass: 'long-image',
    bg: '#e0e8f4',
    type: '3인 팀 · 약 1개월',
    role: '팀장 · 기여도 33%',
    tools: 'HTML · CSS · JS',
    sourceType: 'notion',
    notion: 'https://app.notion.com/p/3d122e626d538198afd7c1916d6d4804',
    link: 'https://batteri-333.github.io/dauoffice/',
    linkLabel: '구현 사이트',
    slides: [
      report('같은 방향을 바라보는\n팀을 만드는 일.', 'B2B 서비스의 구조와 사용자 흐름을 살펴보기 위해 선택한 3인 팀 클론코딩입니다. 약 1개월 동안 반응형 구현, Git 배포, 발표를 진행했고 팀장으로 공통 기준과 진행 순서를 정리했습니다.', '팀장 / 3인 팀 / 기여도 33%'),
      report('작업을 시작하기 전에\n판단 기준부터 공유했습니다.', '기업요구정의서를 자체 제작하고 공통 클래스명과 각자 사용하는 이름을 미리 정리했습니다. 역할 분담과 통합에서 같은 기준을 사용하고, 문제가 생겼을 때 코드 위치를 찾기 쉽게 했습니다.', '사이트 분석 → 기준 공유 → 역할 분담 → 구현 → 통합'),
      report('계속 바뀌는 메뉴,\n수정할 구조를 줄이다.', '헤더와 푸터, 퀵 메뉴, Go Top, AI 버튼과 담당 영역의 반응형을 구현했습니다. 원본의 메뉴 변경에 반복 대응하며 헤더 구조를 통일하고, 이후에는 내용 중심으로 바꿀 수 있도록 재구성했습니다.', '담당 영역 + Enterprise 서브페이지 반응형 제작'),
      report('협업은 계획 이후에도\n계속 조정하는 과정.', '진행 중 우선순위가 달라질 때 업무 순서와 타임라인을 다시 맞췄습니다. 공용 구조의 유지보수성을 배웠고, 후반부의 업무량을 더 유연하게 재분배하는 능력은 다음 프로젝트의 과제로 남겼습니다.', '공통 규칙 · 유지보수 · 진행 흐름 조율')
    ]
  },
  // Quiet Butter
  {
    id: 'quiet-butter',
    category: 'logo',
    label: 'BRAND IDENTITY',
    title: 'Quiet Butter',
    subtitle: '고요하고 따뜻한 베이킹의 인상.',
    image: 'logo-gallery-bottom.png',
    extraImage: 'logo-quiet-butter.png',
    imageClass: 'logo-image',
    bg: '#2c190d',
    type: '로고 디자인',
    role: '작품 이미지 기반',
    tools: '브랜드 시각 구성',
    sourceType: 'visual',
    slides: [
      report('따뜻한 브랜드를\n간결한 선으로.', 'Quiet Butter 로고와 기획 보드에서 읽히는 중심 인상은 차분함과 따뜻함입니다. 브라운 바탕과 크림색 선, 한글·영문 이름의 조합이 베이킹 클래스의 부드러운 분위기를 전달합니다.', '키워드: 고요함 · 온기 · 베이킹'),
      report('형태는 간결하게,\n이름은 또렷하게.', '상단의 유려한 선형 심볼과 하단의 브랜드명을 수직으로 정리한 구성입니다. 심볼의 여백과 문자 크기 차이로 시선이 형태에서 이름, 서비스 설명으로 이어집니다.', '심볼 → 브랜드명 → Baking Class'),
      report('색과 여백으로\n브랜드의 온도를 맞추다.', '짙은 브라운과 밝은 크림의 대비가 과하게 화려하지 않으면서도 로고의 윤곽을 분명하게 만듭니다. 별도 기획 보드에서는 로고와 응용 요소를 함께 확인할 수 있습니다.', '추가 이미지에서 브랜드 기획 보드 확인'),
      report('작은 크기에서도\n남는 인상을 생각하며.', '가늘고 부드러운 선과 단정한 문자 배치가 브랜드의 차분한 성격을 이어줍니다. 이 설명은 제공된 로고와 기획 이미지의 시각적 구성을 바탕으로 보완한 해석입니다.', '이미지 관찰 기반 설명 / 제작 기간·성과는 기재하지 않음')
    ]
  },
  // PICK BAKE
  {
    id: 'pickbake',
    category: 'design',
    label: 'CARD NEWS',
    title: 'PICK BAKE',
    subtitle: '브랜드 무드를 지키는 할인 프로모션.',
    image: 'design-pickbake.png',
    bg: '#ece7dc',
    type: '개인 디자인',
    role: '프로모션 비주얼',
    tools: 'Photoshop · Figma',
    sourceType: 'notion',
    notion: 'https://app.notion.com/p/3d222e626d53813a8249c291230bd9d4',
    slides: [
      report('할인 정보와\n제품의 매력을 함께.', '에그타르트의 할인 프로모션을 알리는 카드뉴스입니다. Discount 타이포와 제품 사진을 크게 두면서 네이비, 크림, 체크 패턴으로 베이커리 브랜드의 친근한 분위기를 유지했습니다.', 'Friendly · Retro · Bold'),
      report('프로모션을 읽고,\n제품을 보고, 혜택을 확인하다.', '상단의 Discount로 성격을 알리고 중앙 제품으로 시선을 모았습니다. 오른쪽 아래의 할인 태그로 핵심 혜택을 강조하고, 기간과 보조 문구는 하단에 정리했습니다.', '프로모션 → 제품 → 혜택 → 세부 정보'),
      report('곡선을 넘어오는\n제품의 존재감.', '크림색 상단과 네이비 하단을 곡선으로 나누고 제품이 그 경계를 넘게 배치했습니다. 체크 패턴은 프레임이 되고 손그림 캐릭터는 제품 사진과 정돈된 글자 사이에 위트를 더합니다.', '네이비·크림 / 체크 프레임 / 라인 드로잉'),
      report('세일 배너에도\n브랜드의 표정이 있습니다.', '할인율만 크게 강조하기보다 제품의 골드·브라운 색감과 브랜드의 그래픽을 함께 살렸습니다. 메시지의 명확함과 브랜드 분위기를 동시에 유지하는 데 초점을 둔 작업입니다.', '개인 프로모션 카드뉴스 디자인')
    ]
  },
  // BOTTLE BUNKER
  {
    id: 'bottlebunker',
    category: 'clone',
    label: 'CLONE CODING',
    title: 'BOTTLE BUNKER',
    subtitle: '섹션의 움직임을 상태로 설계하다.',
    image: 'clone-bottle-bunker.png',
    bg: '#174d57',
    type: '개인 클론코딩',
    role: '기여도 100%',
    tools: 'jQuery · FullPage · GSAP',
    sourceType: 'notion',
    notion: 'https://app.notion.com/p/3d022e626d5380899885d5f567eb30d3',
    link: 'https://batteri-333.github.io/bottlebunker/',
    linkLabel: '구현 사이트',
    slides: [
      report('팀에서 배운 기준을\n개인 코드에도 적용하다.', '다우오피스 팀 작업 이후 진행한 클론코딩입니다. 반복되는 구조와 클래스 규칙을 먼저 정리하고, 처음 접한 FullPage.js로 페이지 전체의 흐름을 제어하는 데 집중했습니다.', 'HTML · CSS · JavaScript · jQuery · FullPage · Swiper · GSAP'),
      report('화면 하나가 아니라\n일곱 섹션의 흐름.', '7개 주요 섹션을 화면 단위로 나누고 현재 위치에 맞춰 내비게이션과 고정 버튼의 상태를 바꿨습니다. 와인·위스키 콘텐츠와 상품 슬라이드, 매장 정보도 선택 상태에 맞춰 연결했습니다.', '현재 섹션과 선택 상태를 중심으로 UI 제어'),
      report('잘 등장하는 것만큼\n잘 초기화되는 것도 중요했습니다.', '섹션을 떠나는 시점과 도착한 시점을 분리했습니다. onLeave에서 시작 상태를 정리하고 afterLoad에서 효과를 실행해, 이전 화면으로 돌아왔다가 재진입해도 연출이 이어지도록 했습니다.', '초기 상태 → 실행 → 재진입을 위한 초기화'),
      report('나중에 읽기 쉬운\n코드를 위한 공통 기준.', '팀의 규칙이 협업을 위한 약속이었다면, 이 작업에서는 이후의 자신이 수정하기 쉬운 기준이 됐습니다. 모양보다 역할을 드러내는 이름, 구조와 상태의 분리를 더 의식하게 됐습니다.', '반복 구조 · 역할 중심 이름 · 상태 기반 인터랙션')
    ]
  },
  // 우르오스
  {
    id: 'uruos',
    category: 'design',
    label: 'DETAIL PAGE',
    title: '우르오스 스킨워시',
    subtitle: '청량한 이미지에서 제품 정보까지.',
    image: 'design-uruos.png',
    bg: '#e5f2f8',
    type: '개인 실습 과제',
    role: '상세페이지 · GIF 실습',
    tools: 'Photoshop · Figma',
    sourceType: 'notion',
    notion: 'https://app.notion.com/p/3d222e626d53814e99a9d6dda5838f05',
    slides: [
      report('정적인 정보에\n움직임을 더하는 실습.', '제품의 청량하고 깔끔한 인상을 전달하는 상세페이지 과제입니다. 세로형 정보 구조를 정리하고 일부 핵심 구간에 GIF를 제작·적용하는 과정까지 경험했습니다.', 'Fresh · Clean · Dynamic'),
      report('첫인상에서\n사용 방법까지 이어지도록.', '제품과 카피로 첫인상을 만들고 사용 이유, 특징, 기능·성분, 사용 방법의 순서로 정보를 배치했습니다. 모델 중심의 브랜드 인상에 제품 중심의 정보 구조를 접목했습니다.', '제품 → 사용 이유 → 특징 → 성분 → 사용 방법'),
      report('시선이 필요한 곳에\n움직임을 배치했습니다.', '화이트와 스카이 블루, 거품·물 이미지로 톤을 맞췄습니다. 기능은 카드와 아이콘으로 나누고, 강조가 필요한 구간에 GIF를 넣어 정적인 페이지의 정보 전달 방식을 확장했습니다.', '현재 포트폴리오에는 제공된 정적 대표 이미지를 전시'),
      report('디자인에서\n실제 적용 파일까지.', '모션 시안을 만드는 데서 멈추지 않고 GIF 파일을 결과물에 삽입하는 과정을 실습했습니다. 긴 상세페이지에서도 읽는 순서를 유지하고, 움직임은 필요한 구간에만 사용하는 기준을 익혔습니다.', 'GIF 활용과 상세페이지 제작 과정을 함께 학습')
    ]
  },
  // 기후변화주간
  {
    id: 'climate',
    category: 'clone',
    label: 'CLONE CODING',
    title: '2025 기후변화주간',
    subtitle: '스크롤 위치를 움직임의 조건으로.',
    image: 'clone-climate.png',
    visualClass: 'long-image',
    bg: '#241139',
    type: '개인 클론코딩',
    role: '기여도 100%',
    tools: 'jQuery · AOS · Skrollr',
    sourceType: 'notion',
    notion: 'https://app.notion.com/p/3d022e626d538006b49bea2c340a9522',
    link: 'https://batteri-333.github.io/2025gihoo/',
    linkLabel: '구현 사이트',
    slides: [
      report('화면의 움직임을\n조건과 값으로 해석하다.', '첫 클론코딩보다 JavaScript와 애니메이션의 비중이 늘어난 프로젝트입니다. 스크롤 값, 요소 위치, 실행 타이밍을 연결하며 정적인 배치를 넘어 화면 상태를 직접 다뤘습니다.', 'HTML · CSS · jQuery · AOS · Skrollr'),
      report('어디를 보고 있는지\n내비게이션도 알 수 있도록.', '각 섹션의 시작 위치와 현재 스크롤 값을 비교해 활성 내비게이션을 바꿨습니다. 이미지가 순서대로 등장하는 효과와 특정 구간에서만 노출되는 요소도 위치 조건으로 구분했습니다.', 'scrollTop과 offset을 연결한 구간별 상태 제어'),
      report('언제 실행할지와\n어떻게 움직일지를 나누다.', 'JavaScript가 실행 조건과 클래스를 제어하고 CSS가 움직임을 표현하도록 구성했습니다. Grid로 일정표의 규칙을 잡고, 반복 애니메이션은 시작과 끝의 이동량·타이밍을 조절했습니다.', '조건 판단 / 클래스 전환 / CSS 애니메이션'),
      report('막막한 기능을\n하나씩 나눠 해결했습니다.', '개발자도구로 위치와 값을 확인하고, 막히는 기능은 질문과 반복 수정으로 풀었습니다. 여러 이벤트를 하나씩 분리해 이해하며 스크롤 기반 인터랙션을 완주한 경험이 남았습니다.', '위치 비교와 상태 변화로 인터랙션을 보는 관점')
    ]
  },
  // 국일
  {
    id: 'gukil',
    category: 'design',
    label: 'DETAIL PAGE',
    title: '국일 슈퍼락스',
    subtitle: '제품의 특징을 생활 속 사용 가치로.',
    image: 'design-gukil.png',
    bg: '#e2edf5',
    type: '개인 디자인',
    role: '제품 정보 구조',
    tools: 'Photoshop · Illustrator · Figma',
    sourceType: 'notion',
    notion: 'https://app.notion.com/p/3d222e626d53811ea63ac2146a28354f',
    slides: [
      report('제품의 강한 인상에서\n생활 속 실용성으로.', '주방과 생활 공간을 관리하는 가정 사용자를 중심으로 구성한 상세페이지입니다. 제품의 세정 이미지를 먼저 전달하고 익숙한 사용 장면, 12L 용량, 경제성을 구매 판단 요소로 연결했습니다.', '제품 기능 → 생활 공간 → 용량과 경제성'),
      report('한 페이지 안에서\n정보의 역할을 나누다.', '제품 소개와 장점, 대용량의 가치, 사용 장면을 순서대로 보여줍니다. 사용 방법과 주의사항, 상품 정보는 마지막에 분리해 감성적인 비주얼과 실용 정보의 성격이 구분되도록 했습니다.', '인지 → 장점 → 사용 맥락 → 상세 정보'),
      report('패키지의 블루를\n페이지 전체의 기준으로.', '화이트와 밝은 블루를 기본으로 두고 진한 블루 패키지를 크게 노출했습니다. 물방울과 스플래시, 큰 제목과 아이콘을 활용해 긴 페이지에서도 핵심 메시지가 빠르게 읽히도록 했습니다.', '화이트 + 라이트 블루 + 딥 블루'),
      report('기능만 설명하기보다\n사용할 장면을 연결했습니다.', '사용자가 제품을 어떤 공간에서 왜 선택할지 생각하도록 정보를 구성했습니다. 강한 첫인상과 가정에서의 활용성, 넉넉한 용량의 가치를 한 흐름 안에서 정리한 작업입니다.', '제품 효능 검증이 아닌, 상세페이지의 전달 구조 설명')
    ]
  },
  // READ.ON
  {
    id: 'readon',
    category: 'web',
    label: 'WEB DESIGN',
    title: 'READON',
    subtitle: '책과 자연의 이미지로 여는 첫 화면.',
    image: 'web-readon.png',
    bg: '#202c1b',
    type: '웹 비주얼 디자인',
    role: '작품 이미지 기반',
    tools: '히어로 시각 구성',
    sourceType: 'visual',
    slides: [
      report('독서의 분위기를\n첫 문장으로 전달하다.', '제공된 READON 화면은 자연 이미지 위에 큰 영문 문장을 배치한 구성입니다. 독서에 대한 메시지가 중심에 놓이고, 배경의 질감이 차분하게 머무는 인상을 더합니다.', '독서 · 자연 · 여유'),
      report('메시지의 크기로\n첫 시선을 잡다.', '짙은 숲의 색 위에 밝은 영문 타이포를 크게 올려 사진과 문장을 분리했습니다. 세부 설명보다 하나의 문장을 먼저 읽게 하는 편집 방식으로 볼 수 있습니다.', '큰 문장 + 어두운 배경의 명도 대비'),
      report('사진과 글자가\n같은 분위기를 향하도록.', '유기적인 자연 질감과 손글씨 느낌의 영문 표현이 어우러집니다. 정교한 기능 설명보다는 책을 읽는 감각을 환기하는 히어로 비주얼에 무게가 있습니다.', '사진의 질감과 타이포그래피의 정서적 연결'),
      report('보이는 결과에서\n디자인의 이유를 읽었습니다.', '이 설명은 제공된 대표 화면의 시각적 구성을 바탕으로 작성했습니다. 확인되지 않은 사용자 조사, 기능 구현, 제작 기간이나 성과 수치는 포함하지 않았습니다.', '대표 이미지 기반 시각 분석')
    ]
  },
  // 부산청년센터
  {
    id: 'busan',
    category: 'clone',
    label: 'CLONE CODING',
    title: '부산청년센터',
    subtitle: '배운 기능을 실제 화면으로 연결한 첫 작업.',
    image: 'clone-busan.png',
    visualClass: 'long-image',
    bg: '#dce7ed',
    type: '개인 · 첫 클론코딩',
    role: '기여도 100%',
    tools: 'HTML · CSS · jQuery · Swiper',
    sourceType: 'notion',
    notion: 'https://app.notion.com/p/3d022e626d5380339f7afb567e570416',
    link: 'https://batteri-333.github.io/busanyouthcenter/',
    linkLabel: '구현 사이트',
    slides: [
      report('배우는 과정이\n하나의 사이트가 되다.', 'HTML과 CSS의 기본을 배운 시점에 시작한 첫 클론코딩입니다. 정보 중심의 레이아웃을 골라 기본 틀을 만들고, 수업에서 새로 배운 JavaScript와 라이브러리 기능을 차례로 적용했습니다.', '기본 구조 → 레이아웃 → 슬라이드 → 메뉴 인터랙션'),
      report('콘텐츠가 많은 화면을\n반복 구조로 정리하다.', '메인 비주얼, 사업 소개, 일정, 공간 안내, 퀵 링크와 푸터를 나눴습니다. 리스트와 Flex 구조를 반복해서 작성하고 Swiper로 이미지와 사업 정보를 탐색할 수 있도록 구성했습니다.', '정보형 레이아웃과 반복 콘텐츠 구현'),
      report('버튼 하나에서 배운\n개발자도구의 사용법.', 'Swiper의 이전·다음 버튼을 원하는 위치로 옮기는 과정에서 어려움을 겪었습니다. 브라우저에서 요소를 직접 선택하고 클래스와 CSS를 추적하며, 화면의 문제를 코드로 역추적하는 방법을 익혔습니다.', '화면 → 요소 선택 → CSS 확인 → 실제 코드 수정'),
      report('완성도와 함께 쌓인\n직접 해결하는 습관.', '첫 프로젝트는 AI에 의존하지 않고 자료와 개발자도구, 질문으로 해결한다는 기준을 세웠습니다. 전체 구조를 먼저 나누고 반복 패턴을 찾는 습관이 다음 작업의 기반이 됐습니다.', '직접 탐색하고 수정하며 익힌 첫 구현 경험')
    ]
  },
  // Quiet Pavilion
  {
    id: 'quiet-pavilion',
    category: 'logo',
    label: 'LOGO DESIGN',
    title: '콰이어트파빌리온',
    subtitle: '건축의 실루엣을 브랜드의 인상으로.',
    image: 'logo-gallery-top.png',
    imageClass: 'logo-image',
    bg: '#090909',
    type: '로고 디자인',
    role: '작품 이미지 기반',
    tools: '심볼 · 타이포 구성',
    sourceType: 'visual',
    slides: [
      report('정자의 실루엣과\n차분한 브랜드 인상.', '제공된 로고는 정자를 연상시키는 건축적 실루엣과 한글·영문 이름을 중심으로 구성되어 있습니다. 어두운 배경과 금빛 선의 대비가 고요하면서도 격식 있는 분위기를 만듭니다.', '건축적 실루엣 · 고요함 · 절제'),
      report('위에서 아래로\n읽히는 정돈된 구조.', '건축 모티프를 상단에 두고 브랜드명을 그 아래에 배치했습니다. 심볼의 수평적인 형태가 문자 영역을 감싸며, 대칭적인 구성으로 안정감을 전달합니다.', '심볼 → 한글 이름 → 영문 이름'),
      report('선의 밀도와\n색의 대비를 활용하다.', '검은 배경 위의 금빛 선이 형태의 윤곽을 드러냅니다. 건축 모티프의 세부 표현과 문자 사이의 여백이 장식성과 가독성 사이의 균형을 이룹니다.', '다크 배경 / 골드 계열 선 / 중앙 정렬'),
      report('이미지에서 확인되는\n브랜드의 표정.', '브랜드가 주는 첫인상을 심볼, 색, 문자 배치의 관점에서 정리했습니다. 이 설명은 제공된 작품 이미지에 대한 해석이며, 별도의 브랜드 조사나 제작 과정은 확인되지 않았습니다.', '제공 이미지 기반 설명')
    ]
  }
];
