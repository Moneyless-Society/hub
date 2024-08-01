import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleCreateManyInputSchema: z.ZodType<Prisma.RoleCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isActive: z.boolean()
}).strict();

export default RoleCreateManyInputSchema;
