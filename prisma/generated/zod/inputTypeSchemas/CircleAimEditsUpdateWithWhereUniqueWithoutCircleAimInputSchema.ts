import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsWhereUniqueInputSchema } from './CircleAimEditsWhereUniqueInputSchema';
import { CircleAimEditsUpdateWithoutCircleAimInputSchema } from './CircleAimEditsUpdateWithoutCircleAimInputSchema';
import { CircleAimEditsUncheckedUpdateWithoutCircleAimInputSchema } from './CircleAimEditsUncheckedUpdateWithoutCircleAimInputSchema';

export const CircleAimEditsUpdateWithWhereUniqueWithoutCircleAimInputSchema: z.ZodType<Prisma.CircleAimEditsUpdateWithWhereUniqueWithoutCircleAimInput> = z.object({
  where: z.lazy(() => CircleAimEditsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CircleAimEditsUpdateWithoutCircleAimInputSchema),z.lazy(() => CircleAimEditsUncheckedUpdateWithoutCircleAimInputSchema) ]),
}).strict();

export default CircleAimEditsUpdateWithWhereUniqueWithoutCircleAimInputSchema;
