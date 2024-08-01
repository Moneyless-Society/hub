import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionWhereInputSchema } from './EthicVersionWhereInputSchema';

export const EthicVersionRelationFilterSchema: z.ZodType<Prisma.EthicVersionRelationFilter> = z.object({
  is: z.lazy(() => EthicVersionWhereInputSchema).optional(),
  isNot: z.lazy(() => EthicVersionWhereInputSchema).optional()
}).strict();

export default EthicVersionRelationFilterSchema;
