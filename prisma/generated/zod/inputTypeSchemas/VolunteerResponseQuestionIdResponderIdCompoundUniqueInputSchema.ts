import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VolunteerResponseQuestionIdResponderIdCompoundUniqueInputSchema: z.ZodType<Prisma.VolunteerResponseQuestionIdResponderIdCompoundUniqueInput> = z.object({
  questionId: z.number(),
  responderId: z.string()
}).strict();

export default VolunteerResponseQuestionIdResponderIdCompoundUniqueInputSchema;
