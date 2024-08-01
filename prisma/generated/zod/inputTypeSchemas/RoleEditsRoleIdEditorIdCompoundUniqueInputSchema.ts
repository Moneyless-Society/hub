import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleEditsRoleIdEditorIdCompoundUniqueInputSchema: z.ZodType<Prisma.RoleEditsRoleIdEditorIdCompoundUniqueInput> = z.object({
  roleId: z.number(),
  editorId: z.string()
}).strict();

export default RoleEditsRoleIdEditorIdCompoundUniqueInputSchema;
