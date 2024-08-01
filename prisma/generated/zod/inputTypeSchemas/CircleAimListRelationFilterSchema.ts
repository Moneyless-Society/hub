import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimWhereInputSchema } from './CircleAimWhereInputSchema';

export const CircleAimListRelationFilterSchema: z.ZodType<Prisma.CircleAimListRelationFilter> = z.object({
  every: z.lazy(() => CircleAimWhereInputSchema).optional(),
  some: z.lazy(() => CircleAimWhereInputSchema).optional(),
  none: z.lazy(() => CircleAimWhereInputSchema).optional()
}).strict();

export default CircleAimListRelationFilterSchema;
