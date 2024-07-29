import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreatetermIdsInputSchema } from './CirclesToRolesCreatetermIdsInputSchema';
import { CircleCreateNestedOneWithoutRolesInputSchema } from './CircleCreateNestedOneWithoutRolesInputSchema';
import { RoleCreateNestedOneWithoutCirclesInputSchema } from './RoleCreateNestedOneWithoutCirclesInputSchema';
import { PersonCreateNestedOneWithoutCircleRolesInputSchema } from './PersonCreateNestedOneWithoutCircleRolesInputSchema';

export const CirclesToRolesCreateWithoutTermsInputSchema: z.ZodType<Prisma.CirclesToRolesCreateWithoutTermsInput> = z.object({
  termIds: z.union([ z.lazy(() => CirclesToRolesCreatetermIdsInputSchema),z.number().int().array() ]).optional(),
  circle: z.lazy(() => CircleCreateNestedOneWithoutRolesInputSchema),
  role: z.lazy(() => RoleCreateNestedOneWithoutCirclesInputSchema),
  incumbent: z.lazy(() => PersonCreateNestedOneWithoutCircleRolesInputSchema)
}).strict();

export default CirclesToRolesCreateWithoutTermsInputSchema;
