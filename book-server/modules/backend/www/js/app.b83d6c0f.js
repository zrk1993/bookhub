(function(e){function n(n){for(var t,a,u=n[0],i=n[1],f=n[2],l=0,m=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);d&&d(n);while(m.length)m.shift()();return c.push.apply(c,f||[]),o()}function o(){for(var e,n=0;n<c.length;n++){for(var o=c[n],t=!0,a=1;a<o.length;a++){var u=o[a];0!==r[u]&&(t=!1)}t&&(c.splice(n--,1),e=i(i.s=o[0]))}return e}var t={},a={app:0},r={app:0},c=[];function u(e){return i.p+"js/"+({404:"404","bookshelf~reader":"bookshelf~reader",bookshelf:"bookshelf",reader:"reader",home:"home"}[e]||e)+"."+{404:"8c57a52e","bookshelf~reader":"3eabaa0a",bookshelf:"24bb72f8",reader:"4e41d95e",home:"e22ec6f1"}[e]+".js"}function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var n=[],o={reader:1};a[e]?n.push(a[e]):0!==a[e]&&o[e]&&n.push(a[e]=new Promise((function(n,o){for(var t="css/"+({404:"404","bookshelf~reader":"bookshelf~reader",bookshelf:"bookshelf",reader:"reader",home:"home"}[e]||e)+"."+{404:"31d6cfe0","bookshelf~reader":"31d6cfe0",bookshelf:"31d6cfe0",reader:"745ffa56",home:"31d6cfe0"}[e]+".css",r=i.p+t,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var f=c[u],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===t||l===r))return n()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){f=m[u],l=f.getAttribute("data-href");if(l===t||l===r)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var t=n&&n.target&&n.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=t,delete a[e],d.parentNode.removeChild(d),o(c)},d.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(d)})).then((function(){a[e]=0})));var t=r[e];if(0!==t)if(t)n.push(t[2]);else{var c=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=c);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var m=new Error;f=function(n){l.onerror=l.onload=null,clearTimeout(d);var o=r[e];if(0!==o){if(o){var t=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;m.message="Loading chunk "+e+" failed.\n("+t+": "+a+")",m.name="ChunkLoadError",m.type=t,m.request=a,o[1](m)}r[e]=void 0}};var d=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,o){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)i.d(o,t,function(n){return e[n]}.bind(null,t));return o},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var m=0;m<f.length;m++)n(f[m]);var d=l;c.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("56d7")},4360:function(e,n,o){"use strict";var t,a=o("2b0e"),r=o("2f62"),c=o("ade3"),u="SET_CURRENT_PAGE",i="SET_PAGE_LOADING",f={currentPage:null,pageLoading:!1},l={namespaced:!0,state:f,mutations:(t={},Object(c["a"])(t,u,(function(e,n){e.currentPage=n})),Object(c["a"])(t,i,(function(e,n){e.pageLoading=n})),t),actions:{before:function(e,n){var o=e.commit,t=n.to;o(u,t)},after:function(e,n){var o=e.commit,t=n.to;o(u,t)},loadingBefore:function(e,n){var o=e.commit;o(i,n)},loadingAfter:function(e,n){var o=e.commit;o(i,n)}}};a["a"].use(r["a"]);n["a"]=new r["a"].Store({modules:{route:l}})},"56d7":function(e,n,o){"use strict";o.r(n);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("f0e6");var t=o("2b0e"),a=o("a211"),r=o("3a34"),c=o.n(r),u=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[];o("5cfb");var f={},l=f,m=(o("5c0b"),o("2877")),d=Object(m["a"])(l,u,i,!1,null,null,null),s=d.exports,p=o("8c4f"),h=(o("d3b7"),[{path:"/",name:"home",component:function(){return o.e("home").then(o.bind(null,"7abe"))}},{path:"/reader",name:"reader",component:function(){return Promise.all([o.e("bookshelf~reader"),o.e("reader")]).then(o.bind(null,"32a6"))}},{path:"/bookshelf",name:"bookshelf",component:function(){return Promise.all([o.e("bookshelf~reader"),o.e("bookshelf")]).then(o.bind(null,"bb6d"))}},{path:"/404",name:"404",component:function(){return o.e("404").then(o.bind(null,"dc75"))}},{path:"*",redirect:"/404"}]),b=h,v=o("4360");t["a"].use(p["a"]);var g=new p["a"]({mode:"hash",base:"",routes:b,scrollBehavior:function(e,n,o){return o||{x:0,y:0}}});g.__proto__.openWindow=function(e){var n=g.resolve(e);window.open(n.href,"_blank")};var y=g,k=(o("b0c0"),o("87d0"),o("e41f")),w=(o("5a5c"),o("772a")),_=(o("8e11"),o("f253")),P=(o("d707"),o("8f80")),O=(o("93b0"),o("2bdd")),E=(o("4391"),o("58e6")),j=(o("97e4"),o("1a23")),S=(o("b342"),o("ad06")),T=(o("6370"),o("3acc")),A=(o("9753"),o("417e")),x=(o("c625"),o("b650")),C=(o("3ec1"),o("7744")),L=(o("2a53"),o("34e9")),N=(o("9eda"),o("565f")),B=(o("bf24"),o("44bf")),M=(o("a035"),o("21ab")),$=(o("4072"),o("2830")),D=(o("8d12"),o("2bb1")),G=(o("3cc4"),o("5596")),I=(o("da02"),o("6b41")),q=(o("4627"),o("2ed4")),J=(o("f811"),o("8ad4")),R=(o("1318"),o("ac28")),U=(o("6e75"),o("343b")),F=(o("47e2"),o("2241")),H=(o("9889"),o("f564")),K=function(e){e.prototype.$notify=H["a"],e.prototype.$dialog=F["a"],e.use(U["a"]),e.component(R["a"].name,R["a"]),e.component(J["a"].name,J["a"]),e.component(q["a"].name,q["a"]),e.component(I["a"].name,I["a"]),e.component(G["a"].name,G["a"]),e.component(D["a"].name,D["a"]),e.component($["a"].name,$["a"]),e.component(M["a"].name,M["a"]),e.component("VanImage",B["a"]),e.component(N["a"].name,N["a"]),e.component(L["a"].name,L["a"]),e.component(C["a"].name,C["a"]),e.component(x["a"].name,x["a"]),e.component(A["a"].name,A["a"]),e.component(T["a"].name,T["a"]),e.component(S["a"].name,S["a"]),e.component(j["a"].name,j["a"]),e.component(E["a"].name,E["a"]),e.component(O["a"].name,O["a"]),e.component(P["a"].name,P["a"]),e.component(_["a"].name,_["a"]),e.component(w["a"].name,w["a"]),e.component(k["a"].name,k["a"])};o("58e4"),o("6038"),o("a197");t["a"].config.productionTip=!1,window.ePub=a["a"],t["a"].use(K),new t["a"]({router:y,store:v["a"],render:function(e){return e(s)}}).$mount("#app");new c.a},"58e4":function(e,n,o){},"5c0b":function(e,n,o){"use strict";o("9c0c")},6038:function(e,n,o){},"9c0c":function(e,n,o){},a197:function(e,n,o){}});