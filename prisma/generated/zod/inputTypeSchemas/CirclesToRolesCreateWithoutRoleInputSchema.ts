import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreatetermIdsInputSchema } from './CirclesToRolesCreatetermIdsInputSchema';
import { CircleCreateNestedOneWithoutRolesInputSchema } from './CircleCreateNestedOneWithoutRolesInputSchema';
import { PersonCreateNestedOneWithoutCircleRolesInputSchema } from './PersonCreateNestedOneWithoutCircleRolesInputSchema';
import { RoleTermCreateNestedManyWithoutCircleRoleInputSchema } from './RoleTermCreateNestedManyWithoutCircleRoleInputSchema';

export const CirclesToRolesCreateWithoutRoleInputSchema: z.ZodType<Prisma.CirclesToRolesCreateWithoutRoleInput> = z.object({
  termIds: z.union([ z.lazy(() => CirclesToRolesCreatetermIdsInputSchema),z.number().int().array() ]).optional(),
  circle: z.lazy(() => CircleCreateNestedOneWithoutRolesInputSchema),
  incumbent: z.lazy(() => PersonCreateNestedOneWithoutCircleRolesInputSchema),
  terms: z.lazy(() => RoleTermCreateNestedManyWithoutCircleRoleInputSchema).optional()
}).strict();

export default CirclesToRolesCreateWithoutRoleInputSchema;
