import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VolunteerResponseCreateManyImportedByInputSchema: z.ZodType<Prisma.VolunteerResponseCreateManyImportedByInput> = z.object({
  questionId: z.number().int(),
  responderId: z.string(),
  answer: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  submittedAt: z.coerce.date().optional().nullable()
}).strict();

export default VolunteerResponseCreateManyImportedByInputSchema;
