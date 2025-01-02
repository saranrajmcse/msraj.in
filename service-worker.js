// Cached core static resources 
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", './assets/img/ico.png']);
        })
    );
});

// Fatch resources
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});

// Service Worker Code
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            // Iterate through all caches and delete them
            return Promise.all(
                cacheNames.map((cacheName) => {
                    console.log(`Deleting cache: ${cacheName}`);
                    return caches.delete(cacheName);
                })
            );
        })
    );
});
