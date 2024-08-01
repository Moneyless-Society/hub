import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CircleCountOrderByAggregateInputSchema } from './CircleCountOrderByAggregateInputSchema';
import { CircleAvgOrderByAggregateInputSchema } from './CircleAvgOrderByAggregateInputSchema';
import { CircleMaxOrderByAggregateInputSchema } from './CircleMaxOrderByAggregateInputSchema';
import { CircleMinOrderByAggregateInputSchema } from './CircleMinOrderByAggregateInputSchema';
import { CircleSumOrderByAggregateInputSchema } from './CircleSumOrderByAggregateInputSchema';

export const CircleOrderByWithAggregationInputSchema: z.ZodType<Prisma.CircleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  mission: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  domains: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedBy: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CircleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CircleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CircleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CircleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CircleSumOrderByAggregateInputSchema).optional()
}).strict();

export default CircleOrderByWithAggregationInputSchema;
