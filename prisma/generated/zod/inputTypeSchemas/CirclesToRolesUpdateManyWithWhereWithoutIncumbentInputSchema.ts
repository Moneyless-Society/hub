import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesScalarWhereInputSchema } from './CirclesToRolesScalarWhereInputSchema';
import { CirclesToRolesUpdateManyMutationInputSchema } from './CirclesToRolesUpdateManyMutationInputSchema';
import { CirclesToRolesUncheckedUpdateManyWithoutIncumbentInputSchema } from './CirclesToRolesUncheckedUpdateManyWithoutIncumbentInputSchema';

export const CirclesToRolesUpdateManyWithWhereWithoutIncumbentInputSchema: z.ZodType<Prisma.CirclesToRolesUpdateManyWithWhereWithoutIncumbentInput> = z.object({
  where: z.lazy(() => CirclesToRolesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CirclesToRolesUpdateManyMutationInputSchema),z.lazy(() => CirclesToRolesUncheckedUpdateManyWithoutIncumbentInputSchema) ]),
}).strict();

export default CirclesToRolesUpdateManyWithWhereWithoutIncumbentInputSchema;
