

/**
 * install 이벤트가 fire 되면 무엇을 캐시 할 것인지 결정합니다.
 * 
 * 특이한 점은, 웹 브라우저에서는 cat.png 를 보여주지 않지만, cat.png 을 웹 서버로 부터 가져와서 캐시를 합니다.
 * 
 */
self.addEventListener('install', e => {
    
  console.log('Service workser installation...');
  	e.waitUntil(
        caches.open('cacheName-or-cacheVersion').then(( function(cache) {
            cache.add('cat.png')
        }))
    );
    
});
