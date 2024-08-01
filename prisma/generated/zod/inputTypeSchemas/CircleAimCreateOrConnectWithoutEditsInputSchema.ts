import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimWhereUniqueInputSchema } from './CircleAimWhereUniqueInputSchema';
import { CircleAimCreateWithoutEditsInputSchema } from './CircleAimCreateWithoutEditsInputSchema';
import { CircleAimUncheckedCreateWithoutEditsInputSchema } from './CircleAimUncheckedCreateWithoutEditsInputSchema';

export const CircleAimCreateOrConnectWithoutEditsInputSchema: z.ZodType<Prisma.CircleAimCreateOrConnectWithoutEditsInput> = z.object({
  where: z.lazy(() => CircleAimWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CircleAimCreateWithoutEditsInputSchema),z.lazy(() => CircleAimUncheckedCreateWithoutEditsInputSchema) ]),
}).strict();

export default CircleAimCreateOrConnectWithoutEditsInputSchema;
