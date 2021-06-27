import CONFIG from './globals/config';

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
  console.log('Workbox berhasil dimuat');
} else {
  console.log('Workbox gagal dimuat');
}

workbox.precaching.precacheAndRoute([
  { url: '/index.html', revision: '1' },
  { url: '/bundle.js', revision: '1' },
  { url: '/images/heros/hero-image_4.jpg', revision: '1' },
  { url: '/images/connection-lost.json', revision: '1' },
  { url: '/assets/manifest.json', revision: '1' },
  { url: '/assets/favicon.ico', revision: '1' },
  { url: '/assets/favicon-16x16.png', revision: '1' },
  { url: '/assets/favicon-32x32.png', revision: '1' },
  { url: '/assets/favicon-48x48.png', revision: '1' },
  { url: '/assets/android-chrome-36x36.png', revision: '1' },
  { url: '/assets/android-chrome-48x48.png', revision: '1' },
  { url: '/assets/android-chrome-72x72.png', revision: '1' },
  { url: '/assets/android-chrome-96x96.png', revision: '1' },
  { url: '/assets/android-chrome-144x144.png', revision: '1' },
  { url: '/assets/android-chrome-192x192.png', revision: '1' },
  { url: '/assets/android-chrome-256x256.png', revision: '1' },
  { url: '/assets/android-chrome-384x384.png', revision: '1' },
  { url: '/assets/android-chrome-512x512.png', revision: '1' },
  { url: '/webfonts/fa-solid-900.eot', revision: '1' },
  { url: '/webfonts/fa-solid-900.svg', revision: '1' },
  { url: '/webfonts/fa-solid-900.ttf', revision: '1' },
  { url: '/webfonts/fa-solid-900.woff', revision: '1' },
  { url: '/webfonts/fa-solid-900.woff2', revision: '1' },
  { url: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js', revision: '1' },
]);

workbox.routing.registerRoute(
  '/index.html',
  workbox.strategies.cacheOnly(),
);

workbox.routing.registerRoute(
  '/bundle.js',
  workbox.strategies.cacheOnly(),
);

workbox.routing.registerRoute(
  '/images/heros/hero-image_4.jpg',
  workbox.strategies.cacheOnly(),
);

workbox.routing.registerRoute(
  '/images/connection-lost.json',
  workbox.strategies.cacheOnly(),
);

workbox.routing.registerRoute(
  'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js',
  workbox.strategies.cacheOnly(),
);

workbox.routing.registerRoute(
  '/assets/*',
  workbox.strategies.cacheOnly(),
);

workbox.routing.registerRoute(
  '/webfonts/*',
  workbox.strategies.cacheOnly(),
);

workbox.routing.registerRoute(
  new RegExp(CONFIG.BASE_URL),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'kulinerin-app',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 40,
      }),
    ],
  }),
);
