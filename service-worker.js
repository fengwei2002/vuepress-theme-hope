if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,f)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=f(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-452119c2"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"api/index.html",revision:"14e151216191ce79ac1278bced60bdff"},{url:"api/page.html",revision:"35a8762efa4582873671dd4bba7e246b"},{url:"api/plugin/container.html",revision:"660e8692619044721849fa1cb4c868fd"},{url:"api/plugin/copyright.html",revision:"3c7f7fb49b6769be20b1ffb8397f8ec5"},{url:"api/plugin/index.html",revision:"a7d739c9a362513ea354415946ee97aa"},{url:"api/plugin/md-enhance.html",revision:"fd72b5ced8e11427ef11ea453dccc948"},{url:"api/plugin/medium-zoom.html",revision:"f78c91eeda706459e43090757cece601"},{url:"api/plugin/pwa.html",revision:"2a621f5925185563fb1485ae91f22ebd"},{url:"api/stylus.html",revision:"60ab2c54761e56f343f0f05e8fa0e532"},{url:"api/themeConfig.html",revision:"cfefc16150cdb086980ef99b1e3fd07f"},{url:"article/index.html",revision:"d09aade73d6bb98d4b080aae1c9240c5"},{url:"assets/css/0.styles.46d110a6.css",revision:"60325204889097671e73e47ff71eb072"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/94.1093f436.js",revision:"47720b7adcad76475a2f1806281c0300"},{url:"assets/js/app.eb3f65a4.js",revision:"f1d089ec8bcf2d23f0f4449d1ef3a8a2"},{url:"assets/js/layout-BlogEntry.b6e39f23.js",revision:"01b4d355afae56bd0eca6c1bef282faf"},{url:"assets/js/layout-BlogEntry~layout-Layout.978a45ab.js",revision:"7cbf996bae7f414fcaec00e37f63e70d"},{url:"assets/js/layout-Layout.8b1fb44b.js",revision:"0fa61e3fcf71de0751f80f22a04a8c9c"},{url:"assets/js/layout-NotFound.d08ee183.js",revision:"2ee03fad48af520bf74359dc531d1a73"},{url:"assets/js/page--1b278726.cf1fd87c.js",revision:"46a258d5ed8e4e893f502e30e36891f9"},{url:"assets/js/page--24b68849.36a6be63.js",revision:"6aec704ed5a12797db83a9dc1157a61f"},{url:"assets/js/page--298eb4e9.8129d8d7.js",revision:"f5a66dc130aa6e65ab234fb73d1da746"},{url:"assets/js/page--33732ef1.0271251d.js",revision:"67f61966602d9a14c82d8583d005c95e"},{url:"assets/js/page--608d80cf.b84e78cc.js",revision:"b931b72bf3230e50b74606a9ffc04042"},{url:"assets/js/page--b64dd6ee.40a8ae49.js",revision:"f3e9876f06794d2f8612294fe00ed99a"},{url:"assets/js/page-About Vuepress.49d28913.js",revision:"e602d493a73fb5c330f59a783ff31a62"},{url:"assets/js/page-API Docs.bf38b026.js",revision:"93aba1027ec900c70e7662452cfd427f"},{url:"assets/js/page-API 文档.4ddd4419.js",revision:"c8ac64e19ecdb5a320094e2987b2b0b9"},{url:"assets/js/page-Basic.b6ff0a68.js",revision:"600ca112cece810a7291f2817c6c7217"},{url:"assets/js/page-Breadcrumb.846a655c.js",revision:"a40121b4e69623ac8f4e8d3f325db58d"},{url:"assets/js/page-Comment Function.d484e7c5.js",revision:"1e545372cf9b4049fb2334eb97e2a327"},{url:"assets/js/page-Default Theme Config.f497ce4a.js",revision:"b8d365191baec69f39f8b4bf1645f5b6"},{url:"assets/js/page-Emoji List.e9f82f29.js",revision:"ad13d512aedfca40b4e2ce31cef025e1"},{url:"assets/js/page-Emoji列表.ce8aac79.js",revision:"a8ba048da655818b3e6804f605dd94ef"},{url:"assets/js/page-File Structure.fd5e2d95.js",revision:"b8557b34cc44550f76236075ebef0f03"},{url:"assets/js/page-flowchart.83b5f9be.js",revision:"49236180934bfc690322682f3064b12d"},{url:"assets/js/page-Footnote.0bcbb399.js",revision:"8709b85fdb7f25288c782a64c097da2e"},{url:"assets/js/page-Fullscreen Button.5cbbedd5.js",revision:"6262d869eb1f2164e2493ad5b54d72e1"},{url:"assets/js/page-Home Page.a7c30edf.js",revision:"9599b85ff859e799a4a23e61a166d401"},{url:"assets/js/page-Home.cbc140d7.js",revision:"b276aad8ad4bf016337c699f699218bf"},{url:"assets/js/page-Introduction.a275eae4.js",revision:"6a71981c4697793e101cf9f790fb393d"},{url:"assets/js/page-Markdown DEMO.ab9f0d0c.js",revision:"32e4a9b8bb5803d16636b407510cc617"},{url:"assets/js/page-Markdown Introduction.6899dab9.js",revision:"b3c10ce1e37a3d1dcc4a1dc87b543f88"},{url:"assets/js/page-Markdown 新语法.d7cde2c3.js",revision:"2d0ae97e5ad55abb13e03a465f34bc66"},{url:"assets/js/page-Markdown介绍.10b16f86.js",revision:"57a5531e4f3692b57df00f391feecad4"},{url:"assets/js/page-Markdown示例.995288a1.js",revision:"a2253fd49c0e69d599b44c72242207b0"},{url:"assets/js/page-NavBar.e8064db5.js",revision:"56ec05ed7e2f0119f86c2566250611df"},{url:"assets/js/page-New Component.456676d8.js",revision:"b417dc989cc1a2514e59640517129a37"},{url:"assets/js/page-New syntax in Markdown.e9b97636.js",revision:"b942b738a00509f683529da60c019edc"},{url:"assets/js/page-Page Configuration.b16ce8e0.js",revision:"b57c480c40b2cb768a799bb1e45b6813"},{url:"assets/js/page-Page.5e950761.js",revision:"7f2a67ff7557424cdcadfaeb025e1e55"},{url:"assets/js/page-Plugin Description.f964dda4.js",revision:"388db53ffdcc1bba2e4b456a7ee35513"},{url:"assets/js/page-Plugins.0f96fc19.js",revision:"346c2421b95685b151900bdcb357f313"},{url:"assets/js/page-Sidebar.80b6bf4e.js",revision:"1548620e72349775d5fe73ef60cf09ca"},{url:"assets/js/page-stylus configuration.8039135f.js",revision:"1d11f2457e458f0695a5a6cdab0e698c"},{url:"assets/js/page-stylus 配置.77f7a2f3.js",revision:"2bda04635927b6299cabdeeeac8b5648"},{url:"assets/js/page-Superscript and Subscript.0b50aeba.js",revision:"8f92dee2aefb5342e1111ac324942a1e"},{url:"assets/js/page-Tex Support.47a048fa.js",revision:"2cba8db31a79551817245860db233385"},{url:"assets/js/page-Tex 语法支持.429e0c30.js",revision:"5cc74902a0af05d1bf6517c673a933d9"},{url:"assets/js/page-Theme color and Night mode.711f73c0.js",revision:"37e9d7288ce61a7dfb60786e429fd0dd"},{url:"assets/js/page-Theme Config.55a019be.js",revision:"9104d12e7f6a644a13e6e8eb09352e35"},{url:"assets/js/page-TS 支持.828f3819.js",revision:"a40a491492b8973d5b24a89ba9defe1e"},{url:"assets/js/page-Vuepress Cases.c2b8302c.js",revision:"fe1c9f73c1f7b657ca39e509cf1ce3ff"},{url:"assets/js/page-Vuepress commands.b90b6708.js",revision:"e05428b0233fcf0fb14d7de093ffbf05"},{url:"assets/js/page-Vuepress 案例.39daf2bf.js",revision:"0736439f94cfe0cbe043e3d550c6b1dc"},{url:"assets/js/page-vuepress-plugin-container.8bb414fb.js",revision:"a747f1eae996be67d32430daad6275df"},{url:"assets/js/page-vuepress-plugin-copyright.0c2023fb.js",revision:"7d0c645717129a50b22e70258d8eb716"},{url:"assets/js/page-vuepress-plugin-md-enhance.9adac05e.js",revision:"0984eee75b73dbac63e119c57d94efdd"},{url:"assets/js/page-vuepress-plugin-name-chunks.ff877b3e.js",revision:"93170849393905d21c3af120425ae78e"},{url:"assets/js/page-Vuepress.70fd0e9d.js",revision:"87840ae627fae8dfbbb143953a0dd815"},{url:"assets/js/page-Writing a theme.1e3d450f.js",revision:"0076b537658ebd2775c29ad273e0888d"},{url:"assets/js/page-上下角标.3290a120.js",revision:"2d97654e57bdc0dc132900a007954c4b"},{url:"assets/js/page-主页.c9667ff5.js",revision:"8bb014129a5d88b5010094fcad73f981"},{url:"assets/js/page-主题色与夜间模式.a54bb928.js",revision:"571e933eee901f9b035f5a8f751def18"},{url:"assets/js/page-主题配置.409d46f1.js",revision:"84989bf17458cb79459a808325e58553"},{url:"assets/js/page-人物.620b9835.js",revision:"c96b2e888b6e8343da2233e6f171b0d2"},{url:"assets/js/page-介绍.0f4d09fa.js",revision:"0d3cc8a80e913282f861131c97ac17f1"},{url:"assets/js/page-侧边栏.aa91682e.js",revision:"6958dc1d2db7c78369c181ad301c749c"},{url:"assets/js/page-全屏按钮.8ab6b5a8.js",revision:"1f5a1680c4932d20afeae6729294b81a"},{url:"assets/js/page-加密功能.5ff2b38d.js",revision:"a09da5e8bd045d60358eb1cd8aaa4431"},{url:"assets/js/page-博客相关.24fb738d.js",revision:"e88a35405ec8e8191a7fe1a080eec594"},{url:"assets/js/page-图标支持.eb0cdc2c.js",revision:"dba85dfa09bdf66619ca3d28471cf3ac"},{url:"assets/js/page-地点.c84c8afd.js",revision:"0b3bc3c58e8238de2cccf5bd10333b2d"},{url:"assets/js/page-基础知识.d3b63df0.js",revision:"cc97d82aa17446b8829ba1f266bdc37c"},{url:"assets/js/page-对象.38b0d946.js",revision:"58910c5c83782549820e4481455afaa7"},{url:"assets/js/page-导航栏.9424230e.js",revision:"c8f8706d5b874c7ddee80f33d2cc3bc0"},{url:"assets/js/page-布局.56952be9.js",revision:"c5e99aba918cad3cf80926b1a8166841"},{url:"assets/js/page-常见问题.577c2d79.js",revision:"01c940a933b9cdfc8b59ba94553e6c68"},{url:"assets/js/page-开发主题.624b7e8a.js",revision:"bc2f5f7bd4d721e90a06e25f3b18eeba"},{url:"assets/js/page-插件.ab91205a.js",revision:"48baa100d5f2bfc84cc7118ce64b440c"},{url:"assets/js/page-插件说明.a9c5f4a3.js",revision:"095d8f980a0db65f761d0683f2f0181d"},{url:"assets/js/page-文件结构介绍.ee340052.js",revision:"4017309f72095897d46f89c03f4b4d03"},{url:"assets/js/page-新增特性.b72911ae.js",revision:"1242866fcc43c8c13d39d19ea377ac4b"},{url:"assets/js/page-新增组件.1abbf576.js",revision:"fe721e950224f1bfe3de32b96ff98f92"},{url:"assets/js/page-流程图支持.424915ad.js",revision:"5dc90d4790d1743153144766fd084e27"},{url:"assets/js/page-符号.6830bb07.js",revision:"bfc2c7e4d7f0d4b286de1b31b5881568"},{url:"assets/js/page-脚注.06e85c49.js",revision:"4988249a7d77453e10c4799138602f08"},{url:"assets/js/page-自定义对齐.32c39533.js",revision:"5869c48115fb21f3b59b2a0f21af9999"},{url:"assets/js/page-自然.8488da7b.js",revision:"9b6f590826b41f2470f0d1199ea2bb69"},{url:"assets/js/page-评论功能.5eb71bee.js",revision:"15efddb37e4837a4d87a7dbafb1daec0"},{url:"assets/js/page-路径导航.5b6408b0.js",revision:"d1648d1ab0c81e995d41e4d60b6ea2f3"},{url:"assets/js/page-页面.6150040e.js",revision:"f6f57282665d96e4cdedeb286351189d"},{url:"assets/js/page-页面配置.32642ebb.js",revision:"2bc19e3cb15b5d8826b51c4e7963e612"},{url:"assets/js/page-项目指令.12ef948b.js",revision:"f6d4025ec9d4650769befa05700a51cb"},{url:"assets/js/page-默认主题配置.99a6c2be.js",revision:"9f88873f45d85907c31f33a9c842b845"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.156bbd71.js",revision:"9ec1d011c1db034203408be301921b34"},{url:"assets/js/vendors~layout-Layout.6b06051e.js",revision:"0c35cdd9f1adb5473adc6fb11594d284"},{url:"basic/index.html",revision:"eb5f29e325b1ea23719efc2c0a18d239"},{url:"basic/markdown/demo.html",revision:"032cc2deff361b8afd47792215a1fc79"},{url:"basic/markdown/emoji/index.html",revision:"8b36aa44ad86b6d2071e3ea4040adcc9"},{url:"basic/markdown/emoji/locate.html",revision:"0809518376a990c904ce500e745db66f"},{url:"basic/markdown/emoji/nature.html",revision:"15f80c46dbf1d2e4089a973bf8f2975d"},{url:"basic/markdown/emoji/object.html",revision:"f9ae585a98d16b61501b67e342306b3b"},{url:"basic/markdown/emoji/people.html",revision:"7ead91718fb48ce9aea4167c6dc73a49"},{url:"basic/markdown/emoji/symbol.html",revision:"75e7e87a831fd4f3d792b9e647549e20"},{url:"basic/markdown/index.html",revision:"643cd507c238983006ea1d652588fc7e"},{url:"basic/vuepress/case.html",revision:"0fb3e8bd6dfd939c87c806cfcfa3464e"},{url:"basic/vuepress/command.html",revision:"fb46063266357251c02266688a4c5264"},{url:"basic/vuepress/file.html",revision:"23291ef4de480f6fefd366f7e8dd1f8b"},{url:"basic/vuepress/index.html",revision:"4aedd2e82303c415550af552ab4f025e"},{url:"basic/vuepress/plugin.html",revision:"dec67443acca0c62b6b04a235ce570ab"},{url:"basic/vuepress/theme/config.html",revision:"bc20694954dafd8e8b51da5871bb8b8b"},{url:"basic/vuepress/theme/dev.html",revision:"59d9ed81b58c06f0332728f77d18f51e"},{url:"basic/vuepress/theme/index.html",revision:"30cf737f41116606d7572bbcaffdd201"},{url:"category/api/index.html",revision:"91a84e94ad9396a2e93e6443d0d6649f"},{url:"category/function/index.html",revision:"65a358e909abc43df2316cf5dcf104ce"},{url:"category/index.html",revision:"2521cf3422049b0e85d70f555427b92e"},{url:"category/instruction/index.html",revision:"8c3132825004abe6e76195d51b7fe7e5"},{url:"category/layout/index.html",revision:"22b2385c4cd2daaf7a241e84569712a8"},{url:"category/markdown/index.html",revision:"6f9bb9c45b4d1b8d4b26d56ca350c2e6"},{url:"category/style/index.html",revision:"a432bfe5a96d0e4e68a10f1b80798d49"},{url:"en/api/index.html",revision:"2da7a10a6dbb4288f2fc41bb9de00757"},{url:"en/api/page.html",revision:"28c259c502669f32c7a6a333a61169a2"},{url:"en/api/plugin/container.html",revision:"1ba93f93d974209033811a451db7b3a8"},{url:"en/api/plugin/copyright.html",revision:"749f289cbabb527de8f5142a942b38dd"},{url:"en/api/plugin/index.html",revision:"1180eb7582da958a6ddede7756b1b172"},{url:"en/api/plugin/medium-zoom.html",revision:"866c9f151fa9e23d00d1305645e00c79"},{url:"en/api/plugin/name-chunks..html",revision:"7407a5fc98e1197fe62c9544d31f1bcd"},{url:"en/api/plugin/pwa.html",revision:"e96e6ec62572e29a2e8e945eb0230397"},{url:"en/api/stylus.html",revision:"1c43f1df6508eebbfba16d1d2dc0e20c"},{url:"en/api/themeConfig.html",revision:"5c4dba08094dc2fc94ddfba5d030b91d"},{url:"en/basic/index.html",revision:"1011a6af510134ed33fdcf41b9c7c487"},{url:"en/basic/markdown/demo.html",revision:"5d8ec2a700f2939ddcae0ca2ce431cf0"},{url:"en/basic/markdown/emoji.html",revision:"7f594f5f167d446202b5aa1e48fd3155"},{url:"en/basic/markdown/index.html",revision:"3ba7a7fed1938b5693eec50e28d2d13c"},{url:"en/basic/vuepress/case.html",revision:"38a78e996d42a1554bb2ed9a7f8464e9"},{url:"en/basic/vuepress/command.html",revision:"dfdfd4d1a47b5ba26648b16df7cd1a95"},{url:"en/basic/vuepress/file.html",revision:"5a3e55198957157af3e53b50f9c7bc33"},{url:"en/basic/vuepress/index.html",revision:"8f58b19f6fe75cd3501e4a84905eb904"},{url:"en/basic/vuepress/plugin.html",revision:"5e33b41b4813951ff8c285cff01fe80d"},{url:"en/basic/vuepress/theme/config.html",revision:"b1799a41fd3bd16c77ed90e479f0c41f"},{url:"en/basic/vuepress/theme/dev.html",revision:"e62431c8f9ae2827497bf5295e47066d"},{url:"en/basic/vuepress/theme/index.html",revision:"a034c74c14b07dd551a59b1b23dee499"},{url:"en/guide/breadcrumb.html",revision:"e164c2b3aa76559f42bb6bb14f0a0e00"},{url:"en/guide/comment.html",revision:"1e1e042ce814ab4d4311e6ae89fb0d64"},{url:"en/guide/component.html",revision:"8f75e62ef4feb4cf9b74858ce3133211"},{url:"en/guide/fullscreen.html",revision:"9dd7595d76ce1f38a16ec1e67e2a08fe"},{url:"en/guide/home.html",revision:"b5b1260d5bcef881fdc0981e66e5aa46"},{url:"en/guide/index.html",revision:"89ddc44391a7baacb01b682c88c1c68a"},{url:"en/guide/install.html",revision:"056ff2a375064517796e3e5d4abe23e7"},{url:"en/guide/markdown/flowchart.html",revision:"7648f8af1261b456d310b8c2cd729b12"},{url:"en/guide/markdown/footnote.html",revision:"7662ebfd6e6a1bf56abf6022348a9d62"},{url:"en/guide/markdown/index.html",revision:"fa6ec9e9285f5de5bb427d33ba7a1c0d"},{url:"en/guide/markdown/sup-sub.html",revision:"86f101c4f21ea1da04144b87ff96561a"},{url:"en/guide/markdown/tex.html",revision:"997cb18a65428519f00cc9f02288751c"},{url:"en/guide/navbar.html",revision:"ff14aa1c7f67b2bc1fc7838b2fd0c323"},{url:"en/guide/page.html",revision:"7f6558b99bd4d0967e68951d3f2906a1"},{url:"en/guide/sidebar.html",revision:"e2be83cd1c7b50341925838197c2df0d"},{url:"en/guide/themecolor.html",revision:"cab16cfc7a4e768a4b5c3fcd3fcd7130"},{url:"en/index.html",revision:"fe88371894a95818da24ce3ad2937d36"},{url:"FAQ/index.html",revision:"01f167ca8319594fbcfd4eef2e1f32e1"},{url:"guide/feature/blog.html",revision:"72dfbcdbf83de5f8aa466ed86a9113ed"},{url:"guide/feature/comment.html",revision:"b22d517f5d2579219d45c86311e785b5"},{url:"guide/feature/component.html",revision:"7d8b50ed6e79e09951b697285b35a2a4"},{url:"guide/feature/encrypt.html",revision:"ac34b935c658fd7248e154a058909d3a"},{url:"guide/feature/fullscreen.html",revision:"c106cccaacae5cee690e57a04215bc5e"},{url:"guide/feature/icon.html",revision:"48c0c297248d99da8fa2d0d3da590aee"},{url:"guide/feature/index.html",revision:"1b19b65b81463e535eaa4f03b409d0a3"},{url:"guide/feature/themecolor.html",revision:"f796131d9d78f8e8c4cfccaafe2407f4"},{url:"guide/feature/typescript.html",revision:"2e46bc4c55cb0e1b31237329e74cb95f"},{url:"guide/index.html",revision:"e3d67e8f6e8936672dbcf0656abd6672"},{url:"guide/install.html",revision:"cc72580ee510b5e2b309fc0a1be73d2a"},{url:"guide/layout/breadcrumb.html",revision:"386eb410c4327c82a59c2cfd1dce228d"},{url:"guide/layout/home.html",revision:"d566f966b022183757d720dddf57965f"},{url:"guide/layout/index.html",revision:"54dfe690da60690d5c820abfeab7c5d5"},{url:"guide/layout/navbar.html",revision:"2e17c0ef1c72f045a5f1ddcfb32854ee"},{url:"guide/layout/page.html",revision:"c5670569636fda36203192d8d07f0f59"},{url:"guide/layout/sidebar.html",revision:"6b962e88f0e792954c663686fed31eb4"},{url:"guide/markdown/align.html",revision:"3b4a4edaad7b267d5cbe32b236e3020e"},{url:"guide/markdown/flowchart.html",revision:"5328fe735ed51c0dca582849b92fc54a"},{url:"guide/markdown/footnote.html",revision:"a2413866a502abdc0db98122c5d6f6df"},{url:"guide/markdown/index.html",revision:"b48d1be02e23303e82a23ce3c8a4ecdf"},{url:"guide/markdown/sup-sub.html",revision:"05b369d1ae06e94559643bfb1666362b"},{url:"guide/markdown/tex.html",revision:"29ffe438b6ec7a64813997c24a52ae94"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"c31e66924b772e30fad19af254032112"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"8fc39d426700101e52181cf3c7902c10"},{url:"tag/comment/index.html",revision:"e4fe91538dc86fe19842efa23171bbdc"},{url:"tag/component/index.html",revision:"17148f31d20efe8e2a9a43fae66d60c8"},{url:"tag/components/index.html",revision:"a943bfaf5610b9c98042ecaea3a70979"},{url:"tag/emoji/index.html",revision:"9c75238f728161ed93376595beddf674"},{url:"tag/encrypt/index.html",revision:"bb2aef34747c01b0be08297e14519925"},{url:"tag/enhance/index.html",revision:"e3cc433d9bab7d5484b419a0416321d0"},{url:"tag/frontmatter/index.html",revision:"931446b7a74d19b4fa37a7af6201bc5c"},{url:"tag/fullscreen/index.html",revision:"a6f06db307039ec14f007fa49176e5dc"},{url:"tag/function/index.html",revision:"53a3d7c26339a82e842ef9ca17375758"},{url:"tag/home/index.html",revision:"e587b5902214fe1d0200722f24fba858"},{url:"tag/icon/index.html",revision:"4470c10869964b41749496199e3110f9"},{url:"tag/index.html",revision:"60f272335e19570fe036cfa57b88d6ca"},{url:"tag/intro/index.html",revision:"5604d644419441f5750eb9a3edcd8c91"},{url:"tag/layout/index.html",revision:"6e97d3906e05db02932becce03f7a63e"},{url:"tag/markdown/index.html",revision:"c5c8ce06c54379d5f36108d8e4b86aca"},{url:"tag/plugin/index.html",revision:"60e4677fd62a959a019c1c99f8fbaf88"},{url:"tag/style/index.html",revision:"2568c1789750d4146cc31aa3f5a4d97e"},{url:"tag/themeConfig/index.html",revision:"3bb22cb1e9bda0ed6c451a61574da129"},{url:"tag/typescript/index.html",revision:"55b2c46e67d179f1e9fa950333479640"},{url:"tag/vuepress/index.html",revision:"69004e0d7c6f89bd0d93f18a11b701e4"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting')
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
