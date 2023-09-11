const cacheName = "v2-BrandNewHomePage";

const appShellFiles = [
  //service worker essentials
  "./service-worker.js",
  "./js/s.w.js",
  //home page and bootstrap
  "./",
  "./js/bootstrap.min.js",
  "./css/bootstrap.min.css",
  //percentage calculator
  "./percentage-calculator/"

];

self.addEventListener("install", (e) => {
  console.log("[Service Worker INFO] Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[Service Worker INFO] Caching all...");
      await cache.addAll(appShellFiles);
    })(),
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker INFO] Fetching cached resource: ${e.request.url}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      console.log(`[Service Worker INFO] Fetching fresh resource: ${e.request.url}`);
      return response;
    })(),
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key === cacheName) {
            return;
          }
          console.log(`[Service Worker INFO] Expired Cache Deleted`);
          return caches.delete(key);
        }),
      );
    }),
  );
});
