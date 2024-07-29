import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsCreateWithoutRoleInputSchema } from './RoleEditsCreateWithoutRoleInputSchema';
import { RoleEditsUncheckedCreateWithoutRoleInputSchema } from './RoleEditsUncheckedCreateWithoutRoleInputSchema';
import { RoleEditsCreateOrConnectWithoutRoleInputSchema } from './RoleEditsCreateOrConnectWithoutRoleInputSchema';
import { RoleEditsCreateManyRoleInputEnvelopeSchema } from './RoleEditsCreateManyRoleInputEnvelopeSchema';
import { RoleEditsWhereUniqueInputSchema } from './RoleEditsWhereUniqueInputSchema';

export const RoleEditsUncheckedCreateNestedManyWithoutRoleInputSchema: z.ZodType<Prisma.RoleEditsUncheckedCreateNestedManyWithoutRoleInput> = z.object({
  create: z.union([ z.lazy(() => RoleEditsCreateWithoutRoleInputSchema),z.lazy(() => RoleEditsCreateWithoutRoleInputSchema).array(),z.lazy(() => RoleEditsUncheckedCreateWithoutRoleInputSchema),z.lazy(() => RoleEditsUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleEditsCreateOrConnectWithoutRoleInputSchema),z.lazy(() => RoleEditsCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleEditsCreateManyRoleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleEditsWhereUniqueInputSchema),z.lazy(() => RoleEditsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RoleEditsUncheckedCreateNestedManyWithoutRoleInputSchema;
