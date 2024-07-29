import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateNestedOneWithoutAvailabilityInputSchema } from './PersonCreateNestedOneWithoutAvailabilityInputSchema';

export const AvailabilityCreateInputSchema: z.ZodType<Prisma.AvailabilityCreateInput> = z.object({
  start: z.number().int(),
  end: z.number().int(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  status: z.string().optional().nullable(),
  person: z.lazy(() => PersonCreateNestedOneWithoutAvailabilityInputSchema)
}).strict();

export default AvailabilityCreateInputSchema;
