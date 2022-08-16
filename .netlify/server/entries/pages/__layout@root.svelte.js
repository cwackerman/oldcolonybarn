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
  default: () => _layout_root
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c7b10cea = require("../../immutable/chunks/index-c7b10cea.js");
var import_PageHeader_040b2ca2 = require("../../immutable/chunks/PageHeader-040b2ca2.js");
const __layout_root_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1v9lwgs{flex-grow:1;width:100%}",
  map: null
};
const _layout_root = (0, import_index_c7b10cea.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_c7b10cea.v)(import_PageHeader_040b2ca2.P, "PageHeader").$$render($$result, {}, {}, {})}

<main class="${"svelte-1v9lwgs"}">${slots.default ? slots.default({}) : ``}</main>

${(0, import_index_c7b10cea.v)(import_PageHeader_040b2ca2.a, "PageFooter").$$render($$result, {}, {}, {})}`;
});
