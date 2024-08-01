import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RoleUpdateOneRequiredWithoutEditsNestedInputSchema } from './RoleUpdateOneRequiredWithoutEditsNestedInputSchema';

export const RoleEditsUpdateWithoutEditorInputSchema: z.ZodType<Prisma.RoleEditsUpdateWithoutEditorInput> = z.object({
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.lazy(() => RoleUpdateOneRequiredWithoutEditsNestedInputSchema).optional()
}).strict();

export default RoleEditsUpdateWithoutEditorInputSchema;
