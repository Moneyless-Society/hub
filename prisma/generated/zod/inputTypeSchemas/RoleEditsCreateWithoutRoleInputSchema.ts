import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateNestedOneWithoutRoleEditsInputSchema } from './PersonCreateNestedOneWithoutRoleEditsInputSchema';

export const RoleEditsCreateWithoutRoleInputSchema: z.ZodType<Prisma.RoleEditsCreateWithoutRoleInput> = z.object({
  updatedAt: z.coerce.date().optional(),
  editor: z.lazy(() => PersonCreateNestedOneWithoutRoleEditsInputSchema)
}).strict();

export default RoleEditsCreateWithoutRoleInputSchema;
