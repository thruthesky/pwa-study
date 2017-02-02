# pwa-study
PWA 공부하면서 작성한 Repo 입니다.

# 팁

* Devetool => Network 에서 service worker 와 관련된 것들은 아이콘이 다르게 표시가 됩니다.
* Devtool 에 보시면, Application => service workers 에서 많은 정보를 볼 수 있습니다.
    * Status 의 #??? 와 같이 번호에 따라서 service worker 가 서로 다르게 설치된 것을 볼 수 있습니다.
    * Service worker 를 중단하거나 Unregister 할 수 있습니다.



# 설명

간단하게

1. index.html 을 하나 만들고, 강아지 사진을 하나 보여줍니다.

2. serviceWoker 를 등록하는데,

    service-worker.js 에 관련 코드를 두었습니다.

3. 특이 한 점은

    dog.png 를 웹 브라우저 화면에 보여주면서,

    실제로 service-worker.js 에서는

    cat.png 를 캐시합니다.

    이것은 devtool 에서 확인을 할 수 있습니다.

4. service-worker.js 를 수정하면, install 합니다. 하지만, activate 를 시도 하지 않는 것 같습니다. ( 이부분에 대해서는 공부가 필요 함 )

5. caches.open('버전') 에서 버전을 변경하면 "#??? waiting to activate" 라고 나옵니다.

    즉, 변경된 코드를 actviate 하기 위해서 더 노력하는 것 같습니다.


# Service Worker Installation and Update

* service worker 소스 코드를 업데이트하면, 
* 변경하기 전의 기존 service worker 는 계속 실행되고,
* 새로 변경된 service worker 는 waiting 상태가 된다.
    * 처음에는 이것 때문에 많이 혼동된다.
* 하지만, 현재 사용 중인 웹브라우저의 탭 또는 웹브라우저 종료 후에 다시 실행하면, 기존 service worker 는 사라진다.
    * service worker 의 파일 이름이 동일 한 경우, 헷갈리므로 #??? 와 깉이 service worker ID 번호로 새로운 코드가 적용되었는지 안되었는지 알 수 있다.

# Service Worker 에서 캐시한 데이터 삭제.

'activiate' 이벤트가 발생 할 때, 기존의 캐시 데이터를 삭제 할 수 있다.

