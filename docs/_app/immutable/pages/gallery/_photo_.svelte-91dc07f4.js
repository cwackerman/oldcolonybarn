import{Z as _,S as g,i as d,s as m,a as h,l as b,Y as v,h as i,c as f,m as y,X as c,p as l,b as p,E as u,T as C}from"../../chunks/index-c6434da5.js";const q=()=>{const e=_("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session,updated:e.updated}},B={subscribe(e){return q().page.subscribe(e)}};function S(e){let a,o,s,r;return document.title=a=e[0].params.photo+" | The Barn at Old Colony",{c(){o=h(),s=b("img"),this.h()},l(t){v('[data-svelte="svelte-ernzv7"]',document.head).forEach(i),o=f(t),s=y(t,"IMG",{src:!0,class:!0}),this.h()},h(){c(s.src,r="/gallery/photos/"+e[0].params.photo)||l(s,"src",r),l(s,"class","svelte-1p67m0j")},m(t,n){p(t,o,n),p(t,s,n)},p(t,[n]){n&1&&a!==(a=t[0].params.photo+" | The Barn at Old Colony")&&(document.title=a),n&1&&!c(s.src,r="/gallery/photos/"+t[0].params.photo)&&l(s,"src",r)},i:u,o:u,d(t){t&&i(o),t&&i(s)}}}function T(e,a,o){let s;return C(e,B,r=>o(0,s=r)),console.debug(s.params.photo),[s]}class E extends g{constructor(a){super(),d(this,a,T,S,m,{})}}export{E as default};
