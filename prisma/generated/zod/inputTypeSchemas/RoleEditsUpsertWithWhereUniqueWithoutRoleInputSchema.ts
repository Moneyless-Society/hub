import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsWhereUniqueInputSchema } from './RoleEditsWhereUniqueInputSchema';
import { RoleEditsUpdateWithoutRoleInputSchema } from './RoleEditsUpdateWithoutRoleInputSchema';
import { RoleEditsUncheckedUpdateWithoutRoleInputSchema } from './RoleEditsUncheckedUpdateWithoutRoleInputSchema';
import { RoleEditsCreateWithoutRoleInputSchema } from './RoleEditsCreateWithoutRoleInputSchema';
import { RoleEditsUncheckedCreateWithoutRoleInputSchema } from './RoleEditsUncheckedCreateWithoutRoleInputSchema';

export const RoleEditsUpsertWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.RoleEditsUpsertWithWhereUniqueWithoutRoleInput> = z.object({
  where: z.lazy(() => RoleEditsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoleEditsUpdateWithoutRoleInputSchema),z.lazy(() => RoleEditsUncheckedUpdateWithoutRoleInputSchema) ]),
  create: z.union([ z.lazy(() => RoleEditsCreateWithoutRoleInputSchema),z.lazy(() => RoleEditsUncheckedCreateWithoutRoleInputSchema) ]),
}).strict();

export default RoleEditsUpsertWithWhereUniqueWithoutRoleInputSchema;
