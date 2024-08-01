import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VolunteerQuestionEditsUncheckedCreateWithoutQuestionInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUncheckedCreateWithoutQuestionInput> = z.object({
  editorId: z.string(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default VolunteerQuestionEditsUncheckedCreateWithoutQuestionInputSchema;
