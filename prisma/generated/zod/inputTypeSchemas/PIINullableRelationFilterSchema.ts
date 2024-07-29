import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PIIWhereInputSchema } from './PIIWhereInputSchema';

export const PIINullableRelationFilterSchema: z.ZodType<Prisma.PIINullableRelationFilter> = z.object({
  is: z.lazy(() => PIIWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PIIWhereInputSchema).optional().nullable()
}).strict();

export default PIINullableRelationFilterSchema;
