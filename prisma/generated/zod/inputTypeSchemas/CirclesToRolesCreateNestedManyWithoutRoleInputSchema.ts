import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreateWithoutRoleInputSchema } from './CirclesToRolesCreateWithoutRoleInputSchema';
import { CirclesToRolesUncheckedCreateWithoutRoleInputSchema } from './CirclesToRolesUncheckedCreateWithoutRoleInputSchema';
import { CirclesToRolesCreateOrConnectWithoutRoleInputSchema } from './CirclesToRolesCreateOrConnectWithoutRoleInputSchema';
import { CirclesToRolesCreateManyRoleInputEnvelopeSchema } from './CirclesToRolesCreateManyRoleInputEnvelopeSchema';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';

export const CirclesToRolesCreateNestedManyWithoutRoleInputSchema: z.ZodType<Prisma.CirclesToRolesCreateNestedManyWithoutRoleInput> = z.object({
  create: z.union([ z.lazy(() => CirclesToRolesCreateWithoutRoleInputSchema),z.lazy(() => CirclesToRolesCreateWithoutRoleInputSchema).array(),z.lazy(() => CirclesToRolesUncheckedCreateWithoutRoleInputSchema),z.lazy(() => CirclesToRolesUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CirclesToRolesCreateOrConnectWithoutRoleInputSchema),z.lazy(() => CirclesToRolesCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CirclesToRolesCreateManyRoleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CirclesToRolesWhereUniqueInputSchema),z.lazy(() => CirclesToRolesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CirclesToRolesCreateNestedManyWithoutRoleInputSchema;
