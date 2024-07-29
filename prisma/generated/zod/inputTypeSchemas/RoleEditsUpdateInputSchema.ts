import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RoleUpdateOneRequiredWithoutEditsNestedInputSchema } from './RoleUpdateOneRequiredWithoutEditsNestedInputSchema';
import { PersonUpdateOneRequiredWithoutRoleEditsNestedInputSchema } from './PersonUpdateOneRequiredWithoutRoleEditsNestedInputSchema';

export const RoleEditsUpdateInputSchema: z.ZodType<Prisma.RoleEditsUpdateInput> = z.object({
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.lazy(() => RoleUpdateOneRequiredWithoutEditsNestedInputSchema).optional(),
  editor: z.lazy(() => PersonUpdateOneRequiredWithoutRoleEditsNestedInputSchema).optional()
}).strict();

export default RoleEditsUpdateInputSchema;
