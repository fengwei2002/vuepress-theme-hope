if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,f)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=f(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-452119c2"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"api/index.html",revision:"023c17a77039ff75afcbcecee1e99fb7"},{url:"api/page.html",revision:"88e471117139ccda351bae0b63452b87"},{url:"api/plugin/container.html",revision:"6370b23d2ad0230209ebf7881d4d0452"},{url:"api/plugin/copyright.html",revision:"f9c6d5e7383f37e7f605e97b18a6b17f"},{url:"api/plugin/index.html",revision:"ef64caca3bbc867507d331eae2132c1e"},{url:"api/plugin/md-enhance.html",revision:"a7f62435cd572cac6d213db559f4826c"},{url:"api/plugin/medium-zoom.html",revision:"fab277d634dc9360270cc34dee7d0646"},{url:"api/plugin/pwa.html",revision:"6ec1f8c2529e7c2fd722f0d077fe6aab"},{url:"api/stylus.html",revision:"e32953c91ded911281c251a71f1a73c3"},{url:"api/themeConfig.html",revision:"d77bcec16f351b87ba1a59f676a94f7f"},{url:"article/index.html",revision:"33d6f3c8372e98c5a2d7476af0a9b759"},{url:"assets/css/0.styles.e43f40ea.css",revision:"a0e3f5fea2c5d8c567c2eabc08802ca0"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/103.3671af11.js",revision:"ae35f13ad8285683a01916a5f2348a9f"},{url:"assets/js/app.08682181.js",revision:"fecb3d1df4c22e96bcc94b1952604665"},{url:"assets/js/layout-BlogEntry.af7fce4f.js",revision:"427a6de993ec83aba4d10c019a5cf0da"},{url:"assets/js/layout-BlogEntry~layout-Layout.059aadbc.js",revision:"44bb9f361f60785c1716f5e2a22b8f6f"},{url:"assets/js/layout-Layout.dd0a2075.js",revision:"7586221f1a9a6499e3e05faad67c751d"},{url:"assets/js/layout-NotFound.1cf3bbed.js",revision:"42d871d908a2579456c3305dd8b033a3"},{url:"assets/js/page--1b278726.f5cf40fe.js",revision:"d3a19266667351b5391d35501461913e"},{url:"assets/js/page--24b68849.807b2a30.js",revision:"1ad303d900b284bd2261cae9e5170475"},{url:"assets/js/page--298eb4e9.f7bd988f.js",revision:"729d50bb3c24886040e64941842af101"},{url:"assets/js/page--33732ef1.c5bf4951.js",revision:"a01d4ec052113ee211d3a1663f6951f9"},{url:"assets/js/page--608d80cf.95b8c099.js",revision:"e21a0bb14249b429f1cf42d733c84403"},{url:"assets/js/page--b64dd6ee.9516be9c.js",revision:"7cc3bff9b009bd6270bebbb8b15c5aaa"},{url:"assets/js/page-About Vuepress.7dfbb582.js",revision:"618fd163606fb0703af379299327067d"},{url:"assets/js/page-API Docs.ade4ba25.js",revision:"e93f115cbc211c20b676c8b0d2e4be8f"},{url:"assets/js/page-API 文档.a53d04e6.js",revision:"ac886a2af85e63ffa7fd26bafecda7c3"},{url:"assets/js/page-Basic.1cabab81.js",revision:"5f96606147b87d02c73d3556e757f506"},{url:"assets/js/page-Blog related.72980a9d.js",revision:"364fb9f5fb9375ee3467ed93a12b4123"},{url:"assets/js/page-Breadcrumb.fb6f1361.js",revision:"77647e8c4e91f97c4c4c1ad8cc64194d"},{url:"assets/js/page-Comment Function.24275c44.js",revision:"30cff7ad920fd62dce87983c5373784f"},{url:"assets/js/page-Common problems.17be375b.js",revision:"864a757da0ba493b92d05284a7d84bf4"},{url:"assets/js/page-Custom alignment.48f867d7.js",revision:"fe928a668a7979731e0aa3b3ed4e6ecf"},{url:"assets/js/page-Darkmode.e8063c93.js",revision:"a335d5e0074bdca3ad56039d89418518"},{url:"assets/js/page-Default Theme Config.fdafd48d.js",revision:"30f7ca05cb0b926138dd960e34ad6ad8"},{url:"assets/js/page-Emoji List.5e727b34.js",revision:"bed73f626cde4e67d55ec8198966f28d"},{url:"assets/js/page-Emoji列表.3fef6e40.js",revision:"46cd340be3a6c44b3340206407be67e4"},{url:"assets/js/page-Encryption function.f37f9e8c.js",revision:"792ce5fc02991c1c6d0b6ea5e892927e"},{url:"assets/js/page-File Structure.8f958abd.js",revision:"f471d9ddc62b479198389b30440bbc5c"},{url:"assets/js/page-Flowchart.abb5dff0.js",revision:"a007e6de4298c872e9d80adb8f918115"},{url:"assets/js/page-Footnote.79a5f95b.js",revision:"70d19d7fea4ac0322d697ed2cd936cd2"},{url:"assets/js/page-Fullscreen Button.5ab1a8fd.js",revision:"225db969f1ae2281fb41669afe03e83d"},{url:"assets/js/page-Home Page.177bbf20.js",revision:"aedd915348d96b64c16c9019f6342fd3"},{url:"assets/js/page-Home.27fb7bb4.js",revision:"2c68f1fbc4faebf2ed39e68b14b76099"},{url:"assets/js/page-Icon support.bad53964.js",revision:"f966d40b5c17bfe5f58c215a7273c4cb"},{url:"assets/js/page-Introduction.ec7f2cdc.js",revision:"71f8ef61b556562fa3f72bb2727aee86"},{url:"assets/js/page-Layout.b50ceb0f.js",revision:"7740587fc62ea06842da5031aa111dcb"},{url:"assets/js/page-Markdown DEMO.cc2a297b.js",revision:"50cf165e2f677c8b0250b76e47eeea96"},{url:"assets/js/page-Markdown Introduction.5d4e3519.js",revision:"da4a5d538f88770994f389ec730f5cc5"},{url:"assets/js/page-Markdown 新语法.d24cfacf.js",revision:"21e16308c55406202176b9193bb0794d"},{url:"assets/js/page-Markdown介绍.af679d53.js",revision:"7353b0773278f0c335bb2d2e9d43f4c0"},{url:"assets/js/page-Markdown示例.4c9e37bc.js",revision:"b4131ef13b6c3243490fa6c6810dc555"},{url:"assets/js/page-NavBar.4592272c.js",revision:"fb836b619634f79ace69564a318e294c"},{url:"assets/js/page-New Component.11ff9d12.js",revision:"aeaee2416507ccb84b70a7164e8f3eb6"},{url:"assets/js/page-New feature.36efd259.js",revision:"1c90ea145a50c4fa1dd9237f46b084bd"},{url:"assets/js/page-New syntax in Markdown.90d23945.js",revision:"e1196602b357e2725150178c00439ebe"},{url:"assets/js/page-Page Configuration.f19c57f8.js",revision:"16e0fa10ac51f6c7791fba3df9abb387"},{url:"assets/js/page-Page.b13c28bd.js",revision:"5c9f4fd59ebc40ba3214763bf2ab2cbf"},{url:"assets/js/page-Plugin Description.bbfc1438.js",revision:"5b013855b8e72fa3491d8787f3eea5bd"},{url:"assets/js/page-Plugins.9e835f46.js",revision:"4b4f9bba2772c03c9eca834fbb55c588"},{url:"assets/js/page-Sidebar.0ebdd78d.js",revision:"68a5192cf41721c00babc69161fbd3b7"},{url:"assets/js/page-stylus configuration.4b3975d3.js",revision:"8298bf250a91094f279ee12c729b04a1"},{url:"assets/js/page-stylus 配置.882e7374.js",revision:"332ea1bcc6fb036b49f547f253020a2f"},{url:"assets/js/page-Superscript and Subscript.12e281d9.js",revision:"d174a9883b494b5903d4ab02e1c95101"},{url:"assets/js/page-Tex Support.779275cf.js",revision:"ae229c84c43f9c56df09ea0c2efb2125"},{url:"assets/js/page-Tex 语法支持.9e0f7084.js",revision:"8f517aed982e5e4a46ad978e5498d21c"},{url:"assets/js/page-Theme color.71f1715c.js",revision:"d853de83ddd29308d0c44170ced205e0"},{url:"assets/js/page-Theme Config.5f75df06.js",revision:"4f5bd558e8512126cfdcb7a4263edff1"},{url:"assets/js/page-TS support.d9ee5281.js",revision:"b9497d20af967878ebcc8ffdf8f2905c"},{url:"assets/js/page-TS 支持.4b66071f.js",revision:"ef28e28b267aaa5c2ca7157e554b6e4f"},{url:"assets/js/page-Vuepress Cases.e040326e.js",revision:"f2ada3ae198cf4c458e18183d106c011"},{url:"assets/js/page-Vuepress commands.129dc6b9.js",revision:"db3a70a5ccfd4e8883022a44d6a9586f"},{url:"assets/js/page-Vuepress 案例.b5984ef5.js",revision:"37a6fedd187218e36daf81508b62ef8b"},{url:"assets/js/page-vuepress-plugin-container.9104e32d.js",revision:"58580b5179f210305718dd896bb14ea9"},{url:"assets/js/page-vuepress-plugin-copyright.5321af79.js",revision:"a7e4c8cbb5f2ba6e5b75583c423300b8"},{url:"assets/js/page-vuepress-plugin-md-enhance.8bc5d723.js",revision:"006fb9c3ca35a3dab81d2255a744ea50"},{url:"assets/js/page-Vuepress.471d43f4.js",revision:"530f8fbfa3c5ea779a92180dc7875067"},{url:"assets/js/page-Writing a theme.7e9071ad.js",revision:"e81ad87691c27445fbce9cb58c9a1665"},{url:"assets/js/page-上下角标.f6da571f.js",revision:"dac25198b9368599774f7cd846af9d43"},{url:"assets/js/page-主页.9501421c.js",revision:"14374feb552a030a9910ea541370e130"},{url:"assets/js/page-主题色.8bf04b1f.js",revision:"9f3e3cc023cb5f54c4e7a2daa1333329"},{url:"assets/js/page-主题配置.10e8d696.js",revision:"a1b5091c777a99c960cad984b46a8035"},{url:"assets/js/page-人物.a0b531f8.js",revision:"0bdc64ffe4d65ff95bf1a1ea7da7ebd8"},{url:"assets/js/page-介绍.c5fc3f6c.js",revision:"90388124336185149068e0ed1db28c4e"},{url:"assets/js/page-侧边栏.97df4207.js",revision:"6b2a881208549349e688af9ae9783a73"},{url:"assets/js/page-全屏按钮.01094019.js",revision:"333adad980d215ead1bac0bda8c48446"},{url:"assets/js/page-加密功能.357379d8.js",revision:"25a6f05420b066876c3329c37769e130"},{url:"assets/js/page-博客相关.1706e9b0.js",revision:"6dc0c071d0b4e15e53893d8ecdb2a019"},{url:"assets/js/page-图标支持.4669293e.js",revision:"d1c4be6facfddfbde87dc5a10c9aefa1"},{url:"assets/js/page-地点.7df668b1.js",revision:"01a5edbca74be54dc365e5e503820a61"},{url:"assets/js/page-基础知识.71c71c51.js",revision:"03ce0fa3bb4e9a10dd007cb5dee9de90"},{url:"assets/js/page-对象.7c3e0301.js",revision:"4247ea81842fbd5cd268c54b43d6bb0f"},{url:"assets/js/page-导航栏.22f9c2fa.js",revision:"698e563263b7ec67c815d06833bd55e8"},{url:"assets/js/page-布局.e7df365b.js",revision:"2121f3e6f5307457c6ee5ff21dbc0249"},{url:"assets/js/page-常见问题.a4c6e549.js",revision:"f676ce0d6f22faa432bda18086a8967c"},{url:"assets/js/page-开发主题.8d6bf511.js",revision:"253f9b2bf8d761d88ac28e41bf69de52"},{url:"assets/js/page-插件.543320da.js",revision:"7fd3365a01da5fe0a0d5f261be7836be"},{url:"assets/js/page-插件说明.16d59a20.js",revision:"3cd49b529e6cf06ed6b8e7d4a57137c2"},{url:"assets/js/page-文件结构介绍.c5e70ae6.js",revision:"6b44a5abedbcd65892db4dd2d5eb1458"},{url:"assets/js/page-新增特性.9d594b8e.js",revision:"dce4973d9b7bc17ba1ad0a7e2565a089"},{url:"assets/js/page-新增组件.4a807dfb.js",revision:"11dce4987a3ee13587dc6ed4b1785721"},{url:"assets/js/page-流程图支持.d0f1d782.js",revision:"0805f5d7fd3f23fd0e908466ca2d9b36"},{url:"assets/js/page-深色模式.8e135849.js",revision:"68305c376df536434f48317f49bad8c4"},{url:"assets/js/page-符号.0635fadb.js",revision:"55b10bb4ff845157787000b886d3fff1"},{url:"assets/js/page-脚注.9d004dbc.js",revision:"3d0c1ce4af4e670afe90ba32ac51b10f"},{url:"assets/js/page-自定义对齐.6ef8e553.js",revision:"a404e96e6774e4d112e1ce40b33f07a9"},{url:"assets/js/page-自然.f0a721fc.js",revision:"9d9e71ce7bb9f1b4cb9540486478d862"},{url:"assets/js/page-评论功能.c6c587fc.js",revision:"8f8dc71188d860ff430acae85ffd1ec7"},{url:"assets/js/page-路径导航.f86fc50f.js",revision:"ca661d787ee7878c169a358d3ffeac2a"},{url:"assets/js/page-页面.6b1e61bc.js",revision:"33da48bc12e1d74fef87539aa434f512"},{url:"assets/js/page-页面配置.23c4d0fa.js",revision:"ee556fb1fb30d23581a8822850c0707e"},{url:"assets/js/page-项目指令.20fbcba7.js",revision:"cf45ee62449e7b793fa4d87d814c55f3"},{url:"assets/js/page-默认主题配置.2f0528be.js",revision:"af5d956969e5a00e56062f18b7b5671b"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.d413221c.js",revision:"a8e5df55ae3966720e41e39db0dcebab"},{url:"assets/js/vendors~layout-Layout.2f3cf91b.js",revision:"b8a17920674c240c3924a491d2b4cb86"},{url:"basic/index.html",revision:"2da1d8dc82eca9c26d83e5a5ad6ca8cb"},{url:"basic/markdown/demo.html",revision:"687a599536f1a8ff2c309afc339b5539"},{url:"basic/markdown/emoji/index.html",revision:"6f67525c753fcd58f6cd050316784dc5"},{url:"basic/markdown/emoji/locate.html",revision:"d8f3bdeb49cf7acb523916190834b76a"},{url:"basic/markdown/emoji/nature.html",revision:"e1ba2f84ed03b7583588aa487a2e2ca2"},{url:"basic/markdown/emoji/object.html",revision:"7069a8b228ec1c4b9997cc69d8445146"},{url:"basic/markdown/emoji/people.html",revision:"465b54123c4e9088a77a670f2af97939"},{url:"basic/markdown/emoji/symbol.html",revision:"c781027b7b0c877d8fad1076d35fc431"},{url:"basic/markdown/index.html",revision:"c71f7cf1486615f3d4bd0fd6911c4a19"},{url:"basic/vuepress/case.html",revision:"595dc3776859814e31a3930fc3ce507b"},{url:"basic/vuepress/command.html",revision:"b56a188c20afc9624bbb3a28553b3465"},{url:"basic/vuepress/file.html",revision:"2549f9c4e5f7f5b03dda09c5ffcaaba9"},{url:"basic/vuepress/index.html",revision:"a3e2d1b2b728239bee700deed6850a70"},{url:"basic/vuepress/plugin.html",revision:"06274f2cfb00c09d93dbca91bb796f65"},{url:"basic/vuepress/theme/config.html",revision:"7849ef17abd152d9902f18bd7726c373"},{url:"basic/vuepress/theme/dev.html",revision:"24d0157534e1e505250a0aa21bf95569"},{url:"basic/vuepress/theme/index.html",revision:"1eb85c50902f565a0b95901ee1f1b0cc"},{url:"category/api/index.html",revision:"2d0bbb387d742be5d322428fcd6378ff"},{url:"category/api/page/2/index.html",revision:"ddfa31b06f502b9bd6b9bd597f6033c7"},{url:"category/FAQ/index.html",revision:"4bb94b9fe7ebd5dce35f61b44c97c174"},{url:"category/function/index.html",revision:"96f083027835484cbb6d696fa1d4cb8e"},{url:"category/function/page/2/index.html",revision:"d5b2250b1443d32b3f13d7c627711833"},{url:"category/index.html",revision:"2ad5240e0aa9c016234c171e67967526"},{url:"category/instruction/index.html",revision:"2eb12651f5378fa7cd9e780b3d8b4f5f"},{url:"category/layout/index.html",revision:"b8f39ef677d375e9eb24695140e68680"},{url:"category/layout/page/2/index.html",revision:"3cd46033189606cbb99a5861fd2e0f1e"},{url:"category/markdown/index.html",revision:"3af28f5c307ebbd8ce1597a23e3bca1b"},{url:"category/style/index.html",revision:"bae117546b5f4acc963473d3c4b68541"},{url:"en/api/index.html",revision:"65bbfdfdb003e725b5103681f3fbe95e"},{url:"en/api/page.html",revision:"4c9acc4338753f734916a5fbaca46593"},{url:"en/api/plugin/container.html",revision:"be42684217c72a0656fd0cf89f660a01"},{url:"en/api/plugin/copyright.html",revision:"8eff090321668ebf4ba47f753419bed0"},{url:"en/api/plugin/index.html",revision:"8598a3ae136f9d4c0c267337962ae2ce"},{url:"en/api/plugin/md-enhance.html",revision:"9273021df78ac8e1c01835a0e4cb50b4"},{url:"en/api/plugin/medium-zoom.html",revision:"1377ca9e3590eafb731eded34d397b97"},{url:"en/api/plugin/pwa.html",revision:"ac3167f318f9eb1e6605a543e5c5b4eb"},{url:"en/api/stylus.html",revision:"378446e880a4e123ab336e58a92bd268"},{url:"en/api/themeConfig.html",revision:"b0128324981a252d273e0353c9d79911"},{url:"en/basic/index.html",revision:"03501f3043720173787e5c165339cc10"},{url:"en/basic/markdown/demo.html",revision:"6942796209fb975581a590a73c442ab9"},{url:"en/basic/markdown/emoji.html",revision:"12c438142c08f242108fdf5065d85c41"},{url:"en/basic/markdown/index.html",revision:"054bf0bc3f57e733710c46e411cb3bb8"},{url:"en/basic/vuepress/case.html",revision:"7953f8fa73f4751609392474551f783e"},{url:"en/basic/vuepress/command.html",revision:"0c3b38a5f1481127b460be645e9fba2c"},{url:"en/basic/vuepress/file.html",revision:"191c178934ca0fb8413d6299a125d92c"},{url:"en/basic/vuepress/index.html",revision:"5fa399a4e7c60ac689421c368060e294"},{url:"en/basic/vuepress/plugin.html",revision:"37b5a0eefa2973d773ea343cfb240bf7"},{url:"en/basic/vuepress/theme/config.html",revision:"5b69060870384a5ddf584f4a06773266"},{url:"en/basic/vuepress/theme/dev.html",revision:"3d3ab24dc9e4d7fe2aba15392caac58d"},{url:"en/basic/vuepress/theme/index.html",revision:"bb18c94f59c2b51c0d30b92c2524a297"},{url:"en/FAQ/index.html",revision:"2937dee8879d0dbd7ff7d722e4217df4"},{url:"en/guide/feature/blog.html",revision:"08bd13871563dbac0ab0b66111bb0e1d"},{url:"en/guide/feature/comment.html",revision:"c806d8dbefa678f7223278f9fbce2be4"},{url:"en/guide/feature/component.html",revision:"7afb8a83b56166fd2b651d9133c0d936"},{url:"en/guide/feature/darkmode.html",revision:"936470a3e4cc7f37e30d0a1c08abd1e9"},{url:"en/guide/feature/encrypt.html",revision:"a835423b7619f35fe47a7512737c06ad"},{url:"en/guide/feature/fullscreen.html",revision:"8f034a8f9e0bba207f5b2017a838ba48"},{url:"en/guide/feature/icon.html",revision:"63ebd1d5bb23f761fa1e44efd3bd26f8"},{url:"en/guide/feature/index.html",revision:"faf09fa148d19980429c19f8e121668d"},{url:"en/guide/feature/themecolor.html",revision:"449885610ca19df5eccd339121b127d3"},{url:"en/guide/feature/typescript.html",revision:"c1823b984df25b302f06084938f0290b"},{url:"en/guide/index.html",revision:"7c266022bdca560ec1e6606f2a28e661"},{url:"en/guide/install.html",revision:"136f84b6c862480875b58c4303bfe40b"},{url:"en/guide/layout/breadcrumb.html",revision:"70cd4ed1ba90b0da8f294046fbc33062"},{url:"en/guide/layout/home.html",revision:"a8b4e96acdb5da10c23f787dd0ce623c"},{url:"en/guide/layout/index.html",revision:"09cf6eac7e7c95df4e2d67a8730e8ee6"},{url:"en/guide/layout/navbar.html",revision:"1b5d64bfdfdc992e2cc9edfc7a27c77c"},{url:"en/guide/layout/page.html",revision:"dca03a1d99dffe45940177c8b3af63e3"},{url:"en/guide/layout/sidebar.html",revision:"f7e5b0df7cbf68eb7779803769ad93fa"},{url:"en/guide/markdown/align.html",revision:"168c52bdda5c314f85a8293ed4ac6ee7"},{url:"en/guide/markdown/flowchart.html",revision:"ad3b454faddd53319394ca40e706fdd2"},{url:"en/guide/markdown/footnote.html",revision:"27d0722cceda911835d95b921469d77e"},{url:"en/guide/markdown/index.html",revision:"254697525841b4499e1e1ac336ad3128"},{url:"en/guide/markdown/sup-sub.html",revision:"4c69e59bb4d0041fb8f12e3e6cf99969"},{url:"en/guide/markdown/tex.html",revision:"387c105a1c35d5621d83e793c494d66a"},{url:"en/index.html",revision:"933a3d064ef6a87c1b369b696e936176"},{url:"FAQ/index.html",revision:"bce6ba482ee7c34d021b5e9507385abc"},{url:"guide/feature/blog.html",revision:"ff69b949fad374a72c8cf38e966af6b8"},{url:"guide/feature/comment.html",revision:"7c4e43849be0437f7a0d1b52e5b637b9"},{url:"guide/feature/component.html",revision:"79ee86be74ac841ce002c756655e0334"},{url:"guide/feature/darkmode.html",revision:"624b3644830ce1d1265e79034a32f63d"},{url:"guide/feature/encrypt.html",revision:"bd42e6c3eacf7192331f67884afa7e74"},{url:"guide/feature/fullscreen.html",revision:"e027e7bfdb050fc958594e0db2406b5f"},{url:"guide/feature/icon.html",revision:"04feefe5e236d9188d2c587f213ab6e2"},{url:"guide/feature/index.html",revision:"8ccb988f4d33c2d44c42f356f9b366ec"},{url:"guide/feature/themecolor.html",revision:"256c9eceb64cb7107655b8776ee8d69e"},{url:"guide/feature/typescript.html",revision:"0ffacb8b10b6e788e96a9caa42a7a61c"},{url:"guide/index.html",revision:"ec36a8cee4c758e1752d375cd3998bbf"},{url:"guide/install.html",revision:"7e49b3ab511ed1f8fe60edb871217f78"},{url:"guide/layout/breadcrumb.html",revision:"0d88a68455ced9b689230f16bebd8b72"},{url:"guide/layout/home.html",revision:"2e9c4d7cb275c5e11c570a83b0426b2a"},{url:"guide/layout/index.html",revision:"ff760cd486944e79c9181ace16e9f427"},{url:"guide/layout/navbar.html",revision:"8595ac33cf888a2a2168a5644d070f7e"},{url:"guide/layout/page.html",revision:"188b81aa0509bdc7553fd16546daecf7"},{url:"guide/layout/sidebar.html",revision:"69858574e5ecd750e9dbafaa80861331"},{url:"guide/markdown/align.html",revision:"bab738ace9c8658497b3a1aac701a3e3"},{url:"guide/markdown/flowchart.html",revision:"5535f82d1ff5aa1f532fcad5a608e506"},{url:"guide/markdown/footnote.html",revision:"27cdb87e0a1982ed34e98b08cbc3c47f"},{url:"guide/markdown/index.html",revision:"db92f4814e627a22ee5b9b99544a747c"},{url:"guide/markdown/sup-sub.html",revision:"7b5682c1902aedb07a4257333e8e2709"},{url:"guide/markdown/tex.html",revision:"ff83c5819ae072f72601a931b24e1014"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"a0eed80e97ff6c2aba348349cf3d2933"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"f773344ea8648d1953dd39216ce1ef62"},{url:"tag/api/page/2/index.html",revision:"c7c91895b6a281389302ed390984fb1b"},{url:"tag/blog/index.html",revision:"4d98421ceaca7abe2d182578721d5f6d"},{url:"tag/comment/index.html",revision:"19d1538848ef3a29ff9f462be9669c51"},{url:"tag/component/index.html",revision:"716ba55fd27bf524682778350cfb5d65"},{url:"tag/components/index.html",revision:"1eb1365c39d98d072370f7a41bec174d"},{url:"tag/emoji/index.html",revision:"00532ecb97e66eb4b13403e54b7527c6"},{url:"tag/encrypt/index.html",revision:"5b9e37226a718db015eb5021a1bb8555"},{url:"tag/enhance/index.html",revision:"68ebf4a1dd78b783afe7609320a9fffc"},{url:"tag/frontmatter/index.html",revision:"5d4b3c7f5271db22fd5c138b6aa173cc"},{url:"tag/fullscreen/index.html",revision:"6b10b7094529bb9e58a37196fcb1144a"},{url:"tag/function/index.html",revision:"2ffc2c8bf63d1ea2734964f6fd6390c6"},{url:"tag/function/page/2/index.html",revision:"96904c3d3fd334382bd5706ce1a0cd88"},{url:"tag/home/index.html",revision:"5bf4a72972ba3619a2c45e062bdd4f34"},{url:"tag/icon/index.html",revision:"8e3002a1036bfa2eb2e3a89221a2cdf9"},{url:"tag/index.html",revision:"47e18713da8bacfb1fc5d3b8c7ecd604"},{url:"tag/intro/index.html",revision:"7bd9e7ef424c8db0cb5f1b89b9736d74"},{url:"tag/layout/index.html",revision:"afe13e7f3530a8086333d7dfce5d7ed9"},{url:"tag/markdown/index.html",revision:"0f4fff5139b7f4edb665058158b4663d"},{url:"tag/plugin/index.html",revision:"e50c69fe00d696c174434c4fbf6848ea"},{url:"tag/plugin/page/2/index.html",revision:"f0c923561060ab87c5986b1244d801ab"},{url:"tag/style/index.html",revision:"6d7117f87f61dd33a12ef2ae7642047b"},{url:"tag/themeConfig/index.html",revision:"7defdbbfa73f89d8c5b5e58d684aa0ea"},{url:"tag/typescript/index.html",revision:"fc49041aa7a2a3961fabf9d9f4dc6413"},{url:"tag/vuepress/index.html",revision:"68bb511b81677db14e1da4f084973a41"}],{})}));
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