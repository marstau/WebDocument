/* global workbox:false */

self.importScripts('/assets/js/vendor/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/brand/bootstrap-outline.svg",
    "revision": "9537646a9202cb5dca44e9034c1b414b"
  },
  {
    "url": "assets/brand/bootstrap-punchout.svg",
    "revision": "372e344ac243c4fa7c6c8b8a2af0e5ff"
  },
  {
    "url": "assets/brand/bootstrap-social-logo.png",
    "revision": "1e9e93d863b7811934889f9aac89c7de"
  },
  {
    "url": "assets/brand/bootstrap-social.png",
    "revision": "56be615bbca4502de5d55d721dae917f"
  },
  {
    "url": "assets/brand/bootstrap-solid.svg",
    "revision": "ea931a5b98a97e8b8658d9f6d537329e"
  },
  {
    "url": "assets/css/docs.min.css",
    "revision": "6e3cd62366e30b36d229cb7eb5c064ed"
  },
  {
    "url": "assets/img/bootstrap-stack.png",
    "revision": "7384412324c769e447d3c4f86e9ff068"
  },
  {
    "url": "assets/img/bootstrap-themes.png",
    "revision": "3976b58ff407451e8e8b598fdcde2cd2"
  },
  {
    "url": "assets/img/favicons/android-chrome-192x192.png",
    "revision": "643718426d0a7d60036217ba988155be"
  },
  {
    "url": "assets/img/favicons/android-chrome-512x512.png",
    "revision": "eb512e79165f504fd4da4d2758d5584b"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon.png",
    "revision": "042a7e9fdd293212aca19150aef71b0d"
  },
  {
    "url": "assets/img/favicons/favicon-16x16.png",
    "revision": "50c62448d4014e5fb411887c05c2935b"
  },
  {
    "url": "assets/img/favicons/favicon-32x32.png",
    "revision": "fed84e16b6ccfe88ee7ffaae5dfefd34"
  },
  {
    "url": "assets/img/favicons/manifest.json",
    "revision": "eed73af41f4e55d335b5b3fa8c78538d"
  },
  {
    "url": "assets/img/favicons/mstile-144x144.png",
    "revision": "84892991321e7998ca4c80ae21175f78"
  },
  {
    "url": "assets/img/favicons/mstile-150x150.png",
    "revision": "61821c45a353e259bb83f9b0d338f5e8"
  },
  {
    "url": "assets/img/favicons/mstile-310x150.png",
    "revision": "913e1b81006831c72a7bca38e4125edb"
  },
  {
    "url": "assets/img/favicons/mstile-310x310.png",
    "revision": "29d79a7e648876504496211f003c4076"
  },
  {
    "url": "assets/img/favicons/mstile-70x70.png",
    "revision": "386d71707992eb91fc53df303e99c2e7"
  },
  {
    "url": "assets/img/favicons/safari-pinned-tab.svg",
    "revision": "6b6b78894033fd91ce75affb548d8e67"
  },
  {
    "url": "assets/js/docs.min.js",
    "revision": "9109c979ae60b0c5584b59ca6945d630"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "83edc01382cfd889f982162964ec374e"
  },
  {
    "url": "assets/js/src/ie-emulation-modes-warning.js",
    "revision": "c6e7032adf9bd98ac39e83c83108977b"
  },
  {
    "url": "assets/js/src/pwa.js",
    "revision": "cac6034355863d6205e66862f6a729f7"
  },
  {
    "url": "assets/js/src/search.js",
    "revision": "5b8bb2081b9e10ee9a469dd5feca5996"
  },
  {
    "url": "assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "assets/js/vendor/clipboard.min.js",
    "revision": "3f3688138a1b9fc4ef669ce9056b6674"
  },
  {
    "url": "assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "assets/js/vendor/jquery-slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "assets/js/vendor/popper.min.js",
    "revision": "83fb8c4d9199dce0224da0206423106f"
  },
  {
    "url": "assets/js/vendor/workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/css/bootstrap-grid.css",
    "revision": "db438cff680b6d0c029f75647b4b138a"
  },
  {
    "url": "dist/css/bootstrap-grid.min.css",
    "revision": "2206c9fb0197956129137af662b31115"
  },
  {
    "url": "dist/css/bootstrap-reboot.css",
    "revision": "984d6839bfefbad3a6ccaac0057c07ea"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "e2b23d34f3fcc9ce074c942e76f25d61"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "19b2aed26ddc5835d559d182807d94ef"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "57f76751e0c495f1ed77c32ed91865c6"
  },
  {
    "url": "dist/js/bootstrap.bundle.js",
    "revision": "ee08eb7f44335a3cf385e03d4406e4a5"
  },
  {
    "url": "dist/js/bootstrap.bundle.min.js",
    "revision": "88d95a244a0ba11e1ce4070984104590"
  },
  {
    "url": "dist/js/bootstrap.js",
    "revision": "c2cdb900858c3e63ce8cd9f69171d342"
  },
  {
    "url": "dist/js/bootstrap.min.js",
    "revision": "02cc8d8335cd1e28d219ccddcacb7e55"
  },
  {
    "url": "docs/4.1/about/brand/index.html",
    "revision": "2df84b171458f8538be812a46ff1293a"
  },
  {
    "url": "docs/4.1/about/index.html",
    "revision": "21cd478d32480c820a6fe31906eef06d"
  },
  {
    "url": "docs/4.1/about/license/index.html",
    "revision": "97663f33b2420b67a0f6beab1db05716"
  },
  {
    "url": "docs/4.1/about/overview/index.html",
    "revision": "b628b52076020a239edaa734d72886c3"
  },
  {
    "url": "docs/4.1/about/translations/index.html",
    "revision": "2288cb5a7b5d51478446ff7e39c3a7f8"
  },
  {
    "url": "docs/4.1/browser-bugs/index.html",
    "revision": "2c5a2c4ae87f48b768e8866e203cb037"
  },
  {
    "url": "docs/4.1/components/alerts/index.html",
    "revision": "a4b1573f18c3aff03aa455c716b4b1d1"
  },
  {
    "url": "docs/4.1/components/badge/index.html",
    "revision": "f223ed4733a212aaf267189e4f57f409"
  },
  {
    "url": "docs/4.1/components/breadcrumb/index.html",
    "revision": "8b174f6cfc7ac89eaf54068f249f62d6"
  },
  {
    "url": "docs/4.1/components/button-group/index.html",
    "revision": "4cb7c4ab4ebc76bd51df61609e4ee710"
  },
  {
    "url": "docs/4.1/components/buttons/index.html",
    "revision": "4dc873f684a82c3208d4168f2528b7b1"
  },
  {
    "url": "docs/4.1/components/card/index.html",
    "revision": "cd87b1702db1fa5e16a717c00911ed7b"
  },
  {
    "url": "docs/4.1/components/carousel/index.html",
    "revision": "66aa3586d04fa7d40d269c1679481d53"
  },
  {
    "url": "docs/4.1/components/collapse/index.html",
    "revision": "2af370ed1669f4265a801b36599b01f4"
  },
  {
    "url": "docs/4.1/components/dropdowns/index.html",
    "revision": "0d5bd17b0be9c65249c4054df9068d29"
  },
  {
    "url": "docs/4.1/components/forms/index.html",
    "revision": "b250e13d1a28f9cfedecc4e09b440203"
  },
  {
    "url": "docs/4.1/components/index.html",
    "revision": "7030b612d83a1091f69bf96bd7ae78f8"
  },
  {
    "url": "docs/4.1/components/input-group/index.html",
    "revision": "c294117057658226fa1bcbaabfcba775"
  },
  {
    "url": "docs/4.1/components/jumbotron/index.html",
    "revision": "f6ed6fe4ed8813257686c592c1961cd4"
  },
  {
    "url": "docs/4.1/components/list-group/index.html",
    "revision": "b7f727e4b4e7704657719f9ad888bc92"
  },
  {
    "url": "docs/4.1/components/modal/index.html",
    "revision": "0c67ff6284e63acd1a04d014057194c3"
  },
  {
    "url": "docs/4.1/components/navbar/index.html",
    "revision": "5358c19878701764475268c4765419a0"
  },
  {
    "url": "docs/4.1/components/navs/index.html",
    "revision": "528171b0365e8f5f4a58a3ecff4b758f"
  },
  {
    "url": "docs/4.1/components/pagination/index.html",
    "revision": "3e8356a34e09925853c1ebf7a4690671"
  },
  {
    "url": "docs/4.1/components/popovers/index.html",
    "revision": "5a7f9db56a510daf383fff641eeccde0"
  },
  {
    "url": "docs/4.1/components/progress/index.html",
    "revision": "5059e9406d30fe02fe3f1cc6f06be398"
  },
  {
    "url": "docs/4.1/components/scrollspy/index.html",
    "revision": "6f8dcff0970a54d4dab2d9b5ae2ba0de"
  },
  {
    "url": "docs/4.1/components/tooltips/index.html",
    "revision": "e39f6cb3bd3b32a7fb104b57c6aaa347"
  },
  {
    "url": "docs/4.1/content/code/index.html",
    "revision": "df2d59dabb404d9a93c2e1137260c42f"
  },
  {
    "url": "docs/4.1/content/figures/index.html",
    "revision": "17d80bc577f9d9819749cc6a7e920ded"
  },
  {
    "url": "docs/4.1/content/images/index.html",
    "revision": "709a2a13806efc36b1ceb55fc7db758e"
  },
  {
    "url": "docs/4.1/content/index.html",
    "revision": "95fb085074b4d33f820664987ebb086f"
  },
  {
    "url": "docs/4.1/content/reboot/index.html",
    "revision": "7dbabf5410f123bf5db7848c589e0f5e"
  },
  {
    "url": "docs/4.1/content/tables/index.html",
    "revision": "91bd981d4eb1e4cca01b85578dad698b"
  },
  {
    "url": "docs/4.1/content/typography/index.html",
    "revision": "a7d41c89f2fc217a03d2317419b2a4be"
  },
  {
    "url": "docs/4.1/examples/album/album.css",
    "revision": "e8343131a0fefafe6ae0f37db6d10f3c"
  },
  {
    "url": "docs/4.1/examples/album/index.html",
    "revision": "8088e1d95bc9263681886821a80f5bcc"
  },
  {
    "url": "docs/4.1/examples/blog/blog.css",
    "revision": "095c85e484178b56ad0446775869e628"
  },
  {
    "url": "docs/4.1/examples/blog/index.html",
    "revision": "c1d0cf090944a6369dcfeaeebbf73eff"
  },
  {
    "url": "docs/4.1/examples/carousel/carousel.css",
    "revision": "e1ef0ffa84cc98db13f90dd02b9981e7"
  },
  {
    "url": "docs/4.1/examples/carousel/index.html",
    "revision": "b60a1b9d8a622551914f1869d2070ca6"
  },
  {
    "url": "docs/4.1/examples/checkout/form-validation.css",
    "revision": "d13d35a0c04021ceacd8c153719860bc"
  },
  {
    "url": "docs/4.1/examples/checkout/index.html",
    "revision": "79021acecd4d9e2e84e26cf84153153b"
  },
  {
    "url": "docs/4.1/examples/cover/cover.css",
    "revision": "211daf4eee015cb38fb10893c4645bbb"
  },
  {
    "url": "docs/4.1/examples/cover/index.html",
    "revision": "3c6d961d4b1d583a8cf972d66d6b8171"
  },
  {
    "url": "docs/4.1/examples/dashboard/dashboard.css",
    "revision": "419f2b36ccf58f5cb1b5b557658b65dd"
  },
  {
    "url": "docs/4.1/examples/dashboard/index.html",
    "revision": "de15dff920a3aebbb324d257985e4ba8"
  },
  {
    "url": "docs/4.1/examples/floating-labels/floating-labels.css",
    "revision": "0711f793d4f6bc20572f9b357c061b5b"
  },
  {
    "url": "docs/4.1/examples/floating-labels/index.html",
    "revision": "e16e25d95c2a41f6d3d8ff7b94b82936"
  },
  {
    "url": "docs/4.1/examples/grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/4.1/examples/grid/index.html",
    "revision": "33dfa672c9163374f9d790a292c884d1"
  },
  {
    "url": "docs/4.1/examples/index.html",
    "revision": "969703c1672aba232c6d30b245d0d46f"
  },
  {
    "url": "docs/4.1/examples/jumbotron/index.html",
    "revision": "187a48844da8e19e0765d417a5077f81"
  },
  {
    "url": "docs/4.1/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.1/examples/navbar-bottom/index.html",
    "revision": "dd165c45857a4239ce7787aea5a7bff5"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/index.html",
    "revision": "1178a7c1f06eeeea76176173b2e0d7fd"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.1/examples/navbar-static/index.html",
    "revision": "8f818f7c1ab4e90bf1ea9b0bd0adb5b3"
  },
  {
    "url": "docs/4.1/examples/navbar-static/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/4.1/examples/navbars/index.html",
    "revision": "84494d9562fd4bfb7a613cde029e839f"
  },
  {
    "url": "docs/4.1/examples/navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/4.1/examples/offcanvas/index.html",
    "revision": "7543497ce75575f523a11efb856b54e8"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.css",
    "revision": "b5d28d8db34c23de78c46784c4ba4331"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.js",
    "revision": "5c0edf2d5a4d88ec65e801c0f58ef23a"
  },
  {
    "url": "docs/4.1/examples/pricing/index.html",
    "revision": "418289199fbd0b6749424611483058fd"
  },
  {
    "url": "docs/4.1/examples/pricing/pricing.css",
    "revision": "1e170831b26afb7a6bcde4f0bc2cb29b"
  },
  {
    "url": "docs/4.1/examples/product/index.html",
    "revision": "7424fe35dc94c1190849c8627cc33ef0"
  },
  {
    "url": "docs/4.1/examples/product/product.css",
    "revision": "9db57bf56394ba8cd85abd5f7ebc8ef1"
  },
  {
    "url": "docs/4.1/examples/screenshots/album.png",
    "revision": "685d5277fdf6f04aefbcbe01ba93e9ef"
  },
  {
    "url": "docs/4.1/examples/screenshots/blog.png",
    "revision": "d06dc15ae8285908ec7ba9f4b1f98a44"
  },
  {
    "url": "docs/4.1/examples/screenshots/carousel.png",
    "revision": "dc04e087b8ad4f000fa64e266812fc0f"
  },
  {
    "url": "docs/4.1/examples/screenshots/checkout.png",
    "revision": "030255900e0b73653cf6a2d074f17b31"
  },
  {
    "url": "docs/4.1/examples/screenshots/cover.png",
    "revision": "ece97a4eb488c46a86a67d61db25dda2"
  },
  {
    "url": "docs/4.1/examples/screenshots/dashboard.png",
    "revision": "2fc93187d09b5b8c342b962576eaf39e"
  },
  {
    "url": "docs/4.1/examples/screenshots/floating-labels.png",
    "revision": "fae0436f9d026a67778f3a37d29b3dfc"
  },
  {
    "url": "docs/4.1/examples/screenshots/grid.png",
    "revision": "cb63b8b5fd89749a2d87342876306dd8"
  },
  {
    "url": "docs/4.1/examples/screenshots/jumbotron.png",
    "revision": "0f579cb67e8c8535d8fffef7d17b7e45"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-bottom.png",
    "revision": "0cefd6caed82af75be57d758633d9094"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-fixed.png",
    "revision": "1d38f157f0bbbd90957044d30eaef242"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-static.png",
    "revision": "2ff01be7ee251fc5c7f51ccf9de5f48d"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbars.png",
    "revision": "d4fbce8e1e38d78a5134e6be05cdd4d7"
  },
  {
    "url": "docs/4.1/examples/screenshots/offcanvas.png",
    "revision": "c581d49a56f3e9d0d1753195c62e719a"
  },
  {
    "url": "docs/4.1/examples/screenshots/pricing.png",
    "revision": "e33e2f37741c6d15c99f3378e2e551ea"
  },
  {
    "url": "docs/4.1/examples/screenshots/product.png",
    "revision": "af74e4f7ddfc8cf2a44a9c601881329f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sign-in.png",
    "revision": "9e4bf345a8c21403868f70b777efb483"
  },
  {
    "url": "docs/4.1/examples/screenshots/starter-template.png",
    "revision": "1761d4e831e7c0659962e1abdb95421f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sticky-footer-navbar.png",
    "revision": "428112965cf6826db55bcc6db07d9e5f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sticky-footer.png",
    "revision": "59b69c34997abee3d477f836d44ce8a3"
  },
  {
    "url": "docs/4.1/examples/sign-in/index.html",
    "revision": "0739de40d4fb2333772503ff6a475b18"
  },
  {
    "url": "docs/4.1/examples/sign-in/signin.css",
    "revision": "00e205f17ee0cd3f59d5e1e1e9cf3b3f"
  },
  {
    "url": "docs/4.1/examples/starter-template/index.html",
    "revision": "d405e899854462588983ff1b304f7d0d"
  },
  {
    "url": "docs/4.1/examples/starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/index.html",
    "revision": "cf52f64c92b9c1fae606d610fe2d2116"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "c5c610f36d8c2a89e7d587880ee0cd68"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/index.html",
    "revision": "7f8a7abbce45fa7d948f8fe3a41c3545"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/sticky-footer.css",
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/index.html",
    "revision": "b1074cded6dd5b3603fd470151af233e"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/4.1/extend/approach/index.html",
    "revision": "448f8c24b8a4ebf84ec27d80e0e67d95"
  },
  {
    "url": "docs/4.1/extend/icons/index.html",
    "revision": "26e07e84e0b0eed6ac8d7767bfa44933"
  },
  {
    "url": "docs/4.1/extend/index.html",
    "revision": "0b8999b83a7d16f4fbf1c6d12f45e208"
  },
  {
    "url": "docs/4.1/getting-started/accessibility/index.html",
    "revision": "e339f14f45d7864c0aaf2382aec6ef74"
  },
  {
    "url": "docs/4.1/getting-started/best-practices/index.html",
    "revision": "133e299e884caf856bea77773c75aff7"
  },
  {
    "url": "docs/4.1/getting-started/browsers-devices/index.html",
    "revision": "2e83511d40f3520782e34e4c2d4fa64c"
  },
  {
    "url": "docs/4.1/getting-started/build-tools/index.html",
    "revision": "2aa1d8b79a5fb5e2be54c7bd25a5629c"
  },
  {
    "url": "docs/4.1/getting-started/contents/index.html",
    "revision": "dbffb7e72e72a546e02d932812b61efc"
  },
  {
    "url": "docs/4.1/getting-started/download/index.html",
    "revision": "152d9e4a6c44ff70889a74a69b3447b5"
  },
  {
    "url": "docs/4.1/getting-started/index.html",
    "revision": "811a42680ff2cbe5a4565ba8571b2f13"
  },
  {
    "url": "docs/4.1/getting-started/introduction/index.html",
    "revision": "9646e90512b6bccc959d72b64d023335"
  },
  {
    "url": "docs/4.1/getting-started/javascript/index.html",
    "revision": "5d4ad33eb4fa6831d328b6f4b440ccb7"
  },
  {
    "url": "docs/4.1/getting-started/options/index.html",
    "revision": "6f7266cc764421fcde9b6958a8e2c0e4"
  },
  {
    "url": "docs/4.1/getting-started/theming/index.html",
    "revision": "a93cdd9e0f9169fc27c9301da166f2bb"
  },
  {
    "url": "docs/4.1/getting-started/webpack/index.html",
    "revision": "7876cf707f4fb07ba50a3b8511ea5834"
  },
  {
    "url": "docs/4.1/history/index.html",
    "revision": "21cd478d32480c820a6fe31906eef06d"
  },
  {
    "url": "docs/4.1/index.html",
    "revision": "811a42680ff2cbe5a4565ba8571b2f13"
  },
  {
    "url": "docs/4.1/layout/grid/index.html",
    "revision": "9c468dc56f04daa4f1462e12f1c3f68f"
  },
  {
    "url": "docs/4.1/layout/index.html",
    "revision": "aaf8e1eed995085072062a503c910188"
  },
  {
    "url": "docs/4.1/layout/media-object/index.html",
    "revision": "135186cddc83facda2b26f884e4cafff"
  },
  {
    "url": "docs/4.1/layout/overview/index.html",
    "revision": "d243b6ddcb443ef92a5d8165d3c482dd"
  },
  {
    "url": "docs/4.1/layout/utilities-for-layout/index.html",
    "revision": "4b50274584fdade169083720bc0b51e7"
  },
  {
    "url": "docs/4.1/migration/index.html",
    "revision": "0413f8e8ea0cdf9d986473ead0c9e558"
  },
  {
    "url": "docs/4.1/team/index.html",
    "revision": "21cd478d32480c820a6fe31906eef06d"
  },
  {
    "url": "docs/4.1/utilities/borders/index.html",
    "revision": "74c8892d6e61eecd3950eb6699c599c1"
  },
  {
    "url": "docs/4.1/utilities/clearfix/index.html",
    "revision": "1d11df63314c3fe03817d493faff3a76"
  },
  {
    "url": "docs/4.1/utilities/close-icon/index.html",
    "revision": "6442795e90c4a642608ae3904b1534e4"
  },
  {
    "url": "docs/4.1/utilities/colors/index.html",
    "revision": "ffe0ed9060be13789a3b8dd47cd181ca"
  },
  {
    "url": "docs/4.1/utilities/display/index.html",
    "revision": "95a6c672ee382f9fa6316fc561fad816"
  },
  {
    "url": "docs/4.1/utilities/embed/index.html",
    "revision": "1bf6ec406492ef56ad07a7e32e790e5b"
  },
  {
    "url": "docs/4.1/utilities/flex/index.html",
    "revision": "9513a9f6bf6ba72599f59264e0654e4a"
  },
  {
    "url": "docs/4.1/utilities/float/index.html",
    "revision": "ea4a1097a47556d017a1b53e1792cc7b"
  },
  {
    "url": "docs/4.1/utilities/image-replacement/index.html",
    "revision": "aa82f63aca9c77975709ee90b485f7f2"
  },
  {
    "url": "docs/4.1/utilities/index.html",
    "revision": "6c11a259f899c261fc50fdb6244aa6ce"
  },
  {
    "url": "docs/4.1/utilities/position/index.html",
    "revision": "467d477824445b5541b34a40d28ab3da"
  },
  {
    "url": "docs/4.1/utilities/screenreaders/index.html",
    "revision": "cf07c198b76446269ab3f54e9f91655b"
  },
  {
    "url": "docs/4.1/utilities/shadows/index.html",
    "revision": "54d9acd9d64f9afde43e3ee6b83dc739"
  },
  {
    "url": "docs/4.1/utilities/sizing/index.html",
    "revision": "803d8b320c5fc12dbc12cf610850b8e5"
  },
  {
    "url": "docs/4.1/utilities/spacing/index.html",
    "revision": "7d5f09cd41281c0a86d4cfaa5e7e49d7"
  },
  {
    "url": "docs/4.1/utilities/text/index.html",
    "revision": "08e7fed50fdb3d1a0193d6262a5cf4ed"
  },
  {
    "url": "docs/4.1/utilities/vertical-align/index.html",
    "revision": "8b614db9b47d29082d16c13d36a08de6"
  },
  {
    "url": "docs/4.1/utilities/visibility/index.html",
    "revision": "222c68817cbba6be579d16554046786c"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "811a42680ff2cbe5a4565ba8571b2f13"
  },
  {
    "url": "docs/index.html",
    "revision": "811a42680ff2cbe5a4565ba8571b2f13"
  },
  {
    "url": "examples/index.html",
    "revision": "f42d00b3e5074e91c48a7258b468a3ba"
  },
  {
    "url": "index.html",
    "revision": "95cbb5842ecc52efcb41310425199b19"
  },
  {
    "url": "redirects.json",
    "revision": "ff6e3f0da9bd52ce20975be0b056d464"
  }
])
