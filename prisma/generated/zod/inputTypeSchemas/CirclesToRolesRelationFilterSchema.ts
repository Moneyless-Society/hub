import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesWhereInputSchema } from './CirclesToRolesWhereInputSchema';

export const CirclesToRolesRelationFilterSchema: z.ZodType<Prisma.CirclesToRolesRelationFilter> = z.object({
  is: z.lazy(() => CirclesToRolesWhereInputSchema).optional(),
  isNot: z.lazy(() => CirclesToRolesWhereInputSchema).optional()
}).strict();

export default CirclesToRolesRelationFilterSchema;
