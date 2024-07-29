import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesUpdatetermIdsInputSchema } from './CirclesToRolesUpdatetermIdsInputSchema';

export const CirclesToRolesUpdateManyMutationInputSchema: z.ZodType<Prisma.CirclesToRolesUpdateManyMutationInput> = z.object({
  termIds: z.union([ z.lazy(() => CirclesToRolesUpdatetermIdsInputSchema),z.number().int().array() ]).optional(),
}).strict();

export default CirclesToRolesUpdateManyMutationInputSchema;
