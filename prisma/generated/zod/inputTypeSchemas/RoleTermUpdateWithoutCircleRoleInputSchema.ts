import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { PersonUpdateOneRequiredWithoutRoleTermsNestedInputSchema } from './PersonUpdateOneRequiredWithoutRoleTermsNestedInputSchema';

export const RoleTermUpdateWithoutCircleRoleInputSchema: z.ZodType<Prisma.RoleTermUpdateWithoutCircleRoleInput> = z.object({
  start: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  holder: z.lazy(() => PersonUpdateOneRequiredWithoutRoleTermsNestedInputSchema).optional()
}).strict();

export default RoleTermUpdateWithoutCircleRoleInputSchema;
