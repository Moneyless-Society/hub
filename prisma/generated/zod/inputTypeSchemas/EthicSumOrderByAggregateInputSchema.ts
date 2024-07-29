import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EthicSumOrderByAggregateInputSchema: z.ZodType<Prisma.EthicSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  activeId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EthicSumOrderByAggregateInputSchema;
