import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { viteStaticCopy } from "vite-plugin-static-copy"

export default defineConfig({
	plugins: [sveltekit(),viteStaticCopy({
        targets: []
      })],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
