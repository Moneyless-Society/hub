import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsWhereUniqueInputSchema } from './RoleEditsWhereUniqueInputSchema';
import { RoleEditsUpdateWithoutRoleInputSchema } from './RoleEditsUpdateWithoutRoleInputSchema';
import { RoleEditsUncheckedUpdateWithoutRoleInputSchema } from './RoleEditsUncheckedUpdateWithoutRoleInputSchema';

export const RoleEditsUpdateWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.RoleEditsUpdateWithWhereUniqueWithoutRoleInput> = z.object({
  where: z.lazy(() => RoleEditsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoleEditsUpdateWithoutRoleInputSchema),z.lazy(() => RoleEditsUncheckedUpdateWithoutRoleInputSchema) ]),
}).strict();

export default RoleEditsUpdateWithWhereUniqueWithoutRoleInputSchema;
