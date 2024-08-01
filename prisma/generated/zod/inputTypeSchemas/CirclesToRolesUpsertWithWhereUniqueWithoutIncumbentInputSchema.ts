import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';
import { CirclesToRolesUpdateWithoutIncumbentInputSchema } from './CirclesToRolesUpdateWithoutIncumbentInputSchema';
import { CirclesToRolesUncheckedUpdateWithoutIncumbentInputSchema } from './CirclesToRolesUncheckedUpdateWithoutIncumbentInputSchema';
import { CirclesToRolesCreateWithoutIncumbentInputSchema } from './CirclesToRolesCreateWithoutIncumbentInputSchema';
import { CirclesToRolesUncheckedCreateWithoutIncumbentInputSchema } from './CirclesToRolesUncheckedCreateWithoutIncumbentInputSchema';

export const CirclesToRolesUpsertWithWhereUniqueWithoutIncumbentInputSchema: z.ZodType<Prisma.CirclesToRolesUpsertWithWhereUniqueWithoutIncumbentInput> = z.object({
  where: z.lazy(() => CirclesToRolesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CirclesToRolesUpdateWithoutIncumbentInputSchema),z.lazy(() => CirclesToRolesUncheckedUpdateWithoutIncumbentInputSchema) ]),
  create: z.union([ z.lazy(() => CirclesToRolesCreateWithoutIncumbentInputSchema),z.lazy(() => CirclesToRolesUncheckedCreateWithoutIncumbentInputSchema) ]),
}).strict();

export default CirclesToRolesUpsertWithWhereUniqueWithoutIncumbentInputSchema;
