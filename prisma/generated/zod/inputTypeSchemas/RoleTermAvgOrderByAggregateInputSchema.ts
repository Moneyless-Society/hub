import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleTermAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RoleTermAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  circleId: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleTermAvgOrderByAggregateInputSchema;
