import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleTermCreateManyCircleRoleInputSchema: z.ZodType<Prisma.RoleTermCreateManyCircleRoleInput> = z.object({
  id: z.number().int().optional(),
  holderId: z.string(),
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable()
}).strict();

export default RoleTermCreateManyCircleRoleInputSchema;
