(this["webpackJsonpmy-app2"]=this["webpackJsonpmy-app2"]||[]).push([[0],{25:function(t,e,a){},26:function(t,e,a){},28:function(t,e,a){},47:function(t,e,a){},48:function(t,e,a){},62:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),s=a(16),i=a.n(s),o=(a(25),a(26),a(0));var r=function(){return Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"netflix logo"}),Object(o.jsx)("img",{className:"avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"avatar"})]})},l=(a(28),"92f2e48d0bc384203bf49754a6c2034a"),d="https://image.tmdb.org/t/p/original",u="discover/tv?api_key=".concat(l,"&with_networks=213"),j="discover/movie?api_key=".concat(l,"&with_genres=28"),b=a(4),g=a(17),p=a.n(g).a.create({baseURL:"https://api.themoviedb.org/3"});a(47);var m=function(){var t=Object(c.useState)(),e=Object(b.a)(t,2),a=e[0],n=e[1];return Object(c.useEffect)((function(){p.get("trending/all/week?api_key=".concat(l,"&language=en-US")).then((function(t){console.log(t.data.results[0]),n(t.data.results[0])}))}),[]),Object(o.jsxs)("div",{style:{backgroundImage:"url(".concat(a?d+a.backdrop_path:"",")")},className:"banner",children:[Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h1",{className:"title",children:a?a.title:""}),Object(o.jsxs)("div",{className:"banner_buttons",children:[Object(o.jsx)("button",{className:"buttons",children:"play"}),Object(o.jsx)("button",{className:"buttons",children:"my list"})]}),Object(o.jsx)("h1",{className:"description",children:a?a.overview:""})]}),Object(o.jsx)("div",{className:"fade_bottom"})]})},h=(a(48),a(18));var v=function(t){var e=Object(c.useState)([]),a=Object(b.a)(e,2),n=a[0],s=a[1],i=Object(c.useState)(""),r=Object(b.a)(i,2),u=r[0],j=r[1];return Object(c.useEffect)((function(){p.get(t.url).then((function(t){console.log(t.data),s(t.data.results)})).catch((function(t){alert("network error")}))}),[]),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h2",{children:t.title}),Object(o.jsx)("div",{className:"posters",children:n.map((function(e){return Object(o.jsx)("img",{onClick:function(){return t=e.id,console.log(t),void p.get("movie/".concat(t,"/videos?api_key=").concat(l,"&language=en-US\n        ")).then((function(t){0!==t.data.results.length?j(t.data.results[0]):console.log("array empty")}));var t},src:"".concat(d+e.backdrop_path),alt:"poster",className:t.isSmall?"smallposter":"poster"})}))}),u&&Object(o.jsx)(h.a,{videoId:u.key,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})};var f=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(r,{}),Object(o.jsx)(m,{}),Object(o.jsx)(v,{url:u,title:"Netflix originals"}),Object(o.jsx)(v,{url:j,title:"Action",isSmall:!0})]})},O=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),s(t),i(t)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),O()}},[[62,1,2]]]);
//# sourceMappingURL=main.bff25351.chunk.js.map