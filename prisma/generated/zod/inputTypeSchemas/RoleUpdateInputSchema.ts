import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { RoleEditsUpdateManyWithoutRoleNestedInputSchema } from './RoleEditsUpdateManyWithoutRoleNestedInputSchema';
import { CirclesToRolesUpdateManyWithoutRoleNestedInputSchema } from './CirclesToRolesUpdateManyWithoutRoleNestedInputSchema';

export const RoleUpdateInputSchema: z.ZodType<Prisma.RoleUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  edits: z.lazy(() => RoleEditsUpdateManyWithoutRoleNestedInputSchema).optional(),
  circles: z.lazy(() => CirclesToRolesUpdateManyWithoutRoleNestedInputSchema).optional()
}).strict();

export default RoleUpdateInputSchema;
