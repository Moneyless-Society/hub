import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { CirclesToRolesUpdatetermIdsInputSchema } from './CirclesToRolesUpdatetermIdsInputSchema';
import { RoleTermUncheckedUpdateManyWithoutCircleRoleNestedInputSchema } from './RoleTermUncheckedUpdateManyWithoutCircleRoleNestedInputSchema';

export const CirclesToRolesUncheckedUpdateWithoutCircleInputSchema: z.ZodType<Prisma.CirclesToRolesUncheckedUpdateWithoutCircleInput> = z.object({
  roleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  incumbentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  termIds: z.union([ z.lazy(() => CirclesToRolesUpdatetermIdsInputSchema),z.number().int().array() ]).optional(),
  terms: z.lazy(() => RoleTermUncheckedUpdateManyWithoutCircleRoleNestedInputSchema).optional()
}).strict();

export default CirclesToRolesUncheckedUpdateWithoutCircleInputSchema;
