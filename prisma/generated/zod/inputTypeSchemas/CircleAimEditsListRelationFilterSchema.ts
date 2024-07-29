import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsWhereInputSchema } from './CircleAimEditsWhereInputSchema';

export const CircleAimEditsListRelationFilterSchema: z.ZodType<Prisma.CircleAimEditsListRelationFilter> = z.object({
  every: z.lazy(() => CircleAimEditsWhereInputSchema).optional(),
  some: z.lazy(() => CircleAimEditsWhereInputSchema).optional(),
  none: z.lazy(() => CircleAimEditsWhereInputSchema).optional()
}).strict();

export default CircleAimEditsListRelationFilterSchema;
