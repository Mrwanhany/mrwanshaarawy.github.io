'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dfcc9beb545508f01d96f44813eeb059",
"version.json": "e5c3a2e7c6ad8ca9d4b1da1be392d211",
"index.html": "22bc5dd1104565afdc36e7788fec0b6f",
"/": "22bc5dd1104565afdc36e7788fec0b6f",
"main.dart.js": "3e00f717a0307a96036aa21e12fecce6",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"icons/logo.png": "a5c07c1eca43e27f4eb5a282be234da0",
"manifest.json": "55c1cb04e8a554e1328dee651456b8f6",
".git/config": "faa05e5db0166e568b7c3d73e096dd39",
".git/objects/61/b9f929c8f95b659f138a4790397e6cb9ee05ae": "120c7b98f3c498ae1378905a1e144fb9",
".git/objects/3e/b867366c5eed5600fb6b8d44dd637fa54fbabf": "98763871973184afca7e4db5882159ec",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/9d18171d0d4723ffdba2455589c23950d39e3e": "8849c6461bea3976a70be18f47bdfdaa",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/6a/c2adb2a685f834b406f50af58c7023459a6d74": "506c9ce576104fe1ff1c3a87048bd663",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/fce79113fe7f502713f48b2f3521c8134e38a7": "47bc6c503c81e22f01b2e13c0f3366dc",
".git/objects/69/59a42ccf74678e678fd01355e49a0565d61b68": "081d5ac4a4b96e557a6d0371ee3f71e0",
".git/objects/56/ff8635ecbfb5eb84b84622ab402470603ca179": "e89b5ae424a0ece514d647b43e2035b4",
".git/objects/0b/593e970fb5d8d158ae30c0344c6781e7f9e0de": "84abe752a2f6f091332d6072f7215030",
".git/objects/5f/76fbfdd133f4efba439793076b4ec45c05b51d": "3fe6da138940efae9be08cc5f7dabae0",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9c/373d5ffc14541fde3b15ce681ec8e7e7072e08": "1fa46f4625869e98ec6811761b29918f",
".git/objects/9c/f28a525e9247e822d9edc3c7daa195b0f501f1": "9a34b5a78d0b57676308dc3dbeb7de06",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ac/2147fdf4626566419ba5325c765e2eedc86110": "b3fbb9e54b1ed7cc5c7fe2d9a89d4bbd",
".git/objects/df/cc0490211f19e01bd0f6446d3765c87b678c53": "65961830e5cc98e4869da9a12e50d651",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/bc/53b4b110b33e3517e73a4ee631567a68e0863b": "54a31bbc59a1f589fa385b56b124196d",
".git/objects/ab/359e56fe2d5b082c912dec56244ac1008205e6": "ad6331daa152c17ca012f41dd2f570f4",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/0841c368fd0308c52f5f6f08bc2a54ca9c4c99": "fbbcb39649ff7bb00002f1592da0b118",
".git/objects/c0/1235d8f7cb2a57641b3a74bff85cb30ea2f616": "84be2193b0b50b4ea4df81921c0226e9",
".git/objects/c9/a0364e27ef9fa665d94d95111bce8e5a6dcc99": "aa9a9ee3d56398d9deb8946ed5abd652",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/4cc060e01f015b5fe24e84df0089aee6368230": "e7dcdbd225ff0b07bcca522ef7a2e2d8",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ec/01ec0b28b136e1adbed85712347f429f748203": "3edb730bc1bea3df69fb303c2cb453d3",
".git/objects/11/d17fc64508913321b2f73603765edbd81e3f8c": "c810daa013db81cf11eed4019c82fde9",
".git/objects/11/6c640273c4dc345a7d3050ec925d32ca4fa030": "a977aaaab2455b3d327164a834dbe2dc",
".git/objects/7d/ace451f355b1ee5b8eccc0e0544d8391db96ab": "b38dfe72f328b4a3747b1a444855f7bd",
".git/objects/7c/375e2e529df381ad26e1aa74d8a26f0eba52cc": "e33c15be24a5018b0827bfb1c01ceb61",
".git/objects/7c/6fc80de4360928ac79bfca8fb221443e702428": "c88308e027eb01e9e76d59f7c5c0a94a",
".git/objects/89/dcb199a391d09398a4f017f5cf58bd63b1a03e": "393aa899475ffc1d07aaf318e5a72359",
".git/objects/87/81401d5e5fd5c14d5a016d1df960c29a6ce0c1": "e434723f78b91a9637bcead9d376f3f2",
".git/objects/8f/25defb4b64ae4da0a555848088e65628542f7d": "a765e1ad0a489859ad42532447e39b33",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/75/11802d27e03a7cd1e73d323984e3d3f9f3e4ce": "64a41c3c741bd343fa8f87d546dd822f",
".git/objects/81/47f3a3f5f9275f5e79067a774ce116728191e0": "4dcf6803b96d0a4164794538410d70e9",
".git/objects/72/59573d3f1d76f2149f4fff3255fc303f651588": "27d235f61c352589a71b2a1c077715ff",
".git/objects/72/daa73ee26dd29908575d1ced032fc04bdbe5ec": "771ccfa606fde8e486e254e40602625a",
".git/objects/43/83ff1264743a2de59f85d5eeb38007cc6dcbae": "e9dcaac997310a942e488cd87c8717d7",
".git/objects/88/ad6d969f2ecb3ac4cde56506d58ac2c4665c51": "a6089d2abe6f4596ae26dfa5b7d64088",
".git/objects/9f/7f931f7348ae0358911e6bab46d8fb573586c3": "853e700c4cb824e5fa2fb831731f04be",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/6426b486c052d7e2a48e84eb83058df556ddd7": "e4e52224072f8eb128d5a01e518eff91",
".git/objects/09/c6078b2fff0cf24c08ab758a3703b1070b4875": "94ad367082982b8de0461b2a8422ad79",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/37/894bb0c7921bcb088f42c3d5e7619662436134": "d635965fb65dd388a640674255b81de9",
".git/objects/08/e90591bf571d0ca68ff5bc0a20513a43ce6342": "00e4c6fff94e7df5adc04e33417f5114",
".git/objects/6d/a6d18e395f01aa7824f5e9475f39400547f21d": "cf9153ec67787e2e60d681199ca996f9",
".git/objects/39/deb2e7b5de843c5aa177c4acbf21671c9de84a": "fef06a3050e8fec45ee99c1a31bcf3d4",
".git/objects/55/49b726e4c80417cde80153c6ff267d7cd83370": "4923bc16d1811e34112197cf7330b0f1",
".git/objects/97/33da3914e969f9ad001a01cd82650f1196bd45": "13ee8331f7cc159abd5ff509d5700d72",
".git/objects/64/8009792dd41b835a97aeec2c910c24026e461e": "143cf8f9e35322beb3349a1b7d9b58fb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/de0079a925ffccc48fddfd6907f9d0f69ef631": "000897e104951f16cd0679d61752a87c",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/0b75925d20f5b3f95405e7ec479011f2927f9b": "9463e985f2c8914503e9c7ea166c7800",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c3/92f19836f299ea5c88a365fb2036062d20cc5c": "5b9b4ae6bac4748bf27e53cac18397eb",
".git/objects/ea/861d37d058ce8cd9273e22b5fa8b0d9c5b906c": "fd0f61438f8ae0e4831071a3ca7399aa",
".git/objects/cd/3171aa62d06302b3d4ec32951803e835975db2": "f1a6474127e0912f10af5b3f4e484bcc",
".git/objects/e6/08eef6ac98c850ca5f8103acccbbf643fc3910": "2d2953b32a1e5cf9810ccda011f5e47d",
".git/objects/f6/f6ad6a7898e01db1e3e6ae115f65326a7af457": "dcbc64f0114e2d35f37e0fee117d0f54",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/730e9dc0f3f4618c2526127d5d929ee266c14f": "9ff0306334334383e3a8bfe78924542d",
".git/objects/f8/7a41dddf519793aed3e13db39a3c0363572922": "01864e384eede13f947f0db28a642fe1",
".git/objects/2d/9c4dfd9910a2d9844664c43294f7ce6a7120d2": "5c977ab5345018cc6e76210910c72e0a",
".git/objects/77/95fb948963fa3519400147a79fdb3bf5b6a084": "df0012eafeaa7f0620e84fa6917bb075",
".git/objects/70/f3854c4003b0e32e1f35e6b533834700aabeb2": "4eceae47c55acc2b45e0a4f702a2ffb8",
".git/objects/4a/c2d852f35d78f1b65579fc19f7fb384387d0ff": "06dcf767286cabf58fbdc345da48dfbb",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/8c/6e12d7cf7a06557c2d7ea9571a5bca3891cf05": "ca4d911c113d810085ef1a7c73599fab",
".git/objects/82/6413f9595bbda855f54362cec07bb587097caf": "18afcefadfa5493524f7cbe508d156a0",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/47/cb173ab526165d1ae83fae6ac4667f5fa45722": "86d68818937c0e09ae7d4013bcb0a79b",
".git/objects/8b/8ef790946c749d6f179ddc81c6016ccdb06d3d": "8ff2ba13bfb32c283868635dfa16a63b",
".git/objects/8b/ef68a05e75c5e198e09c78bf826f2b217706c0": "094472ec7e2ae4c31aa9e789bb471b9c",
".git/objects/13/2aa7f287d2c80a16f4088ec6633a9d02075167": "44593538c976aa0ae1d1a9e24aa48540",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9fbeb2e307be9700d1229aaea9d0c4e6",
".git/logs/refs/heads/main": "391bebd75db83868b9e97740c58bd1c2",
".git/logs/refs/remotes/origin/main": "6a52b34b8d34c48fb2532f367ec6f299",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b88f84ba588f2f7a3f0cb9ae78d3d02e",
".git/refs/remotes/origin/main": "b88f84ba588f2f7a3f0cb9ae78d3d02e",
".git/index": "f2c9cdf944c9c941309e08a9487bfd94",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "066c6e93885c79dc4e992bbcf33264d0",
"assets/NOTICES": "9b1b204babd1c561001f4b17b916dcd0",
"assets/FontManifest.json": "cab905cb3aac16cd8f8b52a8d504c382",
"assets/AssetManifest.bin.json": "80a9a151f29ef3c1b2e1410a7f7f4841",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "44751b80de7de85485abce4d139628b3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "8310fedb9a91820079d90317b6a74725",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c8955389283c13d8d3db2e290ede2c62",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "494b5b64b3311294e0a0784c69475a18",
"assets/fonts/MaterialIcons-Regular.otf": "ddaebb6c72b10fca7ffea73eccc37f87",
"assets/assets/images/me.png": "556b3e0baad844477485f5fcad370a26",
"assets/assets/images/portfolio_01.jpg": "43e7af9f9e24c8c4db73ee7d493c04f4",
"assets/assets/images/blob_bean_ash.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/images/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/images/hi_there.png": "1ac6f5101b6a5511f4ad8f8965a49f89",
"assets/assets/images/init.png": "81f92d50fc95e7554f1693ad6ff340e7",
"assets/assets/images/portfolio_03.jpg": "45d7db96b72f25b4c76740e5dec2208e",
"assets/assets/images/portfolio_02.jpg": "9beba509a25cfb96362aeb7e98335e58",
"assets/assets/images/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/images/portfolio_06.jpg": "015d9a88eeaa1a0f5e39b81d32e1bf87",
"assets/assets/images/portfolio_05.jpg": "9e5fedca2725d59b2692670505c8e7e5",
"assets/assets/images/portfolio_04.jpg": "ff07b0c6397e19d0cf30b03df9f196d2",
"assets/assets/images/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/dev_aboutme.png": "2a634b26ac2e281c71ebbd4118d8a549",
"assets/assets/images/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/images/ghana_flag.png": "b0afee866ab3333560a0072c5d53bce2",
"assets/assets/images/test.png": "556b3e0baad844477485f5fcad370a26",
"assets/assets/images/logo_dark.png": "172c6851a256eb6ca04d9b99cc231ac8",
"assets/assets/images/blog_02.jpg": "01c4b84663980a0b4f55f4bd196492bd",
"assets/assets/images/dots_globe_yellow.png": "d908b032e1a46382b6e6c2baf92e188c",
"assets/assets/images/education_03.png": "223b10a5ebc20c0f0e3b4f58a4e5fbb9",
"assets/assets/images/education_02.png": "9fad7943ed995ace7ac5921d0e7f1feb",
"assets/assets/images/blog_03.jpg": "5f88a99b651c6dbad988d684c6fc41b3",
"assets/assets/images/blog_01.jpg": "cd78990246f63c4d64ca5c26bcf31289",
"assets/assets/images/box_cover_gold.png": "a58f0270c1fd04d7eae1217c7e5645b9",
"assets/assets/images/dev_header.png": "a5c07c1eca43e27f4eb5a282be234da0",
"assets/assets/images/education_01.png": "c9bb021e6b4dae37b65b1152c947b30c",
"assets/assets/images/dots_globe_grey.png": "bb16bba932c2e98f3dbe3e6b1b6a864b",
"assets/assets/images/dots_globe_yellow2.png": "d1394584431e43b6973ca031de59a284",
"assets/assets/images/logo_light.png": "708b0d915b6cededbda03f881683e529",
"assets/assets/images/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/images/blob-2.png": "73cdfaf58774e0f8c57948d5abe833b5",
"assets/assets/images/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/images/egypt.png": "2e6c2ec4af20fa6e3eac4f25027b2177",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/blob_drumstick_black.png": "381f70d9f8dd4fbbb720214fa02939a2",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
