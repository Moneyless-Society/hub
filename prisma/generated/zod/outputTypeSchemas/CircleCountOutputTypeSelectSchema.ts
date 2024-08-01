import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CircleCountOutputTypeSelectSchema: z.ZodType<Prisma.CircleCountOutputTypeSelect> = z.object({
  aims: z.boolean().optional(),
  roles: z.boolean().optional(),
}).strict();

export default CircleCountOutputTypeSelectSchema;
