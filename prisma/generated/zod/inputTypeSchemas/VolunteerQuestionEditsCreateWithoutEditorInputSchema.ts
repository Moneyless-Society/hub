import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionCreateNestedOneWithoutEditsInputSchema } from './VolunteerQuestionCreateNestedOneWithoutEditsInputSchema';

export const VolunteerQuestionEditsCreateWithoutEditorInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsCreateWithoutEditorInput> = z.object({
  updatedAt: z.coerce.date().optional(),
  question: z.lazy(() => VolunteerQuestionCreateNestedOneWithoutEditsInputSchema)
}).strict();

export default VolunteerQuestionEditsCreateWithoutEditorInputSchema;
