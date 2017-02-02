

/**
 * install 이벤트가 fire 되면 무엇을 캐시 할 것인지 결정합니다.
 * 
 * 특이한 점은, 웹 브라우저에서는 cat.png 를 보여주지 않지만, cat.png 을 웹 서버로 부터 가져와서 캐시를 합니다.
 * 
 */
self.addEventListener('install', e => {
    
  console.info('Service workser installation...');
  	e.waitUntil(
        caches.open('cacheName-or-cacheVersion').then(( function(cache) {
            cache.add('cat.png')
        }))
    );
    
});

/**
 * Service worker 가 install 된 다음에, activate 이벤트가 fire 됩니다.
 * 
 */
self.addEventListener('activate', e => {
    console.info('Your service worker is now activated.');
});


/**
 * 웹 브라우저가 웹 서버로 부터 정보(데이터)를 가져 오려고 할 때, fetch 이벤트가 fire 됩니다.
 * 
 * 웹 브라우저가 웹 서버로 부터 가져오기를 원하는 정보(데이터)를 마음데로 바꿀 수 있습니다.
 * 
 * 본 에제에서는,
 *  
 *      1. 웹 브라우저가 dog.png 를 웹 서버로 부터 가져오기를 원할 때,
 *      2. 위에서 캐시한 cat.png 를 보여줍니다.
 * 
 * 이 처럼, 원하는 데로, 마음데로 변경을 할 수 있습니다.
 * 
 */
self.addEventListener('fetch', event => {
       const url = new URL(event.request.url);
  // serve the horse PNG from the cache if the request is
  // same-origin and the path is '/dog.svg' So same domain
  if (url.origin == location.origin && url.pathname == '/dog.png') {
    event.respondWith(caches.match('/horse.png'));
      }
});

