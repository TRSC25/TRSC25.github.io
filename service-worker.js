const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      './js/bootstrap.min.js',
      './js/s.w.js',
      './js/service-worker.js',
      './css/bootstrap.min.css',
    ]),
  );
});
