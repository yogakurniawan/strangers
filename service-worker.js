/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

importScripts(
  "/strangers/precache-manifest.8abb13dc9c815687e18a9411375c3112.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html", {

  blacklist: [/^\/__/, /\/[^\/]+.[^\/]+$/],
});

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
    ],
  }),
);

self.addEventListener('fetch', function (e) {
  console.log('[Service Worker] Fetch', e.request.url);
  if (/reqres/i.test(e.request.url)) {
    /*
     * When the request URL contains dataUrl, the app is asking for fresh
     * weather data. In this case, the service worker always goes to the
     * network and then caches the response. This is called the "Cache then
     * network" strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
     */

    const staleWhileRevalidate = new workbox.strategies.StaleWhileRevalidate();
    e.respondWith(staleWhileRevalidate.handle({ event: e }));

    // e.respondWith(
    //   caches.open('api-cache').then(function (cache) {
    //     return cache.match(e.request).then(function (response) {
    //       var fetchPromise = fetch(e.request).then(function (networkResponse) {
    //         cache.put(e.request, networkResponse.clone());
    //         return networkResponse;
    //       })
    //       return response || fetchPromise;
    //     })
    //   })
    // );
  } else {
    e.respondWith(
      caches.match(e.request).then(function (response) {
        return response || fetch(e.request);
      })
    );
  }
});
