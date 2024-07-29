import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EthicVersionSumOrderByAggregateInputSchema: z.ZodType<Prisma.EthicVersionSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  ethicId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EthicVersionSumOrderByAggregateInputSchema;
