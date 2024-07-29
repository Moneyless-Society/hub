import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleWhereInputSchema } from './CircleWhereInputSchema';
import { CircleUpdateWithoutAimsInputSchema } from './CircleUpdateWithoutAimsInputSchema';
import { CircleUncheckedUpdateWithoutAimsInputSchema } from './CircleUncheckedUpdateWithoutAimsInputSchema';

export const CircleUpdateToOneWithWhereWithoutAimsInputSchema: z.ZodType<Prisma.CircleUpdateToOneWithWhereWithoutAimsInput> = z.object({
  where: z.lazy(() => CircleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CircleUpdateWithoutAimsInputSchema),z.lazy(() => CircleUncheckedUpdateWithoutAimsInputSchema) ]),
}).strict();

export default CircleUpdateToOneWithWhereWithoutAimsInputSchema;
