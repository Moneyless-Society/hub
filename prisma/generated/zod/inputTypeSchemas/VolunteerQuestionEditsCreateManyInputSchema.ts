import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VolunteerQuestionEditsCreateManyInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsCreateManyInput> = z.object({
  questionId: z.number().int(),
  editorId: z.string(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default VolunteerQuestionEditsCreateManyInputSchema;
