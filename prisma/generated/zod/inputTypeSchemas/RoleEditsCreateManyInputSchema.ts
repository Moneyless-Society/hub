import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleEditsCreateManyInputSchema: z.ZodType<Prisma.RoleEditsCreateManyInput> = z.object({
  roleId: z.number().int(),
  editorId: z.string(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default RoleEditsCreateManyInputSchema;
