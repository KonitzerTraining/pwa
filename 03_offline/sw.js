let template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body {
            width: 500px;
            margin: 0 auto;
        }

    </style>
</head>
<body>

<h1>Little CRM</h1>
<p>Sie sind leider offline.</p>
</body>
</html>`;

self.addEventListener("install", function () {
    console.log("install");
});


self.addEventListener("fetch", function (event) {
    event.respondWith(
        fetch(event.request).catch(function () {
            return new Response(
                template,
                {headers: {"Content-Type": "text/html"}}
            )
        })
    );
});