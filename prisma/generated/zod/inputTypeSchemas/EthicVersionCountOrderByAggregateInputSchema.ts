import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EthicVersionCountOrderByAggregateInputSchema: z.ZodType<Prisma.EthicVersionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  ethicId: z.lazy(() => SortOrderSchema).optional(),
  submitterId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EthicVersionCountOrderByAggregateInputSchema;
