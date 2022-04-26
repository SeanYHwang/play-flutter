'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5f269771624b0fa4792f498a2a49672a",
"index.html": "4fea9e644f96bbf581d1730ae2b10ef2",
"/": "4fea9e644f96bbf581d1730ae2b10ef2",
"main.dart.js": "c353e55dacb9ab6ae1d8feaefd85a9f7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f7c0091bff4ab77122c0cefb36e12813",
"assets/images/Common-Account-Header-x2.png": "d11e7057ec9292bb06dfab51ec5a81be",
"assets/images/Account-Header-x2.png": "482a2ff5af42e586bbd753ae74197f2d",
"assets/images/tests/car-insurance-v1.png": "2e366ee356e4a3eaa24d4a780b444877",
"assets/images/tests/life-insurance-v1.png": "b44d6879d55733ed70c87355d0f7cff2",
"assets/images/tests/home-contents-v1.png": "c2f342a60f3d0d838428ac786b4111c3",
"assets/images/meerkat.png": "9688c04d0750b8d4a931d9e434c748af",
"assets/images/icons/icon_navigation_compare.svg": "dce2404dc4df7ec29459afff268d3662",
"assets/images/icons/icon_navigation_account.svg": "7f051f8c673e16a1ef59d900e2a00c75",
"assets/images/icons/icon_navigation_fuel.svg": "a747347340bd60750d32b82d009f6ef1",
"assets/images/icons/icon_app_bar_back_white.svg": "d8b31de18d6d9f4403c22189324fbb21",
"assets/images/Meerkat-Asset-Header-Flat-BG-x2-with-padding.png": "ee3c10697823097304abeef16a812947",
"assets/AssetManifest.json": "5ac4989a4846cd1ec370b514d48dae77",
"assets/NOTICES": "bef1fc8c9aca7efc1893bc651e2394eb",
"assets/FontManifest.json": "244308a8fb2cb177896336189d4a7615",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraBoldItalic.ttf": "3d69caac1feaa544d89721dffa4dae9b",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraBold.ttf": "bb41f596e9c909d1279f79b06c11c3eb",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraLightItalic.ttf": "18b10873671ef699a9c6b6a562c47c72",
"assets/packages/widgetbook/google_fonts/Nunito-Light.ttf": "038291099699a91e5486d90f6865865b",
"assets/packages/widgetbook/google_fonts/Nunito-Regular.ttf": "1c030dd4e715ec504fe4925864f023fe",
"assets/packages/widgetbook/google_fonts/Nunito-SemiBold.ttf": "06578957e8dca70fbe9573fbce76c0a0",
"assets/packages/widgetbook/google_fonts/Nunito-Bold.ttf": "1387652ed98293a3e2b6639d21d2dd40",
"assets/packages/widgetbook/google_fonts/Nunito-BoldItalic.ttf": "13420730c456db9463829a7a9a8d0c3a",
"assets/packages/widgetbook/google_fonts/Nunito-Black.ttf": "85808a77c229143ee72bbb7784907da8",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraLight.ttf": "9894a78faa3fc60eaa8177413c67fc9d",
"assets/packages/widgetbook/google_fonts/Nunito-SemiBoldItalic.ttf": "8e1046cce01ec078ff8a0a03e5e061ed",
"assets/packages/widgetbook/google_fonts/Nunito-BlackItalic.ttf": "788f29842adade8caaf17be2a317e1da",
"assets/packages/widgetbook/google_fonts/OFL.txt": "ee247edc304c64bb2135b9b6ec9a203f",
"assets/packages/widgetbook/google_fonts/Nunito-Italic.ttf": "b8e5eda1dd4207b4f7488718bf1b13f9",
"assets/packages/widgetbook/google_fonts/Nunito-LightItalic.ttf": "2668f7df2cd1d2c95ca64435d9783284",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e7f19ca67a615cf1b46937d0fb06f8df",
"assets/packages/font_awesome_flutter/lib/fonts/fa-thin-100.ttf": "ec3bc0faf8aff3cb9a1a2214e77f40cc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "6bf63c80836c0b844942bb35544e28c8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-light-300.ttf": "bd2b394b0ece2133a059b46f87617b1b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "70e65a0c310df9eafd22e37477b34fa8",
"assets/fonts/SourceSansPro-BlackItalic.ttf": "611a18c37f87427babb9439fe36214c4",
"assets/fonts/SourceSansPro-SemiBoldItalic.ttf": "0f289fddfcb054362102c0a5fb20c86f",
"assets/fonts/SourceSansPro-Regular.ttf": "be287df28238fc258575b79e4d496f57",
"assets/fonts/SourceSansPro-Bold.ttf": "0ba2d24be70bc7071a5081e9baadcc4b",
"assets/fonts/SourceSansPro-LightItalic.ttf": "6592e1a229322717cb28d59fbba97f6c",
"assets/fonts/SourceSansPro-Light.ttf": "24185053bd4b01951aad1e96e528dc16",
"assets/fonts/SourceSansPro-Black.ttf": "7d346d594900ee34e3eb9e46d02337ea",
"assets/fonts/SourceSansPro-ExtraLight.ttf": "0735e49c486f9a86ce6190ca449b70e0",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/SourceSansPro-BoldItalic.ttf": "8c647caf34cb17803f3dae0334c3f88e",
"assets/fonts/SourceSansPro-SemiBold.ttf": "2a38a6907b27a95d738be8b50a2e1610",
"assets/fonts/SourceSansPro-ExtraLightItalic.ttf": "331647e0309cc812a1ed9679f572fd22",
"assets/fonts/SourceSansPro-Italic.ttf": "b9c2c149b4ce83f4a99a154de3d07236",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
