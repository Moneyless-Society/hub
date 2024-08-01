import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutPersonInputSchema } from './UserUpdateWithoutPersonInputSchema';
import { UserUncheckedUpdateWithoutPersonInputSchema } from './UserUncheckedUpdateWithoutPersonInputSchema';
import { UserCreateWithoutPersonInputSchema } from './UserCreateWithoutPersonInputSchema';
import { UserUncheckedCreateWithoutPersonInputSchema } from './UserUncheckedCreateWithoutPersonInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutPersonInputSchema: z.ZodType<Prisma.UserUpsertWithoutPersonInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutPersonInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutPersonInputSchema),z.lazy(() => UserUncheckedCreateWithoutPersonInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutPersonInputSchema;
