import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreatetermIdsInputSchema } from './CirclesToRolesCreatetermIdsInputSchema';

export const CirclesToRolesCreateManyRoleInputSchema: z.ZodType<Prisma.CirclesToRolesCreateManyRoleInput> = z.object({
  circleId: z.number().int(),
  incumbentId: z.string(),
  termIds: z.union([ z.lazy(() => CirclesToRolesCreatetermIdsInputSchema),z.number().int().array() ]).optional(),
}).strict();

export default CirclesToRolesCreateManyRoleInputSchema;
