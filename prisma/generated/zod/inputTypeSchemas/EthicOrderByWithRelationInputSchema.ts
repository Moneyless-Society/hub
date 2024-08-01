import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EthicVersionOrderByRelationAggregateInputSchema } from './EthicVersionOrderByRelationAggregateInputSchema';
import { EthicsToPersonsOrderByRelationAggregateInputSchema } from './EthicsToPersonsOrderByRelationAggregateInputSchema';

export const EthicOrderByWithRelationInputSchema: z.ZodType<Prisma.EthicOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  shortName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  activeId: z.lazy(() => SortOrderSchema).optional(),
  coreValue: z.lazy(() => SortOrderSchema).optional(),
  versions: z.lazy(() => EthicVersionOrderByRelationAggregateInputSchema).optional(),
  responses: z.lazy(() => EthicsToPersonsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default EthicOrderByWithRelationInputSchema;
