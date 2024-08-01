import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsCreateWithoutCircleAimInputSchema } from './CircleAimEditsCreateWithoutCircleAimInputSchema';
import { CircleAimEditsUncheckedCreateWithoutCircleAimInputSchema } from './CircleAimEditsUncheckedCreateWithoutCircleAimInputSchema';
import { CircleAimEditsCreateOrConnectWithoutCircleAimInputSchema } from './CircleAimEditsCreateOrConnectWithoutCircleAimInputSchema';
import { CircleAimEditsUpsertWithWhereUniqueWithoutCircleAimInputSchema } from './CircleAimEditsUpsertWithWhereUniqueWithoutCircleAimInputSchema';
import { CircleAimEditsCreateManyCircleAimInputEnvelopeSchema } from './CircleAimEditsCreateManyCircleAimInputEnvelopeSchema';
import { CircleAimEditsWhereUniqueInputSchema } from './CircleAimEditsWhereUniqueInputSchema';
import { CircleAimEditsUpdateWithWhereUniqueWithoutCircleAimInputSchema } from './CircleAimEditsUpdateWithWhereUniqueWithoutCircleAimInputSchema';
import { CircleAimEditsUpdateManyWithWhereWithoutCircleAimInputSchema } from './CircleAimEditsUpdateManyWithWhereWithoutCircleAimInputSchema';
import { CircleAimEditsScalarWhereInputSchema } from './CircleAimEditsScalarWhereInputSchema';

export const CircleAimEditsUncheckedUpdateManyWithoutCircleAimNestedInputSchema: z.ZodType<Prisma.CircleAimEditsUncheckedUpdateManyWithoutCircleAimNestedInput> = z.object({
  create: z.union([ z.lazy(() => CircleAimEditsCreateWithoutCircleAimInputSchema),z.lazy(() => CircleAimEditsCreateWithoutCircleAimInputSchema).array(),z.lazy(() => CircleAimEditsUncheckedCreateWithoutCircleAimInputSchema),z.lazy(() => CircleAimEditsUncheckedCreateWithoutCircleAimInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CircleAimEditsCreateOrConnectWithoutCircleAimInputSchema),z.lazy(() => CircleAimEditsCreateOrConnectWithoutCircleAimInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CircleAimEditsUpsertWithWhereUniqueWithoutCircleAimInputSchema),z.lazy(() => CircleAimEditsUpsertWithWhereUniqueWithoutCircleAimInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CircleAimEditsCreateManyCircleAimInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CircleAimEditsWhereUniqueInputSchema),z.lazy(() => CircleAimEditsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CircleAimEditsWhereUniqueInputSchema),z.lazy(() => CircleAimEditsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CircleAimEditsWhereUniqueInputSchema),z.lazy(() => CircleAimEditsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CircleAimEditsWhereUniqueInputSchema),z.lazy(() => CircleAimEditsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CircleAimEditsUpdateWithWhereUniqueWithoutCircleAimInputSchema),z.lazy(() => CircleAimEditsUpdateWithWhereUniqueWithoutCircleAimInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CircleAimEditsUpdateManyWithWhereWithoutCircleAimInputSchema),z.lazy(() => CircleAimEditsUpdateManyWithWhereWithoutCircleAimInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CircleAimEditsScalarWhereInputSchema),z.lazy(() => CircleAimEditsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CircleAimEditsUncheckedUpdateManyWithoutCircleAimNestedInputSchema;
