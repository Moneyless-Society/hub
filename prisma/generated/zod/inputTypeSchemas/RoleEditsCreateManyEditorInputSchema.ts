import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleEditsCreateManyEditorInputSchema: z.ZodType<Prisma.RoleEditsCreateManyEditorInput> = z.object({
  roleId: z.number().int(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default RoleEditsCreateManyEditorInputSchema;
