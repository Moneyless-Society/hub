import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PIICreateWithoutPersonInputSchema: z.ZodType<Prisma.PIICreateWithoutPersonInput> = z.object({
  id: z.string().optional(),
  legalFirstName: z.string().optional().nullable(),
  legalLastName: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  phoneNumber: z.string().optional().nullable(),
  discord: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default PIICreateWithoutPersonInputSchema;
