console.log('hello from custom sw')
// workbox.routing.registerRoute(
//   new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
//   workbox.strategies.cacheFirst({
//     cacheName: 'google-fonts',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 30,
//       }),
//       new workbox.cacheableResponse.Plugin({
//         statuses: [0, 200]
//       }),
//     ],
//   }),
// );

// self.addEventListener('fetch', function (e) {
//   console.log('[Service Worker] Fetch', e.request.url);
//   if (/openweathermap/i.test(e.request.url)) {
//     /*
//      * When the request URL contains dataUrl, the app is asking for fresh
//      * weather data. In this case, the service worker always goes to the
//      * network and then caches the response. This is called the "Cache then
//      * network" strategy:
//      * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
//      */

//     // const staleWhileRevalidate = new workbox.strategies.StaleWhileRevalidate();
//     // e.respondWith(staleWhileRevalidate.handle({ event: e }));

//     e.respondWith(
//       caches.open('api-cache').then(function (cache) {
//         return cache.match(e.request).then(function (response) {
//           var fetchPromise = fetch(e.request).then(function (networkResponse) {
//             cache.put(e.request, networkResponse.clone());
//             return networkResponse;
//           })
//           return response || fetchPromise;
//         })
//       })
//     );
//   } else {
//     e.respondWith(
//       caches.match(e.request).then(function (response) {
//         return response || fetch(e.request);
//       })
//     );
//   }
// });