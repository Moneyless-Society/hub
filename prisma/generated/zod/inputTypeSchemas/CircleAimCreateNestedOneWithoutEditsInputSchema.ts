import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimCreateWithoutEditsInputSchema } from './CircleAimCreateWithoutEditsInputSchema';
import { CircleAimUncheckedCreateWithoutEditsInputSchema } from './CircleAimUncheckedCreateWithoutEditsInputSchema';
import { CircleAimCreateOrConnectWithoutEditsInputSchema } from './CircleAimCreateOrConnectWithoutEditsInputSchema';
import { CircleAimWhereUniqueInputSchema } from './CircleAimWhereUniqueInputSchema';

export const CircleAimCreateNestedOneWithoutEditsInputSchema: z.ZodType<Prisma.CircleAimCreateNestedOneWithoutEditsInput> = z.object({
  create: z.union([ z.lazy(() => CircleAimCreateWithoutEditsInputSchema),z.lazy(() => CircleAimUncheckedCreateWithoutEditsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CircleAimCreateOrConnectWithoutEditsInputSchema).optional(),
  connect: z.lazy(() => CircleAimWhereUniqueInputSchema).optional()
}).strict();

export default CircleAimCreateNestedOneWithoutEditsInputSchema;
