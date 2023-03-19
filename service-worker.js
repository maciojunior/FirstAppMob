var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/fontawesome-all.min.css',

        './assets/css/main.css',

        './assets/css/noscript.css',

        './assets/js/breakpoints.min.js',
        
        './assets/js/browser.min.js',

        './assets/js/jquery.min.js',

        './assets/js/main.js',

        './assets/js/util.js',

        './images/bg.webp',
        './images/icon_16.png',
        './images/icon_20.png',
        './images/icon_29.png',
        './images/icon_32.png',
        './images/icon_57.png',
        './images/icon_58.png',
        './images/icon_92.png',
        './images/icon_102.png',
        './images/icon_128.png',
        './images/icon_512.png',    
        './images/overlay.webp',
        './images/pic01.webp',
        './images/pic02.webp',
        './images/pic03.webp',

      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});