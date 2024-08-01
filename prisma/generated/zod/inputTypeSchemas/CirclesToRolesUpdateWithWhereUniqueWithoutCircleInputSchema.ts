import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';
import { CirclesToRolesUpdateWithoutCircleInputSchema } from './CirclesToRolesUpdateWithoutCircleInputSchema';
import { CirclesToRolesUncheckedUpdateWithoutCircleInputSchema } from './CirclesToRolesUncheckedUpdateWithoutCircleInputSchema';

export const CirclesToRolesUpdateWithWhereUniqueWithoutCircleInputSchema: z.ZodType<Prisma.CirclesToRolesUpdateWithWhereUniqueWithoutCircleInput> = z.object({
  where: z.lazy(() => CirclesToRolesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CirclesToRolesUpdateWithoutCircleInputSchema),z.lazy(() => CirclesToRolesUncheckedUpdateWithoutCircleInputSchema) ]),
}).strict();

export default CirclesToRolesUpdateWithWhereUniqueWithoutCircleInputSchema;
