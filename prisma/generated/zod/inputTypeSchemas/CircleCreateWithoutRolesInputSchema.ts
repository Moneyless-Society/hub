import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleCreatedomainsInputSchema } from './CircleCreatedomainsInputSchema';
import { CircleAimCreateNestedManyWithoutCircleInputSchema } from './CircleAimCreateNestedManyWithoutCircleInputSchema';

export const CircleCreateWithoutRolesInputSchema: z.ZodType<Prisma.CircleCreateWithoutRolesInput> = z.object({
  name: z.string(),
  mission: z.string(),
  description: z.string(),
  domains: z.union([ z.lazy(() => CircleCreatedomainsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedBy: z.coerce.date(),
  isActive: z.boolean(),
  aims: z.lazy(() => CircleAimCreateNestedManyWithoutCircleInputSchema).optional()
}).strict();

export default CircleCreateWithoutRolesInputSchema;
