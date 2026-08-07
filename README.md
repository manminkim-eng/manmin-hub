# MANMIN 웹 종합관리 허브

**MANMIN VER-1.0** · 기준일 2026-08-05

㈜대성건축사사무소 · 건축사 김만민(#20072)이 운영하는 엔지니어링 WAP 자산의 **관리문서 전용 사이트**입니다.
대외 서비스는 [KIMMANMIN 플랫폼](https://manminkim-eng.github.io/KIMMANMIN/)을 이용하십시오.

## 공개 주소

https://manminkim-eng.github.io/manmin-hub/

## 구성

| 파일 | 문서 | 액센트 |
|---|---|---|
| `index.html` | 종합관리 허브 | 골드 `#B8863B` |
| `repo-audit.html` | GitHub 저장소 전수 분류·현황 분석 | 청록 `#1F7A6B` |
| `wap-registry.html` | WAP 통합관리대장 (데스크톱) | 블루 `#2F6FB0` |
| `law-review.html` | WAP 법규·기술기준 정밀검토 | 적갈 `#B0453A` |
| `wap-registry-mobile.html` | WAP 통합관리대장 (모바일 전용) | 보라 `#6F5AA6` |
| `404.html` | 오류 페이지 | 골드 |

## assets

| 파일 | 용도 | 비고 |
|---|---|---|
| `manmin.css` | 공통 디자인 시스템 | 전 페이지 공유 |
| `manmin-logo.jpg` | 로고 **원본** | 2048×2048 JPEG · 무수정 보존 |
| `manmin-logo-512.jpg` | 로고 축소본 | 512×512 |
| `apple-touch-icon.png` | iOS 홈화면 아이콘 | 180×180 |
| `favicon.png` | 파비콘 | 64×64 |

로고 원본(`manmin-logo.jpg`)은 **어떤 가공도 하지 않은 상태로 보존**합니다. 축소본은 파비콘·홈화면 아이콘 전용 파생물입니다.

## 설계 원칙

- **외부 리소스 의존성 0** — CDN·웹폰트·외부 스크립트 없음. 오프라인·폐쇄망에서도 레이아웃 정상 (본문의 WAP 배포주소는 콘텐츠 링크이므로 별개)
- **ASCII 파일명** — URL 인코딩 이슈 없음
- **상대경로 링크** — 로컬·NAS·GitHub Pages 어디서든 동일 동작
- **인쇄 대응** — 전 페이지 A4 `@page` 및 `@media print` 규칙. 각 페이지 우상단 `인쇄 · PDF` 버튼
- **스크립트 제한 환경 대응** — 모바일판은 목록을 정적 렌더링. JS가 막혀도 내용은 표시됨

## 배포 방법

1. GitHub에서 `manmin-hub` 저장소 생성 (Public)
2. 본 폴더의 전체 파일을 저장소 루트에 업로드
3. Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `/ (root)`
4. 수 분 후 위 공개 주소로 접속

`.nojekyll` 파일이 포함되어 있어 Jekyll 처리 없이 정적 파일 그대로 서빙됩니다.

## 갱신 규칙

홈페이지 또는 개별 WAP을 수정·배포한 작업은 **통합관리대장을 갱신해야 완료**로 봅니다.
세부 절차는 `MANMIN_파일기준경로_작업지시서.md` 제9장에 규정되어 있습니다.

| 문서 | 정본 | 갱신 시점 |
|---|---|---|
| WAP 현황 | `WAP_통합관리대장.xlsx` | 홈페이지·WAP 배포 직후 (필수) |
| 법규 baseline | `law-review.html` | 분기 정기검토 (첫째주 화요일) |
| 저장소 감사 | 전수분류현황 `.docx` | 반기 또는 저장소 10개 이상 증감 시 |

법규 확인은 LawMCP를 최우선으로 사용하고, KDS·KCS(국가건설기준)는 국가건설기준센터(kcsc.re.kr)로 확인합니다.
