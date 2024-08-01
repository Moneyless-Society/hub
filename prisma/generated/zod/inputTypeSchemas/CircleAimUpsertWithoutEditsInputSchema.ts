import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimUpdateWithoutEditsInputSchema } from './CircleAimUpdateWithoutEditsInputSchema';
import { CircleAimUncheckedUpdateWithoutEditsInputSchema } from './CircleAimUncheckedUpdateWithoutEditsInputSchema';
import { CircleAimCreateWithoutEditsInputSchema } from './CircleAimCreateWithoutEditsInputSchema';
import { CircleAimUncheckedCreateWithoutEditsInputSchema } from './CircleAimUncheckedCreateWithoutEditsInputSchema';
import { CircleAimWhereInputSchema } from './CircleAimWhereInputSchema';

export const CircleAimUpsertWithoutEditsInputSchema: z.ZodType<Prisma.CircleAimUpsertWithoutEditsInput> = z.object({
  update: z.union([ z.lazy(() => CircleAimUpdateWithoutEditsInputSchema),z.lazy(() => CircleAimUncheckedUpdateWithoutEditsInputSchema) ]),
  create: z.union([ z.lazy(() => CircleAimCreateWithoutEditsInputSchema),z.lazy(() => CircleAimUncheckedCreateWithoutEditsInputSchema) ]),
  where: z.lazy(() => CircleAimWhereInputSchema).optional()
}).strict();

export default CircleAimUpsertWithoutEditsInputSchema;
