'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5f74376bb8b30394b4ee8c116bb5a41e",
"version.json": "bb905037922e24e35178c89a38fb6ecd",
"index.html": "639693f70b7b0b726a9f43e75c1d923c",
"/": "639693f70b7b0b726a9f43e75c1d923c",
"main.dart.js": "eaa04d7837ccb94b418975b8a5a9433d",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "93f7fe7e14c2457296f2e1a64c241fca",
"assets/AssetManifest.json": "f71cc8031822a9607b22be97db288741",
"assets/NOTICES": "a56be0272ce3162e40326ef583e02b06",
"assets/FontManifest.json": "86ceee4635efa5717c25de69aed63735",
"assets/AssetManifest.bin.json": "fd97873cf4666c89f7a302ed6616433b",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "cc32c9d57c0c7a1c126b7209555f98b0",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "35bde6e60204ee76b4827cbab7d027a0",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "d3909e1fc3766765cd1a5d7149c8fb64",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/packages/ui_lib/assets/images/common/img_logo_icon.png": "de6cbba298c337cdbc570cbf6c0e24be",
"assets/packages/ui_lib/assets/images/common/img_text_logo.png": "43c59babc937f0252a6dc92fd16917c1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "470b54f3420395e73d4c9c28c1a29861",
"assets/fonts/MaterialIcons-Regular.otf": "0bf769db1f15fd5a99207fff9db72214",
"assets/assets/ssl/private.pem.key": "f668d699ba56b06e5d430179e958d1f5",
"assets/assets/ssl/root.pem": "13e973f895b7a047f65bcf16631a4c83",
"assets/assets/ssl/certificate.pem.crt": "0a43c8f3c7ec6c661bd00ecdcdaf7e5c",
"assets/assets/images/img/auth_logo.png": "668afa6fd7ca8fcb9bcbfb738bdb7ce5",
"assets/assets/images/img/logo.png": "e7d1dd85c3107b40a7e65fab7419d19d",
"assets/assets/images/img/img_keg.png": "e85b226fe1602ef513f882684525dcac",
"assets/assets/images/img/bg_login.jpg": "182523ab4b8ffd4a34ee8ed549556e9f",
"assets/assets/images/icon/ic_like_badge.png": "fbc9108c1291d2425b19180147a58cf8",
"assets/assets/images/icon/ic_map.png": "889b84d589461b790f7645e212508f95",
"assets/assets/images/icon/ic_sub_disconnect.png": "543310061a3dfbe1db0c21763bfdf8d4",
"assets/assets/images/icon/ic_mykg.png": "aefbff0e2e9bf8db498e8c6448fd6798",
"assets/assets/images/icon/ic_right.png": "6ead01ce71923127f49c69041ed1e456",
"assets/assets/images/icon/ic_pay_naver.png": "60e44a70d0b83ec16defe19affdb5e61",
"assets/assets/images/icon/ic_setting.png": "21cffd4610a774bc36ecbc8d55cb6527",
"assets/assets/images/icon/ic_wifi_off.png": "a64f470e832b4917a3f6dbe062415f59",
"assets/assets/images/icon/ic_close.png": "fd159600aa8a9f82c355f11910bceea8",
"assets/assets/images/icon/ic_coupon.png": "41c4162b1500dbcd9ee9839838d34201",
"assets/assets/images/icon/ic_home.png": "f0331071b6604fa78dad523afbef82c4",
"assets/assets/images/icon/ic_location.png": "b91efee181994eab289baf4c849fa8d0",
"assets/assets/images/icon/ic_camera.png": "512b1b82a3920970dadab100bece7cbb",
"assets/assets/images/icon/ic_add.png": "3e9a851f0bb883f6a64054b3037be4d7",
"assets/assets/images/icon/ic_wifi.png": "2a5dbb7954831a46ddc3deb45cdbaa58",
"assets/assets/images/icon/indi_location.png": "55dead71b01206b75cecb0f89c049cc2",
"assets/assets/images/icon/ic_unlike.png": "6c1e6faebb89895c08f28167a7d755fb",
"assets/assets/images/icon/ic_news.png": "f41a66542443cedffbd490333764f2ac",
"assets/assets/images/icon/ic_x.png": "35cd1cba5a7791cc31f30381e742ac1c",
"assets/assets/images/icon/ic_usb_connect.png": "873161880e0eb5ea53c5c8c9471d1021",
"assets/assets/images/icon/indi_phone.png": "b36ca12f7dfd62c559c6054d4be064d7",
"assets/assets/images/icon/ic_minus_circle.png": "91e6321677c1efb36f924b1977072c7c",
"assets/assets/images/icon/ic_pay_payco.png": "7589dc3c480fc3a97e55b5a0f2105033",
"assets/assets/images/icon/ic_cart.png": "ffa9166f818cc9dc1c47397bb10caff0",
"assets/assets/images/icon/ic_pay_toss.png": "46bf23d9cbd349f96339b60c4df42a1c",
"assets/assets/images/icon/ic_noti.png": "348227ff3ad6a6cfe43d11ce556cfe36",
"assets/assets/images/icon/ic_star.png": "0cd3fed0352200df40f7524900d5da7f",
"assets/assets/images/icon/is_usb_connect.png": "1853d5ae49434f1b9d6a316d148cf0fb",
"assets/assets/images/icon/ic_settings.png": "39d2c8cafadca04f65bbde5343b28628",
"assets/assets/images/icon/ic_pay_kakao.png": "4b1cf4c909b0a3d9b9f2da5122d311ba",
"assets/assets/images/icon/indi_time.png": "632caeeea2597affc4438fdba2f255de",
"assets/assets/images/icon/ic_scan.png": "ad3ea92e2ecc476bed79aa3fca77df4b",
"assets/assets/images/icon/ic_back.png": "2db4b746c5f35c5bd5d07ee2d0cd1965",
"assets/assets/images/icon/ic_member.png": "b715cc5f6f6ca810dc900e123f6f6204",
"assets/assets/images/icon/ic_arrow_down.png": "9c1f38a54dc02f0fe24f187b4815323a",
"assets/assets/images/icon/ic_wifi_on.png": "4d323fd932306d63021edc4c0f9ab967",
"assets/assets/images/icon/ic_menu.png": "487dcc96ef77bc20c745166dadcabb25",
"assets/assets/images/icon/ic_plus_circle.png": "fc8a87588a7df85de5e6364a78146ab5",
"assets/assets/images/icon/indi_arrow_down.png": "cdf04f67f03e69a81a70f270ebdaed1b",
"assets/assets/images/icon/ic_x_circle.png": "8be272755cb5db5441894361a3290733",
"assets/assets/images/icon/ic_usb_disconnect.png": "e55acd07329dbc91b53ffdfe4c595162",
"assets/assets/images/icon/ic_pay_apple.png": "f049dd5b4ccca3164df130a15749cfe5",
"assets/assets/images/icon/ic_order.png": "b7b7255f6cfeed616c317e23134a7bcc",
"assets/assets/fonts/Pretendard-Regular.otf": "84c0ea9d65324c758c8bd9686207afea",
"assets/assets/fonts/Pretendard-Medium.otf": "13a352bd44156de92cce335ce93cd02d",
"assets/assets/fonts/Pretendard-Bold.otf": "f8a9b84216af5155ffe0e8661203f36f",
"assets/assets/fonts/Pretendard-SemiBold.otf": "6fe301765c4f438e2034a0a47b609c61",
"assets/assets/translations/en.json": "563f55cc46ab86a40d14f4c1564b5238",
"assets/assets/translations/ko.json": "a9722cf9fd0652ff8d53eec20c486c9b",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
