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
    "url": "dist/css/bootstrap-grid.css",
    "revision": "db438cff680b6d0c029f75647b4b138a"
  },
  {
    "url": "dist/css/bootstrap-grid.min.css",
    "revision": "2206c9fb0197956129137af662b31115"
  },
  {
    "url": "dist/css/bootstrap-reboot.css",
    "revision": "cceed351e3a8401f573988a38e78d3a8"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "e2b23d34f3fcc9ce074c942e76f25d61"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "82252d754417f95f7779be349acc6361"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "a7022c6fa83d91db67738d6e3cd3252d"
  },
  {
    "url": "dist/js/bootstrap.bundle.js",
    "revision": "ee08eb7f44335a3cf385e03d4406e4a5"
  },
  {
    "url": "dist/js/bootstrap.bundle.min.js",
    "revision": "d70c474886678aebe3e9d91965dc8b62"
  },
  {
    "url": "dist/js/bootstrap.js",
    "revision": "c2cdb900858c3e63ce8cd9f69171d342"
  },
  {
    "url": "dist/js/bootstrap.min.js",
    "revision": "eb5fac582a82f296aeb74900b01a2fa3"
  },
  {
    "url": "docs/4.1/about/brand/index.html",
    "revision": "a035479c2a08f975a5284de804077226"
  },
  {
    "url": "docs/4.1/about/denote/index.html",
    "revision": "5380eacb9c6c75a2d31ab23b38a27724"
  },
  {
    "url": "docs/4.1/about/index.html",
    "revision": "0c162276e5b5d62477f0ab5095b28095"
  },
  {
    "url": "docs/4.1/about/license/index.html",
    "revision": "2f2688ad49efd6bb2361ad1b4d252206"
  },
  {
    "url": "docs/4.1/about/overview/index.html",
    "revision": "84494c22c83be25e42c6631717a1e974"
  },
  {
    "url": "docs/4.1/browser-bugs/index.html",
    "revision": "6baab10ec65e490d877c9de26f114d61"
  },
  {
    "url": "docs/4.1/components/alerts/index.html",
    "revision": "7ee58fd3d109bb702e5ba91d5a6d1d32"
  },
  {
    "url": "docs/4.1/components/badge/index.html",
    "revision": "433d29e9943605b4c9c999869457f427"
  },
  {
    "url": "docs/4.1/components/breadcrumb/index.html",
    "revision": "45bd284dd328a3b8023c9269ca22f645"
  },
  {
    "url": "docs/4.1/components/button-group/index.html",
    "revision": "72dd8effe26cec12a5240e4c89c585fb"
  },
  {
    "url": "docs/4.1/components/buttons/index.html",
    "revision": "9e6dad74d6a75eab9e97d99ad9f2a555"
  },
  {
    "url": "docs/4.1/components/card/index.html",
    "revision": "6c1df47ca93ceabef71111710e53fa46"
  },
  {
    "url": "docs/4.1/components/carousel/index.html",
    "revision": "3ed44ef220a6090b83ff7425d30c51a5"
  },
  {
    "url": "docs/4.1/components/collapse/index.html",
    "revision": "7e4aca57f1ff8920e06060bd4ae40c98"
  },
  {
    "url": "docs/4.1/components/dropdowns/index.html",
    "revision": "37067d319b7be0901c1101bfc7a1721d"
  },
  {
    "url": "docs/4.1/components/forms/index.html",
    "revision": "04d907bb513e2b384a74b617f56bc953"
  },
  {
    "url": "docs/4.1/components/index.html",
    "revision": "1e854cdf0d532ee52c357eb02a37abb1"
  },
  {
    "url": "docs/4.1/components/input-group/index.html",
    "revision": "0bb8e62e45131c0df5755a3b52adc797"
  },
  {
    "url": "docs/4.1/components/jumbotron/index.html",
    "revision": "84d2685a3c0e0aa33eab648c4e9833c6"
  },
  {
    "url": "docs/4.1/components/list-group/index.html",
    "revision": "5626ce5a752fa75cbe7323034e84ef8c"
  },
  {
    "url": "docs/4.1/components/modal/index.html",
    "revision": "a5f2c19537fb1a3ef4758ffd4194534b"
  },
  {
    "url": "docs/4.1/components/navbar/index.html",
    "revision": "2b06c5fe8fd509d2819d4f6f348aa265"
  },
  {
    "url": "docs/4.1/components/navs/index.html",
    "revision": "1b2a25f2146c41be1b35b2500cac4082"
  },
  {
    "url": "docs/4.1/components/pagination/index.html",
    "revision": "d543a4c73c560201957ac8926ff07b0c"
  },
  {
    "url": "docs/4.1/components/popovers/index.html",
    "revision": "2dc0c7804d56352b6fed60c79313d07a"
  },
  {
    "url": "docs/4.1/components/progress/index.html",
    "revision": "909830205332505bc6fc77edffb86f07"
  },
  {
    "url": "docs/4.1/components/scrollspy/index.html",
    "revision": "b455f416753435d2ed95939ae8864524"
  },
  {
    "url": "docs/4.1/components/tooltips/index.html",
    "revision": "ea13f01a9ba86d8c2a265c5123690fb9"
  },
  {
    "url": "docs/4.1/content/code/index.html",
    "revision": "d492faa4ffc76fc59635804a2bac8220"
  },
  {
    "url": "docs/4.1/content/figures/index.html",
    "revision": "08a173c74ef6f0ba9b6493036a12135f"
  },
  {
    "url": "docs/4.1/content/images/index.html",
    "revision": "58dc5cfd7ca6c936d7caaf5d683f6c23"
  },
  {
    "url": "docs/4.1/content/index.html",
    "revision": "efd2f4cfa6f822f6c7c78a14f48db09d"
  },
  {
    "url": "docs/4.1/content/reboot/index.html",
    "revision": "715cdc4e0e568c0958794d112d15022d"
  },
  {
    "url": "docs/4.1/content/tables/index.html",
    "revision": "e3ebf88a7d844245fdecf3c6b088f091"
  },
  {
    "url": "docs/4.1/content/typography/index.html",
    "revision": "1376c82ffe3384c2efd2d30ea5e5b5fa"
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
    "revision": "5a8930b85df58e40510dc8233f6149d3"
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
    "revision": "5581dfe7bff85b99df300fdf455176a7"
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
    "revision": "b8df028d11c89dae8309b9369922f011"
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
    "revision": "96ef25d250a29ba9272ee52fcf369101"
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
    "revision": "8e37dd5e807bd0616a97a59c2ebaafb9"
  },
  {
    "url": "docs/4.1/extend/icons/index.html",
    "revision": "3ec0631996068c757d2435e66a114722"
  },
  {
    "url": "docs/4.1/extend/index.html",
    "revision": "23113178d7aa85f5cb46d986a049c4b5"
  },
  {
    "url": "docs/4.1/getting-started/accessibility/index.html",
    "revision": "bc1fd2e8ce2c0f4405d18b6f771250e7"
  },
  {
    "url": "docs/4.1/getting-started/best-practices/index.html",
    "revision": "7f501a5457929c3349314f371839333e"
  },
  {
    "url": "docs/4.1/getting-started/browsers-devices/index.html",
    "revision": "c92b5a284a096392b30f5e4ecbb435bb"
  },
  {
    "url": "docs/4.1/getting-started/build-tools/index.html",
    "revision": "abebfab33effd9134cfa06913c530568"
  },
  {
    "url": "docs/4.1/getting-started/contents/index.html",
    "revision": "3a649855a9679fa942b21274fbc0668f"
  },
  {
    "url": "docs/4.1/getting-started/download/index.html",
    "revision": "d245a6b627b649a4ea5c016be4acad77"
  },
  {
    "url": "docs/4.1/getting-started/index.html",
    "revision": "617452f11052c43f3f2df86fa7fac271"
  },
  {
    "url": "docs/4.1/getting-started/introduction/index.html",
    "revision": "0a0c06049a6f4a45873d96112c61072d"
  },
  {
    "url": "docs/4.1/getting-started/javascript/index.html",
    "revision": "b5e4a3ec9cfe9e0a8195ac3c91f2c096"
  },
  {
    "url": "docs/4.1/getting-started/options/index.html",
    "revision": "d33edbe48d20cef0c532b09b0beee207"
  },
  {
    "url": "docs/4.1/getting-started/theming/index.html",
    "revision": "33d3ed4942b1230c94a0bd24d657bc1e"
  },
  {
    "url": "docs/4.1/getting-started/webpack/index.html",
    "revision": "0bde487638d222cce797d2f17b4cf535"
  },
  {
    "url": "docs/4.1/history/index.html",
    "revision": "0c162276e5b5d62477f0ab5095b28095"
  },
  {
    "url": "docs/4.1/index.html",
    "revision": "617452f11052c43f3f2df86fa7fac271"
  },
  {
    "url": "docs/4.1/layout/grid/index.html",
    "revision": "479b8a21ddd17da55ff57bbf8b23acc1"
  },
  {
    "url": "docs/4.1/layout/index.html",
    "revision": "2df6fa990ceb933cc368e3326ea509c2"
  },
  {
    "url": "docs/4.1/layout/media-object/index.html",
    "revision": "32c3a8b61a0deccbe4570ee3806a0c11"
  },
  {
    "url": "docs/4.1/layout/overview/index.html",
    "revision": "3e19fc78bfddb5ee993f53b4253fdefc"
  },
  {
    "url": "docs/4.1/layout/utilities-for-layout/index.html",
    "revision": "95e6dae56bf99ed134c324aee4e1249b"
  },
  {
    "url": "docs/4.1/migration/index.html",
    "revision": "49d5746fc5748aa3c8b6002abd849376"
  },
  {
    "url": "docs/4.1/team/index.html",
    "revision": "0c162276e5b5d62477f0ab5095b28095"
  },
  {
    "url": "docs/4.1/utilities/borders/index.html",
    "revision": "3e5c056dee70b5edc8e8a654fab7858a"
  },
  {
    "url": "docs/4.1/utilities/clearfix/index.html",
    "revision": "1e6a1324b0e10b3628ee7b60e32912c5"
  },
  {
    "url": "docs/4.1/utilities/close-icon/index.html",
    "revision": "87f36775192c10c48298af3dfccfcfea"
  },
  {
    "url": "docs/4.1/utilities/colors/index.html",
    "revision": "3b9cf1fde91c7126fcccc292147bb098"
  },
  {
    "url": "docs/4.1/utilities/display/index.html",
    "revision": "b35f4284e3133596d85021d9e271d60f"
  },
  {
    "url": "docs/4.1/utilities/embed/index.html",
    "revision": "586d5dc203a0e5d745634864ef4d06e1"
  },
  {
    "url": "docs/4.1/utilities/flex/index.html",
    "revision": "b61a188750da48423d7761856532a059"
  },
  {
    "url": "docs/4.1/utilities/float/index.html",
    "revision": "e7cffaea56a01399cc0b880474308cc9"
  },
  {
    "url": "docs/4.1/utilities/image-replacement/index.html",
    "revision": "acf14ac606c463cbf838b8513854b8e6"
  },
  {
    "url": "docs/4.1/utilities/index.html",
    "revision": "1b0f2de56ad369f7613474cf3b3a0e71"
  },
  {
    "url": "docs/4.1/utilities/position/index.html",
    "revision": "6e5d61fb088e6c9e95a91f04d312bf2e"
  },
  {
    "url": "docs/4.1/utilities/screenreaders/index.html",
    "revision": "f387595911e50f15da25f2036474be2e"
  },
  {
    "url": "docs/4.1/utilities/shadows/index.html",
    "revision": "2d78aa0463ed493f56c942c6b22539f8"
  },
  {
    "url": "docs/4.1/utilities/sizing/index.html",
    "revision": "05ea0471f60852e51af48f19ecfe2eec"
  },
  {
    "url": "docs/4.1/utilities/spacing/index.html",
    "revision": "8ef054ca28b53ec4845d9a9b26e1fde4"
  },
  {
    "url": "docs/4.1/utilities/text/index.html",
    "revision": "7b5c7abc828bbc5f16ea274496ff0b8b"
  },
  {
    "url": "docs/4.1/utilities/vertical-align/index.html",
    "revision": "75c51558c13a9abf29b74a953fa584cb"
  },
  {
    "url": "docs/4.1/utilities/visibility/index.html",
    "revision": "a85cba96d0f33dbc789e85b7c7b6afe5"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "617452f11052c43f3f2df86fa7fac271"
  },
  {
    "url": "docs/index.html",
    "revision": "617452f11052c43f3f2df86fa7fac271"
  },
  {
    "url": "examples/index.html",
    "revision": "a0568f17b5b492f097dd5745f50a3939"
  },
  {
    "url": "index.html",
    "revision": "7e2c5b029985e8c77ae6fdef39ddbaff"
  },
  {
    "url": "redirects.json",
    "revision": "883eec843bfb5ba9abb00393e9cd517f"
  }
])
