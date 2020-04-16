/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e2995bcbe8bde8d7e565454a550b4f4b"
  },
  {
    "url": "assets/css/0.styles.f4d700c2.css",
    "revision": "bfb748355d1e9a70d761c70c3f4053c4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d152a60b.js",
    "revision": "fd918c38bd74615dbf0b23ede913608d"
  },
  {
    "url": "assets/js/11.f9dd0105.js",
    "revision": "cbea3c02e873259066410ac72cec4b19"
  },
  {
    "url": "assets/js/12.dd3f8bfa.js",
    "revision": "cc4788ba1aacc066b61f965cb29fb472"
  },
  {
    "url": "assets/js/13.9a84d2ac.js",
    "revision": "2a50ffa25f0f4510aad238e13bff6927"
  },
  {
    "url": "assets/js/14.94ba3fbb.js",
    "revision": "0419b350171643a3aa2704c582a02318"
  },
  {
    "url": "assets/js/15.36c75f19.js",
    "revision": "3e30304d780377d593259f6c21aab62f"
  },
  {
    "url": "assets/js/2.4866b84c.js",
    "revision": "16fa9cc48ef3aaccb90c7fd63132ceb4"
  },
  {
    "url": "assets/js/3.172869d4.js",
    "revision": "e722dbf9486b6787b3f708f3e715358a"
  },
  {
    "url": "assets/js/4.0b82a093.js",
    "revision": "57e61b4a6b38b2eb1ce034bd2462f0f0"
  },
  {
    "url": "assets/js/5.9b8e5bc4.js",
    "revision": "525945f42009a04f4e49f1531f49790b"
  },
  {
    "url": "assets/js/6.84ccaff2.js",
    "revision": "9956206c9ab28442949bf169aaef628b"
  },
  {
    "url": "assets/js/7.7cc4535c.js",
    "revision": "08b1bb4a71257a53d992262d308931ed"
  },
  {
    "url": "assets/js/8.dfb8a854.js",
    "revision": "4d086f3f9c6319135cc8af0513c7a1ef"
  },
  {
    "url": "assets/js/9.2579381a.js",
    "revision": "c95eefbfcf4c8c1b7b23aeb0becf123c"
  },
  {
    "url": "assets/js/app.06ca14ee.js",
    "revision": "bb238068cac8454016f1a5c69588afd1"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "f00bb5bc72210352102fd1b02664cd0b"
  },
  {
    "url": "baodian/high/notes/bd2.html",
    "revision": "8a5ff87eb2c0750d8a2e5a792629d3b5"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "dd988d94e7d49a8ec907b07350a1fb1f"
  },
  {
    "url": "baodian/zero/notes/bd1.html",
    "revision": "ee21544d1a4967b484d572729b1ef4da"
  },
  {
    "url": "css/style.css",
    "revision": "085eae63ca978b134e802180e5321d03"
  },
  {
    "url": "guide/index.html",
    "revision": "25d0252471a6b6941319994b0eaa42d3"
  },
  {
    "url": "guide/notes/one.html",
    "revision": "1c3db8294286b883e176e33b281710de"
  },
  {
    "url": "guide/notes/two.html",
    "revision": "d3fd09510a4f340e4eabe6d33053fba4"
  },
  {
    "url": "img/1.png",
    "revision": "42fda805a7c41dd2e03a044eeabd08a3"
  },
  {
    "url": "img/xiaolu.png",
    "revision": "9176e8598eac3330c36e2242867d5a22"
  },
  {
    "url": "img/xingkong.png",
    "revision": "3b41c52492a73f7a6652dc7d89158651"
  },
  {
    "url": "img/xingkong2.png",
    "revision": "9c3ef44350b3c253102565734e9fc896"
  },
  {
    "url": "index.html",
    "revision": "946d78c0ad79a3eefc1f4e3a34bc64fa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
