import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VolunteerResponseAvgOrderByAggregateInputSchema: z.ZodType<Prisma.VolunteerResponseAvgOrderByAggregateInput> = z.object({
  questionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default VolunteerResponseAvgOrderByAggregateInputSchema;
