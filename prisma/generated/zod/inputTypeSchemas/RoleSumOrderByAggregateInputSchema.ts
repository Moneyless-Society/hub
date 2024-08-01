import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleSumOrderByAggregateInputSchema: z.ZodType<Prisma.RoleSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleSumOrderByAggregateInputSchema;
