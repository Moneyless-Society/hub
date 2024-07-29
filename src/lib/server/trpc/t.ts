import type { Context } from '$tb/context';
import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

export const t = initTRPC.context<Context>().create({
	transformer: superjson
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;

export type Router = typeof router;
