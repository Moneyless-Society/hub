import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleCreateWithoutCirclesInputSchema } from './RoleCreateWithoutCirclesInputSchema';
import { RoleUncheckedCreateWithoutCirclesInputSchema } from './RoleUncheckedCreateWithoutCirclesInputSchema';

export const RoleCreateOrConnectWithoutCirclesInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutCirclesInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutCirclesInputSchema),z.lazy(() => RoleUncheckedCreateWithoutCirclesInputSchema) ]),
}).strict();

export default RoleCreateOrConnectWithoutCirclesInputSchema;
