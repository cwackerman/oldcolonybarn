var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Directions
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c7b10cea = require("../../../immutable/chunks/index-c7b10cea.js");
var import_Container_9065ba37 = require("../../../immutable/chunks/Container-9065ba37.js");
var import_mapbox_gl = __toESM(require("mapbox-gl"));
const mapboxGl = "";
const Map_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-1xlcjhd{height:600px;max-height:80vh}",
  map: null
};
const Map = (0, import_index_c7b10cea.c)(($$result, $$props, $$bindings, slots) => {
  let { lat = 0 } = $$props;
  let { lng = 0 } = $$props;
  let { zoom = 0 } = $$props;
  let element;
  import_mapbox_gl.default.accessToken = { "VITE_SVELTEKIT_APP_VERSION": "1660624016193", "VITE_SVELTEKIT_APP_VERSION_FILE": "_app/version.json", "VITE_SVELTEKIT_APP_VERSION_POLL_INTERVAL": "0", "VITE_SVELTEKIT_ADAPTER_NAME": "@sveltejs/adapter-netlify", "BASE_URL": "/_app/", "MODE": "production", "DEV": false, "PROD": true }.VITE_MAPBOX_TOKEN;
  if ($$props.lat === void 0 && $$bindings.lat && lat !== void 0)
    $$bindings.lat(lat);
  if ($$props.lng === void 0 && $$bindings.lng && lng !== void 0)
    $$bindings.lng(lng);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  $$result.css.add(css$1);
  return `${$$result.head += `<link href="${"https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"}" rel="${"stylesheet"}" data-svelte="svelte-1ir12hs">`, ""}

<div class="${"svelte-1xlcjhd"}"${(0, import_index_c7b10cea.a)("this", element, 0)}></div>`;
});
const mp4 = "/_app/immutable/assets/directions-0665b092.mp4";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "video.svelte-jz38cl{display:block;max-width:100%;margin-bottom:4em}",
  map: null
};
const Directions = (0, import_index_c7b10cea.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Directions | The Barn at Old Colony</title>`, ""}`, ""}

${(0, import_index_c7b10cea.v)(import_Container_9065ba37.C, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>Directions</h1>

	<video controls class="${"svelte-jz38cl"}"><source${(0, import_index_c7b10cea.a)("src", mp4, 0)}></video>`;
    }
  })}

${(0, import_index_c7b10cea.v)(Map, "Map").$$render($$result, {
    lng: 39.810032,
    lat: -122.329718,
    zoom: 15
  }, {}, {})}`;
});
