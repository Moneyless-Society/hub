import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsWhereUniqueInputSchema } from './RoleEditsWhereUniqueInputSchema';
import { RoleEditsCreateWithoutRoleInputSchema } from './RoleEditsCreateWithoutRoleInputSchema';
import { RoleEditsUncheckedCreateWithoutRoleInputSchema } from './RoleEditsUncheckedCreateWithoutRoleInputSchema';

export const RoleEditsCreateOrConnectWithoutRoleInputSchema: z.ZodType<Prisma.RoleEditsCreateOrConnectWithoutRoleInput> = z.object({
  where: z.lazy(() => RoleEditsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleEditsCreateWithoutRoleInputSchema),z.lazy(() => RoleEditsUncheckedCreateWithoutRoleInputSchema) ]),
}).strict();

export default RoleEditsCreateOrConnectWithoutRoleInputSchema;
