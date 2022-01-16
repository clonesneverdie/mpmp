// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path'

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
      resolve: {
        alias: {
          '$stores': path.resolve('./src/stores')
        }
      }
		}
	}
};

export default config;
