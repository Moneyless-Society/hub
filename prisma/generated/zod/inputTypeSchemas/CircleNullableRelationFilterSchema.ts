import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleWhereInputSchema } from './CircleWhereInputSchema';

export const CircleNullableRelationFilterSchema: z.ZodType<Prisma.CircleNullableRelationFilter> = z.object({
  is: z.lazy(() => CircleWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => CircleWhereInputSchema).optional().nullable()
}).strict();

export default CircleNullableRelationFilterSchema;
