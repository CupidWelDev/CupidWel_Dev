const VERSION = "v1";
const CACHE_NAME = `cache_${VERSION}`;

// 자주 안바뀌는 리소스
const IMMUTABLE_CACHES = ["/**/*.svg", "/*.svg"];
// 자주 바뀌는 리소스
const MUTABLE_CACHES = [
  "/",
  "../pages/*+/*.tsx, ../pages/*+/*.ts, ../pages/*+/*.js, ../pages/*+/*.jsx",
  "../components/*+/*.tsx, ../components/*+/*.ts, ../components/*+/*.js, ../components/*+/*.jsx",
];

// 캐시 목록들
const CACHE_LIST = IMMUTABLE_CACHES.concat(MUTABLE_CACHES);

self.addEventListener("install", (event) => {
  // console.log("Service worker installing...");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_LIST);
    })
  );

  // 캐시 목록들을 캐시에 저장
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          //캐시 이름이 CACHE_NAME이 아닌 것들을 삭제
          if (key !== CACHE_NAME) {
            console.log("Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activating...");
});

self.addEventListener("fetch", (event) => {
  console.log("Service worker fetching...", event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
