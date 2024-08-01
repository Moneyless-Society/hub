import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesUpdatetermIdsInputSchema } from './CirclesToRolesUpdatetermIdsInputSchema';
import { CircleUpdateOneRequiredWithoutRolesNestedInputSchema } from './CircleUpdateOneRequiredWithoutRolesNestedInputSchema';
import { PersonUpdateOneRequiredWithoutCircleRolesNestedInputSchema } from './PersonUpdateOneRequiredWithoutCircleRolesNestedInputSchema';
import { RoleTermUpdateManyWithoutCircleRoleNestedInputSchema } from './RoleTermUpdateManyWithoutCircleRoleNestedInputSchema';

export const CirclesToRolesUpdateWithoutRoleInputSchema: z.ZodType<Prisma.CirclesToRolesUpdateWithoutRoleInput> = z.object({
  termIds: z.union([ z.lazy(() => CirclesToRolesUpdatetermIdsInputSchema),z.number().int().array() ]).optional(),
  circle: z.lazy(() => CircleUpdateOneRequiredWithoutRolesNestedInputSchema).optional(),
  incumbent: z.lazy(() => PersonUpdateOneRequiredWithoutCircleRolesNestedInputSchema).optional(),
  terms: z.lazy(() => RoleTermUpdateManyWithoutCircleRoleNestedInputSchema).optional()
}).strict();

export default CirclesToRolesUpdateWithoutRoleInputSchema;
