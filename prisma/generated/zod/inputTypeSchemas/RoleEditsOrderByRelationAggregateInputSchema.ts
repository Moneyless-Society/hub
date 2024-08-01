import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleEditsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoleEditsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleEditsOrderByRelationAggregateInputSchema;
