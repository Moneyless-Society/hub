import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CircleCreatedomainsInputSchema: z.ZodType<Prisma.CircleCreatedomainsInput> = z.object({
  set: z.string().array()
}).strict();

export default CircleCreatedomainsInputSchema;
