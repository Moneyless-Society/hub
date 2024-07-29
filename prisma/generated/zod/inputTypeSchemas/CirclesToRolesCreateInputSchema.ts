import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreatetermIdsInputSchema } from './CirclesToRolesCreatetermIdsInputSchema';
import { CircleCreateNestedOneWithoutRolesInputSchema } from './CircleCreateNestedOneWithoutRolesInputSchema';
import { RoleCreateNestedOneWithoutCirclesInputSchema } from './RoleCreateNestedOneWithoutCirclesInputSchema';
import { PersonCreateNestedOneWithoutCircleRolesInputSchema } from './PersonCreateNestedOneWithoutCircleRolesInputSchema';
import { RoleTermCreateNestedManyWithoutCircleRoleInputSchema } from './RoleTermCreateNestedManyWithoutCircleRoleInputSchema';

export const CirclesToRolesCreateInputSchema: z.ZodType<Prisma.CirclesToRolesCreateInput> = z.object({
  termIds: z.union([ z.lazy(() => CirclesToRolesCreatetermIdsInputSchema),z.number().int().array() ]).optional(),
  circle: z.lazy(() => CircleCreateNestedOneWithoutRolesInputSchema),
  role: z.lazy(() => RoleCreateNestedOneWithoutCirclesInputSchema),
  incumbent: z.lazy(() => PersonCreateNestedOneWithoutCircleRolesInputSchema),
  terms: z.lazy(() => RoleTermCreateNestedManyWithoutCircleRoleInputSchema).optional()
}).strict();

export default CirclesToRolesCreateInputSchema;
