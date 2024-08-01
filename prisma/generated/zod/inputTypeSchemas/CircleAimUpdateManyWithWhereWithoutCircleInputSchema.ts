import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimScalarWhereInputSchema } from './CircleAimScalarWhereInputSchema';
import { CircleAimUpdateManyMutationInputSchema } from './CircleAimUpdateManyMutationInputSchema';
import { CircleAimUncheckedUpdateManyWithoutCircleInputSchema } from './CircleAimUncheckedUpdateManyWithoutCircleInputSchema';

export const CircleAimUpdateManyWithWhereWithoutCircleInputSchema: z.ZodType<Prisma.CircleAimUpdateManyWithWhereWithoutCircleInput> = z.object({
  where: z.lazy(() => CircleAimScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CircleAimUpdateManyMutationInputSchema),z.lazy(() => CircleAimUncheckedUpdateManyWithoutCircleInputSchema) ]),
}).strict();

export default CircleAimUpdateManyWithWhereWithoutCircleInputSchema;
