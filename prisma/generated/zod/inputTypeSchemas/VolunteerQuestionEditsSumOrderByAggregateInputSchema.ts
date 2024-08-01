import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VolunteerQuestionEditsSumOrderByAggregateInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsSumOrderByAggregateInput> = z.object({
  questionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default VolunteerQuestionEditsSumOrderByAggregateInputSchema;
