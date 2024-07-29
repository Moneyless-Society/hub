import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreatetermIdsInputSchema } from './CirclesToRolesCreatetermIdsInputSchema';
import { RoleCreateNestedOneWithoutCirclesInputSchema } from './RoleCreateNestedOneWithoutCirclesInputSchema';
import { PersonCreateNestedOneWithoutCircleRolesInputSchema } from './PersonCreateNestedOneWithoutCircleRolesInputSchema';
import { RoleTermCreateNestedManyWithoutCircleRoleInputSchema } from './RoleTermCreateNestedManyWithoutCircleRoleInputSchema';

export const CirclesToRolesCreateWithoutCircleInputSchema: z.ZodType<Prisma.CirclesToRolesCreateWithoutCircleInput> = z.object({
  termIds: z.union([ z.lazy(() => CirclesToRolesCreatetermIdsInputSchema),z.number().int().array() ]).optional(),
  role: z.lazy(() => RoleCreateNestedOneWithoutCirclesInputSchema),
  incumbent: z.lazy(() => PersonCreateNestedOneWithoutCircleRolesInputSchema),
  terms: z.lazy(() => RoleTermCreateNestedManyWithoutCircleRoleInputSchema).optional()
}).strict();

export default CirclesToRolesCreateWithoutCircleInputSchema;
