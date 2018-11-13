if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then((registration) => console.log(`service worker successfully registered for ${registration.scope}`))
        .catch((err) => console.log(`Service worker registration failed: ${err}`));
} else {
    console.log('no service worker');
}