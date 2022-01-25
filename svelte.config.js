// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path'
// import nodePolyfills from 'rollup-plugin-node-polyfills';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
      prependData: `@import "src/scss/variables.scss";`
    },
	}),

	kit: {
		target: '#svelte',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
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
          '$stores': path.resolve('./src/stores')
        }
      }
		},
	}
};

export default config;
