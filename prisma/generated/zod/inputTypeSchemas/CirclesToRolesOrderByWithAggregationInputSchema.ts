import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CirclesToRolesCountOrderByAggregateInputSchema } from './CirclesToRolesCountOrderByAggregateInputSchema';
import { CirclesToRolesAvgOrderByAggregateInputSchema } from './CirclesToRolesAvgOrderByAggregateInputSchema';
import { CirclesToRolesMaxOrderByAggregateInputSchema } from './CirclesToRolesMaxOrderByAggregateInputSchema';
import { CirclesToRolesMinOrderByAggregateInputSchema } from './CirclesToRolesMinOrderByAggregateInputSchema';
import { CirclesToRolesSumOrderByAggregateInputSchema } from './CirclesToRolesSumOrderByAggregateInputSchema';

export const CirclesToRolesOrderByWithAggregationInputSchema: z.ZodType<Prisma.CirclesToRolesOrderByWithAggregationInput> = z.object({
  circleId: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.lazy(() => SortOrderSchema).optional(),
  incumbentId: z.lazy(() => SortOrderSchema).optional(),
  termIds: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CirclesToRolesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CirclesToRolesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CirclesToRolesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CirclesToRolesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CirclesToRolesSumOrderByAggregateInputSchema).optional()
}).strict();

export default CirclesToRolesOrderByWithAggregationInputSchema;
