// 프로젝트 목록 · 카드 정보
const categories = {
  // DESIGN
  design: {
    "label": "DESIGN",
    "title": "목적부터 정리했습니다.",
    "workflow": "메시지 정리 → 레이아웃 구성 → 시각 요소 조정",
    "tools": "Photoshop · Illustrator · Figma",
    "description": "먼저 전달할 내용을 정리하고, 그다음 레이아웃과 색상·이미지의 우선순위를 맞췄습니다. 보기 좋은 것보다 메시지가 먼저 읽히는 쪽을 선택했습니다.",
    "projects": [
      {
        "name": "아사이볼 카드뉴스",
        "image": "design-acai.png",
        "crop": {
          "width": "159.57%",
          "height": "260%",
          "left": "-59.57%",
          "top": "-0.13%"
        }
      },
      {
        "name": "픽베이크 카드뉴스",
        "image": "design-pickbake.png",
        "crop": {
          "width": "113.98%",
          "height": "185.72%",
          "left": "-8.07%",
          "top": "-28.22%"
        }
      },
      {
        "name": "국일 상세페이지",
        "image": "design-gukil.png",
        "crop": {
          "width": "112.33%",
          "height": "288.86%",
          "left": "-6.12%",
          "top": "-138.88%"
        }
      },
      {
        "name": "우르오스 상세페이지",
        "image": "design-uruos.png",
        "crop": {
          "width": "109.31%",
          "height": "242.07%",
          "left": "-4.69%",
          "top": "-37.29%"
        }
      }
    ]
  },
  // LOGO
  logo: {
    "label": "LOGO",
    "title": "의미를 형태로 정리했습니다.",
    "workflow": "키워드 정리 → 형태 탐색 → 심볼·타이포 조정",
    "tools": "Illustrator · Photoshop · Figma",
    "description": "브랜드나 주제에서 먼저 핵심 키워드를 뽑고, 그 의미를 형태와 색으로 줄여가는 방식으로 작업했습니다. 결과보다 왜 이런 형태가 나왔는지를 설명할 수 있게 만들었습니다.",
    "projects": [
      {
        "name": "로고 디자인 작품",
        "kind": "logo-composite"
      },
      {
        "name": "Quiet Butter 로고 디자인 기획안",
        "image": "logo-quiet-butter.png",
        "crop": {
          "width": "100%",
          "height": "100%",
          "left": "0%",
          "top": "0%"
        }
      }
    ]
  },
  // CLONE CODING
  clone: {
    "label": "CLONE CODING",
    "title": "구조부터 보고 구현했습니다.",
    "workflow": "기존 사이트 분석 → 레이아웃 파악 → 기능 구현",
    "tools": "HTML · CSS · JavaScript · jQuery · Swiper",
    "description": "화면을 그대로 따라 만드는 데서 끝내지 않고, 구조가 왜 이렇게 나뉘는지와 사용자의 움직임에 따라 어떤 기능이 필요한지를 보면서 작업했습니다.",
    "projects": [
      {
        "name": "부산청년센터",
        "image": "clone-busan.png",
        "crop": {
          "width": "376.47%",
          "height": "841.21%",
          "left": "-203.54%",
          "top": "-55.65%"
        },
        "description": "첫 클론코딩 프로젝트 선정 사이트로, 기본적인 리스트 구조와 flex 구조, 슬라이드 라이브러리 적용을 배우고 숙달함.",
        "links": [
          {
            "label": "기존 사이트",
            "url": "https://young.busan.go.kr/bycenter/index.nm"
          },
          {
            "label": "클론코딩 사이트",
            "url": "https://batteri-333.github.io/busanyouthcenter/"
          }
        ]
      },
      {
        "name": "기후변화주간",
        "image": "clone-climate.png",
        "crop": {
          "width": "208.04%",
          "height": "1308.63%",
          "left": "-101.2%",
          "top": "-206.1%"
        }
      },
      {
        "name": "다우오피스",
        "image": "clone-dauoffice.png",
        "crop": {
          "width": "164.31%",
          "height": "1260.31%",
          "left": "-32.14%",
          "top": "-19.47%"
        }
      },
      {
        "name": "보틀벙커",
        "image": "clone-bottle-bunker.png",
        "crop": {
          "width": "376.47%",
          "height": "291.05%",
          "left": "-188.27%",
          "top": "0.03%"
        }
      }
    ]
  },
  // WEB DESIGN
  web: {
    "label": "WEB DESIGN",
    "title": "흐름부터 설계했습니다.",
    "workflow": "사용자 흐름 정리 → 콘텐츠 우선순위 → 화면 설계",
    "tools": "Figma · Photoshop · Illustrator",
    "description": "사용자가 어디를 보고 어떤 행동을 하게 될지 먼저 정리한 뒤, 그 흐름에 맞춰 디자인과 인터랙션을 구성했습니다.",
    "projects": [
      {
        "name": "랜딩페이지",
        "image": "web-landing.png",
        "crop": {
          "width": "254.19%",
          "height": "110.605%",
          "left": "-38.832%",
          "top": "0%"
        }
      },
      {
        "name": "리드온",
        "image": "web-readon.png",
        "crop": {
          "width": "319.752%",
          "height": "132.039%",
          "left": "-115.29%",
          "top": "-7.09%"
        }
      }
    ]
  },
  // APP DESIGN
  app: {
    "label": "APP DESIGN",
    "title": "흐름부터 봤습니다.",
    "workflow": "사용 흐름 정리 → 기능 구분 → 화면·UI 설계",
    "tools": "Figma · Photoshop · Illustrator",
    "description": "기능을 먼저 늘리기보다 사용자가 어떤 순서로 서비스를 쓰는지부터 정리했습니다. 그 흐름을 기준으로 필요한 기능과 화면을 나누고 UI를 구성했습니다.",
    "projects": [
      {
        "name": "BUG HUNTER",
        "kind": "bug-hunter"
      },
      {
        "name": "BUG HUNTER 정보 구조",
        "image": "app-bughunter-flow.png",
        "crop": {
          "width": "100%",
          "height": "683.81%",
          "left": "0%",
          "top": "-354.76%"
        }
      }
    ]
  }
};
