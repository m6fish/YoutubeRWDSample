(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Favorites"],{"03f0":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"video-wall"},t._l(t.getVideos,(function(e,n){return a("div",{key:"v"+n,staticClass:"video-box",on:{click:function(a){return t.goPlaying(e)}}},[a("div",{staticClass:"v_pic",style:{background:"url("+e.pic+")"}},[a("span",{staticClass:"pic_duration"},[t._v(t._s(e.duration))])]),a("div",{staticClass:"v_detail",class:{active:t.isActive(e.id)},on:{click:function(a){return a.stopPropagation(),t.setFavo(e)}}},[a("div",{staticClass:"detail_des"},[t._v(t._s(e.title))]),a("div",{staticClass:"detail_des"},[t._v(t._s(e.description))]),t._m(0,!0)])])})),0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail_favo"},[a("i",{staticClass:"far fa-heart"})])}],r=a("5530"),c=a("2f62"),o={name:"VideoWall",computed:{getVideos:function(){return[]}},methods:Object(r["a"])(Object(r["a"])({},Object(c["c"])(["SET_USER_PLAY"])),{},{setFavo:function(t){},isActive:function(t){return!1},goPlaying:function(t){this.SET_USER_PLAY(t),this.$router.push({name:"Playing"})}})},s=o,u=(a("d592"),a("2877")),f=Object(u["a"])(s,n,i,!1,null,"57ea5d24",null);e["a"]=f.exports},"07ac":function(t,e,a){var n=a("23e7"),i=a("6f53").values;n({target:"Object",stat:!0},{values:function(t){return i(t)}})},"0afd":function(t,e,a){"use strict";(function(t){a("caad"),a("c975"),a("d81d"),a("fb6a"),a("a434"),a("b0c0"),a("07ac"),a("2532");var n,i=a("ade3"),r=a("2909"),c=a("87ec"),o={favoList:[],page:1,maxPage:1,PER_PAGE:12},s={fetchFavorite:function(e,a){var n=e.commit,i=e.dispatch;Object(c["b"])().then((function(e){var a=Object.values(e);n(t.SET_ARRAY_DATA,{mode:2,name:"favoList",data:a}),i("calcPage")}))},setFavorite:function(e,a){var n=a.videoData,i=n.id,r=e.getters.getFavoIDs,o=r.includes(i);o?(e.commit(t.SET_ARRAY_DATA,{mode:0,name:"favoList",idx:r.indexOf(i)}),Object(c["c"])(e,n)):(e.commit(t.SET_ARRAY_DATA,{mode:1,name:"favoList",data:n}),Object(c["a"])(e,n))},calcPage:function(e){var a=e.commit,n=e.state,i=Math.ceil(n.favoList.length/n.PER_PAGE);a(t.SET_DATA,{name:"maxPage",data:i})},setPageNum:function(e,a){var n=e.commit;n(t.SET_DATA,{name:"page",data:+a})}},u=(n={},Object(i["a"])(n,t.SET_DATA,(function(t,e){var a=e.name,n=e.data;t[a]=n})),Object(i["a"])(n,t.SET_ARRAY_DATA,(function(t,e){var a=e.mode,n=e.name,i=e.data,c=e.idx;switch(+a){case 0:t[n].splice(c,1);break;case 1:t[n].push(i);break;case 2:t[n]=Object(r["a"])(i);break;default:console.warn("error mode");break}})),n),f={getFavoListAll:function(t){return t.favoList},getFavoIDs:function(t){return t.favoList.map((function(t){var e=t.id;return e}))},getFavoList:function(t){return t.favoList.slice(t.PER_PAGE*(t.page-1),t.PER_PAGE*t.page)},getPage:function(t){return t.page},getMaxPage:function(t){return t.maxPage}};e["a"]={namespaced:!0,state:o,actions:s,mutations:u,getters:f}}).call(this,a("2427"))},1984:function(t,e,a){},2532:function(t,e,a){"use strict";var n=a("23e7"),i=a("5a34"),r=a("1d80"),c=a("ab13");n({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~String(r(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("6b75");function i(t){if(Array.isArray(t))return Object(n["a"])(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var c=a("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return i(t)||r(t)||Object(c["a"])(t)||o()}},"29f7":function(t,e,a){"use strict";a("a736")},"2ca0":function(t,e,a){"use strict";var n=a("23e7"),i=a("06cf").f,r=a("50c4"),c=a("5a34"),o=a("1d80"),s=a("ab13"),u=a("c430"),f="".startsWith,d=Math.min,l=s("startsWith"),g=!u&&!l&&!!function(){var t=i(String.prototype,"startsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!g&&!l},{startsWith:function(t){var e=String(o(this));c(t);var a=r(d(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return f?f.call(e,n,a):e.slice(a,a+n.length)===n}})},"44e7":function(t,e,a){var n=a("861d"),i=a("c6b6"),r=a("b622"),c=r("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==i(t))}},"5a34":function(t,e,a){var n=a("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5d14":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-num"},[a("ul",{staticClass:"group"},[a("li",{on:{click:t.goFirst}},[t._v("1")]),a("li",{on:{click:t.goPrev}},[t._v(t._s("<<"))]),t._l(t.getPageArr,(function(e){return a("li",{key:"p"+e,class:{active:e===t.getPage},on:{click:function(a){return t.goSpec(e)}}},[t._v(" "+t._s(e)+" ")])})),a("li",{on:{click:t.goNext}},[t._v(t._s(">>"))]),a("li",{on:{click:t.golast}},[t._v(t._s(t.getMaxPage))])],2)])},i=[],r=(a("d81d"),a("2909")),c={name:"pageNum",data:function(){return{NUM_PER_PAGE:5,centerPage:3}},watch:{getPage:function(t){if(this.getMaxPage<=this.NUM_PER_PAGE)return!1;var e=~~(this.NUM_PER_PAGE/2);+t<=e?this.centerPage=e+1:+t>e&&t<=this.getMaxPage-e?this.centerPage=+t:this.centerPage=this.getMaxPage-e}},computed:{getPageArr:function(){return this.getMaxPage<=this.NUM_PER_PAGE?Object(r["a"])(Array(this.getMaxPage)).map((function(t,e){return e+1})):[this.centerPage-2,this.centerPage-1,this.centerPage,this.centerPage+1,this.centerPage+2]}},methods:{goFirst:function(){this.setPageNum(1)},goPrev:function(){this.setPageNum(this.getPage-1||1)},goSpec:function(t){this.setPageNum(+t)},goNext:function(){var t=this.getPage+1;this.setPageNum(t>this.getMaxPage?this.getMaxPage:t)},golast:function(){this.setPageNum(this.getMaxPage)}}},o=c,s=(a("29f7"),a("2877")),u=Object(s["a"])(o,n,i,!1,null,"1b90cd46",null);e["a"]=u.exports},"62aa":function(t,e,a){"use strict";a.r(e);var n,i,r,c,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Favorites"},[t.getFavoIDs.length?[a("videoWall"),a("pageNum")]:t._e(),a("div",{staticClass:"empty",attrs:{else:""}},[t._v("It's empty.")])],2)},s=[],u=a("5530"),f=(a("caad"),a("2532"),a("03f0")),d=a("2f62"),l="Favo",g=Object(d["a"])("".concat(l,"/")),v=g.mapGetters,h=g.mapActions,m={name:"VideoWall",extends:f["a"],computed:Object(u["a"])(Object(u["a"])({},v(["getFavoIDs","getFavoList"])),{},{getVideos:function(){return this.getFavoList||[]}}),methods:Object(u["a"])(Object(u["a"])({},h(["setFavorite"])),{},{setFavo:function(t){this.setFavorite({videoData:t})},isActive:function(t){return this.getFavoIDs.includes(t)}})},p=m,b=a("2877"),P=Object(b["a"])(p,n,i,!1,null,null,null),_=P.exports,A=a("5d14"),x="Favo",O=Object(d["a"])("".concat(x,"/")),E=O.mapGetters,j=O.mapActions,S={name:"pageNum",extends:A["a"],computed:Object(u["a"])({},E(["getPage","getMaxPage"])),methods:Object(u["a"])({},j(["setPageNum"]))},F=S,y=Object(b["a"])(F,r,c,!1,null,null,null),R=y.exports,M=a("0afd"),w="Favo",C=Object(d["a"])("".concat(w,"/")),T=C.mapGetters,N=C.mapActions,k={name:"Favorites",components:{videoWall:_,pageNum:R},beforeCreate:function(){var t=[{name:"Favo",newStore:M["a"]}];this.$root.$emit("add-store",t)},beforeMount:function(){this.fetchFavorite()},computed:Object(u["a"])({},T(["getFavoIDs"])),methods:Object(u["a"])({},N(["fetchFavorite"]))},D=k,L=Object(b["a"])(D,o,s,!1,null,null,null);e["default"]=L.exports},"6f53":function(t,e,a){var n=a("83ab"),i=a("df75"),r=a("fc6a"),c=a("d1e7").f,o=function(t){return function(e){var a,o=r(e),s=i(o),u=s.length,f=0,d=[];while(u>f)a=s[f++],n&&!c.call(o,a)||d.push(t?[a,o[a]]:o[a]);return d}};t.exports={entries:o(!0),values:o(!1)}},"87ec":function(t,e,a){"use strict";a.d(e,"a",(function(){return c})),a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return s}));a("2ca0");var n=a("a002"),i=a.n(n),r="FAVO-",c=function(t,e){t.dispatch,t.commit;return i.a.setItem("".concat(r).concat(e.id),e).then((function(t){return t})).catch((function(t){return console.warn("oops! add fail",t),!1}))},o=function(t,e){t.dispatch,t.commit;return i.a.removeItem("".concat(r).concat(e.id)).then((function(t){return!0})).catch((function(t){return console.warn("oops! remove fail",t),!1}))},s=function(){return i.a.startsWith(r).then((function(t){return t}))}},a434:function(t,e,a){"use strict";var n=a("23e7"),i=a("23cb"),r=a("a691"),c=a("50c4"),o=a("7b0b"),s=a("65f0"),u=a("8418"),f=a("1dde"),d=a("ae40"),l=f("splice"),g=d("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,h=Math.min,m=9007199254740991,p="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!l||!g},{splice:function(t,e){var a,n,f,d,l,g,b=o(this),P=c(b.length),_=i(t,P),A=arguments.length;if(0===A?a=n=0:1===A?(a=0,n=P-_):(a=A-2,n=h(v(r(e),0),P-_)),P+a-n>m)throw TypeError(p);for(f=s(b,n),d=0;d<n;d++)l=_+d,l in b&&u(f,d,b[l]);if(f.length=n,a<n){for(d=_;d<P-n;d++)l=d+n,g=d+a,l in b?b[g]=b[l]:delete b[g];for(d=P;d>P-n+a;d--)delete b[d-1]}else if(a>n)for(d=P-n;d>_;d--)l=d+n-1,g=d+a-1,l in b?b[g]=b[l]:delete b[g];for(d=0;d<a;d++)b[d+_]=arguments[d+2];return b.length=P-n+a,f}})},a736:function(t,e,a){},ab13:function(t,e,a){var n=a("b622"),i=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[i]=!1,"/./"[t](e)}catch(n){}}return!1}},c975:function(t,e,a){"use strict";var n=a("23e7"),i=a("4d64").indexOf,r=a("a640"),c=a("ae40"),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0,u=r("indexOf"),f=c("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:s||!u||!f},{indexOf:function(t){return s?o.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},caad:function(t,e,a){"use strict";var n=a("23e7"),i=a("4d64").includes,r=a("44d2"),c=a("ae40"),o=c("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!o},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},d592:function(t,e,a){"use strict";a("1984")},d81d:function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").map,r=a("1dde"),c=a("ae40"),o=r("map"),s=c("map");n({target:"Array",proto:!0,forced:!o||!s},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);