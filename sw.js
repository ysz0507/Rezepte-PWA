console.log('I am a Service Worker!');

var cacheName = 'CacheFor PWA';
var filesToCache = [
  './',
  './index.html',
  './html/eintragen.html',
  './html/rezept.html',
  './html/settings.html',
  './html/suche.html',
  './html/uebersicht.html',
  './css/main.css',
  './css/units.css',
  './js/main.js',
  './js/rezepteHinzufuegen.js',
  './images/cross.png',
  './images/gear.png',
  './images/search.png',
  './images/stack.png'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});