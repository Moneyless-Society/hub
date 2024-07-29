import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleEditsSumOrderByAggregateInputSchema: z.ZodType<Prisma.RoleEditsSumOrderByAggregateInput> = z.object({
  roleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleEditsSumOrderByAggregateInputSchema;
