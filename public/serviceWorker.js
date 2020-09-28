const CACHE_NAME = "verion-0.1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll([
        "./",
        "./index.html",
        "./logo192.png",
        "./logo512.png",
        "./manifest.json",
        "./browserconfig.xml",
        "./favicon-32x32.png",
        "./android-icon-144x144.png",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((result) => {
      if (result) {
        return result;
      }
    })
  );
});
