import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleTermCreateManyInputSchema: z.ZodType<Prisma.RoleTermCreateManyInput> = z.object({
  id: z.number().int().optional(),
  circleId: z.number().int(),
  roleId: z.number().int(),
  holderId: z.string(),
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable()
}).strict();

export default RoleTermCreateManyInputSchema;
