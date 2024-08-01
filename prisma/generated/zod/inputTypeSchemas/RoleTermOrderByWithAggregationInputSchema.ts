import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RoleTermCountOrderByAggregateInputSchema } from './RoleTermCountOrderByAggregateInputSchema';
import { RoleTermAvgOrderByAggregateInputSchema } from './RoleTermAvgOrderByAggregateInputSchema';
import { RoleTermMaxOrderByAggregateInputSchema } from './RoleTermMaxOrderByAggregateInputSchema';
import { RoleTermMinOrderByAggregateInputSchema } from './RoleTermMinOrderByAggregateInputSchema';
import { RoleTermSumOrderByAggregateInputSchema } from './RoleTermSumOrderByAggregateInputSchema';

export const RoleTermOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoleTermOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  circleId: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.lazy(() => SortOrderSchema).optional(),
  holderId: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => RoleTermCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RoleTermAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RoleTermMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RoleTermMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RoleTermSumOrderByAggregateInputSchema).optional()
}).strict();

export default RoleTermOrderByWithAggregationInputSchema;
