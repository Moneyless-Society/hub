import z from 'zod';

import PersonUncheckedCreateInputSchema from '$tIn/PersonUncheckedCreateInputSchema';
import PersonUpdateInputSchema from '$tIn/PersonUpdateInputSchema';
import PersonWhereUniqueInputSchema from '$tIn/PersonWhereUniqueInputSchema';

import { router } from '$tb/t';
import { shieldedProcedure } from '$tb/shield';
import { fetchAuthedUser } from '$lib/server/user';

export const personRouter = router({
	create: shieldedProcedure
		.input(PersonUncheckedCreateInputSchema)
		.mutation(async ({ ctx, input }) => {
			return await fetchAuthedUser(ctx);
		}),
	delete: shieldedProcedure.input(PersonWhereUniqueInputSchema).mutation(async ({ ctx, input }) => {
		const user = await fetchAuthedUser(ctx);
		if (!user?.person?.id) return;
		return await ctx.prisma.person.delete({
			where: {
				id: user.person.id
			}
		});
	}),
	edit: shieldedProcedure
		.input(z.object({ id: z.number().int(), update: PersonUpdateInputSchema }))
		.mutation(async ({ ctx, input }) => {
			const user = await fetchAuthedUser(ctx);
			if (!user?.person?.id) return;
			return await ctx.prisma.person.update({
				where: {
					id: user.person.id
				},
				data: {
					username: input.update.username
				}
			});
		}),
	get: shieldedProcedure.input(PersonWhereUniqueInputSchema).query(async ({ ctx, input }) => {
		return await ctx.prisma.person.findUnique({ where: input });
	}),
	list: shieldedProcedure.query(async ({ ctx }) => {
		const user = await fetchAuthedUser(ctx);
		if (!user?.person?.id) return;
		return await ctx.prisma.person.findMany({
			where: {}
		});
	})
});
