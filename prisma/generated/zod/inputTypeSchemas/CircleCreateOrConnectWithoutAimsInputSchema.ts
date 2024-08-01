import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleWhereUniqueInputSchema } from './CircleWhereUniqueInputSchema';
import { CircleCreateWithoutAimsInputSchema } from './CircleCreateWithoutAimsInputSchema';
import { CircleUncheckedCreateWithoutAimsInputSchema } from './CircleUncheckedCreateWithoutAimsInputSchema';

export const CircleCreateOrConnectWithoutAimsInputSchema: z.ZodType<Prisma.CircleCreateOrConnectWithoutAimsInput> = z.object({
  where: z.lazy(() => CircleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CircleCreateWithoutAimsInputSchema),z.lazy(() => CircleUncheckedCreateWithoutAimsInputSchema) ]),
}).strict();

export default CircleCreateOrConnectWithoutAimsInputSchema;
