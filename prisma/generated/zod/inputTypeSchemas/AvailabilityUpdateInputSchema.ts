import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PersonUpdateOneRequiredWithoutAvailabilityNestedInputSchema } from './PersonUpdateOneRequiredWithoutAvailabilityNestedInputSchema';

export const AvailabilityUpdateInputSchema: z.ZodType<Prisma.AvailabilityUpdateInput> = z.object({
  start: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  person: z.lazy(() => PersonUpdateOneRequiredWithoutAvailabilityNestedInputSchema).optional()
}).strict();

export default AvailabilityUpdateInputSchema;
