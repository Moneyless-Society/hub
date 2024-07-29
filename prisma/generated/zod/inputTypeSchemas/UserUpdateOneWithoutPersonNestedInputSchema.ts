import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutPersonInputSchema } from './UserCreateWithoutPersonInputSchema';
import { UserUncheckedCreateWithoutPersonInputSchema } from './UserUncheckedCreateWithoutPersonInputSchema';
import { UserCreateOrConnectWithoutPersonInputSchema } from './UserCreateOrConnectWithoutPersonInputSchema';
import { UserUpsertWithoutPersonInputSchema } from './UserUpsertWithoutPersonInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutPersonInputSchema } from './UserUpdateToOneWithWhereWithoutPersonInputSchema';
import { UserUpdateWithoutPersonInputSchema } from './UserUpdateWithoutPersonInputSchema';
import { UserUncheckedUpdateWithoutPersonInputSchema } from './UserUncheckedUpdateWithoutPersonInputSchema';

export const UserUpdateOneWithoutPersonNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPersonInputSchema),z.lazy(() => UserUncheckedCreateWithoutPersonInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPersonInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPersonInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutPersonInputSchema),z.lazy(() => UserUpdateWithoutPersonInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPersonInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutPersonNestedInputSchema;
