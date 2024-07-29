import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreatetermIdsInputSchema } from './CirclesToRolesCreatetermIdsInputSchema';
import { CircleCreateNestedOneWithoutRolesInputSchema } from './CircleCreateNestedOneWithoutRolesInputSchema';
import { RoleCreateNestedOneWithoutCirclesInputSchema } from './RoleCreateNestedOneWithoutCirclesInputSchema';
import { RoleTermCreateNestedManyWithoutCircleRoleInputSchema } from './RoleTermCreateNestedManyWithoutCircleRoleInputSchema';

export const CirclesToRolesCreateWithoutIncumbentInputSchema: z.ZodType<Prisma.CirclesToRolesCreateWithoutIncumbentInput> = z.object({
  termIds: z.union([ z.lazy(() => CirclesToRolesCreatetermIdsInputSchema),z.number().int().array() ]).optional(),
  circle: z.lazy(() => CircleCreateNestedOneWithoutRolesInputSchema),
  role: z.lazy(() => RoleCreateNestedOneWithoutCirclesInputSchema),
  terms: z.lazy(() => RoleTermCreateNestedManyWithoutCircleRoleInputSchema).optional()
}).strict();

export default CirclesToRolesCreateWithoutIncumbentInputSchema;
