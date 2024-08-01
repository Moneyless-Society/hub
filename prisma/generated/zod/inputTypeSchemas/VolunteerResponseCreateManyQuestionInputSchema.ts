import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VolunteerResponseCreateManyQuestionInputSchema: z.ZodType<Prisma.VolunteerResponseCreateManyQuestionInput> = z.object({
  responderId: z.string(),
  answer: z.string(),
  updatedAt: z.coerce.date().optional(),
  importerId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  submittedAt: z.coerce.date().optional().nullable()
}).strict();

export default VolunteerResponseCreateManyQuestionInputSchema;
