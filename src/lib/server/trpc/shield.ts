import { permissions } from '$tb/rules';
import { middleware, publicProcedure } from '$tb/t';

export const permissionsMiddleware = middleware(permissions);
export const shieldedProcedure = publicProcedure.use(permissionsMiddleware);
