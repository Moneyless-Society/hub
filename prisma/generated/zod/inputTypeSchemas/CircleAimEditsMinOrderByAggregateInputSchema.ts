import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CircleAimEditsMinOrderByAggregateInputSchema: z.ZodType<Prisma.CircleAimEditsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  circleAimId: z.lazy(() => SortOrderSchema).optional(),
  editorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CircleAimEditsMinOrderByAggregateInputSchema;
