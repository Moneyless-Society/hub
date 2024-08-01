import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimWhereUniqueInputSchema } from './CircleAimWhereUniqueInputSchema';
import { CircleAimUpdateWithoutCircleInputSchema } from './CircleAimUpdateWithoutCircleInputSchema';
import { CircleAimUncheckedUpdateWithoutCircleInputSchema } from './CircleAimUncheckedUpdateWithoutCircleInputSchema';

export const CircleAimUpdateWithWhereUniqueWithoutCircleInputSchema: z.ZodType<Prisma.CircleAimUpdateWithWhereUniqueWithoutCircleInput> = z.object({
  where: z.lazy(() => CircleAimWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CircleAimUpdateWithoutCircleInputSchema),z.lazy(() => CircleAimUncheckedUpdateWithoutCircleInputSchema) ]),
}).strict();

export default CircleAimUpdateWithWhereUniqueWithoutCircleInputSchema;
