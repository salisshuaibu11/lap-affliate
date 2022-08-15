import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	vite: { optimizeDeps: { include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'] } }
};

export default config;
