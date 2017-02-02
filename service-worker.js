var cacheVersion = "v6";

/**
 * install 이벤트가 fire 되면 무엇을 캐시 할 것인지 결정합니다.
 * 
 * 특이한 점은, 웹 브라우저에서는 cat.png 를 보여주지 않지만, cat.png 을 웹 서버로 부터 가져와서 캐시를 합니다.
 * 
 * 
 * 
 */
self.addEventListener('install', e => {
    
  console.info('[ServiceWorkser] installation');
  	e.waitUntil(
        caches.open( cacheVersion ) // cacheVersion 을 바꿀 때마사 설치를 새로 한다. 단, activate 는 바로 되지 않을 수 있다.
            .then(( function(cache) {
                console.info("[ServiceWorker] Going to cache");
                cache.add('cat.png')
            })
        )
    );
    
});


/**
 * Service worker 가 install 된 다음에, activate 이벤트가 fire 됩니다.
 * 
 */
self.addEventListener('activate', e => {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        /**
         * 현재 사용 중인 버전이 아닌 예전 버전(또는 사용중이지 않는 버전)의 모든 캐시 데이터를 삭제한다.
         */
        caches.keys().then(function(keyList) {
            return Promise.all( keyList.map(function(key) {
                if ( key != cacheVersion ) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );

    // 최신 데이터를 리턴하지 않는 경우에, service worker 를 더 빨리 activate 한다고 함.
    // 참고 : 구글 Your First Progressive Web App 의 final 버젼 service-worker.js 참고.
    return self.clients.claim();
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
    console.log('fetch begins...');
    const url = new URL(event.request.url);
    if ( url.origin == location.origin && url.pathname.indexOf('/dog.png') != -1 ) {
        console.log('hijacking the request of dog.png and response with cat.png');
        event.respondWith( caches.match('cat.png') );
    }
});



