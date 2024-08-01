import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';
import { CirclesToRolesCreateWithoutIncumbentInputSchema } from './CirclesToRolesCreateWithoutIncumbentInputSchema';
import { CirclesToRolesUncheckedCreateWithoutIncumbentInputSchema } from './CirclesToRolesUncheckedCreateWithoutIncumbentInputSchema';

export const CirclesToRolesCreateOrConnectWithoutIncumbentInputSchema: z.ZodType<Prisma.CirclesToRolesCreateOrConnectWithoutIncumbentInput> = z.object({
  where: z.lazy(() => CirclesToRolesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CirclesToRolesCreateWithoutIncumbentInputSchema),z.lazy(() => CirclesToRolesUncheckedCreateWithoutIncumbentInputSchema) ]),
}).strict();

export default CirclesToRolesCreateOrConnectWithoutIncumbentInputSchema;
