import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleEditsUncheckedCreateWithoutEditorInputSchema: z.ZodType<Prisma.RoleEditsUncheckedCreateWithoutEditorInput> = z.object({
  roleId: z.number().int(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default RoleEditsUncheckedCreateWithoutEditorInputSchema;
