import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AvailabilityCreateWithoutPersonInputSchema: z.ZodType<Prisma.AvailabilityCreateWithoutPersonInput> = z.object({
  start: z.number().int(),
  end: z.number().int(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  status: z.string().optional().nullable()
}).strict();

export default AvailabilityCreateWithoutPersonInputSchema;
