import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CircleAimEditsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CircleAimEditsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CircleAimEditsOrderByRelationAggregateInputSchema;
