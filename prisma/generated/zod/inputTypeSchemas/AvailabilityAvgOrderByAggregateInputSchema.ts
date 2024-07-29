import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AvailabilityAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AvailabilityAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AvailabilityAvgOrderByAggregateInputSchema;
