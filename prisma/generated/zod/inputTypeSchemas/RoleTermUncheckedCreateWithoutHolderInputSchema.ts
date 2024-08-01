import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleTermUncheckedCreateWithoutHolderInputSchema: z.ZodType<Prisma.RoleTermUncheckedCreateWithoutHolderInput> = z.object({
  id: z.number().int().optional(),
  circleId: z.number().int(),
  roleId: z.number().int(),
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable()
}).strict();

export default RoleTermUncheckedCreateWithoutHolderInputSchema;
