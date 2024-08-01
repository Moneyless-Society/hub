import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VolunteerQuestionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.VolunteerQuestionAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default VolunteerQuestionAvgOrderByAggregateInputSchema;
