import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreatetermIdsInputSchema } from './CirclesToRolesCreatetermIdsInputSchema';

export const CirclesToRolesUncheckedCreateWithoutTermsInputSchema: z.ZodType<Prisma.CirclesToRolesUncheckedCreateWithoutTermsInput> = z.object({
  circleId: z.number().int(),
  roleId: z.number().int(),
  incumbentId: z.string(),
  termIds: z.union([ z.lazy(() => CirclesToRolesCreatetermIdsInputSchema),z.number().int().array() ]).optional(),
}).strict();

export default CirclesToRolesUncheckedCreateWithoutTermsInputSchema;
