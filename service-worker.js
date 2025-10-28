// Service Worker para Quiz: Navegando pelas Estrelas
// Aumente este número quando fizer atualizações: v1, v2, v3...
const CACHE_NAME = 'quiz-navegacao-v2';

const urlsToCache = [
  '/quiz-sistema-localizacao-pedro/',
  '/quiz-sistema-localizacao-pedro/index.html',
  '/quiz-sistema-localizacao-pedro/css/styles.css',
  '/quiz-sistema-localizacao-pedro/css/backgrounds.css',
  '/quiz-sistema-localizacao-pedro/js/script.js',
  '/quiz-sistema-localizacao-pedro/js/questions.js',
  '/quiz-sistema-localizacao-pedro/js/animations.js',
  '/quiz-sistema-localizacao-pedro/js/names.js'
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  console.log('[SW] Instalando nova versão...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Cache aberto:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[SW] Todos os arquivos em cache!');
        // Força a ativação imediata
        return self.skipWaiting();
      })
  );
});

// Ativação do Service Worker
self.addEventListener('activate', event => {
  console.log('[SW] Ativando nova versão...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('[SW] Removendo cache antigo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Nova versão ativa!');
        // Toma controle de todas as páginas imediatamente
        return self.clients.claim();
      })
      .then(() => {
        // Notifica todos os clientes sobre a atualização
        return self.clients.matchAll().then(clients => {
          clients.forEach(client => {
            client.postMessage({
              type: 'SW_UPDATED',
              version: CACHE_NAME
            });
          });
        });
      })
  );
});

// Interceptar requisições com estratégia inteligente
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignora requisições de outros domínios
  if (url.origin !== location.origin) {
    return;
  }

  // Estratégia: Network First para HTML (sempre busca versão mais nova)
  if (request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Cacheia a nova versão
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // Fallback para cache se offline
          return caches.match(request);
        })
    );
    return;
  }

  // Estratégia: Cache First para CSS/JS/images (usa cache, atualiza em background)
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        // Retorna do cache e atualiza em background
        const fetchPromise = fetch(request).then(networkResponse => {
          // Atualiza o cache em background
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Se falhar, não faz nada (já tem no cache)
          return cachedResponse;
        });

        // Retorna cache imediatamente, ou espera rede se não tiver cache
        return cachedResponse || fetchPromise;
      })
  );
});
