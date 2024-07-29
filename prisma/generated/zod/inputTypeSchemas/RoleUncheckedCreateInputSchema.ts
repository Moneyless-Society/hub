import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsUncheckedCreateNestedManyWithoutRoleInputSchema } from './RoleEditsUncheckedCreateNestedManyWithoutRoleInputSchema';
import { CirclesToRolesUncheckedCreateNestedManyWithoutRoleInputSchema } from './CirclesToRolesUncheckedCreateNestedManyWithoutRoleInputSchema';

export const RoleUncheckedCreateInputSchema: z.ZodType<Prisma.RoleUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isActive: z.boolean(),
  edits: z.lazy(() => RoleEditsUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
  circles: z.lazy(() => CirclesToRolesUncheckedCreateNestedManyWithoutRoleInputSchema).optional()
}).strict();

export default RoleUncheckedCreateInputSchema;
