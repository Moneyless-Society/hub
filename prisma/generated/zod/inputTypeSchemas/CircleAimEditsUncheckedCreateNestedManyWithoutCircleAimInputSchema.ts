import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsCreateWithoutCircleAimInputSchema } from './CircleAimEditsCreateWithoutCircleAimInputSchema';
import { CircleAimEditsUncheckedCreateWithoutCircleAimInputSchema } from './CircleAimEditsUncheckedCreateWithoutCircleAimInputSchema';
import { CircleAimEditsCreateOrConnectWithoutCircleAimInputSchema } from './CircleAimEditsCreateOrConnectWithoutCircleAimInputSchema';
import { CircleAimEditsCreateManyCircleAimInputEnvelopeSchema } from './CircleAimEditsCreateManyCircleAimInputEnvelopeSchema';
import { CircleAimEditsWhereUniqueInputSchema } from './CircleAimEditsWhereUniqueInputSchema';

export const CircleAimEditsUncheckedCreateNestedManyWithoutCircleAimInputSchema: z.ZodType<Prisma.CircleAimEditsUncheckedCreateNestedManyWithoutCircleAimInput> = z.object({
  create: z.union([ z.lazy(() => CircleAimEditsCreateWithoutCircleAimInputSchema),z.lazy(() => CircleAimEditsCreateWithoutCircleAimInputSchema).array(),z.lazy(() => CircleAimEditsUncheckedCreateWithoutCircleAimInputSchema),z.lazy(() => CircleAimEditsUncheckedCreateWithoutCircleAimInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CircleAimEditsCreateOrConnectWithoutCircleAimInputSchema),z.lazy(() => CircleAimEditsCreateOrConnectWithoutCircleAimInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CircleAimEditsCreateManyCircleAimInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CircleAimEditsWhereUniqueInputSchema),z.lazy(() => CircleAimEditsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CircleAimEditsUncheckedCreateNestedManyWithoutCircleAimInputSchema;
