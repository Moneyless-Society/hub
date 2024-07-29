import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsCreateNestedManyWithoutRoleInputSchema } from './RoleEditsCreateNestedManyWithoutRoleInputSchema';

export const RoleCreateWithoutCirclesInputSchema: z.ZodType<Prisma.RoleCreateWithoutCirclesInput> = z.object({
  name: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isActive: z.boolean(),
  edits: z.lazy(() => RoleEditsCreateNestedManyWithoutRoleInputSchema).optional()
}).strict();

export default RoleCreateWithoutCirclesInputSchema;
