import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { CirclesToRolesUpdateOneRequiredWithoutTermsNestedInputSchema } from './CirclesToRolesUpdateOneRequiredWithoutTermsNestedInputSchema';

export const RoleTermUpdateWithoutHolderInputSchema: z.ZodType<Prisma.RoleTermUpdateWithoutHolderInput> = z.object({
  start: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  circleRole: z.lazy(() => CirclesToRolesUpdateOneRequiredWithoutTermsNestedInputSchema).optional()
}).strict();

export default RoleTermUpdateWithoutHolderInputSchema;
