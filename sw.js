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
    "url": "assets/img/favicons/smile.png",
    "revision": "7d4fe1a28048b184ec81f790d3ea9efe"
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
    "url": "docs/66.6/about/brand/index.html",
    "revision": "7b02b752881c923595ba45653d0b7c51"
  },
  {
    "url": "docs/66.6/about/denote/index.html",
    "revision": "0f55f842cb77c44766bffb7cdac5e6fb"
  },
  {
    "url": "docs/66.6/about/index.html",
    "revision": "93ab9f0a6cbc60a981443675e621a9b9"
  },
  {
    "url": "docs/66.6/about/license/index.html",
    "revision": "56a8ddd4e2b2c5aa8746321203b4a7b7"
  },
  {
    "url": "docs/66.6/about/overview/index.html",
    "revision": "842f6595fafa41daa5595b39c2737a91"
  },
  {
    "url": "docs/66.6/browser-bugs/index.html",
    "revision": "447f2c397f5faba26c6c4d1228f29584"
  },
  {
    "url": "docs/66.6/components/alerts/index.html",
    "revision": "3871d78588da77cf12037509c23cfde4"
  },
  {
    "url": "docs/66.6/components/badge/index.html",
    "revision": "6babd962fa13f74d00b3287a4afda62b"
  },
  {
    "url": "docs/66.6/components/breadcrumb/index.html",
    "revision": "844df74d4aed2359407a6f2d28573654"
  },
  {
    "url": "docs/66.6/components/button-group/index.html",
    "revision": "b54869856d8b40edd83cd1f7976185a4"
  },
  {
    "url": "docs/66.6/components/buttons/index.html",
    "revision": "a9b649f09d816a5608a7710dca90c7c4"
  },
  {
    "url": "docs/66.6/components/card/index.html",
    "revision": "0a538329cdb40bd75b2e871bab2c8d98"
  },
  {
    "url": "docs/66.6/components/carousel/index.html",
    "revision": "24ccb7fe1d08b90e4bb27ebf878e155c"
  },
  {
    "url": "docs/66.6/components/collapse/index.html",
    "revision": "2839ba6ad7e79b0513cf551dc5535020"
  },
  {
    "url": "docs/66.6/components/dropdowns/index.html",
    "revision": "24d43bb4b535a0a794a302a4e75f71dd"
  },
  {
    "url": "docs/66.6/components/forms/index.html",
    "revision": "bfeed7f268d75e1f293ea8982199c72d"
  },
  {
    "url": "docs/66.6/components/index.html",
    "revision": "bb84ade76eef50bddc551b77f5aef094"
  },
  {
    "url": "docs/66.6/components/input-group/index.html",
    "revision": "571ef216b4fd7fec5a63a6bb2378eaa6"
  },
  {
    "url": "docs/66.6/components/jumbotron/index.html",
    "revision": "5d981367ff40564f53f56e4801591c4b"
  },
  {
    "url": "docs/66.6/components/list-group/index.html",
    "revision": "4bb0b89451b5bf6bce40b33b1e0a9a75"
  },
  {
    "url": "docs/66.6/components/modal/index.html",
    "revision": "bae2237f2e335077a041fa7b920e9eae"
  },
  {
    "url": "docs/66.6/components/navbar/index.html",
    "revision": "0b3776051be839c2a375af69fae82a1e"
  },
  {
    "url": "docs/66.6/components/navs/index.html",
    "revision": "1ec9408c3dfd99cd53e88a5aa3884bb6"
  },
  {
    "url": "docs/66.6/components/pagination/index.html",
    "revision": "9833a9cdea29e6e4f8c56d1d2cf1eac9"
  },
  {
    "url": "docs/66.6/components/popovers/index.html",
    "revision": "03dc8295130ec6145bcf462ce6f8c316"
  },
  {
    "url": "docs/66.6/components/progress/index.html",
    "revision": "ed7e2af3eb3c9ce8444b71a8b663ee80"
  },
  {
    "url": "docs/66.6/components/scrollspy/index.html",
    "revision": "168081e52a656ffb98e8918f8e463836"
  },
  {
    "url": "docs/66.6/components/tooltips/index.html",
    "revision": "180f102469f6a23a80348ded9882d932"
  },
  {
    "url": "docs/66.6/content/code/index.html",
    "revision": "7b221bcba3394b3bd3bb487cf69d0e9b"
  },
  {
    "url": "docs/66.6/content/figures/index.html",
    "revision": "93f2c75f2adc920dd97f87a8c7b62e89"
  },
  {
    "url": "docs/66.6/content/images/index.html",
    "revision": "16511da0bf5796d7fe922905fbb71fa5"
  },
  {
    "url": "docs/66.6/content/index.html",
    "revision": "c0d00e51e3edb658c9a8c7254cb2fb2f"
  },
  {
    "url": "docs/66.6/content/reboot/index.html",
    "revision": "9e281528e8963849ee579b446b6f50e0"
  },
  {
    "url": "docs/66.6/content/tables/index.html",
    "revision": "cf43317b0b15c5d30c1f4ac14d6347f1"
  },
  {
    "url": "docs/66.6/content/typography/index.html",
    "revision": "362b08c5316157afec2ee1a88c5ec923"
  },
  {
    "url": "docs/66.6/examples/album/album.css",
    "revision": "e8343131a0fefafe6ae0f37db6d10f3c"
  },
  {
    "url": "docs/66.6/examples/album/index.html",
    "revision": "8088e1d95bc9263681886821a80f5bcc"
  },
  {
    "url": "docs/66.6/examples/blog/blog.css",
    "revision": "095c85e484178b56ad0446775869e628"
  },
  {
    "url": "docs/66.6/examples/blog/index.html",
    "revision": "c1d0cf090944a6369dcfeaeebbf73eff"
  },
  {
    "url": "docs/66.6/examples/carousel/carousel.css",
    "revision": "e1ef0ffa84cc98db13f90dd02b9981e7"
  },
  {
    "url": "docs/66.6/examples/carousel/index.html",
    "revision": "b60a1b9d8a622551914f1869d2070ca6"
  },
  {
    "url": "docs/66.6/examples/checkout/form-validation.css",
    "revision": "d13d35a0c04021ceacd8c153719860bc"
  },
  {
    "url": "docs/66.6/examples/checkout/index.html",
    "revision": "79021acecd4d9e2e84e26cf84153153b"
  },
  {
    "url": "docs/66.6/examples/cover/cover.css",
    "revision": "211daf4eee015cb38fb10893c4645bbb"
  },
  {
    "url": "docs/66.6/examples/cover/index.html",
    "revision": "3c6d961d4b1d583a8cf972d66d6b8171"
  },
  {
    "url": "docs/66.6/examples/dashboard/dashboard.css",
    "revision": "419f2b36ccf58f5cb1b5b557658b65dd"
  },
  {
    "url": "docs/66.6/examples/dashboard/index.html",
    "revision": "de15dff920a3aebbb324d257985e4ba8"
  },
  {
    "url": "docs/66.6/examples/floating-labels/floating-labels.css",
    "revision": "0711f793d4f6bc20572f9b357c061b5b"
  },
  {
    "url": "docs/66.6/examples/floating-labels/index.html",
    "revision": "e16e25d95c2a41f6d3d8ff7b94b82936"
  },
  {
    "url": "docs/66.6/examples/grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/66.6/examples/grid/index.html",
    "revision": "33dfa672c9163374f9d790a292c884d1"
  },
  {
    "url": "docs/66.6/examples/index.html",
    "revision": "fddc2ff63a2e1fd8e8ebcc2853a5d3aa"
  },
  {
    "url": "docs/66.6/examples/jumbotron/index.html",
    "revision": "187a48844da8e19e0765d417a5077f81"
  },
  {
    "url": "docs/66.6/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/66.6/examples/navbar-bottom/index.html",
    "revision": "dd165c45857a4239ce7787aea5a7bff5"
  },
  {
    "url": "docs/66.6/examples/navbar-fixed/index.html",
    "revision": "1178a7c1f06eeeea76176173b2e0d7fd"
  },
  {
    "url": "docs/66.6/examples/navbar-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/66.6/examples/navbar-static/index.html",
    "revision": "8f818f7c1ab4e90bf1ea9b0bd0adb5b3"
  },
  {
    "url": "docs/66.6/examples/navbar-static/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/66.6/examples/navbars/index.html",
    "revision": "84494d9562fd4bfb7a613cde029e839f"
  },
  {
    "url": "docs/66.6/examples/navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/66.6/examples/offcanvas/index.html",
    "revision": "5581dfe7bff85b99df300fdf455176a7"
  },
  {
    "url": "docs/66.6/examples/offcanvas/offcanvas.css",
    "revision": "b5d28d8db34c23de78c46784c4ba4331"
  },
  {
    "url": "docs/66.6/examples/offcanvas/offcanvas.js",
    "revision": "5c0edf2d5a4d88ec65e801c0f58ef23a"
  },
  {
    "url": "docs/66.6/examples/pricing/index.html",
    "revision": "b8df028d11c89dae8309b9369922f011"
  },
  {
    "url": "docs/66.6/examples/pricing/pricing.css",
    "revision": "1e170831b26afb7a6bcde4f0bc2cb29b"
  },
  {
    "url": "docs/66.6/examples/product/index.html",
    "revision": "7424fe35dc94c1190849c8627cc33ef0"
  },
  {
    "url": "docs/66.6/examples/product/product.css",
    "revision": "9db57bf56394ba8cd85abd5f7ebc8ef1"
  },
  {
    "url": "docs/66.6/examples/screenshots/album.png",
    "revision": "685d5277fdf6f04aefbcbe01ba93e9ef"
  },
  {
    "url": "docs/66.6/examples/screenshots/blog.png",
    "revision": "d06dc15ae8285908ec7ba9f4b1f98a44"
  },
  {
    "url": "docs/66.6/examples/screenshots/carousel.png",
    "revision": "dc04e087b8ad4f000fa64e266812fc0f"
  },
  {
    "url": "docs/66.6/examples/screenshots/checkout.png",
    "revision": "030255900e0b73653cf6a2d074f17b31"
  },
  {
    "url": "docs/66.6/examples/screenshots/cover.png",
    "revision": "ece97a4eb488c46a86a67d61db25dda2"
  },
  {
    "url": "docs/66.6/examples/screenshots/dashboard.png",
    "revision": "2fc93187d09b5b8c342b962576eaf39e"
  },
  {
    "url": "docs/66.6/examples/screenshots/floating-labels.png",
    "revision": "fae0436f9d026a67778f3a37d29b3dfc"
  },
  {
    "url": "docs/66.6/examples/screenshots/grid.png",
    "revision": "cb63b8b5fd89749a2d87342876306dd8"
  },
  {
    "url": "docs/66.6/examples/screenshots/jumbotron.png",
    "revision": "0f579cb67e8c8535d8fffef7d17b7e45"
  },
  {
    "url": "docs/66.6/examples/screenshots/navbar-bottom.png",
    "revision": "0cefd6caed82af75be57d758633d9094"
  },
  {
    "url": "docs/66.6/examples/screenshots/navbar-fixed.png",
    "revision": "1d38f157f0bbbd90957044d30eaef242"
  },
  {
    "url": "docs/66.6/examples/screenshots/navbar-static.png",
    "revision": "2ff01be7ee251fc5c7f51ccf9de5f48d"
  },
  {
    "url": "docs/66.6/examples/screenshots/navbars.png",
    "revision": "d4fbce8e1e38d78a5134e6be05cdd4d7"
  },
  {
    "url": "docs/66.6/examples/screenshots/offcanvas.png",
    "revision": "c581d49a56f3e9d0d1753195c62e719a"
  },
  {
    "url": "docs/66.6/examples/screenshots/pricing.png",
    "revision": "e33e2f37741c6d15c99f3378e2e551ea"
  },
  {
    "url": "docs/66.6/examples/screenshots/product.png",
    "revision": "af74e4f7ddfc8cf2a44a9c601881329f"
  },
  {
    "url": "docs/66.6/examples/screenshots/sign-in.png",
    "revision": "9e4bf345a8c21403868f70b777efb483"
  },
  {
    "url": "docs/66.6/examples/screenshots/starter-template.png",
    "revision": "1761d4e831e7c0659962e1abdb95421f"
  },
  {
    "url": "docs/66.6/examples/screenshots/sticky-footer-navbar.png",
    "revision": "428112965cf6826db55bcc6db07d9e5f"
  },
  {
    "url": "docs/66.6/examples/screenshots/sticky-footer.png",
    "revision": "59b69c34997abee3d477f836d44ce8a3"
  },
  {
    "url": "docs/66.6/examples/sign-in/index.html",
    "revision": "96ef25d250a29ba9272ee52fcf369101"
  },
  {
    "url": "docs/66.6/examples/sign-in/signin.css",
    "revision": "00e205f17ee0cd3f59d5e1e1e9cf3b3f"
  },
  {
    "url": "docs/66.6/examples/starter-template/index.html",
    "revision": "d405e899854462588983ff1b304f7d0d"
  },
  {
    "url": "docs/66.6/examples/starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/66.6/examples/sticky-footer-navbar/index.html",
    "revision": "cf52f64c92b9c1fae606d610fe2d2116"
  },
  {
    "url": "docs/66.6/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "c5c610f36d8c2a89e7d587880ee0cd68"
  },
  {
    "url": "docs/66.6/examples/sticky-footer/index.html",
    "revision": "7f8a7abbce45fa7d948f8fe3a41c3545"
  },
  {
    "url": "docs/66.6/examples/sticky-footer/sticky-footer.css",
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "docs/66.6/examples/tooltip-viewport/index.html",
    "revision": "b1074cded6dd5b3603fd470151af233e"
  },
  {
    "url": "docs/66.6/examples/tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/66.6/examples/tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/66.6/extend/approach/index.html",
    "revision": "9aae9329589e2fa198a7b4b7a95ab58f"
  },
  {
    "url": "docs/66.6/extend/icons/index.html",
    "revision": "dcf3539d1dadc34981286b2ce7f97c5d"
  },
  {
    "url": "docs/66.6/extend/index.html",
    "revision": "d6cb2ae83942baa791c7fe463e1c907e"
  },
  {
    "url": "docs/66.6/getting-started/accessibility/index.html",
    "revision": "b042f06029328bc73adea2f1d53fcb2b"
  },
  {
    "url": "docs/66.6/getting-started/best-practices/index.html",
    "revision": "fc0dba04b71905feb41b390e7c668c74"
  },
  {
    "url": "docs/66.6/getting-started/browsers-devices/index.html",
    "revision": "c624446c562dac15cca68e8c668dfd39"
  },
  {
    "url": "docs/66.6/getting-started/build-tools/index.html",
    "revision": "8caa318d35c61ed5c61ae0251608b563"
  },
  {
    "url": "docs/66.6/getting-started/contents/index.html",
    "revision": "612816bdc454f5e7f72fcafc52ce5b17"
  },
  {
    "url": "docs/66.6/getting-started/download/index.html",
    "revision": "3e86ac56d95dbcca64bfec3f168bdf9b"
  },
  {
    "url": "docs/66.6/getting-started/index.html",
    "revision": "ca746f64705d7f2ba88ff34bf24ec702"
  },
  {
    "url": "docs/66.6/getting-started/introduction/index.html",
    "revision": "0ccef2152b8a4c2aae3586ac9e63defd"
  },
  {
    "url": "docs/66.6/getting-started/javascript/index.html",
    "revision": "dff1be3a5ef58f8764502ee6f6962596"
  },
  {
    "url": "docs/66.6/getting-started/options/index.html",
    "revision": "a51689e69dc21e75c2b17701ce3f5ed4"
  },
  {
    "url": "docs/66.6/getting-started/theming/index.html",
    "revision": "839d923385356680d22c87bcbf3e5fa7"
  },
  {
    "url": "docs/66.6/getting-started/webpack/index.html",
    "revision": "b32a4cf6bce94329df88ea7219aa1e98"
  },
  {
    "url": "docs/66.6/history/index.html",
    "revision": "93ab9f0a6cbc60a981443675e621a9b9"
  },
  {
    "url": "docs/66.6/index.html",
    "revision": "ca746f64705d7f2ba88ff34bf24ec702"
  },
  {
    "url": "docs/66.6/layout/grid/index.html",
    "revision": "d4928e52e7dc4cb59e7229e4930ecc82"
  },
  {
    "url": "docs/66.6/layout/index.html",
    "revision": "973d4537864195a499536b5103742045"
  },
  {
    "url": "docs/66.6/layout/media-object/index.html",
    "revision": "bb36c06fd1683beaa09b833970c1e185"
  },
  {
    "url": "docs/66.6/layout/overview/index.html",
    "revision": "899882076c560225f2b7139322430ab3"
  },
  {
    "url": "docs/66.6/layout/utilities-for-layout/index.html",
    "revision": "e5f03392c55687b1bbe848967e9b7e89"
  },
  {
    "url": "docs/66.6/migration/index.html",
    "revision": "61a7a958f5d2c896d28059b7818e11d5"
  },
  {
    "url": "docs/66.6/team/index.html",
    "revision": "93ab9f0a6cbc60a981443675e621a9b9"
  },
  {
    "url": "docs/66.6/utilities/borders/index.html",
    "revision": "fbd04b64bac6d867de156ab53880164a"
  },
  {
    "url": "docs/66.6/utilities/clearfix/index.html",
    "revision": "bccb7662b9897fbd93f19498209f4597"
  },
  {
    "url": "docs/66.6/utilities/close-icon/index.html",
    "revision": "2beb9fd7765a16f5b5461b262e321501"
  },
  {
    "url": "docs/66.6/utilities/colors/index.html",
    "revision": "24053083335fb4d73fb2569c90b9dda0"
  },
  {
    "url": "docs/66.6/utilities/display/index.html",
    "revision": "d33157a54c2e9c85d88bda38df4e3313"
  },
  {
    "url": "docs/66.6/utilities/embed/index.html",
    "revision": "1a4a67104725e62237ef2cacbcec3f4f"
  },
  {
    "url": "docs/66.6/utilities/flex/index.html",
    "revision": "425b64921c81183c897d36ca14c3beb3"
  },
  {
    "url": "docs/66.6/utilities/float/index.html",
    "revision": "133585a453d4da23f41a85385223c32e"
  },
  {
    "url": "docs/66.6/utilities/image-replacement/index.html",
    "revision": "43e00f9f6b116be81a5eb557dda5250e"
  },
  {
    "url": "docs/66.6/utilities/index.html",
    "revision": "d6d084a349a6378329e343ba1acaed4a"
  },
  {
    "url": "docs/66.6/utilities/position/index.html",
    "revision": "e8fd847daf46bc5362fcf223a8649bf3"
  },
  {
    "url": "docs/66.6/utilities/screenreaders/index.html",
    "revision": "e99ee5a7d33417734f7f64fd852256ca"
  },
  {
    "url": "docs/66.6/utilities/shadows/index.html",
    "revision": "903520f5846cfd9854cbf86c1604fa33"
  },
  {
    "url": "docs/66.6/utilities/sizing/index.html",
    "revision": "5747e2c4c1a51333b1f151d22a3d4267"
  },
  {
    "url": "docs/66.6/utilities/spacing/index.html",
    "revision": "a63c747c9121f7c46457e81418d591d1"
  },
  {
    "url": "docs/66.6/utilities/text/index.html",
    "revision": "e0b0e7fcd7026718ef7a8cf4b75581ff"
  },
  {
    "url": "docs/66.6/utilities/vertical-align/index.html",
    "revision": "de605f61aaaf47a72cc790f36f13aec1"
  },
  {
    "url": "docs/66.6/utilities/visibility/index.html",
    "revision": "2751fb168fb88f70926e5119e5c2a03e"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "ca746f64705d7f2ba88ff34bf24ec702"
  },
  {
    "url": "docs/index.html",
    "revision": "ca746f64705d7f2ba88ff34bf24ec702"
  },
  {
    "url": "examples/index.html",
    "revision": "496dcf3c02e1b009839440e1e7200a30"
  },
  {
    "url": "index.html",
    "revision": "15491dae6fcd524798214458e7bfb52a"
  },
  {
    "url": "redirects.json",
    "revision": "56edc63b1c083c520b229f55d53064c9"
  }
])
