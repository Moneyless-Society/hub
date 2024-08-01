import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreatetermIdsInputSchema } from './CirclesToRolesCreatetermIdsInputSchema';

export const CirclesToRolesCreateManyIncumbentInputSchema: z.ZodType<Prisma.CirclesToRolesCreateManyIncumbentInput> = z.object({
  circleId: z.number().int(),
  roleId: z.number().int(),
  termIds: z.union([ z.lazy(() => CirclesToRolesCreatetermIdsInputSchema),z.number().int().array() ]).optional(),
}).strict();

export default CirclesToRolesCreateManyIncumbentInputSchema;
