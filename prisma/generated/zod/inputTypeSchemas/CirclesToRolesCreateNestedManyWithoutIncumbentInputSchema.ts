import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreateWithoutIncumbentInputSchema } from './CirclesToRolesCreateWithoutIncumbentInputSchema';
import { CirclesToRolesUncheckedCreateWithoutIncumbentInputSchema } from './CirclesToRolesUncheckedCreateWithoutIncumbentInputSchema';
import { CirclesToRolesCreateOrConnectWithoutIncumbentInputSchema } from './CirclesToRolesCreateOrConnectWithoutIncumbentInputSchema';
import { CirclesToRolesCreateManyIncumbentInputEnvelopeSchema } from './CirclesToRolesCreateManyIncumbentInputEnvelopeSchema';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';

export const CirclesToRolesCreateNestedManyWithoutIncumbentInputSchema: z.ZodType<Prisma.CirclesToRolesCreateNestedManyWithoutIncumbentInput> = z.object({
  create: z.union([ z.lazy(() => CirclesToRolesCreateWithoutIncumbentInputSchema),z.lazy(() => CirclesToRolesCreateWithoutIncumbentInputSchema).array(),z.lazy(() => CirclesToRolesUncheckedCreateWithoutIncumbentInputSchema),z.lazy(() => CirclesToRolesUncheckedCreateWithoutIncumbentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CirclesToRolesCreateOrConnectWithoutIncumbentInputSchema),z.lazy(() => CirclesToRolesCreateOrConnectWithoutIncumbentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CirclesToRolesCreateManyIncumbentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CirclesToRolesWhereUniqueInputSchema),z.lazy(() => CirclesToRolesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CirclesToRolesCreateNestedManyWithoutIncumbentInputSchema;
