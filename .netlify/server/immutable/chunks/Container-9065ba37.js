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
  C: () => Container
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c7b10cea = require("./index-c7b10cea.js");
const css = {
  code: "div.svelte-91yg0g{box-sizing:border-box;margin:0 auto;max-width:80ch;padding:0 2rem;width:100%}.wide.svelte-91yg0g{max-width:160ch}@media(min-width: 80ch){div.svelte-91yg0g{padding-inline:5rem}}",
  map: null
};
const Container = (0, import_index_c7b10cea.c)(($$result, $$props, $$bindings, slots) => {
  let { wide = false } = $$props;
  if ($$props.wide === void 0 && $$bindings.wide && wide !== void 0)
    $$bindings.wide(wide);
  $$result.css.add(css);
  return `<div class="${["svelte-91yg0g", wide ? "wide" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</div>`;
});
