import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreateWithoutCircleInputSchema } from './CirclesToRolesCreateWithoutCircleInputSchema';
import { CirclesToRolesUncheckedCreateWithoutCircleInputSchema } from './CirclesToRolesUncheckedCreateWithoutCircleInputSchema';
import { CirclesToRolesCreateOrConnectWithoutCircleInputSchema } from './CirclesToRolesCreateOrConnectWithoutCircleInputSchema';
import { CirclesToRolesCreateManyCircleInputEnvelopeSchema } from './CirclesToRolesCreateManyCircleInputEnvelopeSchema';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';

export const CirclesToRolesCreateNestedManyWithoutCircleInputSchema: z.ZodType<Prisma.CirclesToRolesCreateNestedManyWithoutCircleInput> = z.object({
  create: z.union([ z.lazy(() => CirclesToRolesCreateWithoutCircleInputSchema),z.lazy(() => CirclesToRolesCreateWithoutCircleInputSchema).array(),z.lazy(() => CirclesToRolesUncheckedCreateWithoutCircleInputSchema),z.lazy(() => CirclesToRolesUncheckedCreateWithoutCircleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CirclesToRolesCreateOrConnectWithoutCircleInputSchema),z.lazy(() => CirclesToRolesCreateOrConnectWithoutCircleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CirclesToRolesCreateManyCircleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CirclesToRolesWhereUniqueInputSchema),z.lazy(() => CirclesToRolesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CirclesToRolesCreateNestedManyWithoutCircleInputSchema;
