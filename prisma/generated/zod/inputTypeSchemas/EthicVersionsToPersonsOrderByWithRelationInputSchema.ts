import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EthicVersionOrderByWithRelationInputSchema } from './EthicVersionOrderByWithRelationInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';

export const EthicVersionsToPersonsOrderByWithRelationInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsOrderByWithRelationInput> = z.object({
  ethicVersionId: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  consent: z.lazy(() => SortOrderSchema).optional(),
  commentary: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ethicVersion: z.lazy(() => EthicVersionOrderByWithRelationInputSchema).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional()
}).strict();

export default EthicVersionsToPersonsOrderByWithRelationInputSchema;
