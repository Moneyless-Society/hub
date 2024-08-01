import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EthicsToPersonsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EthicsToPersonsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EthicsToPersonsOrderByRelationAggregateInputSchema;
