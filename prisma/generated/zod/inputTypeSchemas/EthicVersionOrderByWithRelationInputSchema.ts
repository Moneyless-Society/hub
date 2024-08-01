import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EthicOrderByWithRelationInputSchema } from './EthicOrderByWithRelationInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';
import { EthicVersionsToPersonsOrderByRelationAggregateInputSchema } from './EthicVersionsToPersonsOrderByRelationAggregateInputSchema';

export const EthicVersionOrderByWithRelationInputSchema: z.ZodType<Prisma.EthicVersionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  ethicId: z.lazy(() => SortOrderSchema).optional(),
  submitterId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ethic: z.lazy(() => EthicOrderByWithRelationInputSchema).optional(),
  submitter: z.lazy(() => PersonOrderByWithRelationInputSchema).optional(),
  responses: z.lazy(() => EthicVersionsToPersonsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default EthicVersionOrderByWithRelationInputSchema;
