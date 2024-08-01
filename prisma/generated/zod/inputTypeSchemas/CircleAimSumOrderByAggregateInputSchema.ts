import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CircleAimSumOrderByAggregateInputSchema: z.ZodType<Prisma.CircleAimSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  circleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CircleAimSumOrderByAggregateInputSchema;
