import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CirclesToRolesSumOrderByAggregateInputSchema: z.ZodType<Prisma.CirclesToRolesSumOrderByAggregateInput> = z.object({
  circleId: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.lazy(() => SortOrderSchema).optional(),
  termIds: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CirclesToRolesSumOrderByAggregateInputSchema;
