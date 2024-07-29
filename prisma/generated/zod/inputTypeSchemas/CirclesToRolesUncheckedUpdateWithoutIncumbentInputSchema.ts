import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { CirclesToRolesUpdatetermIdsInputSchema } from './CirclesToRolesUpdatetermIdsInputSchema';
import { RoleTermUncheckedUpdateManyWithoutCircleRoleNestedInputSchema } from './RoleTermUncheckedUpdateManyWithoutCircleRoleNestedInputSchema';

export const CirclesToRolesUncheckedUpdateWithoutIncumbentInputSchema: z.ZodType<Prisma.CirclesToRolesUncheckedUpdateWithoutIncumbentInput> = z.object({
  circleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  roleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  termIds: z.union([ z.lazy(() => CirclesToRolesUpdatetermIdsInputSchema),z.number().int().array() ]).optional(),
  terms: z.lazy(() => RoleTermUncheckedUpdateManyWithoutCircleRoleNestedInputSchema).optional()
}).strict();

export default CirclesToRolesUncheckedUpdateWithoutIncumbentInputSchema;
