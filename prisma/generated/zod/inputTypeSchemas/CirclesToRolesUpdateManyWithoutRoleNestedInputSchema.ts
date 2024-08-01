import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreateWithoutRoleInputSchema } from './CirclesToRolesCreateWithoutRoleInputSchema';
import { CirclesToRolesUncheckedCreateWithoutRoleInputSchema } from './CirclesToRolesUncheckedCreateWithoutRoleInputSchema';
import { CirclesToRolesCreateOrConnectWithoutRoleInputSchema } from './CirclesToRolesCreateOrConnectWithoutRoleInputSchema';
import { CirclesToRolesUpsertWithWhereUniqueWithoutRoleInputSchema } from './CirclesToRolesUpsertWithWhereUniqueWithoutRoleInputSchema';
import { CirclesToRolesCreateManyRoleInputEnvelopeSchema } from './CirclesToRolesCreateManyRoleInputEnvelopeSchema';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';
import { CirclesToRolesUpdateWithWhereUniqueWithoutRoleInputSchema } from './CirclesToRolesUpdateWithWhereUniqueWithoutRoleInputSchema';
import { CirclesToRolesUpdateManyWithWhereWithoutRoleInputSchema } from './CirclesToRolesUpdateManyWithWhereWithoutRoleInputSchema';
import { CirclesToRolesScalarWhereInputSchema } from './CirclesToRolesScalarWhereInputSchema';

export const CirclesToRolesUpdateManyWithoutRoleNestedInputSchema: z.ZodType<Prisma.CirclesToRolesUpdateManyWithoutRoleNestedInput> = z.object({
  create: z.union([ z.lazy(() => CirclesToRolesCreateWithoutRoleInputSchema),z.lazy(() => CirclesToRolesCreateWithoutRoleInputSchema).array(),z.lazy(() => CirclesToRolesUncheckedCreateWithoutRoleInputSchema),z.lazy(() => CirclesToRolesUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CirclesToRolesCreateOrConnectWithoutRoleInputSchema),z.lazy(() => CirclesToRolesCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CirclesToRolesUpsertWithWhereUniqueWithoutRoleInputSchema),z.lazy(() => CirclesToRolesUpsertWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CirclesToRolesCreateManyRoleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CirclesToRolesWhereUniqueInputSchema),z.lazy(() => CirclesToRolesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CirclesToRolesWhereUniqueInputSchema),z.lazy(() => CirclesToRolesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CirclesToRolesWhereUniqueInputSchema),z.lazy(() => CirclesToRolesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CirclesToRolesWhereUniqueInputSchema),z.lazy(() => CirclesToRolesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CirclesToRolesUpdateWithWhereUniqueWithoutRoleInputSchema),z.lazy(() => CirclesToRolesUpdateWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CirclesToRolesUpdateManyWithWhereWithoutRoleInputSchema),z.lazy(() => CirclesToRolesUpdateManyWithWhereWithoutRoleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CirclesToRolesScalarWhereInputSchema),z.lazy(() => CirclesToRolesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CirclesToRolesUpdateManyWithoutRoleNestedInputSchema;
