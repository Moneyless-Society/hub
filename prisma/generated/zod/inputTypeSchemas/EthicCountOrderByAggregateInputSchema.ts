import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EthicCountOrderByAggregateInputSchema: z.ZodType<Prisma.EthicCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  shortName: z.lazy(() => SortOrderSchema).optional(),
  activeId: z.lazy(() => SortOrderSchema).optional(),
  coreValue: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EthicCountOrderByAggregateInputSchema;
