import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VolunteerQuestionEditsUncheckedCreateWithoutEditorInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUncheckedCreateWithoutEditorInput> = z.object({
  questionId: z.number().int(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default VolunteerQuestionEditsUncheckedCreateWithoutEditorInputSchema;
