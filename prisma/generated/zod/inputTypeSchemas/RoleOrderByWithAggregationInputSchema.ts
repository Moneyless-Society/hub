import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RoleCountOrderByAggregateInputSchema } from './RoleCountOrderByAggregateInputSchema';
import { RoleAvgOrderByAggregateInputSchema } from './RoleAvgOrderByAggregateInputSchema';
import { RoleMaxOrderByAggregateInputSchema } from './RoleMaxOrderByAggregateInputSchema';
import { RoleMinOrderByAggregateInputSchema } from './RoleMinOrderByAggregateInputSchema';
import { RoleSumOrderByAggregateInputSchema } from './RoleSumOrderByAggregateInputSchema';

export const RoleOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RoleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RoleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RoleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RoleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RoleSumOrderByAggregateInputSchema).optional()
}).strict();

export default RoleOrderByWithAggregationInputSchema;
