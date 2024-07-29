import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateNestedOneWithoutEditsInputSchema } from './RoleCreateNestedOneWithoutEditsInputSchema';
import { PersonCreateNestedOneWithoutRoleEditsInputSchema } from './PersonCreateNestedOneWithoutRoleEditsInputSchema';

export const RoleEditsCreateInputSchema: z.ZodType<Prisma.RoleEditsCreateInput> = z.object({
  updatedAt: z.coerce.date().optional(),
  role: z.lazy(() => RoleCreateNestedOneWithoutEditsInputSchema),
  editor: z.lazy(() => PersonCreateNestedOneWithoutRoleEditsInputSchema)
}).strict();

export default RoleEditsCreateInputSchema;
