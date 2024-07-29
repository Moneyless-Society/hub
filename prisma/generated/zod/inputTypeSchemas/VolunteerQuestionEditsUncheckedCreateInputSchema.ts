import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VolunteerQuestionEditsUncheckedCreateInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUncheckedCreateInput> = z.object({
  questionId: z.number().int(),
  editorId: z.string(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default VolunteerQuestionEditsUncheckedCreateInputSchema;
