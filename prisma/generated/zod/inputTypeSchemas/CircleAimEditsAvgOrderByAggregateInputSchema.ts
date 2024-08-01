import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CircleAimEditsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CircleAimEditsAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  circleAimId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CircleAimEditsAvgOrderByAggregateInputSchema;
