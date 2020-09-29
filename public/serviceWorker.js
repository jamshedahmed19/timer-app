const CACHE_NAME = "version 0.1";
const urlsToCache = [
  "index.html",
  "./favicon-32x32.png",
  "./logo192.png",
  "./logo512.png",
];

const self = this;

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("index.html"));
    })
  );
});

// Activate the SW
self.addEventListener("fetch", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      if (!cacheWhitelist.includes(cacheNames)) {
        return caches.delete(cacheNames);
      }
    })
  );
});
