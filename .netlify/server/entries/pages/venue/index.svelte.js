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
  default: () => Venue
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c7b10cea = require("../../../immutable/chunks/index-c7b10cea.js");
var import_Container_9065ba37 = require("../../../immutable/chunks/Container-9065ba37.js");
const css$1 = {
  code: ".wrapper.svelte-10eg0uz.svelte-10eg0uz{display:grid;grid:1fr / 1fr;gap:0px;grid-gap:0px;overflow:hidden}.wrapper.svelte-10eg0uz>.svelte-10eg0uz{grid-area:1 / 1 / 2 / 2}.wrapper.svelte-10eg0uz img.svelte-10eg0uz{width:100%;height:auto;display:block;aspect-ratio:var(--svimg-aspect-ratio)}.image.svelte-10eg0uz.svelte-10eg0uz{opacity:0;transition:opacity 0.25s ease-in}.image.loaded.svelte-10eg0uz.svelte-10eg0uz{opacity:1}.placeholder.svelte-10eg0uz.svelte-10eg0uz{z-index:-1;filter:blur(var(--svimg-blur))}",
  map: null
};
const Image = (0, import_index_c7b10cea.c)(($$result, $$props, $$bindings, slots) => {
  let fixedWidth;
  let imageWidth;
  let imageHeight;
  let sizes;
  let setSrcset;
  let useAspectRatioFallback;
  let { src } = $$props;
  let { alt } = $$props;
  let { class: className = "" } = $$props;
  let { srcset } = $$props;
  let { srcsetwebp = "" } = $$props;
  let { srcsetavif = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { width = "" } = $$props;
  let { aspectratio } = $$props;
  let { immediate = false } = $$props;
  let { blur = 40 } = $$props;
  let { quality = "" } = $$props;
  let clientWidth;
  let container;
  let hasResizeObserver = true;
  let hidePlaceholder = false;
  let supportsCssAspectRatio = true;
  let mounted = false;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.srcset === void 0 && $$bindings.srcset && srcset !== void 0)
    $$bindings.srcset(srcset);
  if ($$props.srcsetwebp === void 0 && $$bindings.srcsetwebp && srcsetwebp !== void 0)
    $$bindings.srcsetwebp(srcsetwebp);
  if ($$props.srcsetavif === void 0 && $$bindings.srcsetavif && srcsetavif !== void 0)
    $$bindings.srcsetavif(srcsetavif);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.aspectratio === void 0 && $$bindings.aspectratio && aspectratio !== void 0)
    $$bindings.aspectratio(aspectratio);
  if ($$props.immediate === void 0 && $$bindings.immediate && immediate !== void 0)
    $$bindings.immediate(immediate);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.quality === void 0 && $$bindings.quality && quality !== void 0)
    $$bindings.quality(quality);
  $$result.css.add(css$1);
  fixedWidth = !!(width && /^[0-9]+$/.test(width));
  imageWidth = fixedWidth && clientWidth ? Math.min(clientWidth, width) : fixedWidth ? width : clientWidth;
  imageHeight = imageWidth / aspectratio;
  sizes = imageWidth ? `${imageWidth}px` : void 0;
  setSrcset = immediate && mounted && (sizes || !hasResizeObserver);
  useAspectRatioFallback = !supportsCssAspectRatio;
  return `



<div style="${(0, import_index_c7b10cea.e)(fixedWidth ? `max-width:${width}px;` : "", true) + " --svimg-blur:" + (0, import_index_c7b10cea.e)(blur, true) + "px; " + (0, import_index_c7b10cea.e)(aspectratio ? `--svimg-aspect-ratio:${aspectratio};` : "", true)}" class="${"wrapper " + (0, import_index_c7b10cea.e)(className, true) + " svelte-10eg0uz"}"${(0, import_index_c7b10cea.a)("this", container, 0)}><picture class="${"svelte-10eg0uz"}">${srcsetavif ? `<source type="${"image/avif"}"${(0, import_index_c7b10cea.a)("srcset", setSrcset ? srcsetavif : void 0, 0)}${(0, import_index_c7b10cea.a)("sizes", sizes, 0)}>` : ``}
    ${srcsetwebp ? `<source type="${"image/webp"}"${(0, import_index_c7b10cea.a)("srcset", setSrcset ? srcsetwebp : void 0, 0)}${(0, import_index_c7b10cea.a)("sizes", sizes, 0)}>` : ``}
    <img${(0, import_index_c7b10cea.a)("srcset", setSrcset ? srcset : void 0, 0)}${(0, import_index_c7b10cea.a)("sizes", sizes, 0)}${(0, import_index_c7b10cea.a)("alt", void 0, 0)}${(0, import_index_c7b10cea.a)("width", imageWidth, 0)}${(0, import_index_c7b10cea.a)("height", imageHeight, 0)}${(0, import_index_c7b10cea.a)("loading", !immediate ? "lazy" : void 0, 0)} class="${"image " + (0, import_index_c7b10cea.e)(immediate ? "loaded" : "", true) + " svelte-10eg0uz"}"></picture>
  ${!immediate && !hidePlaceholder ? `<img class="${"placeholder svelte-10eg0uz"}"${(0, import_index_c7b10cea.a)("src", placeholder, 0)}${(0, import_index_c7b10cea.a)("alt", alt, 0)}${(0, import_index_c7b10cea.a)("width", imageWidth, 0)}${(0, import_index_c7b10cea.a)("height", imageHeight, 0)}${(0, import_index_c7b10cea.a)("style", useAspectRatioFallback ? `width:${imageWidth}px; height:${imageHeight}px;` : "", 0)}>` : ``}
</div>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1s1xyvl{margin-bottom:4rem;gap:4rem;grid-template-columns:repeat(2, 1fr);width:100%}@media(min-width: 80ch){div.svelte-1s1xyvl{display:grid}}",
  map: null
};
const Venue = (0, import_index_c7b10cea.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Venue Info | The Barn at Old Colony</title>`, ""}`, ""}

${(0, import_index_c7b10cea.v)(import_Container_9065ba37.C, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>Venue Info</h1>`;
    }
  })}

${(0, import_index_c7b10cea.v)(import_Container_9065ba37.C, "Container").$$render($$result, { wide: true }, {}, {
    default: () => {
      return `<div class="${"svelte-1s1xyvl"}"><article><p>Welcome to The Barn at Old Colony. We are an indoor-outdoor wedding and event center located
				eight miles west of Orland off I-5 and just across the road from the Black Butte Dam
				Observation Point. We are a large venue and can accommodate intimate groups as well as up to
				250 or more guests.
			</p>
			<p>At Old Colony we offer several ceremony options: the more than one hundred-year-old hay barn
				has maintained its turn of the century authenticity and charm and is our most popular
				choice, or atop the beautiful buttes overlooking the lake, near the oak tree with our
				organic almond orchards as your backdrop, or the outdoor cattle corral complete with arbor
				and garden fountain.
			</p>
			<p>Consider the season that suits you best, whether it be the green grasses and wildflowers,
				the February pink and white blossoms in the almond orchards, or the warm, golden hills
				amongst the beautiful black buttes during the fall.
			</p>
			<p>We look forward to helping you choose the perfect setting for your special day.</p>
			<p>Join us on a summer evening for one of our sunset concerts in the corral, where families can
				bring chairs and gaze at the colorful horizon as the sun sets behind the buttes, all while
				listening to good vibes from our local bands. Vendors from the valley also come out to serve
				yummy foods and spirits. Whether you choose to play games, relax and listen to the tunes, or
				stomp and dance under the stars, you are sure to have a rousin\u2019 good time.
			</p>
			<p>At Old Colony we also are eager to help you with your next fundraiser, reunion, prom, party,
				shower, casino night, or any suggested event you have in mind. <a href="${"https://forms.gle/12m5Bway6AP18Ssv7"}" target="${"_blank"}">Contact us</a>
				today for a scheduled tour or appointment.
			</p></article>

		<aside>${(0, import_index_c7b10cea.v)(Image, "Image").$$render($$result, {
        srcset: "g/images/barn.a1d08c9.4b53b12dd6fa9b0d49fcaa2419c402ca.jpeg 480w, g/images/barn.5a8f99a.4b53b12dd6fa9b0d49fcaa2419c402ca.jpeg 1024w, g/images/barn.3ee764d.4b53b12dd6fa9b0d49fcaa2419c402ca.jpeg 1365w",
        srcsetwebp: "g/images/barn.a1d08c9.4b53b12dd6fa9b0d49fcaa2419c402ca.webp 480w, g/images/barn.5a8f99a.4b53b12dd6fa9b0d49fcaa2419c402ca.webp 1024w, g/images/barn.3ee764d.4b53b12dd6fa9b0d49fcaa2419c402ca.webp 1365w",
        srcsetavif: "g/images/barn.a1d08c9.4b53b12dd6fa9b0d49fcaa2419c402ca.avif 480w, g/images/barn.5a8f99a.4b53b12dd6fa9b0d49fcaa2419c402ca.avif 1024w, g/images/barn.3ee764d.4b53b12dd6fa9b0d49fcaa2419c402ca.avif 1365w",
        placeholder: "data:image/jpeg;base64,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",
        aspectratio: "0.66650390625",
        src: "images/barn.jpeg"
      }, {}, {})}</aside></div>`;
    }
  })}`;
});
