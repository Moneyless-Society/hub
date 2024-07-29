import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VolunteerQuestionCreatetextInputSchema: z.ZodType<Prisma.VolunteerQuestionCreatetextInput> = z.object({
  set: z.string().array()
}).strict();

export default VolunteerQuestionCreatetextInputSchema;
