var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Index_root
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c7b10cea = require("../../immutable/chunks/index-c7b10cea.js");
var import_PageHeader_040b2ca2 = require("../../immutable/chunks/PageHeader-040b2ca2.js");
const hero = "/_app/immutable/assets/derekandselena-2f142009.mp4";
const index_root_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hero.svelte-ry9ln2.svelte-ry9ln2{align-items:center;color:var(--color-text-inverse);display:flex;flex:0 0 auto;flex-direction:column;height:100vh;justify-content:center;position:relative;width:100%}.hero.svelte-ry9ln2 video.svelte-ry9ln2{object-fit:cover;position:absolute;right:0;bottom:0;height:100%;width:100%;z-index:-1}h1.svelte-ry9ln2.svelte-ry9ln2{max-width:22ch}.cta.svelte-ry9ln2.svelte-ry9ln2{background-color:var(--color-text-inverse);border-radius:4px;color:var(--color-text);display:block;font-size:1.5rem;font-family:Stranger-Slim;letter-spacing:0.1em;margin:0 auto;padding:0.5rem 1rem;text-decoration:none;text-transform:uppercase;width:auto}.cta.svelte-ry9ln2.svelte-ry9ln2:hover,.cta.svelte-ry9ln2.svelte-ry9ln2:focus-visible{background-color:var(--color-text);color:var(--color-text-inverse)}",
  map: null
};
const Index_root = (0, import_index_c7b10cea.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home | The Barn at Old Colony</title>`, ""}`, ""}

${(0, import_index_c7b10cea.v)(import_PageHeader_040b2ca2.P, "PageHeader").$$render($$result, { fixed: true, inverted: true }, {}, {})}

<div class="${"hero svelte-ry9ln2"}"><h1 class="${"svelte-ry9ln2"}">Let&#39;s have a rousin&#39; good time!</h1>
	<a class="${"cta svelte-ry9ln2"}" href="${"/contact"}">Contact Us</a>

	<video autoplay muted class="${"svelte-ry9ln2"}"><source type="${"video/mp4"}"${(0, import_index_c7b10cea.a)("src", hero, 0)}></video></div>

${(0, import_index_c7b10cea.v)(import_PageHeader_040b2ca2.a, "PageFooter").$$render($$result, {}, {}, {})}`;
});
