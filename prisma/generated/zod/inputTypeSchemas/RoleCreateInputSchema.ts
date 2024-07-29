import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsCreateNestedManyWithoutRoleInputSchema } from './RoleEditsCreateNestedManyWithoutRoleInputSchema';
import { CirclesToRolesCreateNestedManyWithoutRoleInputSchema } from './CirclesToRolesCreateNestedManyWithoutRoleInputSchema';

export const RoleCreateInputSchema: z.ZodType<Prisma.RoleCreateInput> = z.object({
  name: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isActive: z.boolean(),
  edits: z.lazy(() => RoleEditsCreateNestedManyWithoutRoleInputSchema).optional(),
  circles: z.lazy(() => CirclesToRolesCreateNestedManyWithoutRoleInputSchema).optional()
}).strict();

export default RoleCreateInputSchema;
