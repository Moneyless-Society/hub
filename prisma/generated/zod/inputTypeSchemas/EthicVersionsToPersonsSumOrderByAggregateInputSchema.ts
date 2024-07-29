import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EthicVersionsToPersonsSumOrderByAggregateInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsSumOrderByAggregateInput> = z.object({
  ethicVersionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EthicVersionsToPersonsSumOrderByAggregateInputSchema;
