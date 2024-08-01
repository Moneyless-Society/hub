import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { RoleEditsUncheckedUpdateManyWithoutRoleNestedInputSchema } from './RoleEditsUncheckedUpdateManyWithoutRoleNestedInputSchema';
import { CirclesToRolesUncheckedUpdateManyWithoutRoleNestedInputSchema } from './CirclesToRolesUncheckedUpdateManyWithoutRoleNestedInputSchema';

export const RoleUncheckedUpdateInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  edits: z.lazy(() => RoleEditsUncheckedUpdateManyWithoutRoleNestedInputSchema).optional(),
  circles: z.lazy(() => CirclesToRolesUncheckedUpdateManyWithoutRoleNestedInputSchema).optional()
}).strict();

export default RoleUncheckedUpdateInputSchema;
