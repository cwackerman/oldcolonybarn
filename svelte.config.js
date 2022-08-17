import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { imagePreprocessor } from 'svimg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		imagePreprocessor({
			inputDir: 'static',
			outputDir: 'static/g',
			webp: true,
			avif: true
		}),
		preprocess(),
	],

	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs"
		}),
		prerender: {
			default: true
		}
	}
};

export default config;
