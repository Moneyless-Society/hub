import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTermWhereInputSchema } from './RoleTermWhereInputSchema';

export const RoleTermListRelationFilterSchema: z.ZodType<Prisma.RoleTermListRelationFilter> = z.object({
  every: z.lazy(() => RoleTermWhereInputSchema).optional(),
  some: z.lazy(() => RoleTermWhereInputSchema).optional(),
  none: z.lazy(() => RoleTermWhereInputSchema).optional()
}).strict();

export default RoleTermListRelationFilterSchema;
