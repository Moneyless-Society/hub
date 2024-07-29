import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VolunteerQuestionSumOrderByAggregateInputSchema: z.ZodType<Prisma.VolunteerQuestionSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default VolunteerQuestionSumOrderByAggregateInputSchema;
