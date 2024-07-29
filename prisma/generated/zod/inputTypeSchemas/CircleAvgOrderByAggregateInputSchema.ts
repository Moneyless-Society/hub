import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CircleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CircleAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CircleAvgOrderByAggregateInputSchema;
