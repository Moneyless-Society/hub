import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleCreateWithoutRolesInputSchema } from './CircleCreateWithoutRolesInputSchema';
import { CircleUncheckedCreateWithoutRolesInputSchema } from './CircleUncheckedCreateWithoutRolesInputSchema';
import { CircleCreateOrConnectWithoutRolesInputSchema } from './CircleCreateOrConnectWithoutRolesInputSchema';
import { CircleWhereUniqueInputSchema } from './CircleWhereUniqueInputSchema';

export const CircleCreateNestedOneWithoutRolesInputSchema: z.ZodType<Prisma.CircleCreateNestedOneWithoutRolesInput> = z.object({
  create: z.union([ z.lazy(() => CircleCreateWithoutRolesInputSchema),z.lazy(() => CircleUncheckedCreateWithoutRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CircleCreateOrConnectWithoutRolesInputSchema).optional(),
  connect: z.lazy(() => CircleWhereUniqueInputSchema).optional()
}).strict();

export default CircleCreateNestedOneWithoutRolesInputSchema;
