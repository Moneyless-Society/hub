import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleCreateWithoutAimsInputSchema } from './CircleCreateWithoutAimsInputSchema';
import { CircleUncheckedCreateWithoutAimsInputSchema } from './CircleUncheckedCreateWithoutAimsInputSchema';
import { CircleCreateOrConnectWithoutAimsInputSchema } from './CircleCreateOrConnectWithoutAimsInputSchema';
import { CircleWhereUniqueInputSchema } from './CircleWhereUniqueInputSchema';

export const CircleCreateNestedOneWithoutAimsInputSchema: z.ZodType<Prisma.CircleCreateNestedOneWithoutAimsInput> = z.object({
  create: z.union([ z.lazy(() => CircleCreateWithoutAimsInputSchema),z.lazy(() => CircleUncheckedCreateWithoutAimsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CircleCreateOrConnectWithoutAimsInputSchema).optional(),
  connect: z.lazy(() => CircleWhereUniqueInputSchema).optional()
}).strict();

export default CircleCreateNestedOneWithoutAimsInputSchema;
