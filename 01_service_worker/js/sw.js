self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => cachedResponse || fetch(event.request)));
});