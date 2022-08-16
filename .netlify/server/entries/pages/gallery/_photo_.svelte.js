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
  default: () => U5Bphotou5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c7b10cea = require("../../../immutable/chunks/index-c7b10cea.js");
const getStores = () => {
  const stores = (0, import_index_c7b10cea.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const _photo__svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1p67m0j{position:fixed;top:0;right:0;left:0;bottom:0;z-index:2}",
  map: null
};
const U5Bphotou5D = (0, import_index_c7b10cea.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_c7b10cea.d)(page, (value) => $page = value);
  console.debug($page.params.photo);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_c7b10cea.e)($page.params.photo)} | The Barn at Old Colony</title>`, ""}`, ""}

<img src="${"/gallery/photos/" + (0, import_index_c7b10cea.e)($page.params.photo, true)}" class="${"svelte-1p67m0j"}">`;
});
