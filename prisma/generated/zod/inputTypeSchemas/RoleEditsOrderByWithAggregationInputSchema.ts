import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RoleEditsCountOrderByAggregateInputSchema } from './RoleEditsCountOrderByAggregateInputSchema';
import { RoleEditsAvgOrderByAggregateInputSchema } from './RoleEditsAvgOrderByAggregateInputSchema';
import { RoleEditsMaxOrderByAggregateInputSchema } from './RoleEditsMaxOrderByAggregateInputSchema';
import { RoleEditsMinOrderByAggregateInputSchema } from './RoleEditsMinOrderByAggregateInputSchema';
import { RoleEditsSumOrderByAggregateInputSchema } from './RoleEditsSumOrderByAggregateInputSchema';

export const RoleEditsOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoleEditsOrderByWithAggregationInput> = z.object({
  roleId: z.lazy(() => SortOrderSchema).optional(),
  editorId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RoleEditsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RoleEditsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RoleEditsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RoleEditsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RoleEditsSumOrderByAggregateInputSchema).optional()
}).strict();

export default RoleEditsOrderByWithAggregationInputSchema;
