import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';
import { CirclesToRolesUpdateWithoutRoleInputSchema } from './CirclesToRolesUpdateWithoutRoleInputSchema';
import { CirclesToRolesUncheckedUpdateWithoutRoleInputSchema } from './CirclesToRolesUncheckedUpdateWithoutRoleInputSchema';
import { CirclesToRolesCreateWithoutRoleInputSchema } from './CirclesToRolesCreateWithoutRoleInputSchema';
import { CirclesToRolesUncheckedCreateWithoutRoleInputSchema } from './CirclesToRolesUncheckedCreateWithoutRoleInputSchema';

export const CirclesToRolesUpsertWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.CirclesToRolesUpsertWithWhereUniqueWithoutRoleInput> = z.object({
  where: z.lazy(() => CirclesToRolesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CirclesToRolesUpdateWithoutRoleInputSchema),z.lazy(() => CirclesToRolesUncheckedUpdateWithoutRoleInputSchema) ]),
  create: z.union([ z.lazy(() => CirclesToRolesCreateWithoutRoleInputSchema),z.lazy(() => CirclesToRolesUncheckedCreateWithoutRoleInputSchema) ]),
}).strict();

export default CirclesToRolesUpsertWithWhereUniqueWithoutRoleInputSchema;
