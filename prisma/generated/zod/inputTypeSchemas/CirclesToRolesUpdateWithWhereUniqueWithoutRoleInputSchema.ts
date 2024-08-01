import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';
import { CirclesToRolesUpdateWithoutRoleInputSchema } from './CirclesToRolesUpdateWithoutRoleInputSchema';
import { CirclesToRolesUncheckedUpdateWithoutRoleInputSchema } from './CirclesToRolesUncheckedUpdateWithoutRoleInputSchema';

export const CirclesToRolesUpdateWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.CirclesToRolesUpdateWithWhereUniqueWithoutRoleInput> = z.object({
  where: z.lazy(() => CirclesToRolesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CirclesToRolesUpdateWithoutRoleInputSchema),z.lazy(() => CirclesToRolesUncheckedUpdateWithoutRoleInputSchema) ]),
}).strict();

export default CirclesToRolesUpdateWithWhereUniqueWithoutRoleInputSchema;
