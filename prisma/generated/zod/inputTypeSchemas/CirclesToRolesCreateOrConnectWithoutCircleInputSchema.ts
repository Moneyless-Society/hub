import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';
import { CirclesToRolesCreateWithoutCircleInputSchema } from './CirclesToRolesCreateWithoutCircleInputSchema';
import { CirclesToRolesUncheckedCreateWithoutCircleInputSchema } from './CirclesToRolesUncheckedCreateWithoutCircleInputSchema';

export const CirclesToRolesCreateOrConnectWithoutCircleInputSchema: z.ZodType<Prisma.CirclesToRolesCreateOrConnectWithoutCircleInput> = z.object({
  where: z.lazy(() => CirclesToRolesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CirclesToRolesCreateWithoutCircleInputSchema),z.lazy(() => CirclesToRolesUncheckedCreateWithoutCircleInputSchema) ]),
}).strict();

export default CirclesToRolesCreateOrConnectWithoutCircleInputSchema;
