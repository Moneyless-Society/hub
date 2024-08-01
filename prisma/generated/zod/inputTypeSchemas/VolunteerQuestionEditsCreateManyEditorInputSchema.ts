import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VolunteerQuestionEditsCreateManyEditorInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsCreateManyEditorInput> = z.object({
  questionId: z.number().int(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default VolunteerQuestionEditsCreateManyEditorInputSchema;
