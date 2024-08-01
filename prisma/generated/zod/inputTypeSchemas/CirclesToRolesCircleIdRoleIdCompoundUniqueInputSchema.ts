import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CirclesToRolesCircleIdRoleIdCompoundUniqueInputSchema: z.ZodType<Prisma.CirclesToRolesCircleIdRoleIdCompoundUniqueInput> = z.object({
  circleId: z.number(),
  roleId: z.number()
}).strict();

export default CirclesToRolesCircleIdRoleIdCompoundUniqueInputSchema;
