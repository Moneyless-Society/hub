import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EthicVersionsToPersonsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsAvgOrderByAggregateInput> = z.object({
  ethicVersionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EthicVersionsToPersonsAvgOrderByAggregateInputSchema;
