import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesScalarWhereInputSchema } from './CirclesToRolesScalarWhereInputSchema';
import { CirclesToRolesUpdateManyMutationInputSchema } from './CirclesToRolesUpdateManyMutationInputSchema';
import { CirclesToRolesUncheckedUpdateManyWithoutRoleInputSchema } from './CirclesToRolesUncheckedUpdateManyWithoutRoleInputSchema';

export const CirclesToRolesUpdateManyWithWhereWithoutRoleInputSchema: z.ZodType<Prisma.CirclesToRolesUpdateManyWithWhereWithoutRoleInput> = z.object({
  where: z.lazy(() => CirclesToRolesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CirclesToRolesUpdateManyMutationInputSchema),z.lazy(() => CirclesToRolesUncheckedUpdateManyWithoutRoleInputSchema) ]),
}).strict();

export default CirclesToRolesUpdateManyWithWhereWithoutRoleInputSchema;
