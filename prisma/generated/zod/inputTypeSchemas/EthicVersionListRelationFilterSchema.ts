import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionWhereInputSchema } from './EthicVersionWhereInputSchema';

export const EthicVersionListRelationFilterSchema: z.ZodType<Prisma.EthicVersionListRelationFilter> = z.object({
  every: z.lazy(() => EthicVersionWhereInputSchema).optional(),
  some: z.lazy(() => EthicVersionWhereInputSchema).optional(),
  none: z.lazy(() => EthicVersionWhereInputSchema).optional()
}).strict();

export default EthicVersionListRelationFilterSchema;
