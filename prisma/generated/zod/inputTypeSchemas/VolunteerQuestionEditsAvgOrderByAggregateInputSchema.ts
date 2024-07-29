import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VolunteerQuestionEditsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsAvgOrderByAggregateInput> = z.object({
  questionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default VolunteerQuestionEditsAvgOrderByAggregateInputSchema;
