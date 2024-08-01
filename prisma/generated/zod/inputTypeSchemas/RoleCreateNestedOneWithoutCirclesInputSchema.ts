import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateWithoutCirclesInputSchema } from './RoleCreateWithoutCirclesInputSchema';
import { RoleUncheckedCreateWithoutCirclesInputSchema } from './RoleUncheckedCreateWithoutCirclesInputSchema';
import { RoleCreateOrConnectWithoutCirclesInputSchema } from './RoleCreateOrConnectWithoutCirclesInputSchema';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';

export const RoleCreateNestedOneWithoutCirclesInputSchema: z.ZodType<Prisma.RoleCreateNestedOneWithoutCirclesInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutCirclesInputSchema),z.lazy(() => RoleUncheckedCreateWithoutCirclesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutCirclesInputSchema).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputSchema).optional()
}).strict();

export default RoleCreateNestedOneWithoutCirclesInputSchema;
