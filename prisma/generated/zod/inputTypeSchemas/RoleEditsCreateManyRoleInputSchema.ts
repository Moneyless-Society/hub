import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleEditsCreateManyRoleInputSchema: z.ZodType<Prisma.RoleEditsCreateManyRoleInput> = z.object({
  editorId: z.string(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default RoleEditsCreateManyRoleInputSchema;
