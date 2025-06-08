self.addEventListener('fetch', function(event) {
  console.log('Service Worker fetch event');
});

self.addEventListener('install', function(event) {
  console.log('Service Worker installed');
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(function(registration) {
      console.log('Service Worker registriert:', registration.scope);
    })
    .catch(function(err) {
      console.log('Service Worker Registrierung fehlgeschlagen:', err);
    });
}
