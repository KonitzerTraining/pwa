const CACHE_NAME = "little-crm";
const CACHE_URLS = [
    // HTML
    "/pwa/06_json/index.html",

    // CSS
    "css/bootstrap.min.css",

    // JavaScript
    "js/jquery-3.3.1.min.js",
    "js/popper.min.js",
    "js/bootstrap.min.js",
    "main.js",

    // Images
    // Json
    "http://localhost:3000/customer/"
];

self.addEventListener("install", function (event) {
    console.log("install");
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(CACHE_URLS);
        })
    );
});

self.addEventListener("fetch", function (event) {
    console.log('fetch');

    var requestURL = new URL(event.request.url);
    console.log(requestURL);

    if (requestURL.pathname === "/pwa/06_json/index.html" || requestURL.pathname === "/pwa/06_json/") {
        event.respondWith(
            caches.open(CACHE_NAME).then(function (cache) {
                return cache.match("index.html", {'ignoreSearch': true}).then(function (cachedResponse) {

                    var fetchPromise = fetch("index.html")
                        .then(function (networkResponse) {
                            cache.put("index.html", networkResponse.clone());
                            return networkResponse;
                        });
                    return cachedResponse || fetchPromise;

                })
            })
        );
    }
    else if (requestURL.pathname === "/customer/") {

        event.respondWith(caches.open(CACHE_NAME).then(function (cache) {

            // Zuerst aus dem Netz leifern
            return fetch(event.request).then(function (networkResponse) {

                // Version aus dem Netz speichern
                cache.put(event.request, networkResponse.clone());
                return networkResponse;

            }).catch(function () {
                return cache.match(event.request);
            })
        }));

    } else {
        event.respondWith(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request);
            })
        })
        );
    }
    console.log(requestURL);
});

