import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EthicVersionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EthicVersionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EthicVersionOrderByRelationAggregateInputSchema;
