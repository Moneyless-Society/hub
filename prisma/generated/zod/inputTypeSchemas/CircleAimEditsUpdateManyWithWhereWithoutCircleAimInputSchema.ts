import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsScalarWhereInputSchema } from './CircleAimEditsScalarWhereInputSchema';
import { CircleAimEditsUpdateManyMutationInputSchema } from './CircleAimEditsUpdateManyMutationInputSchema';
import { CircleAimEditsUncheckedUpdateManyWithoutCircleAimInputSchema } from './CircleAimEditsUncheckedUpdateManyWithoutCircleAimInputSchema';

export const CircleAimEditsUpdateManyWithWhereWithoutCircleAimInputSchema: z.ZodType<Prisma.CircleAimEditsUpdateManyWithWhereWithoutCircleAimInput> = z.object({
  where: z.lazy(() => CircleAimEditsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CircleAimEditsUpdateManyMutationInputSchema),z.lazy(() => CircleAimEditsUncheckedUpdateManyWithoutCircleAimInputSchema) ]),
}).strict();

export default CircleAimEditsUpdateManyWithWhereWithoutCircleAimInputSchema;
