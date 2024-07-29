import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { CirclesToRolesUpdateOneRequiredWithoutTermsNestedInputSchema } from './CirclesToRolesUpdateOneRequiredWithoutTermsNestedInputSchema';
import { PersonUpdateOneRequiredWithoutRoleTermsNestedInputSchema } from './PersonUpdateOneRequiredWithoutRoleTermsNestedInputSchema';

export const RoleTermUpdateInputSchema: z.ZodType<Prisma.RoleTermUpdateInput> = z.object({
  start: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  circleRole: z.lazy(() => CirclesToRolesUpdateOneRequiredWithoutTermsNestedInputSchema).optional(),
  holder: z.lazy(() => PersonUpdateOneRequiredWithoutRoleTermsNestedInputSchema).optional()
}).strict();

export default RoleTermUpdateInputSchema;
