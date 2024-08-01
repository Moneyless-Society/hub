import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CircleAimCreateManyInputSchema: z.ZodType<Prisma.CircleAimCreateManyInput> = z.object({
  id: z.number().int().optional(),
  circleId: z.number().int().optional().nullable(),
  text: z.string(),
  isActive: z.boolean()
}).strict();

export default CircleAimCreateManyInputSchema;
