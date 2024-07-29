import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsCreateWithoutRoleInputSchema } from './RoleEditsCreateWithoutRoleInputSchema';
import { RoleEditsUncheckedCreateWithoutRoleInputSchema } from './RoleEditsUncheckedCreateWithoutRoleInputSchema';
import { RoleEditsCreateOrConnectWithoutRoleInputSchema } from './RoleEditsCreateOrConnectWithoutRoleInputSchema';
import { RoleEditsUpsertWithWhereUniqueWithoutRoleInputSchema } from './RoleEditsUpsertWithWhereUniqueWithoutRoleInputSchema';
import { RoleEditsCreateManyRoleInputEnvelopeSchema } from './RoleEditsCreateManyRoleInputEnvelopeSchema';
import { RoleEditsWhereUniqueInputSchema } from './RoleEditsWhereUniqueInputSchema';
import { RoleEditsUpdateWithWhereUniqueWithoutRoleInputSchema } from './RoleEditsUpdateWithWhereUniqueWithoutRoleInputSchema';
import { RoleEditsUpdateManyWithWhereWithoutRoleInputSchema } from './RoleEditsUpdateManyWithWhereWithoutRoleInputSchema';
import { RoleEditsScalarWhereInputSchema } from './RoleEditsScalarWhereInputSchema';

export const RoleEditsUpdateManyWithoutRoleNestedInputSchema: z.ZodType<Prisma.RoleEditsUpdateManyWithoutRoleNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleEditsCreateWithoutRoleInputSchema),z.lazy(() => RoleEditsCreateWithoutRoleInputSchema).array(),z.lazy(() => RoleEditsUncheckedCreateWithoutRoleInputSchema),z.lazy(() => RoleEditsUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleEditsCreateOrConnectWithoutRoleInputSchema),z.lazy(() => RoleEditsCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleEditsUpsertWithWhereUniqueWithoutRoleInputSchema),z.lazy(() => RoleEditsUpsertWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleEditsCreateManyRoleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleEditsWhereUniqueInputSchema),z.lazy(() => RoleEditsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleEditsWhereUniqueInputSchema),z.lazy(() => RoleEditsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleEditsWhereUniqueInputSchema),z.lazy(() => RoleEditsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleEditsWhereUniqueInputSchema),z.lazy(() => RoleEditsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleEditsUpdateWithWhereUniqueWithoutRoleInputSchema),z.lazy(() => RoleEditsUpdateWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleEditsUpdateManyWithWhereWithoutRoleInputSchema),z.lazy(() => RoleEditsUpdateManyWithWhereWithoutRoleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleEditsScalarWhereInputSchema),z.lazy(() => RoleEditsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RoleEditsUpdateManyWithoutRoleNestedInputSchema;
