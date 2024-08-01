import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreateWithoutIncumbentInputSchema } from './CirclesToRolesCreateWithoutIncumbentInputSchema';
import { CirclesToRolesUncheckedCreateWithoutIncumbentInputSchema } from './CirclesToRolesUncheckedCreateWithoutIncumbentInputSchema';
import { CirclesToRolesCreateOrConnectWithoutIncumbentInputSchema } from './CirclesToRolesCreateOrConnectWithoutIncumbentInputSchema';
import { CirclesToRolesUpsertWithWhereUniqueWithoutIncumbentInputSchema } from './CirclesToRolesUpsertWithWhereUniqueWithoutIncumbentInputSchema';
import { CirclesToRolesCreateManyIncumbentInputEnvelopeSchema } from './CirclesToRolesCreateManyIncumbentInputEnvelopeSchema';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';
import { CirclesToRolesUpdateWithWhereUniqueWithoutIncumbentInputSchema } from './CirclesToRolesUpdateWithWhereUniqueWithoutIncumbentInputSchema';
import { CirclesToRolesUpdateManyWithWhereWithoutIncumbentInputSchema } from './CirclesToRolesUpdateManyWithWhereWithoutIncumbentInputSchema';
import { CirclesToRolesScalarWhereInputSchema } from './CirclesToRolesScalarWhereInputSchema';

export const CirclesToRolesUncheckedUpdateManyWithoutIncumbentNestedInputSchema: z.ZodType<Prisma.CirclesToRolesUncheckedUpdateManyWithoutIncumbentNestedInput> = z.object({
  create: z.union([ z.lazy(() => CirclesToRolesCreateWithoutIncumbentInputSchema),z.lazy(() => CirclesToRolesCreateWithoutIncumbentInputSchema).array(),z.lazy(() => CirclesToRolesUncheckedCreateWithoutIncumbentInputSchema),z.lazy(() => CirclesToRolesUncheckedCreateWithoutIncumbentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CirclesToRolesCreateOrConnectWithoutIncumbentInputSchema),z.lazy(() => CirclesToRolesCreateOrConnectWithoutIncumbentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CirclesToRolesUpsertWithWhereUniqueWithoutIncumbentInputSchema),z.lazy(() => CirclesToRolesUpsertWithWhereUniqueWithoutIncumbentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CirclesToRolesCreateManyIncumbentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CirclesToRolesWhereUniqueInputSchema),z.lazy(() => CirclesToRolesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CirclesToRolesWhereUniqueInputSchema),z.lazy(() => CirclesToRolesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CirclesToRolesWhereUniqueInputSchema),z.lazy(() => CirclesToRolesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CirclesToRolesWhereUniqueInputSchema),z.lazy(() => CirclesToRolesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CirclesToRolesUpdateWithWhereUniqueWithoutIncumbentInputSchema),z.lazy(() => CirclesToRolesUpdateWithWhereUniqueWithoutIncumbentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CirclesToRolesUpdateManyWithWhereWithoutIncumbentInputSchema),z.lazy(() => CirclesToRolesUpdateManyWithWhereWithoutIncumbentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CirclesToRolesScalarWhereInputSchema),z.lazy(() => CirclesToRolesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CirclesToRolesUncheckedUpdateManyWithoutIncumbentNestedInputSchema;
