import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';
import { CirclesToRolesUpdateWithoutIncumbentInputSchema } from './CirclesToRolesUpdateWithoutIncumbentInputSchema';
import { CirclesToRolesUncheckedUpdateWithoutIncumbentInputSchema } from './CirclesToRolesUncheckedUpdateWithoutIncumbentInputSchema';

export const CirclesToRolesUpdateWithWhereUniqueWithoutIncumbentInputSchema: z.ZodType<Prisma.CirclesToRolesUpdateWithWhereUniqueWithoutIncumbentInput> = z.object({
  where: z.lazy(() => CirclesToRolesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CirclesToRolesUpdateWithoutIncumbentInputSchema),z.lazy(() => CirclesToRolesUncheckedUpdateWithoutIncumbentInputSchema) ]),
}).strict();

export default CirclesToRolesUpdateWithWhereUniqueWithoutIncumbentInputSchema;
