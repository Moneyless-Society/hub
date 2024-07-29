import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreatetermIdsInputSchema } from './CirclesToRolesCreatetermIdsInputSchema';
import { RoleTermUncheckedCreateNestedManyWithoutCircleRoleInputSchema } from './RoleTermUncheckedCreateNestedManyWithoutCircleRoleInputSchema';

export const CirclesToRolesUncheckedCreateWithoutIncumbentInputSchema: z.ZodType<Prisma.CirclesToRolesUncheckedCreateWithoutIncumbentInput> = z.object({
  circleId: z.number().int(),
  roleId: z.number().int(),
  termIds: z.union([ z.lazy(() => CirclesToRolesCreatetermIdsInputSchema),z.number().int().array() ]).optional(),
  terms: z.lazy(() => RoleTermUncheckedCreateNestedManyWithoutCircleRoleInputSchema).optional()
}).strict();

export default CirclesToRolesUncheckedCreateWithoutIncumbentInputSchema;
