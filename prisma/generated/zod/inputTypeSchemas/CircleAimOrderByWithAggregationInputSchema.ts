import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CircleAimCountOrderByAggregateInputSchema } from './CircleAimCountOrderByAggregateInputSchema';
import { CircleAimAvgOrderByAggregateInputSchema } from './CircleAimAvgOrderByAggregateInputSchema';
import { CircleAimMaxOrderByAggregateInputSchema } from './CircleAimMaxOrderByAggregateInputSchema';
import { CircleAimMinOrderByAggregateInputSchema } from './CircleAimMinOrderByAggregateInputSchema';
import { CircleAimSumOrderByAggregateInputSchema } from './CircleAimSumOrderByAggregateInputSchema';

export const CircleAimOrderByWithAggregationInputSchema: z.ZodType<Prisma.CircleAimOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  circleId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CircleAimCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CircleAimAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CircleAimMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CircleAimMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CircleAimSumOrderByAggregateInputSchema).optional()
}).strict();

export default CircleAimOrderByWithAggregationInputSchema;
