import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesWhereInputSchema } from './CirclesToRolesWhereInputSchema';

export const CirclesToRolesListRelationFilterSchema: z.ZodType<Prisma.CirclesToRolesListRelationFilter> = z.object({
  every: z.lazy(() => CirclesToRolesWhereInputSchema).optional(),
  some: z.lazy(() => CirclesToRolesWhereInputSchema).optional(),
  none: z.lazy(() => CirclesToRolesWhereInputSchema).optional()
}).strict();

export default CirclesToRolesListRelationFilterSchema;
