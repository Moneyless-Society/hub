import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CirclesToRolesCountOrderByAggregateInputSchema: z.ZodType<Prisma.CirclesToRolesCountOrderByAggregateInput> = z.object({
  circleId: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.lazy(() => SortOrderSchema).optional(),
  incumbentId: z.lazy(() => SortOrderSchema).optional(),
  termIds: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CirclesToRolesCountOrderByAggregateInputSchema;
