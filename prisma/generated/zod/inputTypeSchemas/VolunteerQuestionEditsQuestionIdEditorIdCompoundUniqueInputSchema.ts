import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VolunteerQuestionEditsQuestionIdEditorIdCompoundUniqueInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsQuestionIdEditorIdCompoundUniqueInput> = z.object({
  questionId: z.number(),
  editorId: z.string()
}).strict();

export default VolunteerQuestionEditsQuestionIdEditorIdCompoundUniqueInputSchema;
