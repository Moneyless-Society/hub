import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutPersonInputSchema } from './UserCreateWithoutPersonInputSchema';
import { UserUncheckedCreateWithoutPersonInputSchema } from './UserUncheckedCreateWithoutPersonInputSchema';
import { UserCreateOrConnectWithoutPersonInputSchema } from './UserCreateOrConnectWithoutPersonInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserUncheckedCreateNestedOneWithoutPersonInputSchema: z.ZodType<Prisma.UserUncheckedCreateNestedOneWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPersonInputSchema),z.lazy(() => UserUncheckedCreateWithoutPersonInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPersonInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserUncheckedCreateNestedOneWithoutPersonInputSchema;
