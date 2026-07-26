// Minimal service worker — just enough presence to make the site installable
// as an app on Android/Chrome. It does not cache anything, so the app always
// loads the latest live data from Supabase (no stale offline data risk).
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  // pass-through: always fetch fresh from network
  e.respondWith(fetch(e.request));
});
