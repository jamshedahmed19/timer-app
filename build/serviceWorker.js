const CACHE_NAME = "verion-0.1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
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
