import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionEditsWhereInputSchema } from './VolunteerQuestionEditsWhereInputSchema';

export const VolunteerQuestionEditsListRelationFilterSchema: z.ZodType<Prisma.VolunteerQuestionEditsListRelationFilter> = z.object({
  every: z.lazy(() => VolunteerQuestionEditsWhereInputSchema).optional(),
  some: z.lazy(() => VolunteerQuestionEditsWhereInputSchema).optional(),
  none: z.lazy(() => VolunteerQuestionEditsWhereInputSchema).optional()
}).strict();

export default VolunteerQuestionEditsListRelationFilterSchema;
