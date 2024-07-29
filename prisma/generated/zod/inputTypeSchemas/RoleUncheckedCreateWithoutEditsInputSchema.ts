import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesUncheckedCreateNestedManyWithoutRoleInputSchema } from './CirclesToRolesUncheckedCreateNestedManyWithoutRoleInputSchema';

export const RoleUncheckedCreateWithoutEditsInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutEditsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isActive: z.boolean(),
  circles: z.lazy(() => CirclesToRolesUncheckedCreateNestedManyWithoutRoleInputSchema).optional()
}).strict();

export default RoleUncheckedCreateWithoutEditsInputSchema;
