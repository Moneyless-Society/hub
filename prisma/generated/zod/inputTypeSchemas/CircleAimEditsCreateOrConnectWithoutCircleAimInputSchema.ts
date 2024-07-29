import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsWhereUniqueInputSchema } from './CircleAimEditsWhereUniqueInputSchema';
import { CircleAimEditsCreateWithoutCircleAimInputSchema } from './CircleAimEditsCreateWithoutCircleAimInputSchema';
import { CircleAimEditsUncheckedCreateWithoutCircleAimInputSchema } from './CircleAimEditsUncheckedCreateWithoutCircleAimInputSchema';

export const CircleAimEditsCreateOrConnectWithoutCircleAimInputSchema: z.ZodType<Prisma.CircleAimEditsCreateOrConnectWithoutCircleAimInput> = z.object({
  where: z.lazy(() => CircleAimEditsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CircleAimEditsCreateWithoutCircleAimInputSchema),z.lazy(() => CircleAimEditsUncheckedCreateWithoutCircleAimInputSchema) ]),
}).strict();

export default CircleAimEditsCreateOrConnectWithoutCircleAimInputSchema;
