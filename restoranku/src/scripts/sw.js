/* eslint-disable max-len */
import {
  precacheAndRoute
} from 'workbox-precaching';
import {
  registerRoute
} from 'workbox-routing';
import {
  StaleWhileRevalidate
} from 'workbox-strategies';
import {
  CacheableResponsePlugin
} from 'workbox-cacheable-response';
import CONFIG from './globals/config';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({
    url
  }) => url.origin + CONFIG.BASE_URL,
  //  ada 4 strategi caching lainnya CacheFirst, CacheOnly, NetworkFirst, NetworkOnly namun saya menggunakan StaleWhileRevalidate
  new StaleWhileRevalidate({
    cacheName: 'dataCacheRestoran',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', () => {
  console.log('Service Worker: Pushed');
});