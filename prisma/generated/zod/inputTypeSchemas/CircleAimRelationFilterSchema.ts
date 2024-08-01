import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimWhereInputSchema } from './CircleAimWhereInputSchema';

export const CircleAimRelationFilterSchema: z.ZodType<Prisma.CircleAimRelationFilter> = z.object({
  is: z.lazy(() => CircleAimWhereInputSchema).optional(),
  isNot: z.lazy(() => CircleAimWhereInputSchema).optional()
}).strict();

export default CircleAimRelationFilterSchema;
