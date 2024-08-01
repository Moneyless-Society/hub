import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';

export const RoleRelationFilterSchema: z.ZodType<Prisma.RoleRelationFilter> = z.object({
  is: z.lazy(() => RoleWhereInputSchema).optional(),
  isNot: z.lazy(() => RoleWhereInputSchema).optional()
}).strict();

export default RoleRelationFilterSchema;
