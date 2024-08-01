import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VolunteerResponseSumOrderByAggregateInputSchema: z.ZodType<Prisma.VolunteerResponseSumOrderByAggregateInput> = z.object({
  questionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default VolunteerResponseSumOrderByAggregateInputSchema;
