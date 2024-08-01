import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsWhereInputSchema } from './RoleEditsWhereInputSchema';

export const RoleEditsListRelationFilterSchema: z.ZodType<Prisma.RoleEditsListRelationFilter> = z.object({
  every: z.lazy(() => RoleEditsWhereInputSchema).optional(),
  some: z.lazy(() => RoleEditsWhereInputSchema).optional(),
  none: z.lazy(() => RoleEditsWhereInputSchema).optional()
}).strict();

export default RoleEditsListRelationFilterSchema;
