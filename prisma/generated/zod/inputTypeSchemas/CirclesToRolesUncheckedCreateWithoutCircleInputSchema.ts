import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreatetermIdsInputSchema } from './CirclesToRolesCreatetermIdsInputSchema';
import { RoleTermUncheckedCreateNestedManyWithoutCircleRoleInputSchema } from './RoleTermUncheckedCreateNestedManyWithoutCircleRoleInputSchema';

export const CirclesToRolesUncheckedCreateWithoutCircleInputSchema: z.ZodType<Prisma.CirclesToRolesUncheckedCreateWithoutCircleInput> = z.object({
  roleId: z.number().int(),
  incumbentId: z.string(),
  termIds: z.union([ z.lazy(() => CirclesToRolesCreatetermIdsInputSchema),z.number().int().array() ]).optional(),
  terms: z.lazy(() => RoleTermUncheckedCreateNestedManyWithoutCircleRoleInputSchema).optional()
}).strict();

export default CirclesToRolesUncheckedCreateWithoutCircleInputSchema;
