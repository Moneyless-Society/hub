import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleWhereInputSchema } from './CircleWhereInputSchema';

export const CircleRelationFilterSchema: z.ZodType<Prisma.CircleRelationFilter> = z.object({
  is: z.lazy(() => CircleWhereInputSchema).optional(),
  isNot: z.lazy(() => CircleWhereInputSchema).optional()
}).strict();

export default CircleRelationFilterSchema;
