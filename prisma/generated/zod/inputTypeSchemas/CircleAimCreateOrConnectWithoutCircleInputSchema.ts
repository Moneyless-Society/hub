import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimWhereUniqueInputSchema } from './CircleAimWhereUniqueInputSchema';
import { CircleAimCreateWithoutCircleInputSchema } from './CircleAimCreateWithoutCircleInputSchema';
import { CircleAimUncheckedCreateWithoutCircleInputSchema } from './CircleAimUncheckedCreateWithoutCircleInputSchema';

export const CircleAimCreateOrConnectWithoutCircleInputSchema: z.ZodType<Prisma.CircleAimCreateOrConnectWithoutCircleInput> = z.object({
  where: z.lazy(() => CircleAimWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CircleAimCreateWithoutCircleInputSchema),z.lazy(() => CircleAimUncheckedCreateWithoutCircleInputSchema) ]),
}).strict();

export default CircleAimCreateOrConnectWithoutCircleInputSchema;
