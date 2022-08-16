const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set([".DS_Store","construction.jpg","favicon.ico","fonts/Rubik-Bold.woff2","fonts/Rubik-BoldItalic.woff2","fonts/Rubik-Italic.woff2","fonts/Rubik-Regular.woff2","fonts/Stranger-Slim.woff2","fonts/Stranger.woff2","g/images/Engagement/244.a1d08c9.697290f7df9f71fcdfeb0e204eba1c04.avif","g/images/Engagement/244.a1d08c9.697290f7df9f71fcdfeb0e204eba1c04.jpeg","g/images/Engagement/244.a1d08c9.697290f7df9f71fcdfeb0e204eba1c04.webp","g/images/Engagement/244.db91235.697290f7df9f71fcdfeb0e204eba1c04.avif","g/images/Engagement/244.db91235.697290f7df9f71fcdfeb0e204eba1c04.jpeg","g/images/Engagement/244.db91235.697290f7df9f71fcdfeb0e204eba1c04.webp","g/images/barn.3ee764d.4b53b12dd6fa9b0d49fcaa2419c402ca.avif","g/images/barn.3ee764d.4b53b12dd6fa9b0d49fcaa2419c402ca.jpeg","g/images/barn.3ee764d.4b53b12dd6fa9b0d49fcaa2419c402ca.webp","g/images/barn.5a8f99a.4b53b12dd6fa9b0d49fcaa2419c402ca.avif","g/images/barn.5a8f99a.4b53b12dd6fa9b0d49fcaa2419c402ca.jpeg","g/images/barn.5a8f99a.4b53b12dd6fa9b0d49fcaa2419c402ca.webp","g/images/barn.a1d08c9.4b53b12dd6fa9b0d49fcaa2419c402ca.avif","g/images/barn.a1d08c9.4b53b12dd6fa9b0d49fcaa2419c402ca.jpeg","g/images/barn.a1d08c9.4b53b12dd6fa9b0d49fcaa2419c402ca.webp","icon.svg","images/.DS_Store","images/Engagement/244.jpeg","images/Summer Concerts/20220606_201124.jpg","images/Summer Concerts/20220606_201207.jpg","images/Summer Concerts/20220606_201356.jpg","images/Summer Concerts/290297859_1015073945864058_3349632284113514656_n.jpg","images/Summer Concerts/290899397_622730285460372_972989073922276594_n.jpg","images/Summer Concerts/FB_IMG_1654410008823.jpg","images/Summer Concerts/FB_IMG_1658806322265.jpg","images/Wedding/received_1173722966526883.jpeg","images/Wedding/received_1248146519293890.jpeg","images/Wedding/received_1262681924557396.jpeg","images/Wedding/received_1380062139149455.jpeg","images/Wedding/received_1535509126904798.jpeg","images/Wedding/received_1731373027218496.jpeg","images/Wedding/received_2269488793199193.jpeg","images/Wedding/received_2482282801934438.jpeg","images/Wedding/received_2878277819142062.jpeg","images/Wedding/received_3238676576421721.jpeg","images/Wedding/received_3358341224398091.jpeg","images/Wedding/received_3415172515434172.jpeg","images/Wedding/received_372639025020876.jpeg","images/Wedding/received_420703156783814.jpeg","images/Wedding/received_422556343256309.jpeg","images/Wedding/received_440593874643187.jpeg","images/Wedding/received_450055753420673.jpeg","images/Wedding/received_455242032840672.jpeg","images/Wedding/received_461668958730602.jpeg","images/Wedding/received_525177609404987.jpeg","images/Wedding/received_544857680662596.jpeg","images/Wedding/received_5470897409643973.jpeg","images/Wedding/received_550205260222765.jpeg","images/Wedding/received_557902389161383.jpeg","images/Wedding/received_573889894362961.jpeg","images/Wedding/received_576327467503590.jpeg","images/Wedding/received_6013419382008173.jpeg","images/Wedding/received_731210744657581.jpeg","images/Wedding/received_753112662565186.jpeg","images/Wedding/received_997573657586328.jpeg","images/barn.jpeg","images/cross.jpeg","images/cross1.jpg","images/cross2.jpg","maintenance.css","manifest.json","style.css"]),
	mimeTypes: {".jpg":"image/jpeg",".ico":"image/vnd.microsoft.icon",".woff2":"font/woff2",".avif":"image/avif",".jpeg":"image/jpeg",".webp":"image/webp",".svg":"image/svg+xml",".css":"text/css",".json":"application/json"},
	_: {
		entry: {"file":"immutable/start-ba3c1e53.js","imports":["immutable/start-ba3c1e53.js","immutable/chunks/index-ff0e6d2d.js","immutable/chunks/singletons-cdeec3fd.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js')),
			() => Promise.resolve().then(() => require('../server/nodes/11.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js'))
		],
		routes: [
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [2,0,3],
				b: [1,1]
			},
			{
				type: 'page',
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: "/contact",
				shadow: null,
				a: [2,0,4],
				b: [1,1]
			},
			{
				type: 'page',
				id: "directions",
				pattern: /^\/directions\/?$/,
				names: [],
				types: [],
				path: "/directions",
				shadow: null,
				a: [2,0,5],
				b: [1,1]
			},
			{
				type: 'page',
				id: "faq",
				pattern: /^\/faq\/?$/,
				names: [],
				types: [],
				path: "/faq",
				shadow: null,
				a: [2,0,6],
				b: [1,1]
			},
			{
				type: 'page',
				id: "gallery",
				pattern: /^\/gallery\/?$/,
				names: [],
				types: [],
				path: "/gallery",
				shadow: null,
				a: [2,0,7,8],
				b: [1,1]
			},
			{
				type: 'page',
				id: "@root",
				pattern: /^\/?$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [2,9],
				b: [1]
			},
			{
				type: 'page',
				id: "venue",
				pattern: /^\/venue\/?$/,
				names: [],
				types: [],
				path: "/venue",
				shadow: null,
				a: [2,0,10],
				b: [1,1]
			},
			{
				type: 'page',
				id: "gallery/[photo]",
				pattern: /^\/gallery\/([^/]+?)\/?$/,
				names: ["photo"],
				types: [null],
				path: null,
				shadow: null,
				a: [2,0,7,11],
				b: [1,1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
