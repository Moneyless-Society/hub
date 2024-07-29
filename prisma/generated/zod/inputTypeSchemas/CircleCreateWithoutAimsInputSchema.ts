import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleCreatedomainsInputSchema } from './CircleCreatedomainsInputSchema';
import { CirclesToRolesCreateNestedManyWithoutCircleInputSchema } from './CirclesToRolesCreateNestedManyWithoutCircleInputSchema';

export const CircleCreateWithoutAimsInputSchema: z.ZodType<Prisma.CircleCreateWithoutAimsInput> = z.object({
  name: z.string(),
  mission: z.string(),
  description: z.string(),
  domains: z.union([ z.lazy(() => CircleCreatedomainsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedBy: z.coerce.date(),
  isActive: z.boolean(),
  roles: z.lazy(() => CirclesToRolesCreateNestedManyWithoutCircleInputSchema).optional()
}).strict();

export default CircleCreateWithoutAimsInputSchema;
