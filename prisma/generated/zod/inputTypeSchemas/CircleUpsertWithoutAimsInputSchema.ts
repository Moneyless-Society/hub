import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleUpdateWithoutAimsInputSchema } from './CircleUpdateWithoutAimsInputSchema';
import { CircleUncheckedUpdateWithoutAimsInputSchema } from './CircleUncheckedUpdateWithoutAimsInputSchema';
import { CircleCreateWithoutAimsInputSchema } from './CircleCreateWithoutAimsInputSchema';
import { CircleUncheckedCreateWithoutAimsInputSchema } from './CircleUncheckedCreateWithoutAimsInputSchema';
import { CircleWhereInputSchema } from './CircleWhereInputSchema';

export const CircleUpsertWithoutAimsInputSchema: z.ZodType<Prisma.CircleUpsertWithoutAimsInput> = z.object({
  update: z.union([ z.lazy(() => CircleUpdateWithoutAimsInputSchema),z.lazy(() => CircleUncheckedUpdateWithoutAimsInputSchema) ]),
  create: z.union([ z.lazy(() => CircleCreateWithoutAimsInputSchema),z.lazy(() => CircleUncheckedCreateWithoutAimsInputSchema) ]),
  where: z.lazy(() => CircleWhereInputSchema).optional()
}).strict();

export default CircleUpsertWithoutAimsInputSchema;
