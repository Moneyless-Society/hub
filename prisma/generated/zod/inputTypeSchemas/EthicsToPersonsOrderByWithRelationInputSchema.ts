import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { EthicOrderByWithRelationInputSchema } from './EthicOrderByWithRelationInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';

export const EthicsToPersonsOrderByWithRelationInputSchema: z.ZodType<Prisma.EthicsToPersonsOrderByWithRelationInput> = z.object({
  ethicId: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  ranking: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ethic: z.lazy(() => EthicOrderByWithRelationInputSchema).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional()
}).strict();

export default EthicsToPersonsOrderByWithRelationInputSchema;
