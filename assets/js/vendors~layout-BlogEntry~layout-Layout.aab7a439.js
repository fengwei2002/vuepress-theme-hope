(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{162:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"i",(function(){return i})),n.d(e,"f",(function(){return a})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return f})),n.d(e,"j",(function(){return p})),n.d(e,"c",(function(){return d}));const r=/#.*$/,s=/\.(md|html)$/,o=/\/$/,i=/^[a-z]+:/i;function u(t){return decodeURI(t).replace(r,"").replace(s,"")}function a(t){return i.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function h(t){if(a(t))return t;const e=t.match(r),n=e?e[0]:"",s=u(t);return o.test(s)?t:s+".html"+n}function f(t,e){const n=decodeURIComponent(t.hash),s=function(t){const e=t.match(r);if(e)return e[0]}(e);return(!s||n===s)&&u(t.path)===u(e)}function p(t,e,n){if(a(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const s=e.split("/");n&&s[s.length-1]||s.pop();const o=t.replace(/^\//,"").split("/");for(let t=0;t<o.length;t++){const e=o[t];".."===e?s.pop():"."!==e&&s.push(e)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));const r=u(e);for(let e=0;e<t.length;e++)if(u(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}},182:function(t,e,n){},183:function(t,e,n){},186:function(t,e,n){},187:function(t,e,n){},198:function(t,e,n){},210:function(t,e,n){var r,s,o,i,u;r=n(238),s=n(211).utf8,o=n(239),i=n(211).bin,(u=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?i.stringToBytes(t):s.stringToBytes(t):o(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var n=r.bytesToWords(t),a=8*t.length,c=1732584193,l=-271733879,h=-1732584194,f=271733878,p=0;p<n.length;p++)n[p]=16711935&(n[p]<<8|n[p]>>>24)|4278255360&(n[p]<<24|n[p]>>>8);n[a>>>5]|=128<<a%32,n[14+(a+64>>>9<<4)]=a;var d=u._ff,g=u._gg,v=u._hh,m=u._ii;for(p=0;p<n.length;p+=16){var y=c,b=l,x=h,_=f;c=d(c,l,h,f,n[p+0],7,-680876936),f=d(f,c,l,h,n[p+1],12,-389564586),h=d(h,f,c,l,n[p+2],17,606105819),l=d(l,h,f,c,n[p+3],22,-1044525330),c=d(c,l,h,f,n[p+4],7,-176418897),f=d(f,c,l,h,n[p+5],12,1200080426),h=d(h,f,c,l,n[p+6],17,-1473231341),l=d(l,h,f,c,n[p+7],22,-45705983),c=d(c,l,h,f,n[p+8],7,1770035416),f=d(f,c,l,h,n[p+9],12,-1958414417),h=d(h,f,c,l,n[p+10],17,-42063),l=d(l,h,f,c,n[p+11],22,-1990404162),c=d(c,l,h,f,n[p+12],7,1804603682),f=d(f,c,l,h,n[p+13],12,-40341101),h=d(h,f,c,l,n[p+14],17,-1502002290),c=g(c,l=d(l,h,f,c,n[p+15],22,1236535329),h,f,n[p+1],5,-165796510),f=g(f,c,l,h,n[p+6],9,-1069501632),h=g(h,f,c,l,n[p+11],14,643717713),l=g(l,h,f,c,n[p+0],20,-373897302),c=g(c,l,h,f,n[p+5],5,-701558691),f=g(f,c,l,h,n[p+10],9,38016083),h=g(h,f,c,l,n[p+15],14,-660478335),l=g(l,h,f,c,n[p+4],20,-405537848),c=g(c,l,h,f,n[p+9],5,568446438),f=g(f,c,l,h,n[p+14],9,-1019803690),h=g(h,f,c,l,n[p+3],14,-187363961),l=g(l,h,f,c,n[p+8],20,1163531501),c=g(c,l,h,f,n[p+13],5,-1444681467),f=g(f,c,l,h,n[p+2],9,-51403784),h=g(h,f,c,l,n[p+7],14,1735328473),c=v(c,l=g(l,h,f,c,n[p+12],20,-1926607734),h,f,n[p+5],4,-378558),f=v(f,c,l,h,n[p+8],11,-2022574463),h=v(h,f,c,l,n[p+11],16,1839030562),l=v(l,h,f,c,n[p+14],23,-35309556),c=v(c,l,h,f,n[p+1],4,-1530992060),f=v(f,c,l,h,n[p+4],11,1272893353),h=v(h,f,c,l,n[p+7],16,-155497632),l=v(l,h,f,c,n[p+10],23,-1094730640),c=v(c,l,h,f,n[p+13],4,681279174),f=v(f,c,l,h,n[p+0],11,-358537222),h=v(h,f,c,l,n[p+3],16,-722521979),l=v(l,h,f,c,n[p+6],23,76029189),c=v(c,l,h,f,n[p+9],4,-640364487),f=v(f,c,l,h,n[p+12],11,-421815835),h=v(h,f,c,l,n[p+15],16,530742520),c=m(c,l=v(l,h,f,c,n[p+2],23,-995338651),h,f,n[p+0],6,-198630844),f=m(f,c,l,h,n[p+7],10,1126891415),h=m(h,f,c,l,n[p+14],15,-1416354905),l=m(l,h,f,c,n[p+5],21,-57434055),c=m(c,l,h,f,n[p+12],6,1700485571),f=m(f,c,l,h,n[p+3],10,-1894986606),h=m(h,f,c,l,n[p+10],15,-1051523),l=m(l,h,f,c,n[p+1],21,-2054922799),c=m(c,l,h,f,n[p+8],6,1873313359),f=m(f,c,l,h,n[p+15],10,-30611744),h=m(h,f,c,l,n[p+6],15,-1560198380),l=m(l,h,f,c,n[p+13],21,1309151649),c=m(c,l,h,f,n[p+4],6,-145523070),f=m(f,c,l,h,n[p+11],10,-1120210379),h=m(h,f,c,l,n[p+2],15,718787259),l=m(l,h,f,c,n[p+9],21,-343485551),c=c+y>>>0,l=l+b>>>0,h=h+x>>>0,f=f+_>>>0}return r.endian([c,l,h,f])})._ff=function(t,e,n,r,s,o,i){var u=t+(e&n|~e&r)+(s>>>0)+i;return(u<<o|u>>>32-o)+e},u._gg=function(t,e,n,r,s,o,i){var u=t+(e&r|n&~r)+(s>>>0)+i;return(u<<o|u>>>32-o)+e},u._hh=function(t,e,n,r,s,o,i){var u=t+(e^n^r)+(s>>>0)+i;return(u<<o|u>>>32-o)+e},u._ii=function(t,e,n,r,s,o,i){var u=t+(n^(e|~r))+(s>>>0)+i;return(u<<o|u>>>32-o)+e},u._blocksize=16,u._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var n=r.wordsToBytes(u(t,e));return e&&e.asBytes?n:e&&e.asString?i.bytesToString(n):r.bytesToHex(n)}},211:function(t,e){var n={utf8:{stringToBytes:function(t){return n.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(n.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=n},218:function(t,e,n){"use strict";n.r(e);var r=n(219),s=n(216),o={name:"Sidebar",components:{SidebarLinks:r.default,NavLinks:s.a},props:["items"]},i=(n(254),n(0)),u=Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=u.exports},219:function(t,e,n){"use strict";n.r(e);var r=n(262),s=n(264),o=n(162);function i(t,e){return"group"===e.type&&e.children.some(e=>"group"===e.type?i(t,e):"page"===e.type&&Object(o.e)(t,e.path))}var u={name:"SidebarLinks",components:{SidebarGroup:r.a,SidebarLink:s.a},props:["items","depth","sidebarDepth"],data:()=>({openGroupIndex:0}),watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(i(t,r))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(o.e)(this.$route,t.regularPath)}}},a=n(0),c=Object(a.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=c.exports},220:function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},s=(n(231),n(0)),o=Object(s.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},230:function(t,e,n){"use strict";var r=n(182);n.n(r).a},231:function(t,e,n){"use strict";var r=n(183);n.n(r).a},232:function(t,e){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},235:function(t,e,n){"use strict";var r=n(186);n.n(r).a},236:function(t,e,n){"use strict";var r=n(187);n.n(r).a},238:function(t,e){var n,r;n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,r=0;n<t.length;n++,r+=8)e[r>>>5]|=t[n]<<24-r%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var e=[],r=0;r<t.length;r+=3)for(var s=t[r]<<16|t[r+1]<<8|t[r+2],o=0;o<4;o++)8*r+6*o<=8*t.length?e.push(n.charAt(s>>>6*(3-o)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],r=0,s=0;r<t.length;s=++r%4)0!=s&&e.push((n.indexOf(t.charAt(r-1))&Math.pow(2,-2*s+8)-1)<<2*s|n.indexOf(t.charAt(r))>>>6-2*s);return e}},t.exports=r},239:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},254:function(t,e,n){"use strict";var r=n(198);n.n(r).a},260:function(t,e,n){"use strict";var r={name:"AlgoliaSearchBox",props:["options"],data:()=>({placeholder:void 0}),watch:{$lang(t){this.update(this.options,t)},options(t){this.update(t,this.$lang)}},mounted(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize(t,e){Promise.all([Promise.all([n.e(0),n.e(93)]).then(n.t.bind(null,273,7)),Promise.all([n.e(0),n.e(93)]).then(n.t.bind(null,274,7))]).then(([n])=>{n=n.default;const{algoliaOptions:r={}}=t;n(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:[`lang:${e}`].concat(r.facetFilters||[])},r),handleSelected:(t,e,n)=>{const{pathname:r,hash:s}=new URL(n.url),o=r.replace(this.$site.base,"/");this.$router.push(`${o}${s}`)}}))})},update(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}}},s=(n(230),n(0)),o=Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);e.a=o.exports},261:function(t,e,n){"use strict";var r={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,n=this.$site.themeConfig.searchMaxSuggestions||10,r=this.$localePath,s=e=>e&&e.title&&e.title.toLowerCase().indexOf(t)>-1,o=[];for(let t=0;t<e.length&&!(o.length>=n);t++){const i=e[t];if(this.getPageLocalePath(i)===r&&this.isSearchable(i))if(s(i))o.push(i);else if(i.headers)for(let t=0;t<i.headers.length&&!(o.length>=n);t++){const e=i.headers[t];s(e)&&o.push(Object.assign({},i,{path:i.path+"#"+e.slug,header:e}))}}return o},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},s=(n(235),n(0)),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,r){return n("li",{key:r,staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=o.exports},263:function(t,e,n){"use strict";n(236);var r=n(0),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.a=s.exports}}]);