import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CircleUpdatedomainsInputSchema: z.ZodType<Prisma.CircleUpdatedomainsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export default CircleUpdatedomainsInputSchema;
