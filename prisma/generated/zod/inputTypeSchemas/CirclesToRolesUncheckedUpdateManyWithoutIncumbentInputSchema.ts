import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { CirclesToRolesUpdatetermIdsInputSchema } from './CirclesToRolesUpdatetermIdsInputSchema';

export const CirclesToRolesUncheckedUpdateManyWithoutIncumbentInputSchema: z.ZodType<Prisma.CirclesToRolesUncheckedUpdateManyWithoutIncumbentInput> = z.object({
  circleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  roleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  termIds: z.union([ z.lazy(() => CirclesToRolesUpdatetermIdsInputSchema),z.number().int().array() ]).optional(),
}).strict();

export default CirclesToRolesUncheckedUpdateManyWithoutIncumbentInputSchema;
