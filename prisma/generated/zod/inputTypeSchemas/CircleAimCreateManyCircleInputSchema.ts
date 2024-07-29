import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CircleAimCreateManyCircleInputSchema: z.ZodType<Prisma.CircleAimCreateManyCircleInput> = z.object({
  id: z.number().int().optional(),
  text: z.string(),
  isActive: z.boolean()
}).strict();

export default CircleAimCreateManyCircleInputSchema;
