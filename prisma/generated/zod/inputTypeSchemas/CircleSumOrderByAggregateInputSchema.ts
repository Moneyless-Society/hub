import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CircleSumOrderByAggregateInputSchema: z.ZodType<Prisma.CircleSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CircleSumOrderByAggregateInputSchema;
