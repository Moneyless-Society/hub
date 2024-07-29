import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EthicsToPersonsCountOrderByAggregateInputSchema: z.ZodType<Prisma.EthicsToPersonsCountOrderByAggregateInput> = z.object({
  ethicId: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  ranking: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EthicsToPersonsCountOrderByAggregateInputSchema;
