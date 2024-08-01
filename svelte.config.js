import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
        alias: {
			$com: './src/lib/components',
			'$com/*': './src/lib/components/*',
			$api: './src/lib/server/trpc/api',
			'$api/*': './src/lib/server/trpc/api/*',
			$tf: './src/lib/trpc',
			'$tf/*': './src/lib/trpc/*',
			$tb: './src/lib/server/trpc',
			'$tb/*': './src/lib/server/trpc/*',
			$tIn: './prisma/generated/zod/inputTypeSchemas',
			'$tIn/*': './prisma/generated/zod/inputTypeSchemas/*',
			$tOut: './prisma/generated/zod/outputTypeSchemas',
			'$tOut/*': './prisma/generated/zod/outputTypeSchemas/*',
			$tModel: './prisma/generated/zod/modelSchema',
			'$tModel/*': './prisma/generated/zod/modelSchema/*',
			$tRouter: './prisma/generated/zod/routers',
			'$tRouter/*': './prisma/generated/zod/routers/*',
			$stores: './src/lib/stores',
			$types: './src/lib/types',
			'$types/*': './src/lib/types/*',
			$z: './src/lib/types/zod',
			'$z/*': './src/lib/types/zod/*'
		}
	}
};

export default config;
