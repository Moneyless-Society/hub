import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreateNestedManyWithoutRoleInputSchema } from './CirclesToRolesCreateNestedManyWithoutRoleInputSchema';

export const RoleCreateWithoutEditsInputSchema: z.ZodType<Prisma.RoleCreateWithoutEditsInput> = z.object({
  name: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isActive: z.boolean(),
  circles: z.lazy(() => CirclesToRolesCreateNestedManyWithoutRoleInputSchema).optional()
}).strict();

export default RoleCreateWithoutEditsInputSchema;
