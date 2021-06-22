if (!('serviceWorker' in navigator)) {
  console.log('Service worker tidak didukung browser ini.');
} else {
  registerServiceWorker();
}

function registerServiceWorker() {
  return navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      console.log('Registrasi service worker berhasil.');
      return registration;
    })
    .catch((err) => {
      console.error('Registrasi service worker gagal.', err);
    });
}
