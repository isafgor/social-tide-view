(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70ccc898"],{"0124":function(t,n,e){"use strict";var r=e("c45c"),i=e.n(r);i.a},"271f":function(t,n,e){t.exports=e.p+"img/logout.c0def004.svg"},"30ad":function(t,n,e){var r={"./bell.svg":"4a1a","./card.svg":"5b31","./coin.svg":"adaa","./expand.svg":"50b5","./logout.svg":"271f","./profile.svg":"9a98","./settings.svg":"3646","./task.svg":"e562"};function i(t){var n=o(t);return e(n)}function o(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id="30ad"},3646:function(t,n,e){t.exports=e.p+"img/settings.06598d6b.svg"},"3d71":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home__container"},[e("Sidebar"),e("router-view")],1)},i=[],o=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-navigation-drawer",{staticClass:"side",attrs:{"mini-variant":t.miniVariant,permanent:t.permanent,src:t.bg,absolute:"",width:"282","mini-variant-width":"103"},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[r("v-list",{staticClass:"py-0",class:!t.miniVariant&&"v-list--custom",attrs:{dense:"",nav:""}},[t.miniVariant?r("v-list-item",{staticClass:"mb-11 mt-5",attrs:{"two-line":""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-badge",{attrs:{bordered:"",color:"error",content:"3",overlap:""}},[r("avatar",{attrs:{username:t.login,size:65,color:"#fff"}})],1)],1)],1):t._e(),t.miniVariant?t._e():r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-avatar",{attrs:{size:"65"}},[r("avatar",{attrs:{username:t.login,size:65,color:"#fff"}})],1),r("v-list-item-content",{staticClass:"side__notification"},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-badge",{attrs:{bordered:"",color:"error",content:"3",overlap:""}},[r("img",{attrs:{width:"42",src:e("4a1a"),alt:""}})])],1)],1)],1),r("v-list-item",[r("p",{staticClass:"side__login"},[t._v(t._s(t.login))])]),r("v-divider"),r("v-list-item",{staticClass:"side__balance"},[t.miniVariant?t._e():r("v-list-item-content",[r("v-list-item-title",[t._v("На счету")])],1),r("v-list-item-icon",{class:t.miniVariant&&"ml-2"},[r("img",{attrs:{width:"20",src:e("adaa"),alt:""}})]),r("v-list-item-content",{class:t.miniVariant&&"coins-mobile"},[r("v-list-item-title",[t._v(t._s(t.coins))])],1)],1),r("v-list-item",{class:t.miniVariant&&"px-0",attrs:{link:""}},[r("v-list-item-icon",[r("img",{attrs:{width:"20",src:e("5b31"),alt:""}})]),r("v-list-item-content",[r("v-list-item-title",[t._v("Пополнить")])],1)],1),r("v-divider"),t._l(t.items,(function(n){return r("v-list-item",{key:n.title,class:t.miniVariant&&"px-0",attrs:{link:""}},[r("v-list-item-icon",[r("img",{attrs:{width:"20",src:e("30ad")("./"+n.icon),alt:""}})]),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(n.title))])],1)],1)})),r("v-divider"),r("v-list-item",{class:t.miniVariant&&"px-0",attrs:{link:""}},[r("v-list-item-icon",[r("img",{attrs:{width:"20",src:e("3646"),alt:""}})]),r("v-list-item-content",[r("v-list-item-title",[t._v("Настройки")])],1)],1),r("v-list-item",{class:t.miniVariant&&"px-0",attrs:{link:""}},[r("v-list-item-icon",[r("img",{attrs:{width:"20",src:e("271f"),alt:""}})]),r("v-list-item-content",[r("v-list-item-title",[t._v("Выйти")])],1)],1)],2),r("div",{staticClass:"side__arrow",class:{hidden:t.miniVariant},on:{click:t.expand}},[r("img",{attrs:{width:"32",src:e("50b5"),alt:""}})])],1)},s=[],a=e("4a89"),c=e.n(a),u={name:"Sidebar",components:{Avatar:c.a},data:function(){return{login:"VPutin",coins:"50",drawer:!0,items:[{title:"Профиль",icon:"profile.svg"},{title:"Мои задания",icon:"task.svg"}],permanent:!0,miniVariant:!1,background:!1}},methods:{expand:function(){this.miniVariant=!this.miniVariant}},computed:{bg:function(){return this.background?"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg":void 0}}},l=u,f=(e("ff86"),e("c63f"),e("2877")),p=Object(f["a"])(l,o,s,!1,null,"7f4d332c",null),d=p.exports,v={name:"Home",components:{Sidebar:d}},m=v,g=(e("0124"),Object(f["a"])(m,r,i,!1,null,"5305e964",null));n["default"]=g.exports},"4a1a":function(t,n,e){t.exports=e.p+"img/bell.7becbf93.svg"},"4a89":function(t,n,e){!function(n,e){t.exports=e()}(0,(function(){return function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=9)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(3)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(6),i=e(7);t.exports=function(t){return r(i(t))}},function(t,n,e){var r=e(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Avatar=void 0;var r=e(10),i=function(t){return t&&t.__esModule?t:{default:t}}(r);n.Avatar=i.default,n.default=i.default},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(12),i=e.n(r),o=e(41),s=e(11),a=s(i.a,o.a,!1,null,null,null);n.default=a.exports},function(t,n){t.exports=function(t,n,e,r,i,o){var s,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,a=t.default);var u,l="function"==typeof a?a.options:a;if(n&&(l.render=n.render,l.staticRenderFns=n.staticRenderFns,l._compiled=!0),e&&(l.functional=!0),i&&(l._scopeId=i),o?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=u):r&&(u=r),u){var f=l.functional,p=f?l.render:l.beforeCreate;f?(l._injectStyles=u,l.render=function(t,n){return u.call(n),p(t,n)}):l.beforeCreate=p?[].concat(p,u):[u]}return{esModule:s,exports:a,options:l}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(13),i=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default={name:"avatar",props:{username:{type:String},initials:{type:String},backgroundColor:{type:String},color:{type:String},customStyle:{type:Object},inline:{type:Boolean},size:{type:Number,default:50},src:{type:String},rounded:{type:Boolean,default:!0},lighten:{type:Number,default:80}},data:function(){return{backgroundColors:["#F44336","#FF4081","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"],imgError:!1}},mounted:function(){this.isImage||this.$emit("avatar-initials",this.username,this.userInitial)},computed:{background:function(){if(!this.isImage)return this.backgroundColor||this.randomBackgroundColor(this.username.length,this.backgroundColors)},fontColor:function(){if(!this.isImage)return this.color||this.lightenColor(this.background,this.lighten)},isImage:function(){return!this.imgError&&Boolean(this.src)},style:function(){var t={display:this.inline?"inline-flex":"flex",width:this.size+"px",height:this.size+"px",borderRadius:this.rounded?"50%":0,lineHeight:this.size+Math.floor(this.size/20)+"px",fontWeight:"bold",alignItems:"center",justifyContent:"center",textAlign:"center",userSelect:"none"},n={background:"transparent url('"+this.src+"') no-repeat scroll 0% 0% / "+this.size+"px "+this.size+"px content-box border-box"},e={backgroundColor:this.background,font:Math.floor(this.size/2.5)+"px/"+this.size+"px Helvetica, Arial, sans-serif",color:this.fontColor},r=this.isImage?n:e;return(0,i.default)(t,r),t},userInitial:function(){return this.isImage?"":this.initials||this.initial(this.username)}},methods:{initial:function(t){for(var n=t.split(/[ -]/),e="",r=0;r<n.length;r++)e+=n[r].charAt(0);return e.length>3&&-1!==e.search(/[A-Z]/)&&(e=e.replace(/[a-z]+/g,"")),e.substr(0,3).toUpperCase()},onImgError:function(t){this.imgError=!0},randomBackgroundColor:function(t,n){return n[t%n.length]},lightenColor:function(t,n){var e=!1;"#"===t[0]&&(t=t.slice(1),e=!0);var r=parseInt(t,16),i=(r>>16)+n;i>255?i=255:i<0&&(i=0);var o=(r>>8&255)+n;o>255?o=255:o<0&&(o=0);var s=(255&r)+n;return s>255?s=255:s<0&&(s=0),(e?"#":"")+(s|o<<8|i<<16).toString(16)}}}},function(t,n,e){t.exports={default:e(14),__esModule:!0}},function(t,n,e){e(15),t.exports=e(4).Object.assign},function(t,n,e){var r=e(16);r(r.S+r.F,"Object",{assign:e(26)})},function(t,n,e){var r=e(0),i=e(4),o=e(17),s=e(19),a=function(t,n,e){var c,u,l,f=t&a.F,p=t&a.G,d=t&a.S,v=t&a.P,m=t&a.B,g=t&a.W,h=p?i:i[n]||(i[n]={}),b=h.prototype,_=p?r:d?r[n]:(r[n]||{}).prototype;for(c in p&&(e=n),e)(u=!f&&_&&void 0!==_[c])&&c in h||(l=u?_[c]:e[c],h[c]=p&&"function"!=typeof _[c]?e[c]:m&&u?o(l,r):g&&_[c]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):v&&"function"==typeof l?o(Function.call,l):l,v&&((h.virtual||(h.virtual={}))[c]=l,t&a.R&&b&&!b[c]&&s(b,c,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,e){var r=e(18);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(20),i=e(25);t.exports=e(2)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(21),i=e(22),o=e(24),s=Object.defineProperty;n.f=e(2)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return s(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(1);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(2)&&!e(3)((function(){return 7!=Object.defineProperty(e(23)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(1),i=e(0).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,e){var r=e(1);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){"use strict";var r=e(27),i=e(38),o=e(39),s=e(40),a=e(6),c=Object.assign;t.exports=!c||e(3)((function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach((function(t){n[t]=t})),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=r}))?function(t,n){for(var e=s(t),c=arguments.length,u=1,l=i.f,f=o.f;c>u;)for(var p,d=a(arguments[u++]),v=l?r(d).concat(l(d)):r(d),m=v.length,g=0;m>g;)f.call(d,p=v[g++])&&(e[p]=d[p]);return e}:c},function(t,n,e){var r=e(28),i=e(37);t.exports=Object.keys||function(t){return r(t,i)}},function(t,n,e){var r=e(29),i=e(5),o=e(31)(!1),s=e(34)("IE_PROTO");t.exports=function(t,n){var e,a=i(t),c=0,u=[];for(e in a)e!=s&&r(a,e)&&u.push(e);for(;n.length>c;)r(a,e=n[c++])&&(~o(u,e)||u.push(e));return u}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(5),i=e(32),o=e(33);t.exports=function(t){return function(n,e,s){var a,c=r(n),u=i(c.length),l=o(s,u);if(t&&e!=e){for(;u>l;)if((a=c[l++])!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===e)return t||l||0;return!t&&-1}}},function(t,n,e){var r=e(8),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,n,e){var r=e(8),i=Math.max,o=Math.min;t.exports=function(t,n){return t=r(t),t<0?i(t+n,0):o(t,n)}},function(t,n,e){var r=e(35)("keys"),i=e(36);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,n,e){var r=e(0),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(7);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vue-avatar--wrapper",style:[t.style,t.customStyle],attrs:{"aria-hidden":"true"}},[this.isImage?e("img",{staticStyle:{display:"none"},attrs:{src:this.src},on:{error:t.onImgError}}):t._e(),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!this.isImage,expression:"!this.isImage"}]},[t._v(t._s(t.userInitial))])])},i=[],o={render:r,staticRenderFns:i};n.a=o}])}))},"50b5":function(t,n,e){t.exports=e.p+"img/expand.6fe8818c.svg"},"5b31":function(t,n,e){t.exports=e.p+"img/card.525dbe0b.svg"},"9a98":function(t,n,e){t.exports=e.p+"img/profile.f437f012.svg"},"9b34":function(t,n,e){},"9d02":function(t,n,e){},adaa:function(t,n,e){t.exports=e.p+"img/coin.d9a7f9b8.svg"},c45c:function(t,n,e){},c63f:function(t,n,e){"use strict";var r=e("9d02"),i=e.n(r);i.a},e562:function(t,n,e){t.exports=e.p+"img/task.29b925c2.svg"},ff86:function(t,n,e){"use strict";var r=e("9b34"),i=e.n(r);i.a}}]);
//# sourceMappingURL=chunk-70ccc898.47197d5a.js.map