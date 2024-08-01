import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const VolunteerQuestionCountOutputTypeSelectSchema: z.ZodType<Prisma.VolunteerQuestionCountOutputTypeSelect> = z.object({
  responses: z.boolean().optional(),
  edits: z.boolean().optional(),
}).strict();

export default VolunteerQuestionCountOutputTypeSelectSchema;
