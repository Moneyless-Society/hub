import prisma from './prismaClient';
import type { Context } from '$tb/context';

export const fetchAuthedUser = async (context: Context) => {
	const userEmail = context.session?.user?.email;
	if (!userEmail) {
		throw new Error('No user email in session. Session info:');
	}
	try {
		let user = await prisma.user.findUnique({
			where: {
				email: userEmail
			},
			include: {
				person: true
			}
		});
		if (!user) {
			return;
		}
		if (!user.person) {
			return prisma.user.update({
				where: {
					id: user.id
				},
				data: {
					person: {
						create: {}
					}
				},
				include: {
					person: true
				}
			});
		}
		return user;
	} catch (err) {
		console.error(err);
		return;
	}
};
