import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsWhereInputSchema } from './EthicVersionsToPersonsWhereInputSchema';

export const EthicVersionsToPersonsListRelationFilterSchema: z.ZodType<Prisma.EthicVersionsToPersonsListRelationFilter> = z.object({
  every: z.lazy(() => EthicVersionsToPersonsWhereInputSchema).optional(),
  some: z.lazy(() => EthicVersionsToPersonsWhereInputSchema).optional(),
  none: z.lazy(() => EthicVersionsToPersonsWhereInputSchema).optional()
}).strict();

export default EthicVersionsToPersonsListRelationFilterSchema;
