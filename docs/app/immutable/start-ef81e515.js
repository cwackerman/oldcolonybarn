var qe=Object.defineProperty;var ze=(a,e,n)=>e in a?qe(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var ce=(a,e,n)=>(ze(a,typeof e!="symbol"?e+"":e,n),n);import{S as Be,i as Ke,s as Je,a as We,e as O,c as He,b as B,g as W,t as P,d as H,f as U,h as D,j as Fe,k as Ge,o as _e,l as Ye,m as Me,n as Xe,p as fe,q as F,r as Ze,u as Qe,v as xe,w as N,x as Y,y as V,z as C,A as Se}from"./chunks/index-166ef422.js";import{w as me}from"./chunks/index-52a4437b.js";import{i as et}from"./chunks/singletons-a2babded.js";class te{constructor(e,n){ce(this,"name","HttpError");ce(this,"stack");this.status=e,this.message=n!=null?n:`Error: ${e}`}toString(){return this.message}}class Ae{constructor(e,n){this.status=e,this.location=n}}function tt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function nt(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}class rt extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}let Oe="",Ve="";function at(a){Oe=a.base,Ve=a.assets||Oe}function Pe(a){let e=a.baseURI;if(!e){const n=a.getElementsByTagName("base");e=n.length?n[0].href:a.URL}return e}function pe(){return{x:pageXOffset,y:pageYOffset}}function Ue(a){return a.composedPath().find(n=>n instanceof Node&&n.nodeName.toUpperCase()==="A")}function Ie(a){return a instanceof SVGAElement?new URL(a.href.baseVal,document.baseURI):new URL(a.href)}function Te(a){const e=me(a);let n=!0;function s(){n=!0,e.update(t=>t)}function r(t){n=!1,e.set(t)}function c(t){let i;return e.subscribe(o=>{(i===void 0||n&&o!==i)&&t(i=o)})}return{notify:s,set:r,subscribe:c}}function st(){const{set:a,subscribe:e}=me(!1);let n;async function s(){clearTimeout(n);const r=await fetch(`${Ve}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(r.ok){const{version:c}=await r.json(),t=c!=="1660795214410";return t&&(a(!0),clearTimeout(n)),t}else throw new Error(`Version check failed: ${r.status}`)}return{subscribe:e,check:s}}function it(a){let e=5381,n=a.length;if(typeof a=="string")for(;n;)e=e*33^a.charCodeAt(--n);else for(;n;)e=e*33^a[--n];return(e>>>0).toString(36)}const he=window.fetch;function ot(a,e){let s=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof a=="string"?a:a.url)}]`;e&&typeof e.body=="string"&&(s+=`[sveltekit\\:data-body="${it(e.body)}"]`);const r=document.querySelector(s);if(r&&r.textContent){const{body:c,...t}=JSON.parse(r.textContent);return Promise.resolve(new Response(c,t))}return he(a,e)}const lt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function ct(a){const e=[],n=[];let s=!0;return{pattern:a===""?/^\/$/:new RegExp(`^${decodeURIComponent(a).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((c,t,i)=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(o)return e.push(o[1]),n.push(o[2]),"(?:/(.*))?";const f=t===i.length-1;return c&&"/"+c.split(/\[(.+?)\]/).map((h,R)=>{if(R%2){const A=lt.exec(h);if(!A)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,J,$,T]=A;return e.push($),n.push(T),J?"(.*?)":"([^/]+?)"}return f&&h.includes(".")&&(s=!1),h.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${s?"/?":""}$`),names:e,types:n}}function ft(a,e,n,s){const r={};for(let c=0;c<e.length;c+=1){const t=e[c],i=n[c],o=a[c+1]||"";if(i){const f=s[i];if(!f)throw new Error(`Missing "${i}" param matcher`);if(!f(o))return}r[t]=o}return r}function ut(a,e,n){return Object.entries(e).map(([s,[r,c,t,i]])=>{const{pattern:o,names:f,types:h}=ct(s),R={id:s,exec:A=>{const J=o.exec(A);if(J)return ft(J,f,h,n)},errors:r.map(A=>a[A]),layouts:c.map(A=>a[A]),leaf:a[t],uses_server_data:!!i};return R.errors.length=R.layouts.length=Math.max(R.errors.length,R.layouts.length),R})}function dt(a,e){return new te(a,e)}function _t(a){let e,n,s;var r=a[0][0];function c(t){return{props:{data:t[1],errors:t[5]}}}return r&&(e=new r(c(a))),{c(){e&&N(e.$$.fragment),n=O()},l(t){e&&Y(e.$$.fragment,t),n=O()},m(t,i){e&&V(e,t,i),B(t,n,i),s=!0},p(t,i){const o={};if(i&2&&(o.data=t[1]),i&32&&(o.errors=t[5]),r!==(r=t[0][0])){if(e){W();const f=e;P(f.$$.fragment,1,0,()=>{C(f,1)}),H()}r?(e=new r(c(t)),N(e.$$.fragment),U(e.$$.fragment,1),V(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){s||(e&&U(e.$$.fragment,t),s=!0)},o(t){e&&P(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&C(e,t)}}}function pt(a){let e,n,s;var r=a[0][0];function c(t){return{props:{data:t[1],$$slots:{default:[yt]},$$scope:{ctx:t}}}}return r&&(e=new r(c(a))),{c(){e&&N(e.$$.fragment),n=O()},l(t){e&&Y(e.$$.fragment,t),n=O()},m(t,i){e&&V(e,t,i),B(t,n,i),s=!0},p(t,i){const o={};if(i&2&&(o.data=t[1]),i&2109&&(o.$$scope={dirty:i,ctx:t}),r!==(r=t[0][0])){if(e){W();const f=e;P(f.$$.fragment,1,0,()=>{C(f,1)}),H()}r?(e=new r(c(t)),N(e.$$.fragment),U(e.$$.fragment,1),V(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){s||(e&&U(e.$$.fragment,t),s=!0)},o(t){e&&P(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&C(e,t)}}}function ht(a){let e,n,s;var r=a[0][1];function c(t){return{props:{data:t[2],errors:t[5]}}}return r&&(e=new r(c(a))),{c(){e&&N(e.$$.fragment),n=O()},l(t){e&&Y(e.$$.fragment,t),n=O()},m(t,i){e&&V(e,t,i),B(t,n,i),s=!0},p(t,i){const o={};if(i&4&&(o.data=t[2]),i&32&&(o.errors=t[5]),r!==(r=t[0][1])){if(e){W();const f=e;P(f.$$.fragment,1,0,()=>{C(f,1)}),H()}r?(e=new r(c(t)),N(e.$$.fragment),U(e.$$.fragment,1),V(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){s||(e&&U(e.$$.fragment,t),s=!0)},o(t){e&&P(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&C(e,t)}}}function mt(a){let e,n,s;var r=a[0][1];function c(t){return{props:{data:t[2],$$slots:{default:[vt]},$$scope:{ctx:t}}}}return r&&(e=new r(c(a))),{c(){e&&N(e.$$.fragment),n=O()},l(t){e&&Y(e.$$.fragment,t),n=O()},m(t,i){e&&V(e,t,i),B(t,n,i),s=!0},p(t,i){const o={};if(i&4&&(o.data=t[2]),i&2105&&(o.$$scope={dirty:i,ctx:t}),r!==(r=t[0][1])){if(e){W();const f=e;P(f.$$.fragment,1,0,()=>{C(f,1)}),H()}r?(e=new r(c(t)),N(e.$$.fragment),U(e.$$.fragment,1),V(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){s||(e&&U(e.$$.fragment,t),s=!0)},o(t){e&&P(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&C(e,t)}}}function gt(a){let e,n,s;var r=a[0][2];function c(t){return{props:{data:t[3],errors:t[5]}}}return r&&(e=new r(c(a))),{c(){e&&N(e.$$.fragment),n=O()},l(t){e&&Y(e.$$.fragment,t),n=O()},m(t,i){e&&V(e,t,i),B(t,n,i),s=!0},p(t,i){const o={};if(i&8&&(o.data=t[3]),i&32&&(o.errors=t[5]),r!==(r=t[0][2])){if(e){W();const f=e;P(f.$$.fragment,1,0,()=>{C(f,1)}),H()}r?(e=new r(c(t)),N(e.$$.fragment),U(e.$$.fragment,1),V(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){s||(e&&U(e.$$.fragment,t),s=!0)},o(t){e&&P(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&C(e,t)}}}function wt(a){let e,n,s;var r=a[0][2];function c(t){return{props:{data:t[3],$$slots:{default:[bt]},$$scope:{ctx:t}}}}return r&&(e=new r(c(a))),{c(){e&&N(e.$$.fragment),n=O()},l(t){e&&Y(e.$$.fragment,t),n=O()},m(t,i){e&&V(e,t,i),B(t,n,i),s=!0},p(t,i){const o={};if(i&8&&(o.data=t[3]),i&2065&&(o.$$scope={dirty:i,ctx:t}),r!==(r=t[0][2])){if(e){W();const f=e;P(f.$$.fragment,1,0,()=>{C(f,1)}),H()}r?(e=new r(c(t)),N(e.$$.fragment),U(e.$$.fragment,1),V(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){s||(e&&U(e.$$.fragment,t),s=!0)},o(t){e&&P(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&C(e,t)}}}function bt(a){let e,n,s;var r=a[0][3];function c(t){return{props:{data:t[4]}}}return r&&(e=new r(c(a))),{c(){e&&N(e.$$.fragment),n=O()},l(t){e&&Y(e.$$.fragment,t),n=O()},m(t,i){e&&V(e,t,i),B(t,n,i),s=!0},p(t,i){const o={};if(i&16&&(o.data=t[4]),r!==(r=t[0][3])){if(e){W();const f=e;P(f.$$.fragment,1,0,()=>{C(f,1)}),H()}r?(e=new r(c(t)),N(e.$$.fragment),U(e.$$.fragment,1),V(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){s||(e&&U(e.$$.fragment,t),s=!0)},o(t){e&&P(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&C(e,t)}}}function vt(a){let e,n,s,r;const c=[wt,gt],t=[];function i(o,f){return o[0][3]?0:1}return e=i(a),n=t[e]=c[e](a),{c(){n.c(),s=O()},l(o){n.l(o),s=O()},m(o,f){t[e].m(o,f),B(o,s,f),r=!0},p(o,f){let h=e;e=i(o),e===h?t[e].p(o,f):(W(),P(t[h],1,1,()=>{t[h]=null}),H(),n=t[e],n?n.p(o,f):(n=t[e]=c[e](o),n.c()),U(n,1),n.m(s.parentNode,s))},i(o){r||(U(n),r=!0)},o(o){P(n),r=!1},d(o){t[e].d(o),o&&D(s)}}}function yt(a){let e,n,s,r;const c=[mt,ht],t=[];function i(o,f){return o[0][2]?0:1}return e=i(a),n=t[e]=c[e](a),{c(){n.c(),s=O()},l(o){n.l(o),s=O()},m(o,f){t[e].m(o,f),B(o,s,f),r=!0},p(o,f){let h=e;e=i(o),e===h?t[e].p(o,f):(W(),P(t[h],1,1,()=>{t[h]=null}),H(),n=t[e],n?n.p(o,f):(n=t[e]=c[e](o),n.c()),U(n,1),n.m(s.parentNode,s))},i(o){r||(U(n),r=!0)},o(o){P(n),r=!1},d(o){t[e].d(o),o&&D(s)}}}function je(a){let e,n=a[7]&&De(a);return{c(){e=Ye("div"),n&&n.c(),this.h()},l(s){e=Me(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=Xe(e);n&&n.l(r),r.forEach(D),this.h()},h(){fe(e,"id","svelte-announcer"),fe(e,"aria-live","assertive"),fe(e,"aria-atomic","true"),F(e,"position","absolute"),F(e,"left","0"),F(e,"top","0"),F(e,"clip","rect(0 0 0 0)"),F(e,"clip-path","inset(50%)"),F(e,"overflow","hidden"),F(e,"white-space","nowrap"),F(e,"width","1px"),F(e,"height","1px")},m(s,r){B(s,e,r),n&&n.m(e,null)},p(s,r){s[7]?n?n.p(s,r):(n=De(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&D(e),n&&n.d()}}}function De(a){let e;return{c(){e=Ze(a[8])},l(n){e=Qe(n,a[8])},m(n,s){B(n,e,s)},p(n,s){s&256&&xe(e,n[8])},d(n){n&&D(e)}}}function $t(a){let e,n,s,r,c;const t=[pt,_t],i=[];function o(h,R){return h[0][1]?0:1}e=o(a),n=i[e]=t[e](a);let f=a[6]&&je(a);return{c(){n.c(),s=We(),f&&f.c(),r=O()},l(h){n.l(h),s=He(h),f&&f.l(h),r=O()},m(h,R){i[e].m(h,R),B(h,s,R),f&&f.m(h,R),B(h,r,R),c=!0},p(h,[R]){let A=e;e=o(h),e===A?i[e].p(h,R):(W(),P(i[A],1,1,()=>{i[A]=null}),H(),n=i[e],n?n.p(h,R):(n=i[e]=t[e](h),n.c()),U(n,1),n.m(s.parentNode,s)),h[6]?f?f.p(h,R):(f=je(h),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null)},i(h){c||(U(n),c=!0)},o(h){P(n),c=!1},d(h){i[e].d(h),h&&D(s),f&&f.d(h),h&&D(r)}}}function kt(a,e,n){let{stores:s}=e,{page:r}=e,{components:c}=e,{data_0:t=null}=e,{data_1:i=null}=e,{data_2:o=null}=e,{data_3:f=null}=e,{errors:h}=e;Fe("__svelte__",s),Ge(s.page.notify);let R=!1,A=!1,J=null;return _e(()=>{const $=s.page.subscribe(()=>{R&&(n(7,A=!0),n(8,J=document.title||"untitled page"))});return n(6,R=!0),$}),a.$$set=$=>{"stores"in $&&n(9,s=$.stores),"page"in $&&n(10,r=$.page),"components"in $&&n(0,c=$.components),"data_0"in $&&n(1,t=$.data_0),"data_1"in $&&n(2,i=$.data_1),"data_2"in $&&n(3,o=$.data_2),"data_3"in $&&n(4,f=$.data_3),"errors"in $&&n(5,h=$.errors)},a.$$.update=()=>{a.$$.dirty&1536&&s.page.set(r)},[c,t,i,o,f,h,R,A,J,s,r]}class Et extends Be{constructor(e){super(),Ke(this,e,kt,$t,Je,{stores:9,page:10,components:0,data_0:1,data_1:2,data_2:3,data_3:4,errors:5})}}const Rt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Lt=function(a,e){return new URL(a,e).href},Ne={},K=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=Lt(r,s),r in Ne)return;Ne[r]=!0;const c=r.endsWith(".css"),t=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const i=document.createElement("link");if(i.rel=c?"stylesheet":Rt,c||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),c)return new Promise((o,f)=>{i.addEventListener("load",o),i.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function St(a){return/.(jpg|jpeg)$/.test(a)}const At={photo:St},ne=[()=>K(()=>import("./chunks/0-0cb04f6f.js"),["chunks/0-0cb04f6f.js","assets/app-9347aaa0.css","components/pages/_layout.svelte-452572da.js","assets/+layout-38076f28.css","chunks/index-166ef422.js","chunks/PageHeader-2920e541.js","assets/PageHeader-db478966.css","chunks/singletons-a2babded.js"],import.meta.url),()=>K(()=>import("./chunks/1-701f087d.js"),["chunks/1-701f087d.js","components/error.svelte-b33259a9.js","chunks/index-166ef422.js"],import.meta.url),()=>K(()=>import("./chunks/2-c8d280fa.js"),["chunks/2-c8d280fa.js","assets/app-9347aaa0.css","components/pages/_layout-root.svelte-c8412a76.js","chunks/index-166ef422.js","chunks/Toaster-6ffa90e3.js","assets/Toaster-aa6eb844.css","chunks/index-52a4437b.js"],import.meta.url),()=>K(()=>import("./chunks/3-2047af02.js"),["chunks/3-2047af02.js","assets/Container-2600665b.css","components/pages/gallery/_layout.svelte-568cd0c5.js","assets/+layout-bc695545.css","chunks/index-166ef422.js","chunks/Container-89d792ec.js"],import.meta.url),()=>K(()=>import("./chunks/4-29251631.js"),["chunks/4-29251631.js","assets/Container-2600665b.css","components/pages/_page@root.svelte-a8224f9c.js","assets/+page@root-2a7e9165.css","chunks/index-166ef422.js","chunks/PageHeader-2920e541.js","assets/PageHeader-db478966.css","chunks/singletons-a2babded.js"],import.meta.url),()=>K(()=>import("./chunks/5-aca6e1d1.js"),["chunks/5-aca6e1d1.js","assets/Container-2600665b.css","components/pages/about/_page.svelte-09eef689.js","chunks/index-166ef422.js","chunks/Container-89d792ec.js"],import.meta.url),()=>K(()=>import("./chunks/6-8cb00bfd.js"),["chunks/6-8cb00bfd.js","assets/Container-2600665b.css","components/pages/contact/_page.svelte-3f441dff.js","assets/+page-3cdee5e1.css","chunks/index-166ef422.js","chunks/Container-89d792ec.js","chunks/Toaster-6ffa90e3.js","assets/Toaster-aa6eb844.css","chunks/index-52a4437b.js"],import.meta.url),()=>K(()=>import("./chunks/7-08ed1cf1.js"),["chunks/7-08ed1cf1.js","assets/Container-2600665b.css","components/pages/directions/_page.svelte-54405b60.js","assets/+page-f61953c7.css","chunks/index-166ef422.js","chunks/Container-89d792ec.js"],import.meta.url),()=>K(()=>import("./chunks/8-1dfbfe4f.js"),["chunks/8-1dfbfe4f.js","assets/Container-2600665b.css","components/pages/faq/_page.svelte-3ca830ab.js","chunks/index-166ef422.js","chunks/Container-89d792ec.js"],import.meta.url),()=>K(()=>import("./chunks/9-f8228e8c.js"),["chunks/9-f8228e8c.js","components/pages/gallery/_page.svelte-24c0cfa0.js","chunks/index-166ef422.js"],import.meta.url),()=>K(()=>import("./chunks/10-e829f67b.js"),["chunks/10-e829f67b.js","assets/Container-2600665b.css","components/pages/venue/_page.svelte-13789426.js","assets/+page-39868788.css","chunks/index-166ef422.js","chunks/Container-89d792ec.js"],import.meta.url)],Ot={"":[[1],[2],4],about:[[1],[0],5],contact:[[1],[0],6],directions:[[1],[0],7],faq:[[1],[0],8],gallery:[[1],[0,3],9],venue:[[1],[0],10]},Ce="sveltekit:scroll",G="sveltekit:index",ue=ut(ne,Ot,At),Pt=ne[0](),Ut=ne[1]();let Q={};try{Q=JSON.parse(sessionStorage[Ce])}catch{}function de(a){Q[a]=pe()}function It({target:a,base:e,trailing_slash:n}){var Ee;const s=[],r={url:Te({}),page:Te({}),navigating:me(null),updated:st()},c={id:null,promise:null},t={before_navigate:[],after_navigate:[]};let i={branch:[],error:null,session_id:0,url:null},o=!1,f=!0,h=!1,R=1,A=null,J,$=!0,T=(Ee=history.state)==null?void 0:Ee[G];T||(T=Date.now(),history.replaceState({...history.state,[G]:T},"",location.href));const re=Q[T];re&&(history.scrollRestoration="manual",scrollTo(re.x,re.y));let ae=!1,se,ge;async function we(l,{noscroll:p=!1,replaceState:g=!1,keepfocus:u=!1,state:d={}},E){if(typeof l=="string"&&(l=new URL(l,Pe(document))),$)return oe({url:l,scroll:p?pe():null,keepfocus:u,redirect_chain:E,details:{state:d,replaceState:g},accepted:()=>{},blocked:()=>{}});await X(l)}async function be(l){const p=ke(l);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return c.promise=$e(p),c.id=p.id,c.promise}async function ve(l,p,g,u){var b,I,S;const d=ke(l),E=ge={};let m=d&&await $e(d);if(!m&&l.origin===location.origin&&l.pathname===location.pathname&&(m=await ee({status:404,error:new Error(`Not found: ${l.pathname}`),url:l,routeId:null})),!m)return await X(l),!1;if(l=(d==null?void 0:d.url)||l,ge!==E)return!1;if(s.length=0,m.type==="redirect")if(p.length>10||p.includes(l.pathname))m=await ee({status:500,error:new Error("Redirect loop"),url:l,routeId:null});else return $?we(new URL(m.location,l).href,{},[...p,l.pathname]):await X(new URL(m.location,location.href)),!1;else((I=(b=m.props)==null?void 0:b.page)==null?void 0:I.status)>=400&&await r.updated.check()&&await X(l);if(h=!0,g&&g.details){const{details:L}=g,v=L.replaceState?0:1;L.state[G]=T+=v,history[L.replaceState?"replaceState":"pushState"](L.state,"",l)}if(o?(i=m.state,m.props.page&&(m.props.page.url=l),J.$set(m.props)):ye(m),g){const{scroll:L,keepfocus:v}=g;if(!v){const w=document.body,_=w.getAttribute("tabindex");w.tabIndex=-1,w.focus({preventScroll:!0}),setTimeout(()=>{var y;(y=getSelection())==null||y.removeAllRanges()}),_!==null?w.setAttribute("tabindex",_):w.removeAttribute("tabindex")}if(await Se(),f){const w=l.hash&&document.getElementById(l.hash.slice(1));L?scrollTo(L.x,L.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Se();c.promise=null,c.id=null,f=!0,m.props.page&&(se=m.props.page);const k=m.state.branch.at(-1);$=((S=k==null?void 0:k.node.shared)==null?void 0:S.router)!==!1,u&&u(),h=!1}function ye(l){i=l.state;const p=document.querySelector("style[data-sveltekit]");if(p&&p.remove(),se=l.props.page,J=new Et({target:a,props:{...l.props,stores:r},hydrate:!0}),$){const g={from:null,to:new URL(location.href)};t.after_navigate.forEach(u=>u(g))}o=!0}async function x({url:l,params:p,branch:g,status:u,error:d,routeId:E,validation_errors:m}){const k=g.filter(Boolean),b={type:"loaded",state:{url:l,params:p,branch:g,error:d,session_id:R},props:{components:k.map(v=>v.node.component),errors:m}};let I={},S=!1;for(let v=0;v<k.length;v+=1)Object.assign(I,k[v].data),i.branch.some(w=>w===k[v])||(b.props[`data_${v}`]=k[v].data,S=!0);if(!i.url||l.href!==i.url.href||i.error!==d||S){b.props.page={error:d,params:p,routeId:E,status:u,url:l,data:I};const v=(w,_)=>{Object.defineProperty(b.props.page,w,{get:()=>{throw new Error(`$page.${w} has been replaced by $page.url.${_}`)}})};v("origin","origin"),v("path","pathname"),v("query","searchParams")}return b}async function ie({node:l,parent:p,url:g,params:u,routeId:d,server_data:E}){var L,v;const m={params:new Set,url:!1,dependencies:new Set,parent:!1};function k(...w){for(const _ of w){const{href:y}=new URL(_,g);m.dependencies.add(y)}}let b=null;l.server&&(m.dependencies.add(g.href),m.url=!0);const I={};for(const w in u)Object.defineProperty(I,w,{get(){return m.params.add(w),u[w]},enumerable:!0});const S=new rt(g);if((L=l.shared)!=null&&L.load){const w={routeId:d,params:I,data:E,get url(){return m.url=!0,S},async fetch(_,y){let j;typeof _=="string"?j=_:(j=_.url,y={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...y});const q=new URL(j,g).href;return k(q),o?he(q,y):ot(j,y)},setHeaders:()=>{},depends:k,get parent(){return m.parent=!0,p},get props(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},get session(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},get stuff(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")}};b=(v=await l.shared.load.call(null,w))!=null?v:null}return{node:l,data:b||E,uses:m}}async function $e({id:l,url:p,params:g,route:u}){if(c.id===l&&c.promise)return c.promise;const{errors:d,layouts:E,leaf:m}=u,k=i.url&&{url:l!==i.url.pathname+i.url.search,params:Object.keys(g).filter(_=>i.params[_]!==g[_])};[...d,...E,m].forEach(_=>_==null?void 0:_().catch(()=>{}));const b=[...E,m],I=[];for(let _=0;_<b.length;_++)if(!b[_])I.push(!1);else{const y=i.branch[_],j=!y||k.url&&y.uses.url||k.params.some(q=>y.uses.params.has(q))||Array.from(y.uses.dependencies).some(q=>s.some(Z=>Z(q)))||y.uses.parent&&I.includes(!0);I.push(j)}let S=null;if(u.uses_server_data){try{const _=await he(`${p.pathname}${p.pathname.endsWith("/")?"":"/"}__data.json${p.search}`);if(S=await _.json(),!_.ok)throw S}catch{throw new Error("TODO render fallback error page")}if(S.type==="redirect")return S}const L=S==null?void 0:S.nodes,v=b.map(async(_,y)=>Promise.resolve().then(async()=>{var M;if(!_)return;const j=await _(),q=i.branch[y];if(I[y]||!q||j!==q.node){const z=L==null?void 0:L[y];if(z!=null&&z.status)throw dt(z.status,z.message);if(z!=null&&z.error)throw z.error;return await ie({node:j,url:p,params:g,routeId:u.id,parent:async()=>{var Le;const Re={};for(let le=0;le<y;le+=1)Object.assign(Re,(Le=await v[le])==null?void 0:Le.data);return Re},server_data:(M=z==null?void 0:z.data)!=null?M:null})}else return q}));for(const _ of v)_.catch(()=>{});const w=[];for(let _=0;_<b.length;_+=1)if(b[_])try{w.push(await v[_])}catch(y){const j=y;if(j instanceof Ae)return{type:"redirect",location:j.location};const q=y instanceof te?y.status:500;for(;_--;)if(d[_]){let Z,M=_;for(;!w[M];)M-=1;try{return Z={node:await d[_](),data:{},uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}},await x({url:p,params:g,branch:w.slice(0,M+1).concat(Z),status:q,error:j,routeId:u.id})}catch{continue}}return await ee({status:q,error:j,url:p,routeId:u.id})}else w.push(void 0);return await x({url:p,params:g,branch:w,status:200,error:null,routeId:u.id})}async function ee({status:l,error:p,url:g,routeId:u}){const d={},E=await ie({node:await Pt,url:g,params:d,routeId:u,parent:()=>Promise.resolve({}),server_data:null}),m={node:await Ut,data:null,uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}};return await x({url:g,params:d,branch:[E,m],status:l,error:p,routeId:u})}function ke(l){if(l.origin!==location.origin||!l.pathname.startsWith(e))return;const p=decodeURI(l.pathname.slice(e.length)||"/");for(const g of ue){const u=g.exec(p);if(u){const d=new URL(l.origin+tt(l.pathname,n)+l.search+l.hash);return{id:d.pathname+d.search,route:g,params:nt(u),url:d}}}}async function oe({url:l,scroll:p,keepfocus:g,redirect_chain:u,details:d,accepted:E,blocked:m}){const k=i.url;let b=!1;const I={from:k,to:l,cancel:()=>b=!0};if(t.before_navigate.forEach(S=>S(I)),b){m();return}de(T),E(),o&&r.navigating.set({from:i.url,to:l}),await ve(l,u,{scroll:p,keepfocus:g,details:d},()=>{const S={from:k,to:l};t.after_navigate.forEach(L=>L(S)),r.navigating.set(null)})}function X(l){return location.href=l.href,new Promise(()=>{})}return{after_navigate:l=>{_e(()=>(t.after_navigate.push(l),()=>{const p=t.after_navigate.indexOf(l);t.after_navigate.splice(p,1)}))},before_navigate:l=>{_e(()=>(t.before_navigate.push(l),()=>{const p=t.before_navigate.indexOf(l);t.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(h||!o)&&(f=!1)},goto:(l,p={})=>we(l,p,[]),invalidate:l=>{if(l===void 0){for(const p of i.branch)p==null||p.uses.dependencies.add("");s.push(()=>!0)}else if(typeof l=="function")s.push(l);else{const{href:p}=new URL(l,location.href);s.push(g=>g===p)}return A||(A=Promise.resolve().then(async()=>{await ve(new URL(location.href),[]),A=null})),A},prefetch:async l=>{const p=new URL(l,Pe(document));await be(p)},prefetch_routes:async l=>{const g=(l?ue.filter(u=>l.some(d=>u.exec(d))):ue).map(u=>Promise.all([...u.layouts,u.leaf].map(d=>d==null?void 0:d())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",u=>{let d=!1;const E={from:i.url,to:null,cancel:()=>d=!0};t.before_navigate.forEach(m=>m(E)),d?(u.preventDefault(),u.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){de(T);try{sessionStorage[Ce]=JSON.stringify(Q)}catch{}}});const l=u=>{const d=Ue(u);d&&d.href&&d.hasAttribute("sveltekit:prefetch")&&be(Ie(d))};let p;const g=u=>{clearTimeout(p),p=setTimeout(()=>{var d;(d=u.target)==null||d.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",l),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",l),addEventListener("click",u=>{if(!$||u.button||u.which!==1||u.metaKey||u.ctrlKey||u.shiftKey||u.altKey||u.defaultPrevented)return;const d=Ue(u);if(!d||!d.href)return;const E=d instanceof SVGAElement,m=Ie(d);if(!E&&!(m.protocol==="https:"||m.protocol==="http:"))return;const k=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||k.includes("external")||d.hasAttribute("sveltekit:reload")||(E?d.target.baseVal:d.target))return;const[b,I]=m.href.split("#");if(I!==void 0&&b===location.href.split("#")[0]){ae=!0,de(T),r.page.set({...se,url:m}),r.page.notify();return}oe({url:m,scroll:d.hasAttribute("sveltekit:noscroll")?pe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>u.preventDefault(),blocked:()=>u.preventDefault()})}),addEventListener("popstate",u=>{if(u.state&&$){if(u.state[G]===T)return;oe({url:new URL(location.href),scroll:Q[u.state[G]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=u.state[G]},blocked:()=>{const d=T-u.state[G];history.go(d)}})}}),addEventListener("hashchange",()=>{ae&&(ae=!1,history.replaceState({...history.state,[G]:++T},"",location.href))});for(const u of document.querySelectorAll("link"))u.rel==="icon"&&(u.href=u.href);addEventListener("pageshow",u=>{u.persisted&&r.navigating.set(null)})},_hydrate:async({status:l,error:p,node_ids:g,params:u,routeId:d})=>{const E=new URL(location.href);let m;try{const k=(L,v)=>{const w=document.querySelector(`script[sveltekit\\:data-type="${L}"]`);return w!=null&&w.textContent?JSON.parse(w.textContent):v},b=k("server_data",[]),I=k("validation_errors",void 0),S=g.map(async(L,v)=>{var w;return ie({node:await ne[L](),url:E,params:u,routeId:d,parent:async()=>{const _={};for(let y=0;y<v;y+=1)Object.assign(_,(await S[y]).data);return _},server_data:(w=b[v])!=null?w:null})});m=await x({url:E,params:u,branch:await Promise.all(S),status:l,error:p!=null&&p.__is_http_error?new te(p.status,p.message):p,validation_errors:I,routeId:d})}catch(k){const b=k;if(b instanceof Ae){await X(new URL(k.location,location.href));return}m=await ee({status:b instanceof te?b.status:500,error:b,url:E,routeId:d})}ye(m)}}}function Vt(a){}async function Ct({paths:a,target:e,route:n,spa:s,trailing_slash:r,hydrate:c}){const t=It({target:e,base:a.base,trailing_slash:r});et({client:t}),at(a),c&&await t._hydrate(c),n&&(s&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Vt as set_public_env,Ct as start};