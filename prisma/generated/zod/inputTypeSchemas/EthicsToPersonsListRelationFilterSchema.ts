import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsWhereInputSchema } from './EthicsToPersonsWhereInputSchema';

export const EthicsToPersonsListRelationFilterSchema: z.ZodType<Prisma.EthicsToPersonsListRelationFilter> = z.object({
  every: z.lazy(() => EthicsToPersonsWhereInputSchema).optional(),
  some: z.lazy(() => EthicsToPersonsWhereInputSchema).optional(),
  none: z.lazy(() => EthicsToPersonsWhereInputSchema).optional()
}).strict();

export default EthicsToPersonsListRelationFilterSchema;
