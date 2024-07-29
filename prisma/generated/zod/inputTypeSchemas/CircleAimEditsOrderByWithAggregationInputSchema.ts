import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CircleAimEditsCountOrderByAggregateInputSchema } from './CircleAimEditsCountOrderByAggregateInputSchema';
import { CircleAimEditsAvgOrderByAggregateInputSchema } from './CircleAimEditsAvgOrderByAggregateInputSchema';
import { CircleAimEditsMaxOrderByAggregateInputSchema } from './CircleAimEditsMaxOrderByAggregateInputSchema';
import { CircleAimEditsMinOrderByAggregateInputSchema } from './CircleAimEditsMinOrderByAggregateInputSchema';
import { CircleAimEditsSumOrderByAggregateInputSchema } from './CircleAimEditsSumOrderByAggregateInputSchema';

export const CircleAimEditsOrderByWithAggregationInputSchema: z.ZodType<Prisma.CircleAimEditsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  circleAimId: z.lazy(() => SortOrderSchema).optional(),
  editorId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => CircleAimEditsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CircleAimEditsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CircleAimEditsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CircleAimEditsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CircleAimEditsSumOrderByAggregateInputSchema).optional()
}).strict();

export default CircleAimEditsOrderByWithAggregationInputSchema;
