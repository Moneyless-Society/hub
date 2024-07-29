import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesScalarWhereInputSchema } from './CirclesToRolesScalarWhereInputSchema';
import { CirclesToRolesUpdateManyMutationInputSchema } from './CirclesToRolesUpdateManyMutationInputSchema';
import { CirclesToRolesUncheckedUpdateManyWithoutCircleInputSchema } from './CirclesToRolesUncheckedUpdateManyWithoutCircleInputSchema';

export const CirclesToRolesUpdateManyWithWhereWithoutCircleInputSchema: z.ZodType<Prisma.CirclesToRolesUpdateManyWithWhereWithoutCircleInput> = z.object({
  where: z.lazy(() => CirclesToRolesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CirclesToRolesUpdateManyMutationInputSchema),z.lazy(() => CirclesToRolesUncheckedUpdateManyWithoutCircleInputSchema) ]),
}).strict();

export default CirclesToRolesUpdateManyWithWhereWithoutCircleInputSchema;
