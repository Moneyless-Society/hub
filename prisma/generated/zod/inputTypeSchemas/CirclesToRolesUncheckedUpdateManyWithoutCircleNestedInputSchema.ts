import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreateWithoutCircleInputSchema } from './CirclesToRolesCreateWithoutCircleInputSchema';
import { CirclesToRolesUncheckedCreateWithoutCircleInputSchema } from './CirclesToRolesUncheckedCreateWithoutCircleInputSchema';
import { CirclesToRolesCreateOrConnectWithoutCircleInputSchema } from './CirclesToRolesCreateOrConnectWithoutCircleInputSchema';
import { CirclesToRolesUpsertWithWhereUniqueWithoutCircleInputSchema } from './CirclesToRolesUpsertWithWhereUniqueWithoutCircleInputSchema';
import { CirclesToRolesCreateManyCircleInputEnvelopeSchema } from './CirclesToRolesCreateManyCircleInputEnvelopeSchema';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';
import { CirclesToRolesUpdateWithWhereUniqueWithoutCircleInputSchema } from './CirclesToRolesUpdateWithWhereUniqueWithoutCircleInputSchema';
import { CirclesToRolesUpdateManyWithWhereWithoutCircleInputSchema } from './CirclesToRolesUpdateManyWithWhereWithoutCircleInputSchema';
import { CirclesToRolesScalarWhereInputSchema } from './CirclesToRolesScalarWhereInputSchema';

export const CirclesToRolesUncheckedUpdateManyWithoutCircleNestedInputSchema: z.ZodType<Prisma.CirclesToRolesUncheckedUpdateManyWithoutCircleNestedInput> = z.object({
  create: z.union([ z.lazy(() => CirclesToRolesCreateWithoutCircleInputSchema),z.lazy(() => CirclesToRolesCreateWithoutCircleInputSchema).array(),z.lazy(() => CirclesToRolesUncheckedCreateWithoutCircleInputSchema),z.lazy(() => CirclesToRolesUncheckedCreateWithoutCircleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CirclesToRolesCreateOrConnectWithoutCircleInputSchema),z.lazy(() => CirclesToRolesCreateOrConnectWithoutCircleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CirclesToRolesUpsertWithWhereUniqueWithoutCircleInputSchema),z.lazy(() => CirclesToRolesUpsertWithWhereUniqueWithoutCircleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CirclesToRolesCreateManyCircleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CirclesToRolesWhereUniqueInputSchema),z.lazy(() => CirclesToRolesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CirclesToRolesWhereUniqueInputSchema),z.lazy(() => CirclesToRolesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CirclesToRolesWhereUniqueInputSchema),z.lazy(() => CirclesToRolesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CirclesToRolesWhereUniqueInputSchema),z.lazy(() => CirclesToRolesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CirclesToRolesUpdateWithWhereUniqueWithoutCircleInputSchema),z.lazy(() => CirclesToRolesUpdateWithWhereUniqueWithoutCircleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CirclesToRolesUpdateManyWithWhereWithoutCircleInputSchema),z.lazy(() => CirclesToRolesUpdateManyWithWhereWithoutCircleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CirclesToRolesScalarWhereInputSchema),z.lazy(() => CirclesToRolesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CirclesToRolesUncheckedUpdateManyWithoutCircleNestedInputSchema;
