self.addEventListener("install", function (event) {
    console.log("install");

    event.waitUntil(
        caches.open("offline").then(function (cache) {
           return cache.add("./offline.html");
        })
    );

});

self.addEventListener("activate", function () {
    console.log("active");
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        fetch(event.request).catch(function () {
           return caches.match("./offline.html");
        })
    );
});