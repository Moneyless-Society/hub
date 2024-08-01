import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimWhereUniqueInputSchema } from './CircleAimWhereUniqueInputSchema';
import { CircleAimUpdateWithoutCircleInputSchema } from './CircleAimUpdateWithoutCircleInputSchema';
import { CircleAimUncheckedUpdateWithoutCircleInputSchema } from './CircleAimUncheckedUpdateWithoutCircleInputSchema';
import { CircleAimCreateWithoutCircleInputSchema } from './CircleAimCreateWithoutCircleInputSchema';
import { CircleAimUncheckedCreateWithoutCircleInputSchema } from './CircleAimUncheckedCreateWithoutCircleInputSchema';

export const CircleAimUpsertWithWhereUniqueWithoutCircleInputSchema: z.ZodType<Prisma.CircleAimUpsertWithWhereUniqueWithoutCircleInput> = z.object({
  where: z.lazy(() => CircleAimWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CircleAimUpdateWithoutCircleInputSchema),z.lazy(() => CircleAimUncheckedUpdateWithoutCircleInputSchema) ]),
  create: z.union([ z.lazy(() => CircleAimCreateWithoutCircleInputSchema),z.lazy(() => CircleAimUncheckedCreateWithoutCircleInputSchema) ]),
}).strict();

export default CircleAimUpsertWithWhereUniqueWithoutCircleInputSchema;
