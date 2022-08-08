/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param: string) {
	return /.(jpg|jpeg)$/.test(param);
}
