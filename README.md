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

