import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VolunteerQuestionEditsCreateManyQuestionInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsCreateManyQuestionInput> = z.object({
  editorId: z.string(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default VolunteerQuestionEditsCreateManyQuestionInputSchema;
