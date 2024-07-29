import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionWhereInputSchema } from './VolunteerQuestionWhereInputSchema';

export const VolunteerQuestionRelationFilterSchema: z.ZodType<Prisma.VolunteerQuestionRelationFilter> = z.object({
  is: z.lazy(() => VolunteerQuestionWhereInputSchema).optional(),
  isNot: z.lazy(() => VolunteerQuestionWhereInputSchema).optional()
}).strict();

export default VolunteerQuestionRelationFilterSchema;
