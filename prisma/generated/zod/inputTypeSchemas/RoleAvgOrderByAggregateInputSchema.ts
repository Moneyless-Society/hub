import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RoleAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleAvgOrderByAggregateInputSchema;
