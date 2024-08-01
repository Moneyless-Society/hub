import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EthicVersionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EthicVersionAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  ethicId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EthicVersionAvgOrderByAggregateInputSchema;
