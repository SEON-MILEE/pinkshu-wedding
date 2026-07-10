/**
 * Original Warm Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 커튼 열림 애니메이션 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "정종선",
    father: "정윤희",
    mother: "김진숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이선미",
    father: "이재천",
    mother: "김영임",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-03",
    time: "11:00",
    venue: "포스코센터 아트홀",
    address: "서울시 강남구 테헤란로 440 포스코센터 서관 4층",
    mapLinks: {
      kakao: "https://place.map.kakao.com/8617090",
      naver: "https://naver.me/xY47gzDk"
    }
  },

  // ── 우리의 이야기 ──
  story: {
    title: "초대합니다",
    content: "가시버시,\n서로의 벗되어 오순도순 사는 부부를 뜻합니다\n하늘이 열린다는 뜻깊은 날\n서로에게 벗되어 같은 하늘을 열어가겠습니다"
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", bank: "농협은행", number: "127-12-380323" },
      { role: "아버지", bank: "농협은행", number: "352-0181-2114-63" },
      { role: "어머니", bank: "농협은행", number: "352-0236-6387-53" }
    ],
    bride: [
      { role: "신부", bank: "국민은행", number: "001502-04-340501" },
      { role: "아버지", bank: "OO은행", number: "000000-00-000000" },
      { role: "어머니", bank: "OO은행", number: "000-00-000000-0" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "종선 ♥ 선미 결혼합니다",
    description: "2026년 10월 3일, 소중한 분들을 초대합니다."
  }
};
