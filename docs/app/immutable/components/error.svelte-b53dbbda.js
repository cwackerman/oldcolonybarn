import{L as B,S as H,i as I,s as L,l as d,r as g,a as P,e as C,m as k,n as E,u as S,h as p,c as R,b as u,I as $,v as h,B as N,M}from"../chunks/index-8b5cb5d1.js";const y=()=>{const t=B("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},get session(){return A(),{}},updated:t.updated}},z={subscribe(t){return y().page.subscribe(t)}};function A(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function j(t){let s,a=t[0].error.frame+"",o;return{c(){s=d("pre"),o=g(a)},l(r){s=k(r,"PRE",{});var i=E(s);o=S(i,a),i.forEach(p)},m(r,i){u(r,s,i),$(s,o)},p(r,i){i&1&&a!==(a=r[0].error.frame+"")&&h(o,a)},d(r){r&&p(s)}}}function q(t){let s,a=t[0].error.stack+"",o;return{c(){s=d("pre"),o=g(a)},l(r){s=k(r,"PRE",{});var i=E(s);o=S(i,a),i.forEach(p)},m(r,i){u(r,s,i),$(s,o)},p(r,i){i&1&&a!==(a=r[0].error.stack+"")&&h(o,a)},d(r){r&&p(s)}}}function D(t){let s,a=t[0].status+"",o,r,i,m=t[0].error.message+"",b,v,c,_,l=t[0].error.frame&&j(t),n=t[0].error.stack&&q(t);return{c(){s=d("h1"),o=g(a),r=P(),i=d("pre"),b=g(m),v=P(),l&&l.c(),c=P(),n&&n.c(),_=C()},l(e){s=k(e,"H1",{});var f=E(s);o=S(f,a),f.forEach(p),r=R(e),i=k(e,"PRE",{});var w=E(i);b=S(w,m),w.forEach(p),v=R(e),l&&l.l(e),c=R(e),n&&n.l(e),_=C()},m(e,f){u(e,s,f),$(s,o),u(e,r,f),u(e,i,f),$(i,b),u(e,v,f),l&&l.m(e,f),u(e,c,f),n&&n.m(e,f),u(e,_,f)},p(e,[f]){f&1&&a!==(a=e[0].status+"")&&h(o,a),f&1&&m!==(m=e[0].error.message+"")&&h(b,m),e[0].error.frame?l?l.p(e,f):(l=j(e),l.c(),l.m(c.parentNode,c)):l&&(l.d(1),l=null),e[0].error.stack?n?n.p(e,f):(n=q(e),n.c(),n.m(_.parentNode,_)):n&&(n.d(1),n=null)},i:N,o:N,d(e){e&&p(s),e&&p(r),e&&p(i),e&&p(v),l&&l.d(e),e&&p(c),n&&n.d(e),e&&p(_)}}}function F(t,s,a){let o;return M(t,z,r=>a(0,o=r)),[o]}class J extends H{constructor(s){super(),I(this,s,F,D,L,{})}}export{J as default};