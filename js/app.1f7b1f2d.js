(function(e){function t(t){for(var r,a,c=t[0],u=t[1],l=t[2],s=0,f=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({Favorites:"Favorites",Hall:"Hall",Playing:"Playing"}[e]||e)+"."+{Favorites:"3d16aefb",Hall:"f830b8c8",Playing:"2f0e16a3"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={Favorites:1,Hall:1,Playing:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({Favorites:"Favorites",Hall:"Hall",Playing:"Playing"}[e]||e)+"."+{Favorites:"9970df54",Hall:"0d32ce32",Playing:"b3f85976"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/YoutubeRWDSample/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"1b6c":function(e,t,n){"use strict";n("34d8")},2427:function(e,t,n){"use strict";n.r(t),n.d(t,"SET_ROOT_DATA",(function(){return r})),n.d(t,"SET_DATA",(function(){return a})),n.d(t,"SET_ARRAY_DATA",(function(){return o}));var r="m0",a="m_0",o="m_1"},"286d":function(e,t,n){"use strict";n("abef")},"34d8":function(e,t,n){},"4ac9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("4160"),n("b0c0"),n("159b"),{name:"app",beforeMount:function(){this.$root.$on("add-store",this.addStore),this.$root.$on("remove-store",this.removeStore)},beforeDestroy:function(){this.$root.$off("add-store",this.addStore),this.$root.$off("remove-store",this.removeStore)},methods:{addStore:function(e){var t=this;e.forEach((function(e){var n=e.name,r=e.newStore;t.$store._modules.root.getChild(n)||t.$store.registerModule(n,r)}))},removeStore:function(e){var t=this;e.forEach((function(e){t.$store._modules.root.getChild(e)&&t.$store.unregisterModule(e)}))}}}),c=i,u=n("2877"),l=Object(u["a"])(c,a,o,!1,null,null,null),s=l.exports,f=(n("99af"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Side"),n("Toggle"),n("div",{staticClass:"main-right"},[n("Header"),n("Main")],1)],1)},m=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("h1",{staticClass:"title"},[e._v(e._s(e.getTitle))])])},h=[],p={name:"Header",computed:{getTitle:function(){var e=this.$route.meta;return e.title}}},g=p,b=(n("1b6c"),Object(u["a"])(g,v,h,!1,null,null,null)),_=b.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[n("router-view")],1)],1)},E=[],A={name:"Main"},T=A,O=(n("286d"),Object(u["a"])(T,y,E,!1,null,"c4bc0e50",null)),S=O.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"side",class:{"side-active":e.getMenuActive}},e._l(e.getMenu,(function(t,r){return n("ul",{key:"G-"+r,staticClass:"routes"},e._l(t.children,(function(t,r){return n("li",{key:r,staticClass:"r_item"},[n("router-link",{class:{active:e.getRouteName===t.name},attrs:{to:t.name}},[n("i",{class:"fas "+t.icon}),n("span",[e._v(e._s(t.title))])])],1)})),0)})),0)},j=[],w=n("5530"),C=n("2f62"),M={name:"Side",computed:Object(w["a"])(Object(w["a"])({},Object(C["d"])(["getMenuActive"])),{},{getMenu:function(){var e=[],t=this.$router.options||{},n=t.routes;return n.forEach((function(t){var n=t.meta,r=t.children,a={};r&&r.forEach((function(e,t){var r=e.name,o=e.meta;0===t&&(a.title=n.title,a.children=[]);var i=o.title,c=o.icon;a.children.push({name:r,title:i,icon:c})})),e.push(a)}),[]),e},getRouteName:function(){return this.$route.name}})},$=M,H=(n("f707"),Object(u["a"])($,P,j,!1,null,"3fc8d226",null)),x=H.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"toggle",class:{active:e.getMenuActive},on:{click:e.toggleClick}})},k=[],D={name:"toggle",computed:Object(w["a"])({},Object(C["d"])(["getMenuActive"])),methods:Object(w["a"])(Object(w["a"])({},Object(C["c"])(["SET_MENU_ACTIVE"])),{},{toggleClick:function(){this.SET_MENU_ACTIVE(!this.getMenuActive)}})},N=D,F=(n("db44"),Object(u["a"])(N,R,k,!1,null,"636d9099",null)),I=F.exports,Y={name:"Home",components:{Header:_,Main:S,Side:x,Toggle:I}},K=Y,L=(n("e355"),Object(u["a"])(K,d,m,!1,null,"eedb3496",null)),U=L.exports;r["a"].use(f["a"]);var V=[{path:"/",name:"Home",redirect:"/hall",meta:{title:"Hall"},component:U,children:[{path:"/hall",name:"Hall",meta:{title:"Hall",icon:"fa-video"},component:function(e){return n.e("Hall").then(function(){return e(n("7e66"))}.bind(null,n)).catch(n.oe)}},{path:"/playing",name:"Playing",meta:{title:"Playing",icon:"fa-play-circle"},component:function(e){return n.e("Playing").then(function(){return e(n("59e8"))}.bind(null,n)).catch(n.oe)}},{path:"/favorites",name:"Favorites",meta:{title:"Favorites",icon:"fa-heart"},component:function(e){return n.e("Favorites").then(function(){return e(n("62aa"))}.bind(null,n)).catch(n.oe)}}]}],J=new f["a"]({mode:"history",base:"/YoutubeRWDSample/",routes:V}),q="MyTube";J.afterEach((function(e){var t=e.meta.title;document.title=t?"".concat(t," - ").concat(q):q}));var B=J,z=n("da8e");r["a"].use(C["b"]);var W=new C["b"].Store({modules:{APP:z["a"]},strict:!1}),G=n("a002"),X=n.n(G),Z=(n("4ac9"),n("e10f")),Q=n("f0e2");n("fda2");r["a"].prototype.$video=Q["a"],Object(Z["extendPrototype"])(X.a),r["a"].config.productionTip=!1,X.a.config({name:"mytube"}),new r["a"]({router:B,store:W,render:function(e){return e(s)}}).$mount("#app")},"597c":function(e,t,n){},"5f69":function(e,t,n){},6792:function(e,t,n){},abef:function(e,t,n){},da8e:function(e,t,n){"use strict";(function(e){n("b0c0");var r=n("ade3"),a=n("3835"),o=(n("96cf"),n("1da1")),i=n("bc3a"),c=n.n(i),u={userPlay:{},menuActive:!1,API_KEY:"AIzaSyDHoqCVMPucZJz867V45hNTrK_h5n78M5E"},l={SEND_AJAX:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,o,i,u,l,s,f,d,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(a["a"])(t,4),r=n[0],o=n[1],i=n[2],u=void 0===i?{}:i,l=n[3],console.log(r,o,u,l),e.next=4,c.a[r](o,u,l).catch((function(e){console.warn("ERR!",e)}));case 4:return s=e.sent,f=s||{},d=f.state,m=f.data,e.abrupt("return",200===+d&&m);case 7:case"end":return e.stop()}}),e)})))()},SET_USER_PLAY:function(t,n){var r=t.commit;r(e.SET_ROOT_DATA,{name:"userPlay",data:n})},SET_MENU_ACTIVE:function(t,n){var r=t.commit;r(e.SET_ROOT_DATA,{name:"menuActive",data:!!n})},SET_API_KEY:function(t,n){var r=t.commit;r(e.SET_ROOT_DATA,{name:"API_KEY",data:n})}},s=Object(r["a"])({},e.SET_ROOT_DATA,(function(e,t){var n=t.name,r=t.data;e[n]=r})),f={getUserPlay:function(e){return e.userPlay},getMenuActive:function(e){return e.menuActive},getKey:function(e){return e.API_KEY}};t["a"]={state:u,actions:l,mutations:s,getters:f}}).call(this,n("2427"))},db44:function(e,t,n){"use strict";n("5f69")},e355:function(e,t,n){"use strict";n("597c")},f707:function(e,t,n){"use strict";n("6792")}});