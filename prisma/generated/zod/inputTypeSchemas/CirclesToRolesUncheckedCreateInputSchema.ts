import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreatetermIdsInputSchema } from './CirclesToRolesCreatetermIdsInputSchema';
import { RoleTermUncheckedCreateNestedManyWithoutCircleRoleInputSchema } from './RoleTermUncheckedCreateNestedManyWithoutCircleRoleInputSchema';

export const CirclesToRolesUncheckedCreateInputSchema: z.ZodType<Prisma.CirclesToRolesUncheckedCreateInput> = z.object({
  circleId: z.number().int(),
  roleId: z.number().int(),
  incumbentId: z.string(),
  termIds: z.union([ z.lazy(() => CirclesToRolesCreatetermIdsInputSchema),z.number().int().array() ]).optional(),
  terms: z.lazy(() => RoleTermUncheckedCreateNestedManyWithoutCircleRoleInputSchema).optional()
}).strict();

export default CirclesToRolesUncheckedCreateInputSchema;
