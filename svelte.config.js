// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path'
import node from "@sveltejs/adapter-node";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
      prependData: `@import "src/scss/variables.scss";`
    },
	}),

	kit: {
		target: '#svelte',
		// adapter: adapter({
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null
		// }),
		adapter: node({ env: { port: process.env.PORT } }),
		vite: {
			define: {
				global: {},
			},
			plugins: [
				// nodePolyfills({buffer: true})
			],
      resolve: {
				browser: true,
        alias: {
          '$stores': path.resolve('./src/stores'),
					'$abi': path.resolve('./src/abi')
        }
      }
		},
	}
};

export default config;
