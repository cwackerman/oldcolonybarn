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
  default: () => Contact
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c7b10cea = require("../../../immutable/chunks/index-c7b10cea.js");
var import_Container_9065ba37 = require("../../../immutable/chunks/Container-9065ba37.js");
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-1el2dl4.svelte-1el2dl4{--border-size:2px;display:flex;flex-direction:column;gap:var(--border-size);margin-block:2em}.row.svelte-1el2dl4.svelte-1el2dl4{display:flex;flex-direction:row;gap:var(--border-size)}.row.svelte-1el2dl4>.svelte-1el2dl4{flex-grow:1}label.svelte-1el2dl4.svelte-1el2dl4{all:unset;display:block;position:relative}label.svelte-1el2dl4.svelte-1el2dl4:focus-within{color:var(--color-brand);z-index:1}label.svelte-1el2dl4 span.svelte-1el2dl4{font-family:monospace;font-size:smaller;margin:0.5em;letter-spacing:0.1em;line-height:1em;position:absolute;text-transform:uppercase}button.svelte-1el2dl4.svelte-1el2dl4,textarea.svelte-1el2dl4.svelte-1el2dl4,input.svelte-1el2dl4.svelte-1el2dl4{border:none;box-sizing:border-box;display:block;color:inherit;font:inherit;margin:0;padding:1.5em 0.5em 0.5em;outline:var(--border-size) solid currentColor;width:100%}textarea.svelte-1el2dl4.svelte-1el2dl4{resize:vertical}button.svelte-1el2dl4.svelte-1el2dl4{background-color:transparent;padding-block:1em}button.svelte-1el2dl4.svelte-1el2dl4:focus-visible,button.svelte-1el2dl4.svelte-1el2dl4:hover{color:var(--color-brand)}button[type='submit'].svelte-1el2dl4.svelte-1el2dl4{--color:var(--color-text);background-color:var(--color);color:var(--color-text-inverse);outline-color:var(--color)}button[type='submit'].svelte-1el2dl4.svelte-1el2dl4:focus-visible,button[type='submit'].svelte-1el2dl4.svelte-1el2dl4:hover{--color:var(--color-brand)}",
  map: null
};
const Contact = (0, import_index_c7b10cea.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Contact | The Barn at Old Colony</title>`, ""}`, ""}

${(0, import_index_c7b10cea.v)(import_Container_9065ba37.C, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>Contact</h1>

	<form action="${"https://formkeep.com/f/815ca1ef907a"}" accept-charset="${"UTF-8"}" enctype="${"multipart/form-data"}" method="${"POST"}" class="${"svelte-1el2dl4"}"><div class="${"row svelte-1el2dl4"}"><label for="${"name"}" class="${"svelte-1el2dl4"}"><span class="${"svelte-1el2dl4"}">Name(s)</span>
				<input type="${"text"}" id="${"name"}" autocomplete="${"name"}" required class="${"svelte-1el2dl4"}"></label></div>

		<div class="${"row svelte-1el2dl4"}"><label for="${"email"}" class="${"svelte-1el2dl4"}"><span class="${"svelte-1el2dl4"}">Email Address</span>
				<input type="${"email"}" id="${"email"}" autocomplete="${"email"}" required class="${"svelte-1el2dl4"}"></label>

			<label for="${"phone"}" class="${"svelte-1el2dl4"}"><span class="${"svelte-1el2dl4"}">Phone Number</span>
				<input type="${"text"}" id="${"phone"}" autocomplete="${"tel"}" class="${"svelte-1el2dl4"}"></label></div>

		<div class="${"row svelte-1el2dl4"}"><label for="${"type"}" class="${"svelte-1el2dl4"}"><datalist id="${"event-type-suggestions"}"><option value="${"Wedding"}">Wedding</option><option value="${"Reunion"}">Reunion</option><option value="${"Fundraiser"}">Fundraiser</option></datalist>
				<span class="${"svelte-1el2dl4"}">Event Type</span>
				<input type="${"text"}" id="${"type"}" list="${"event-type-suggestions"}" class="${"svelte-1el2dl4"}"></label></div>

		<div class="${"row svelte-1el2dl4"}"><label for="${"message"}" class="${"svelte-1el2dl4"}"><span class="${"svelte-1el2dl4"}">Message</span>
				<textarea id="${"message"}" rows="${"3"}" required class="${"svelte-1el2dl4"}"></textarea></label></div>

		<footer class="${"row svelte-1el2dl4"}">
			<button type="${"submit"}" class="${"svelte-1el2dl4"}">Send</button></footer></form>`;
    }
  })}`;
});
