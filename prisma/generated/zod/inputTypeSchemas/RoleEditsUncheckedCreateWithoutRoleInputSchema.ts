import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleEditsUncheckedCreateWithoutRoleInputSchema: z.ZodType<Prisma.RoleEditsUncheckedCreateWithoutRoleInput> = z.object({
  editorId: z.string(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default RoleEditsUncheckedCreateWithoutRoleInputSchema;
