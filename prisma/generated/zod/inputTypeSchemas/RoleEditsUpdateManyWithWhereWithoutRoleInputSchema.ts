import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsScalarWhereInputSchema } from './RoleEditsScalarWhereInputSchema';
import { RoleEditsUpdateManyMutationInputSchema } from './RoleEditsUpdateManyMutationInputSchema';
import { RoleEditsUncheckedUpdateManyWithoutRoleInputSchema } from './RoleEditsUncheckedUpdateManyWithoutRoleInputSchema';

export const RoleEditsUpdateManyWithWhereWithoutRoleInputSchema: z.ZodType<Prisma.RoleEditsUpdateManyWithWhereWithoutRoleInput> = z.object({
  where: z.lazy(() => RoleEditsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoleEditsUpdateManyMutationInputSchema),z.lazy(() => RoleEditsUncheckedUpdateManyWithoutRoleInputSchema) ]),
}).strict();

export default RoleEditsUpdateManyWithWhereWithoutRoleInputSchema;
