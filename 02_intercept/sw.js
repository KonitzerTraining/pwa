self.addEventListener("install", function () {
    console.log("install");
});

self.addEventListener("activate", function () {
    console.log("activate");
});

self.addEventListener("fetch", function (event) {
   //console.log(event);
    if (event.request.url.includes("styles.css")) {
        console.log("Fetch request for:", event.request.url);

        event.respondWith(
            new Response(
                "body { background-color: green }",
                { headers: { "Content-Type": "text/css" }}
            )
        );
    }

    if (event.request.url.includes("styles1.css")) {
        console.log("Fetch request for:", event.request.url);

        event.respondWith(
           fetch("container.css")
        );
    }
});




/*



*/