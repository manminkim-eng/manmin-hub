/* MANMIN 종합관리 허브 · Service Worker · VER-1.2
   전략: 정적 자산 프리캐시 + 네트워크 우선(문서), 캐시 우선(자산) */
/* §17-1 — 도구 고유 접두어. 종전 `k !== CACHE` 필터는 같은 origin 의 39종 캐시를 전부 지웠다 */
const PREFIX = 'manmin-hub-';
const CACHE = 'manmin-hub-v1.2.92';   /* 2026-11-10 · 홈피 v2.91 포트폴리오 PDF A4 인쇄 보정 기록(§25-6-65) (종전 v1.2.91) */     /* 2026-11-10 · 구조토목포털 v1.0.14 매뉴얼 Ver-1.1 · 홈피 v2.90 아이콘 오류 정정 기록(§25-6-64) (종전 v1.2.90) */   /* 2026-11-10 · N값 지내력 환산 v1.1.0 · 구조토목포털 v1.0.13 · 홈피 v2.89 기록(§25-6-63) (종전 v1.2.89) */   /* 2026-11-09 · N값 지내력 환산 v1.0.1 신규 · 홈피 v2.88 · 구조토목포털 v1.0.12 · 설치안내 43종 기록(§25-6-62) (종전 v1.2.88) */   /* 2026-11-09 · 편의시설 v1.2.2 A4 서명란 · 건축포털 v1.0.16 · 홈피 v2.87 기록(§25-6-61) (종전 v1.2.87) */   /* 2026-11-09 · 건축포털 v1.0.15 매뉴얼 Ver-1.1 · 홈피 v2.85 · v2.86 기록(§25-6-60) (종전 v1.2.86) */   /* 2026-11-09 · 편의시설 v1.2.1 매뉴얼 · 영상 · 홈피 v2.84 · 건축포털 v1.0.14 기록(§25-6-59) (종전 v1.2.85) */   /* 2026-11-09 · 편의시설 v1.1.0 · 홈피 v2.83 · 건축포털 v1.0.13 기록(§25-6-57) (종전 v1.2.84) */   /* 2026-11-09 · 장애인 편의시설 v1.0.0 신규 · 홈피 v2.82 · 건축포털 v1.0.12 기록(§25-6-56) (종전 v1.2.83) */   /* 2026-11-09 · 안전점검등 대가 유튜브 · 홈피 v2.81 · 건축포털 v1.0.11 기록(§25-6-55) (종전 v1.2.82) */ /* 2026-11-09 · 안전점검등 대가 v1.0.4 사용자 매뉴얼 기록(§25-6-54) (종전 v1.2.81) */
const ASSETS = [
  './', './index.html', './repo-audit.html', './wap-registry.html',
  './law-review.html', './404.html',
  './assets/fonts/NotoSansKR-var.woff2',
  './assets/manmin.css', './assets/manmin.js', './assets/data.js', './assets/manmin-logo.jpg', './assets/favicon.png',
  './assets/apple-touch-icon.png', './assets/icon-192.png', './assets/icon-512.png',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS).catch(() => Promise.all(ASSETS.map(u => c.add(u).catch(() => null)))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE && k.indexOf(PREFIX) === 0).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  if (req.mode === 'navigate') {            // 문서: 네트워크 우선 → 실패 시 캐시
    e.respondWith(
      fetch(req)
        .then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); return r; })
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }
  e.respondWith(                            // 자산: 캐시 우선
    caches.match(req).then(r => r || fetch(req).then(res => {
      const c = res.clone(); caches.open(CACHE).then(x => x.put(req, c)); return res;
    }))
  );
});
