import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleTermUncheckedCreateWithoutCircleRoleInputSchema: z.ZodType<Prisma.RoleTermUncheckedCreateWithoutCircleRoleInput> = z.object({
  id: z.number().int().optional(),
  holderId: z.string(),
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable()
}).strict();

export default RoleTermUncheckedCreateWithoutCircleRoleInputSchema;
