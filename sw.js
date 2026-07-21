const CACHE = 'feedbacks-v4';
const ASSETS = [
  './index.html',
  './feedback_form.html',
  './feedback_view.html',
  './shared.js',
  './vendor/supabase.min.js',
  './logonew.png',
  './logo-maxx.svg',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* Network-first: online sempre pega a versão mais nova; offline usa o cache.
   Só interceptamos GET — POST/insert do Supabase nunca deve vir do cache. */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(resp => {
        /* Atualiza o cache dos nossos próprios assets (mesma origem) */
        if (resp.ok && e.request.url.startsWith(self.location.origin)) {
          const copy = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return resp;
      })
      .catch(() => caches.match(e.request))
  );
});
