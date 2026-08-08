/* MANMIN 종합관리 허브 · Service Worker · VER-1.1
   전략: 정적 자산 프리캐시 + 네트워크 우선(문서), 캐시 우선(자산) */
const CACHE = 'manmin-hub-v1.1.3';
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
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
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
