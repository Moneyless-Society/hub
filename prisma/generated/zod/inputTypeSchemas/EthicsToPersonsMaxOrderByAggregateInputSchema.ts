import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EthicsToPersonsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EthicsToPersonsMaxOrderByAggregateInput> = z.object({
  ethicId: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EthicsToPersonsMaxOrderByAggregateInputSchema;
