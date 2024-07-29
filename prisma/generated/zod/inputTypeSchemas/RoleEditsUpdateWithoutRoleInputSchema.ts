import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { PersonUpdateOneRequiredWithoutRoleEditsNestedInputSchema } from './PersonUpdateOneRequiredWithoutRoleEditsNestedInputSchema';

export const RoleEditsUpdateWithoutRoleInputSchema: z.ZodType<Prisma.RoleEditsUpdateWithoutRoleInput> = z.object({
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  editor: z.lazy(() => PersonUpdateOneRequiredWithoutRoleEditsNestedInputSchema).optional()
}).strict();

export default RoleEditsUpdateWithoutRoleInputSchema;
