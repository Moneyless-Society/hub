import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AvailabilityUncheckedCreateWithoutPersonInputSchema: z.ZodType<Prisma.AvailabilityUncheckedCreateWithoutPersonInput> = z.object({
  id: z.number().int().optional(),
  start: z.number().int(),
  end: z.number().int(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  status: z.string().optional().nullable()
}).strict();

export default AvailabilityUncheckedCreateWithoutPersonInputSchema;
