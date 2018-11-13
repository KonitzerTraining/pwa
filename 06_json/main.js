(function () {
    "use strict";

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then((registration) => console.log(`Registered for ${registration.scope}`))
            .catch((err) => console.log(`Failed: ${err}`));
    } else {
        console.log('no service worker');
    }

    $.getJSON("http://localhost:3000/customer/", function (data) {

        data.forEach(function (item) {
            $(`<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.credit}</td>
            </tr>`).appendTo('#content');
        });
    });
}());