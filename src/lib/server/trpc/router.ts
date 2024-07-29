import { router } from '$lib/server/trpc/t';
import { personRouter } from '$api/person';

// SvelteKit should block this from being accessed in server code. But it's worth noting that tRPC docs say DON'T export this
export const appRouter = router({
	person: personRouter,
});

export type AppRouter = typeof appRouter;
