import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CirclesToRolesCountOutputTypeSelectSchema: z.ZodType<Prisma.CirclesToRolesCountOutputTypeSelect> = z.object({
  terms: z.boolean().optional(),
}).strict();

export default CirclesToRolesCountOutputTypeSelectSchema;
