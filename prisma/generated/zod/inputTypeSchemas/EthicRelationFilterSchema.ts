import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicWhereInputSchema } from './EthicWhereInputSchema';

export const EthicRelationFilterSchema: z.ZodType<Prisma.EthicRelationFilter> = z.object({
  is: z.lazy(() => EthicWhereInputSchema).optional(),
  isNot: z.lazy(() => EthicWhereInputSchema).optional()
}).strict();

export default EthicRelationFilterSchema;
