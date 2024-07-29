import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VolunteerResponseCreateManyResponderInputSchema: z.ZodType<Prisma.VolunteerResponseCreateManyResponderInput> = z.object({
  questionId: z.number().int(),
  answer: z.string(),
  updatedAt: z.coerce.date().optional(),
  importerId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  submittedAt: z.coerce.date().optional().nullable()
}).strict();

export default VolunteerResponseCreateManyResponderInputSchema;
