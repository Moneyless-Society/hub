import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutPersonInputSchema } from './UserUpdateWithoutPersonInputSchema';
import { UserUncheckedUpdateWithoutPersonInputSchema } from './UserUncheckedUpdateWithoutPersonInputSchema';

export const UserUpdateToOneWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutPersonInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutPersonInputSchema;
