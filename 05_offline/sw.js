const CACHE_NAME = "myApp";
const CACHE_URLS = [
    "./offline.html",
    "./styles.css"
];

self.addEventListener("install", function (event) {
    console.log("install");

    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(CACHE_URLS);
        })
    );

});

self.addEventListener("activate", function () {
    console.log("active");
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        fetch(event.request).catch(function () {

            return caches.match(event.request)
                .then(function (response) {

                    console.dir(response);

                    if (response) {
                        return response;
                    } else if (event.request.headers.get("accept").includes("text/html")) {
                        return caches.match("./offline.html");
                    }
                })

        })
    );
});