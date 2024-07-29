import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTermCreateWithoutCircleRoleInputSchema } from './RoleTermCreateWithoutCircleRoleInputSchema';
import { RoleTermUncheckedCreateWithoutCircleRoleInputSchema } from './RoleTermUncheckedCreateWithoutCircleRoleInputSchema';
import { RoleTermCreateOrConnectWithoutCircleRoleInputSchema } from './RoleTermCreateOrConnectWithoutCircleRoleInputSchema';
import { RoleTermUpsertWithWhereUniqueWithoutCircleRoleInputSchema } from './RoleTermUpsertWithWhereUniqueWithoutCircleRoleInputSchema';
import { RoleTermCreateManyCircleRoleInputEnvelopeSchema } from './RoleTermCreateManyCircleRoleInputEnvelopeSchema';
import { RoleTermWhereUniqueInputSchema } from './RoleTermWhereUniqueInputSchema';
import { RoleTermUpdateWithWhereUniqueWithoutCircleRoleInputSchema } from './RoleTermUpdateWithWhereUniqueWithoutCircleRoleInputSchema';
import { RoleTermUpdateManyWithWhereWithoutCircleRoleInputSchema } from './RoleTermUpdateManyWithWhereWithoutCircleRoleInputSchema';
import { RoleTermScalarWhereInputSchema } from './RoleTermScalarWhereInputSchema';

export const RoleTermUncheckedUpdateManyWithoutCircleRoleNestedInputSchema: z.ZodType<Prisma.RoleTermUncheckedUpdateManyWithoutCircleRoleNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleTermCreateWithoutCircleRoleInputSchema),z.lazy(() => RoleTermCreateWithoutCircleRoleInputSchema).array(),z.lazy(() => RoleTermUncheckedCreateWithoutCircleRoleInputSchema),z.lazy(() => RoleTermUncheckedCreateWithoutCircleRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleTermCreateOrConnectWithoutCircleRoleInputSchema),z.lazy(() => RoleTermCreateOrConnectWithoutCircleRoleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleTermUpsertWithWhereUniqueWithoutCircleRoleInputSchema),z.lazy(() => RoleTermUpsertWithWhereUniqueWithoutCircleRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleTermCreateManyCircleRoleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleTermWhereUniqueInputSchema),z.lazy(() => RoleTermWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleTermWhereUniqueInputSchema),z.lazy(() => RoleTermWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleTermWhereUniqueInputSchema),z.lazy(() => RoleTermWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleTermWhereUniqueInputSchema),z.lazy(() => RoleTermWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleTermUpdateWithWhereUniqueWithoutCircleRoleInputSchema),z.lazy(() => RoleTermUpdateWithWhereUniqueWithoutCircleRoleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleTermUpdateManyWithWhereWithoutCircleRoleInputSchema),z.lazy(() => RoleTermUpdateManyWithWhereWithoutCircleRoleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleTermScalarWhereInputSchema),z.lazy(() => RoleTermScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RoleTermUncheckedUpdateManyWithoutCircleRoleNestedInputSchema;
