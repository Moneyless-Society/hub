import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CirclesToRolesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CirclesToRolesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CirclesToRolesOrderByRelationAggregateInputSchema;
