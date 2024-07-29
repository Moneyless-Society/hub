import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsRoleIdEditorIdCompoundUniqueInputSchema } from './RoleEditsRoleIdEditorIdCompoundUniqueInputSchema';
import { RoleEditsWhereInputSchema } from './RoleEditsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { RoleRelationFilterSchema } from './RoleRelationFilterSchema';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const RoleEditsWhereUniqueInputSchema: z.ZodType<Prisma.RoleEditsWhereUniqueInput> = z.object({
  roleId_editorId: z.lazy(() => RoleEditsRoleIdEditorIdCompoundUniqueInputSchema)
})
.and(z.object({
  roleId_editorId: z.lazy(() => RoleEditsRoleIdEditorIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => RoleEditsWhereInputSchema),z.lazy(() => RoleEditsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleEditsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleEditsWhereInputSchema),z.lazy(() => RoleEditsWhereInputSchema).array() ]).optional(),
  roleId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  editorId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  role: z.union([ z.lazy(() => RoleRelationFilterSchema),z.lazy(() => RoleWhereInputSchema) ]).optional(),
  editor: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict());

export default RoleEditsWhereUniqueInputSchema;
