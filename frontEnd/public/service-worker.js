const VERSION = "v5";
const CACHE_NAME = "paper-cache_" + VERSION;
const IMAGE_CACHE_NAME = "paper-image_" + VERSION;

// 자주 안바뀌는 리소스
const IMMUTABLE_CACHE = [
  "/bannerAd/firstAd.svg",
  "/category/activitySupportFund.svg",
  "/category/doubleBenefit.svg",
  "/category/livingExpenses.svg",
  "/category/tuitionFee.svg",
  "/guide/first_guide.svg",
  "/guide/second_guide.svg",
  "/guide/third_guide.svg",
  "/guide/fourth_guide.svg",
  "/header/appName.svg",
  "/header/goBack.svg",
  "/header/logo.svg",
  "/header/notification.svg",
  "/header/searchScholarship.svg",
  "/header/setting.svg",
  "/navBar/home.svg",
  "/navBar/myInfo.svg",
  "/navBar/scrap.svg",
  "/navBar/search.svg",
  "/scholarship/darr.svg",
  "/scholarship/first_data.svg",
  "/scholarship/second_data.svg",
  "/scholarship/third_data.svg",
  "/userinfo/fqa.svg",
  "/userinfo/loadMap.svg",
  "/userinfo/partnership.svg",
  "/userinfo/policy.svg",
  "/userinfo/systemNotification.svg",
  "/userinfo/view.svg",
  "/bgImg.svg",
];

// 자주 바뀌는 리소스
const MUTABLE_CACHE = ["/guide", "/scholarship", "/scrap", "/userinfo"];

const CACHE_LIST = IMMUTABLE_CACHE.concat(MUTABLE_CACHE);

const DYNAMIC_PATTERN = /(\.eot$|\.ttf$|\.woff$|^\/icons)/;

self.addEventListener("install", (event) => {
  console.log("Service Worker - install");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_LIST);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker - activate");

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key !== IMAGE_CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker -", event.request.url);
  const url = new URL(event.request.url);

  // 자주 변경되지 않는 리소스인 경우
  if (IMMUTABLE_CACHE.includes(url.pathname)) {
    // 캐시 우선, 후 네트워크 응답
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  } else if (MUTABLE_CACHE.includes(url.pathname)) {
    // 자주 변경되는 리소스인 경우 네트워크 우선, 후 캐시 응답
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return fetch(event.request)
          .then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
          .catch(() => {
            // 네트워크 문제가 발생한 경우 캐시에서 응답
            return cache.match(event.request);
          });
      })
    );
  }
});
