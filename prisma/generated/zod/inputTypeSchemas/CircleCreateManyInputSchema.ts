import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleCreatedomainsInputSchema } from './CircleCreatedomainsInputSchema';

export const CircleCreateManyInputSchema: z.ZodType<Prisma.CircleCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  mission: z.string(),
  description: z.string(),
  domains: z.union([ z.lazy(() => CircleCreatedomainsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedBy: z.coerce.date(),
  isActive: z.boolean()
}).strict();

export default CircleCreateManyInputSchema;
