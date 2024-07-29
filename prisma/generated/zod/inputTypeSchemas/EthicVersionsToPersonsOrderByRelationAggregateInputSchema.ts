import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EthicVersionsToPersonsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EthicVersionsToPersonsOrderByRelationAggregateInputSchema;
