import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTermWhereUniqueInputSchema } from './RoleTermWhereUniqueInputSchema';
import { RoleTermCreateWithoutCircleRoleInputSchema } from './RoleTermCreateWithoutCircleRoleInputSchema';
import { RoleTermUncheckedCreateWithoutCircleRoleInputSchema } from './RoleTermUncheckedCreateWithoutCircleRoleInputSchema';

export const RoleTermCreateOrConnectWithoutCircleRoleInputSchema: z.ZodType<Prisma.RoleTermCreateOrConnectWithoutCircleRoleInput> = z.object({
  where: z.lazy(() => RoleTermWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleTermCreateWithoutCircleRoleInputSchema),z.lazy(() => RoleTermUncheckedCreateWithoutCircleRoleInputSchema) ]),
}).strict();

export default RoleTermCreateOrConnectWithoutCircleRoleInputSchema;
