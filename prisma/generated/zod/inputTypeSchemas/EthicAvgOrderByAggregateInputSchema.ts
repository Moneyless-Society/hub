import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EthicAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EthicAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  activeId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EthicAvgOrderByAggregateInputSchema;
