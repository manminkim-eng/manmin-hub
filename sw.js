/* MANMIN 종합관리 허브 · Service Worker · VER-1.2
   전략: 정적 자산 프리캐시 + 네트워크 우선(문서), 캐시 우선(자산) */
/* §17-1 — 도구 고유 접두어. 종전 `k !== CACHE` 필터는 같은 origin 의 39종 캐시를 전부 지웠다 */
const PREFIX = 'manmin-hub-';
const CACHE = 'manmin-hub-v1.2.12';   /* 2026-10-30 · 27 RTS 5.3.2 정정 (종전 v1.2.11 포털 v1.0.2 앱 설치 단추·홈페이지 v2.17 반영) (종전 v1.2.10 포털 매뉴얼·홈페이지 v2.16) */
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
