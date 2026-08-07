/* MANMIN 종합관리 허브 · 단일 데이터 소스 · VER-1.1
   정본: WAP_통합관리대장.xlsx — 이 파일만 고치면 전 페이지에 반영됩니다.
   갱신 시 sw.js 의 CACHE 버전도 함께 올릴 것 */
window.MANMIN_DATA = {
  asof: "2026-08-05",
  waps: [
    // 메인 포탈
    {no:"00",name:"메인 포탈(홈페이지)",repo:"KIMMANMIN",ver:"2.0",disc:"포탈",std:"PWA · GitHub Pages · 정적(백엔드 없음)",review:"2026-07-16",status:"updated",note:"성능 최적화 + 버전표기 + 헤더 정리 배포 완료(f8667a2). 저장소 66MB→7.5MB, 초기로딩 약9MB→약95KB. WebP 62개·lazy 84/86·sw CACHE manmin-v2.0. 푸터에 'MANMIN PORTAL v2.0' 표시"},
    // 소방
    {no:"01",name:"옥내소화전",repo:"fire-hydrant-calc",ver:"3.4",disc:"소방",std:"NFPC·NFTC 102 [시행 2026-07-01]",review:"2026-07-09",status:"updated",note:"NFTC 시행일 2022.12.1→2026.7.1 갱신. 130/0.17/2.6 불변"},
    {no:"02",name:"옥외소화전",repo:"outdoor-hydrant-calc",ver:"3.3",disc:"소방",std:"NFPC 109(제2025-25호)·NFTC 109 [2026-03-01]",review:"2026-07-09",status:"latest",note:"350/0.25/7 현행"},
    {no:"03",name:"스프링클러",repo:"fire-sprinkler-calc",ver:"3.4",disc:"소방",std:"NFPC·NFTC 103 [시행 2026-07-01]",review:"2026-07-09",status:"updated",note:"NFTC 시행일 2026.3.1→2026.7.1, 구 공고번호 정리"},
    {no:"04",name:"간이스프링",repo:"simple-sprinkler-calc",ver:"—",disc:"소방",std:"NFPC·NFTC 103A [2024-12-01]",review:"2026-07-09",status:"latest",note:"구 NFSC 명칭 정정 완료"},
    {no:"07",name:"옥내+옥외 겸용",repo:"combo-indoor-outdoor-calc",ver:"3.4",disc:"소방",std:"NFTC 102 [2026-07-01]·109 [2026-03-01]",review:"2026-07-09",status:"updated",note:"102 시행일 갱신, 109 현행 유지"},
    {no:"05",name:"옥내+스프 겸용",repo:"combo-pump-calc",ver:"3.3",disc:"소방",std:"NFPC·NFTC 102·103 [시행 2026-07-01]",review:"2026-08-05",status:"review",note:"최종커밋 2026-03-29 · 129일 경과 — 법규 최신성 우선검토 대상. 종전 05·06 병합행을 분리 등재(2026-08-05)"},
    {no:"06",name:"옥내+간이 겸용",repo:"combo-easy-fire-calc",ver:"3.3",disc:"소방",std:"NFPC·NFTC 102·103A [시행 2026-07-01]",review:"2026-08-05",status:"review",note:"최종커밋 2026-03-29 · 129일 경과 — 법규 최신성 우선검토 대상. 종전 05·06 병합행을 분리 등재(2026-08-05)"},
    // 기계설비
    {no:"08",name:"소방 통합포털",repo:"portal",ver:"3.0",disc:"소방",std:"소방시설 통합계산 허브(개별 NFTC 준용)",review:"2026-08-05",status:"review",note:"최종커밋 2026-04-01 · 126일 경과. 허브 성격이라 버전표기 없음(정상)"},
    {no:"09",name:"제연설비",repo:"Smoke-Control-System",ver:"3.0",disc:"소방",std:"NFPC·NFTC 501",review:"2026-08-05",status:"review",note:"최종커밋 2026-03-29 · 129일 경과 — 우선검토 대상"},
    {no:"10",name:"비상발전기",repo:"Emergency-Generator",ver:"3.0",disc:"소방",std:"KDS·NFTC",review:"2026-08-05",status:"review",note:"최종커밋 2026-03-31 · 127일 경과 — 우선검토 대상"},
    {no:"11",name:"소방시설 설치검토",repo:"Fire-Protection-Systems",ver:"2.0",disc:"소방",std:"소방시설법 시행령 [시행 2026-07-01] · 2027-01-01 시행예정본 대조 필요",review:"2026-08-05",status:"check",note:"최종커밋 2026-03-27 · 131일 경과. 타이틀 오타(Vre3.0) 미수정. 시행예정 조문 대조 미실시"},
    {no:"20",name:"건물우수",repo:"Roof-Drain",ver:"2.0",disc:"기계",std:"KDS 31 30 35:2021 · Manning",review:"2026-07-09",status:"latest",note:"현행"},
    {no:"21",name:"위생배관",repo:"Sanitary-Piping-System",ver:"2.0",disc:"기계",std:"KDS 31 30 15 · 헌터곡선",review:"2026-07-09",status:"review",note:"원본 대조 대기(변경없음 추정)"},
    {no:"22",name:"냉온수배관",repo:"CHWS-STSTEM",ver:"2.0",disc:"기계",std:"기계설비 기술기준 별표8(제2021-851호)",review:"2026-07-09",status:"latest",note:"현행(별표 원문 재확인 권장)"},
    {no:"23",name:"공조덕트",repo:"Air-Conditioning-Duct",ver:"2.0",disc:"기계",std:"기계설비 기술기준 별표9 · KDS/KCS",review:"2026-07-09",status:"review",note:"원본 대조 대기"},
    {no:"24",name:"설비펌프",repo:"Booster-Pump",ver:"2.0",disc:"기계",std:"기계설비 설계기준",review:"2026-07-09",status:"review",note:"원본 대조 대기"},
    {no:"25",name:"급탕설비",repo:"Hot-Water-Supply-System",ver:"2.0",disc:"기계",std:"용도별 급탕 기준",review:"2026-07-09",status:"review",note:"원본 대조 대기"},
    {no:"26",name:"환기설비",repo:"ventilation-equipment",ver:"2.1",disc:"기계",std:"설비기준규칙 제11조(제1531호) · 기계설비 기술기준",review:"2026-07-09",status:"updated",note:"근거 정정(별표3 오귀속 제거), 계산값 유지"},
    {no:"27",name:"부하계산(RTS)",repo:"Radiant-Time-Series-Method",ver:"3.0",disc:"기계",std:"ASHRAE 2009 RTS법",review:"2026-07-09",status:"latest",note:"국제표준 기반, 국내법 영향 없음"},
    // 건축·행정·에너지
    {no:"30",name:"설계·감리 대가",repo:"1architect-fee-app",ver:"4.0",disc:"건축",std:"건축사 대가 고시 제2020-635호 [2020-09-14] + 엔지니어링사업대가 기준(산업부 2024-12-31) 별표1~4",review:"2026-07-16",status:"updated",note:"Ver4.0 — 건축사·엔지니어링 2기준 통합(건설·통신·산업플랜트·시공상세도), 부문 선택 UI·A4 서식 개선·로고 폴백. 커밋 aa9a0d4"},
    {no:"31",name:"열관류율",repo:"u-value-app-",ver:"3.1",disc:"건축",std:"에너지절약설계기준 제2025-738호 [2025-12-31]",review:"2026-07-09",status:"latest",note:"Babel@7.29.7 고정·CACHE v3.2, 별표1 U값 불변"},
    {no:"32",name:"해체감리",repo:"demolition-calc",ver:"3.0",disc:"건축",std:"건축물관리법 제30~32조 · 2026 노임",review:"2026-07-09",status:"latest",note:"현행 반영"},
    {no:"33",name:"상주감리",repo:"arch-supervision",ver:"3.0",disc:"건축",std:"건축법 제25조·시행령 제19조5항 [2026-02-27]",review:"2026-07-09",status:"latest",note:"대상 미변경, 2026 반영"},
    {no:"34",name:"공기산정",repo:"construction-air",ver:"1.0",disc:"건축",std:"건설공사 품질·안전 기준",review:"2026-07-09",status:"review",note:"원본 대조 대기"},
    {no:"35",name:"용도변경",repo:"Change-of-Use",ver:"1.0",disc:"건축",std:"건축법 제19조 9개 시설군",review:"2026-07-09",status:"latest",note:"체계 미변경"},
    {no:"36",name:"국토이용",repo:"Land-Use",ver:"1.0",disc:"건축",std:"국토계획법 시행령(제35628호) 건폐율·용적률",review:"2026-07-09",status:"latest",note:"상한 미변경"},
    {no:"38",name:"일조사선",repo:"Architectural-line",ver:"1.0",disc:"건축",std:"건축법 시행령 제86조 정북 10m",review:"2026-07-09",status:"latest",note:"9→10m(2023) 이미 반영 확인"},
    {no:"39",name:"성능지표(EPI)",repo:"Energy-Performance-Index",ver:"3.0",disc:"건축",std:"에너지절약설계기준 제2025-738호",review:"2026-07-09",status:"check",note:"부문별 최소배점(mandMin) 구현됨 — 738호 배점표 세부 재확인 권장"},
    {no:"40",name:"주차장법",repo:"Parking-Lot-Act",ver:"1.0",disc:"건축",std:"주차장법 시행령 별표1 [2025-08-17]",review:"2026-07-09",status:"latest",note:"원단위 미변경"},
    // 구조
    {no:"37",name:"건축행정(인허가 체크리스트)",repo:"미배포",ver:"1.0",disc:"건축",std:"건축법",review:"2026-08-05",status:"check",note:"★GitHub 저장소 미생성·홈페이지 미등록. 저장소 생성 여부 결정 필요"},
    {no:"45",name:"내진성능",repo:"Seismic-Evaluation",ver:"2.1",disc:"구조",std:"건축법 제48조·시행령 제32조 · KDS 41 17 00:2022",review:"2026-07-09",status:"updated",note:"KDS 41 17 00 2018→2022 정정, KDS 17 10 00 존속 정정"},
    {no:"46",name:"설계하중",repo:"architectural-structure",ver:"1.0",disc:"구조",std:"KDS 41 12 00:2022(구 41 10 15)",review:"2026-07-09",status:"latest",note:"코드번호·수치 현행 정합"},
    // 토목
    {no:"50",name:"토목배관",repo:"civil-engineering-piping",ver:"1.0",disc:"토목",std:"KDS 61 40 00(2025-01-21) · 합리식·Manning",review:"2026-07-09",status:"review",note:"관로 근거 갱신 권장, 배포 URL 확인 필요"},
    {no:"51",name:"토목옹벽",repo:"tomog-ongbyeog",ver:"1.0",disc:"토목",std:"KDS 11 80 05 · KDS 17 10 00(2024-147) M-O",review:"2026-07-09",status:"review",note:"내진 상위기준 근거 갱신 권장"},
    {no:"60",name:"MANMIN LEGAL REVIEW",repo:"manmin-law",ver:"1.0",disc:"법규",std:"건축법·NFTC·KDS 등 월간 개정 정리",review:"2026-08-05",status:"latest",note:"2026-08-04 신규 배포 PWA. 본 법규검토 체계의 대외 서비스판 — baseline 갱신 시 함께 갱신"}
  ],
  changelog: [
    {date:"2026-07-16", big:true, title:"30 설계·감리 대가 — 엔지니어링 대가기준 통합 (Ver4.0) 배포", body:
      "건축사 대가만 산출하던 도구를 건축사·엔지니어링 2기준 통합 산출기로 확장. 상단 [대가기준] 토글로 건축사↔엔지니어링 전환, 엔지니어링은 [부문] 선택(건설·통신·산업플랜트·시공상세도작성비)에 따라 업무단계·분야·그룹·난이도·배수옵션이 조건부 표시. 요율 데이터는 LawMCP 원문 대조로 확보(엔지니어링사업대가 기준 별표1~4 전 구간)하고 직선보간+5,000억 초과 지수공식 엔진을 공유. A4 산출서·모바일·모달을 기준별로 2원화(근거 고시 자동표기), A4 미리보기=PDF 여백 통일(배너 풀블리드+좌우 40px)·폰트 정리, 좌측 로고 onError 폴백 추가. 1장당 단가식(별표5)은 노임단가 방식이라 제외. 3.0 원본은 버전s-3.0 보존. LawMCP 현행 확인: 건축사법 제19조의3(2025-10-01)·엔지니어링산업진흥법 제31조(시행 2026-06-03).",
      rows:[
        ["30 대가기준","건축사 대가 단일(별표4·5)","건축사 + 엔지니어링(별표1~4) 2기준 토글","index aa9a0d4"],
        ["30 엔지니어링 부문","없음","건설·통신·산업플랜트·시공상세도작성비 — 공사비요율+지수공식","aa9a0d4"],
        ["30 A4 출력","건축 서식 고정","기준별 2원화(근거고시 자동)·미리보기=PDF 일치","aa9a0d4"],
        ["30 버전표기","[MANMIN-Ver3.0]","[MANMIN-Ver4.0]","aa9a0d4"],
        ["30 좌측 로고","brand-icon.png 누락 시 깨짐","onError 인라인 SVG 폴백","aa9a0d4"]
      ]},
    {date:"2026-07-16", title:"00 포탈 버전표기 통일 + 헤더 로고 정리 — Ver2.0 마무리", body:
      "Ver2.0 배포 후속 정리. 대장에는 Ver2.0으로 기록됐으나 저장소·화면 어디에도 포탈 버전 표기가 없어 대장과 실물이 어긋난 상태였음(형상 체크포인트 미이행). 계산도구 관례(<meta description> 끝에 [MANMIN-VerX.Y])를 따라 표기를 통일하고, 화면 확인용으로 푸터에도 노출. 계산도구가 이미 화면에 'MANMIN Ver2.0'(열관류율) 등 109곳을 표시 중이라 혼동을 피하려 포탈은 'MANMIN PORTAL v2.0'으로 구분. 헤더의 죽은 마크업(만민로고)도 함께 제거. 사용자 육안 검수 완료 — WebP 62개 화질·푸터·헤더 이상 없음.",
      rows:[
        ["00 포탈 버전표기","표기 없음","index·manifest description에 [MANMIN-Ver2.0], manifest version 2.0","118d549"],
        ["00 포탈 README","1.0 시절 가이드(구 이미지 기준)","2.0 기준 개편 — 포맷 유지 정책·한글 URL 인코딩 경고·미해결 항목 명시","118d549"],
        ["00 포탈 푸터","버전 미표시","저작권 옆 'MANMIN PORTAL v2.0' 표시(골드 텍스트)","3c194c7"],
        ["00 포탈 헤더","만민로고(흰 사각형)가 협회로고에 가려진 죽은 마크업","만민로고 img 제거, 협회로고에 aria-label·title '홈으로' 명시. img 87→86","f8667a2"]
      ]},
    {date:"2026-07-15", big:true, title:"00 메인 포탈 성능 최적화 배포 (Ver2.0) — 이미지 WebP 전환·미사용 파일 정리", body:
      "법규 변경이 아닌 성능·형상 개선 회차. 저장소 원본(KIMMANMIN) 대조 결과 이미지가 웹 규격을 크게 초과(공공대가.png 6,030KB·컨밴션.jpg 4,638KB·만민로고.png 2,411KB를 44~180px로 표시)하고 lazy loading 미적용(0/87)이어서 초기 로딩이 약 9MB였음. WebP 62개 전환 + lazy 84개 + 유튜브 썸네일 mqdefault 전환으로 초기 로딩 약 95KB 달성. 미참조 파일 31개(29.8MB)는 MD5 대조로 중복·사각지대 확인 후 삭제(원본은 NAS 참고자료/저장소_미사용파일_백업_2026-07-15에 33개 30MB 보관, Git 이력에도 존속). 카카오/OG 스크래퍼 대응 og-thumbnail.jpg(JPEG)·JSON-LD image 참조 만민로고.png(PNG)·PWA manifest 규격 icons/(PNG)는 의도적 원본 포맷 유지. GoatCounter 스크립트 존속 확인. 배포 후 라이브 검증: 깨진 이미지 0건.",
      rows:[
        ["00 포탈 이미지","JPG/PNG 62개, 34.3MB","WebP 62개, 6.3MB (-81.6%)","index 2f12999"],
        ["00 포탈 lazy","loading 속성 0/87","lazy 84 + eager 3(첫화면), decoding=async 87","index 2f12999"],
        ["00 포탈 유튜브","maxresdefault ×36 (약 5MB)","mqdefault ×36 (약 0.4MB)","index 2f12999"],
        ["00 포탈 CLS","width/height 미지정","img 48개 명시 + preconnect(img.youtube.com·kakaocdn)","index 2f12999"],
        ["00 포탈 형상","sw.js CACHE manmin-v1.0 / .nojekyll 누락","manmin-v2.0 / .nojekyll 추가","sw 2f12999"],
        ["00 포탈 정리","미참조 31개 29.8MB(stadium.jpg 16.5MB 등)","삭제 — 저장소 66MB→7.5MB, 118→87파일","2f12999"]
      ]},
    {date:"2026-07-09", big:true, title:"소방 NFTC 재공고(2026-07-01) 반영 — LawMCP 재검증", body:
      "LawMCP 원문 대조로 NFTC 102·103이 2026-07-01 재공고(개정 2026-06-29)됨을 확인(웹조사 누락분). 계산수치는 불변(옥내 130/0.17/2.6·비상전원 20분 원문 확인). NFPC도 재고시(102·103·103A 2025-12-24, 109 2025-12-31). 소방 앱 인용 시행일을 2026-07-01로 갱신·배포(GitHub+로컬).",
      rows:[
        ["01 옥내소화전","NFTC 102 [시행 2022.12.1]","[시행 2026.7.1], Ver3.4","index 54c57cc"],
        ["03 스프링클러","NFTC 103 [시행 2026.3.1]·공고 제2026-8호","[시행 2026.7.1], 공고번호 정리, Ver3.4","index(커밋완료)"],
        ["07 옥내+옥외 겸용","NFTC 102 [시행 2022.12.1]","[시행 2026.7.1](109 2026.3.1 유지), Ver3.4","index(커밋완료)"],
        ["02 옥외·04 간이·05·06 겸용","NFTC 109(2026.3.1)·103A(2024.12.1)","현행 유지 — 변경 불요","—"]
      ]},
    {date:"2026-07-09", big:true, title:"정밀 재검증 + 내진·환기 업그레이드 배포", body:
      "저장소 원본 직접 대조로 승인 5종 재검증. 1차 보고서의 열관류율·EPI·일조 지적은 오탐(이미 최신)으로 정정. 실제 수정 2건 배포 완료.",
      rows:[
        ["45 내진","KDS 41 17 00 : 2018 (현행 표기)","KDS 41 17 00 : 2022 (2022-10-11)","index 91649af"],
        ["45 내진","\"KDS 17 10 00 폐지\" (사실오류)","현행 존속(2024-03-21, 제2024-147호)","index 91649af"],
        ["45 내진","Ver2.0 / naejin-v2.0.0","Ver2.1 / naejin-v2.1.0","sw dcb2b9c"],
        ["26 환기","근거 \"기계설비법 시행규칙 별표3\"(오귀속)","설비기준규칙 제11조(법정)+기술기준(설계권장값)","index 4fd3466"],
        ["26 환기","환기횟수 계산값","전부 유지(변경 없음)","—"],
        ["26 환기","Ver2.0 / hwangi-v2.0","Ver2.1 / hwangi-v2.1","sw 534dd84"]
      ]},
    {date:"2026-06-09", title:"Babel 빈화면 장애 복구 + 폴더/캐시 정비", body:
      "React계 7종(01·02·03·04·30·31·46)을 @babel/standalone@7.29.7·react 18.3.1로 버전 고정해 빈화면 복구. Cache-First 앱 31(uval v3.2)·46(load v1.1) CACHE_NAME 상향. 오타 폴더명 14건 표준화(유튜브민·버전s-{X}.0)."},
    {date:"2026-06-05", title:"WAP 종합검토보고서 작성", body:"37종 WAP 구조·기술스택·배포 체계 종합 검토(MANMIN_홈페이지_WAP_종합검토보고서_2026-06-05.docx)."}
  ],
  pending: [
    "00 포탈 페이지 높이 68,280px — 단일 파일 6,815줄. 섹션 분할 또는 지연 렌더링 검토 여지(현재 기능 이상 없음). 이 높이 때문에 자동 스크린샷·스크롤 테스트가 불가하므로 시각 검수는 사람이 해야 함.",
    "00 포탈 index.html 4행 — Cloudflare 주입 스크립트(/cdn-cgi/scripts/.../email-decode.min.js)가 소스에 저장돼 있음. GitHub Pages에는 해당 경로가 없어 404(무해하나 불필요 요청 1건). 다음 회차 제거 검토.",
    "39 EPI — 부문별 최소배점 로직(mandMin)은 구현됨. 제2025-738호 별지 배점표 세부값과 1:1 재대조 후 필요 시 미세조정.",
    "26·45 sw.js — 내부 헤더 주석의 \"v2.0/MANMIN-Ver2.0\" 문자열 미변경(기능·캐시 무관). 다음 회차 버전표기 통일 시 정리.",
    "05·06·07 소방 겸용 / 21·23·24·25 기계 하위 / 34 공기산정 — 배포 원본 개별 대조(이번 회차는 분야 조사로 분류).",
    "50·51 토목 — 배포 URL 확인 후 KDS 61 40 00(2025-01-21)·KDS 17 10 00(2024-147) 근거 갱신.",
    "NFTC 103A(간이SP)·NFTC 501(제연) 세부 성능값 원문 부칙 재확인.",
    "기계설비 기술기준 [별표8] 냉온수배관 표 원문 수치 및 제2021-851호 이후 개정 유무 법령센터 확인."
  ],
  baseline: [
    ["건축·ENG","엔지니어링사업대가의 기준(별표1~4)","산업부 고시","2024-12-31","건설·통신·산업플랜트·시공상세도 공사비요율 — no.30 Ver4.0 반영"],
    ["소방","NFTC 102 · 103","국립소방연구원공고","2026-07-01","재공고(개정 2026-06-29), 핵심수치 불변"],
    ["소방","NFTC 109 / 103A / 501","공고","109:2026-02-27 / 103A:2024-12-01","현행"],
    ["소방","NFPC 102·103·103A / 109","소방청고시","2025-12-24 / 2025-12-31","성능기준 재고시(고시번호 갱신 여지)"],
    ["에너지","건축물의 에너지절약설계기준","국토부 제2025-738호","2025-12-31","EPI 부문별 최소배점 신설 / 열관류율 별표1 U값 불변"],
    ["건축","건축법 제25조·제19조 / 주차장법 / 국토계획법","현행","2025~2026","상주감리·용도변경·주차 원단위·건폐/용적 미변경"],
    ["건축","건축법 시행령 제86조(일조 정북)","대통령령","2023 개정","기준높이 9m→10m"],
    ["구조","건축구조기준 KDS 41(상위)","국토부 제2024-846호","2024-12-24","무량판·PC(KDS 41 20 10 신규)·중요도"],
    ["구조","KDS 41 12 00 설계하중 / KDS 41 17 00 내진","—","2022-10-11","수치 유지 / 내진 코드 현행"],
    ["토목","KDS 17 10 00 내진 일반","국토부 제2024-147호","2024-03-21","지진구역·위험도계수 상위기준"],
    ["토목","KDS 61 40 00 하수 관로","—","2025-01-21","관로 계수 근거 갱신"],
    ["기계","기계설비 기술기준 [별표8]","국토부 제2021-851호","2021 현행","별표 원문 재확인 권장"],
    ["기계","설비기준규칙 제11조 환기","국토부령 제1531호","2025-10-31","30세대·0.5회/h(용도별 회/h는 설계 권장값)"]
  ]
};
