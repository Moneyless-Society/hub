import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimWhereInputSchema } from './CircleAimWhereInputSchema';
import { CircleAimUpdateWithoutEditsInputSchema } from './CircleAimUpdateWithoutEditsInputSchema';
import { CircleAimUncheckedUpdateWithoutEditsInputSchema } from './CircleAimUncheckedUpdateWithoutEditsInputSchema';

export const CircleAimUpdateToOneWithWhereWithoutEditsInputSchema: z.ZodType<Prisma.CircleAimUpdateToOneWithWhereWithoutEditsInput> = z.object({
  where: z.lazy(() => CircleAimWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CircleAimUpdateWithoutEditsInputSchema),z.lazy(() => CircleAimUncheckedUpdateWithoutEditsInputSchema) ]),
}).strict();

export default CircleAimUpdateToOneWithWhereWithoutEditsInputSchema;
