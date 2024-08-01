import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTermCreateWithoutCircleRoleInputSchema } from './RoleTermCreateWithoutCircleRoleInputSchema';
import { RoleTermUncheckedCreateWithoutCircleRoleInputSchema } from './RoleTermUncheckedCreateWithoutCircleRoleInputSchema';
import { RoleTermCreateOrConnectWithoutCircleRoleInputSchema } from './RoleTermCreateOrConnectWithoutCircleRoleInputSchema';
import { RoleTermCreateManyCircleRoleInputEnvelopeSchema } from './RoleTermCreateManyCircleRoleInputEnvelopeSchema';
import { RoleTermWhereUniqueInputSchema } from './RoleTermWhereUniqueInputSchema';

export const RoleTermCreateNestedManyWithoutCircleRoleInputSchema: z.ZodType<Prisma.RoleTermCreateNestedManyWithoutCircleRoleInput> = z.object({
  create: z.union([ z.lazy(() => RoleTermCreateWithoutCircleRoleInputSchema),z.lazy(() => RoleTermCreateWithoutCircleRoleInputSchema).array(),z.lazy(() => RoleTermUncheckedCreateWithoutCircleRoleInputSchema),z.lazy(() => RoleTermUncheckedCreateWithoutCircleRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleTermCreateOrConnectWithoutCircleRoleInputSchema),z.lazy(() => RoleTermCreateOrConnectWithoutCircleRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleTermCreateManyCircleRoleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleTermWhereUniqueInputSchema),z.lazy(() => RoleTermWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RoleTermCreateNestedManyWithoutCircleRoleInputSchema;
