import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsUncheckedCreateNestedManyWithoutRoleInputSchema } from './RoleEditsUncheckedCreateNestedManyWithoutRoleInputSchema';

export const RoleUncheckedCreateWithoutCirclesInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutCirclesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isActive: z.boolean(),
  edits: z.lazy(() => RoleEditsUncheckedCreateNestedManyWithoutRoleInputSchema).optional()
}).strict();

export default RoleUncheckedCreateWithoutCirclesInputSchema;
