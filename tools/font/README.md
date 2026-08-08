# MANMIN 폰트 도구

WAP 전체에 로컬 Noto Sans KR 서브셋 폰트를 적용하기 위한 배포 도구.

| 파일 | 역할 |
|---|---|
| `subset.py` | google/fonts 고정 SHA 원본 → KS X 1001 서브셋 woff2 (3,659자 / 418KB) |
| `patch.py` | WAP `index.html`·`sw.js`에 로컬 폴백 적용 (멱등) |
| `manmin-fonts.css` | 배포용 `@font-face` 정본 |

## 재현성

```bash
pip install fonttools==4.63.0 Brotli==1.2.0
curl -fsSL -o noto.ttf \
  "https://raw.githubusercontent.com/google/fonts/2d85e20401920891efb7cd6272d6339685df2820/ofl/notosanskr/NotoSansKR%5Bwght%5D.ttf"
python subset.py noto.ttf assets/fonts/NotoSansKR-var.woff2
```

버전을 고정하면 바이트 동일한 출력이 나온다(검증됨, sha256 동일).

## 패치 적용

```bash
cd <WAP 저장소 루트>
PROFILE=fire python patch.py        # 01~08 소방 계열
PROFILE=kimmanmin python patch.py   # KIMMANMIN 대표사이트
```

두 번 실행해도 결과가 바뀌지 않는다(멱등).

## 설계 원칙

로컬 `@font-face`는 반드시 **`'Noto Sans KR Local'`처럼 패밀리명을 분리**해 선언하고
폰트 스택 2순위에 둔다. `'Noto Sans KR'`로 그대로 선언하면
나중 선언인 로컬이 항상 이겨 Google Fonts가 무용지물이 되고
418KB를 매번 내려받게 된다.

| 상황 | 동작 |
|---|---|
| 온라인 | Google Fonts 적용, 로컬 woff2 미다운로드 |
| 오프라인·관공서 차단망 | 로컬 폴백, 한글 안 깨짐 |

단 `manmin-hub`는 Google Fonts를 쓰지 않으므로 로컬을 1순위로 둔다.
