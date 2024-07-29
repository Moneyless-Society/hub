import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CircleAimEditsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CircleAimEditsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  circleAimId: z.lazy(() => SortOrderSchema).optional(),
  editorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CircleAimEditsMaxOrderByAggregateInputSchema;
