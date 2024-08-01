import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleEditsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RoleEditsAvgOrderByAggregateInput> = z.object({
  roleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleEditsAvgOrderByAggregateInputSchema;
