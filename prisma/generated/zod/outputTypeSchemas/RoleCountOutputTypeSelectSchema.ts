import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const RoleCountOutputTypeSelectSchema: z.ZodType<Prisma.RoleCountOutputTypeSelect> = z.object({
  edits: z.boolean().optional(),
  circles: z.boolean().optional(),
}).strict();

export default RoleCountOutputTypeSelectSchema;
