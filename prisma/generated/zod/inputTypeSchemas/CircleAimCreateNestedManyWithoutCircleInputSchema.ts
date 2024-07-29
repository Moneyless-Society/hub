import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimCreateWithoutCircleInputSchema } from './CircleAimCreateWithoutCircleInputSchema';
import { CircleAimUncheckedCreateWithoutCircleInputSchema } from './CircleAimUncheckedCreateWithoutCircleInputSchema';
import { CircleAimCreateOrConnectWithoutCircleInputSchema } from './CircleAimCreateOrConnectWithoutCircleInputSchema';
import { CircleAimCreateManyCircleInputEnvelopeSchema } from './CircleAimCreateManyCircleInputEnvelopeSchema';
import { CircleAimWhereUniqueInputSchema } from './CircleAimWhereUniqueInputSchema';

export const CircleAimCreateNestedManyWithoutCircleInputSchema: z.ZodType<Prisma.CircleAimCreateNestedManyWithoutCircleInput> = z.object({
  create: z.union([ z.lazy(() => CircleAimCreateWithoutCircleInputSchema),z.lazy(() => CircleAimCreateWithoutCircleInputSchema).array(),z.lazy(() => CircleAimUncheckedCreateWithoutCircleInputSchema),z.lazy(() => CircleAimUncheckedCreateWithoutCircleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CircleAimCreateOrConnectWithoutCircleInputSchema),z.lazy(() => CircleAimCreateOrConnectWithoutCircleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CircleAimCreateManyCircleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CircleAimWhereUniqueInputSchema),z.lazy(() => CircleAimWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CircleAimCreateNestedManyWithoutCircleInputSchema;
