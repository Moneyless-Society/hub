import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';
import { CirclesToRolesCreateWithoutRoleInputSchema } from './CirclesToRolesCreateWithoutRoleInputSchema';
import { CirclesToRolesUncheckedCreateWithoutRoleInputSchema } from './CirclesToRolesUncheckedCreateWithoutRoleInputSchema';

export const CirclesToRolesCreateOrConnectWithoutRoleInputSchema: z.ZodType<Prisma.CirclesToRolesCreateOrConnectWithoutRoleInput> = z.object({
  where: z.lazy(() => CirclesToRolesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CirclesToRolesCreateWithoutRoleInputSchema),z.lazy(() => CirclesToRolesUncheckedCreateWithoutRoleInputSchema) ]),
}).strict();

export default CirclesToRolesCreateOrConnectWithoutRoleInputSchema;
