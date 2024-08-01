import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimCreateWithoutCircleInputSchema } from './CircleAimCreateWithoutCircleInputSchema';
import { CircleAimUncheckedCreateWithoutCircleInputSchema } from './CircleAimUncheckedCreateWithoutCircleInputSchema';
import { CircleAimCreateOrConnectWithoutCircleInputSchema } from './CircleAimCreateOrConnectWithoutCircleInputSchema';
import { CircleAimUpsertWithWhereUniqueWithoutCircleInputSchema } from './CircleAimUpsertWithWhereUniqueWithoutCircleInputSchema';
import { CircleAimCreateManyCircleInputEnvelopeSchema } from './CircleAimCreateManyCircleInputEnvelopeSchema';
import { CircleAimWhereUniqueInputSchema } from './CircleAimWhereUniqueInputSchema';
import { CircleAimUpdateWithWhereUniqueWithoutCircleInputSchema } from './CircleAimUpdateWithWhereUniqueWithoutCircleInputSchema';
import { CircleAimUpdateManyWithWhereWithoutCircleInputSchema } from './CircleAimUpdateManyWithWhereWithoutCircleInputSchema';
import { CircleAimScalarWhereInputSchema } from './CircleAimScalarWhereInputSchema';

export const CircleAimUncheckedUpdateManyWithoutCircleNestedInputSchema: z.ZodType<Prisma.CircleAimUncheckedUpdateManyWithoutCircleNestedInput> = z.object({
  create: z.union([ z.lazy(() => CircleAimCreateWithoutCircleInputSchema),z.lazy(() => CircleAimCreateWithoutCircleInputSchema).array(),z.lazy(() => CircleAimUncheckedCreateWithoutCircleInputSchema),z.lazy(() => CircleAimUncheckedCreateWithoutCircleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CircleAimCreateOrConnectWithoutCircleInputSchema),z.lazy(() => CircleAimCreateOrConnectWithoutCircleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CircleAimUpsertWithWhereUniqueWithoutCircleInputSchema),z.lazy(() => CircleAimUpsertWithWhereUniqueWithoutCircleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CircleAimCreateManyCircleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CircleAimWhereUniqueInputSchema),z.lazy(() => CircleAimWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CircleAimWhereUniqueInputSchema),z.lazy(() => CircleAimWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CircleAimWhereUniqueInputSchema),z.lazy(() => CircleAimWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CircleAimWhereUniqueInputSchema),z.lazy(() => CircleAimWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CircleAimUpdateWithWhereUniqueWithoutCircleInputSchema),z.lazy(() => CircleAimUpdateWithWhereUniqueWithoutCircleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CircleAimUpdateManyWithWhereWithoutCircleInputSchema),z.lazy(() => CircleAimUpdateManyWithWhereWithoutCircleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CircleAimScalarWhereInputSchema),z.lazy(() => CircleAimScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CircleAimUncheckedUpdateManyWithoutCircleNestedInputSchema;
