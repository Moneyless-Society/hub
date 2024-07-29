import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsWhereUniqueInputSchema } from './CircleAimEditsWhereUniqueInputSchema';
import { CircleAimEditsUpdateWithoutCircleAimInputSchema } from './CircleAimEditsUpdateWithoutCircleAimInputSchema';
import { CircleAimEditsUncheckedUpdateWithoutCircleAimInputSchema } from './CircleAimEditsUncheckedUpdateWithoutCircleAimInputSchema';
import { CircleAimEditsCreateWithoutCircleAimInputSchema } from './CircleAimEditsCreateWithoutCircleAimInputSchema';
import { CircleAimEditsUncheckedCreateWithoutCircleAimInputSchema } from './CircleAimEditsUncheckedCreateWithoutCircleAimInputSchema';

export const CircleAimEditsUpsertWithWhereUniqueWithoutCircleAimInputSchema: z.ZodType<Prisma.CircleAimEditsUpsertWithWhereUniqueWithoutCircleAimInput> = z.object({
  where: z.lazy(() => CircleAimEditsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CircleAimEditsUpdateWithoutCircleAimInputSchema),z.lazy(() => CircleAimEditsUncheckedUpdateWithoutCircleAimInputSchema) ]),
  create: z.union([ z.lazy(() => CircleAimEditsCreateWithoutCircleAimInputSchema),z.lazy(() => CircleAimEditsUncheckedCreateWithoutCircleAimInputSchema) ]),
}).strict();

export default CircleAimEditsUpsertWithWhereUniqueWithoutCircleAimInputSchema;
