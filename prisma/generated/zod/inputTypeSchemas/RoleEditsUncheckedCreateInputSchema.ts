import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleEditsUncheckedCreateInputSchema: z.ZodType<Prisma.RoleEditsUncheckedCreateInput> = z.object({
  roleId: z.number().int(),
  editorId: z.string(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default RoleEditsUncheckedCreateInputSchema;
