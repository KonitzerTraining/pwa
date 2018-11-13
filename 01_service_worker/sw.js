self.addEventListener('install', function (event) {
    console.log('installed');
});



/*
self.addEventListener('fetch', function (event) {

    console.log(event);

    event.respondWith(caches.match(event.request)
        .then(cachedResponse => cachedResponse || fetch(event.request)));
});
*/

