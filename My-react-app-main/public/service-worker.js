self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('your-app-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/logo.png',
          '/static/css/*.css', 
          '/static/js/*.js',
        ]);
      })
    );
  });