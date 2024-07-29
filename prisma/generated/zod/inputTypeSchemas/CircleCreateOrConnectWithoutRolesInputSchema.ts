import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleWhereUniqueInputSchema } from './CircleWhereUniqueInputSchema';
import { CircleCreateWithoutRolesInputSchema } from './CircleCreateWithoutRolesInputSchema';
import { CircleUncheckedCreateWithoutRolesInputSchema } from './CircleUncheckedCreateWithoutRolesInputSchema';

export const CircleCreateOrConnectWithoutRolesInputSchema: z.ZodType<Prisma.CircleCreateOrConnectWithoutRolesInput> = z.object({
  where: z.lazy(() => CircleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CircleCreateWithoutRolesInputSchema),z.lazy(() => CircleUncheckedCreateWithoutRolesInputSchema) ]),
}).strict();

export default CircleCreateOrConnectWithoutRolesInputSchema;
