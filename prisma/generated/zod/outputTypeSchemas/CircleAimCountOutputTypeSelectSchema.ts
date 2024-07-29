import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CircleAimCountOutputTypeSelectSchema: z.ZodType<Prisma.CircleAimCountOutputTypeSelect> = z.object({
  edits: z.boolean().optional(),
}).strict();

export default CircleAimCountOutputTypeSelectSchema;
