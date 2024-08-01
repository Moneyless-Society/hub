import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionCreatetextInputSchema } from './VolunteerQuestionCreatetextInputSchema';

export const VolunteerQuestionCreateManyInputSchema: z.ZodType<Prisma.VolunteerQuestionCreateManyInput> = z.object({
  id: z.number().int().optional(),
  text: z.union([ z.lazy(() => VolunteerQuestionCreatetextInputSchema),z.string().array() ]).optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default VolunteerQuestionCreateManyInputSchema;
