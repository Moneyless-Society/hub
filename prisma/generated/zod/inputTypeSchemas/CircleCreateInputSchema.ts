import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleCreatedomainsInputSchema } from './CircleCreatedomainsInputSchema';
import { CircleAimCreateNestedManyWithoutCircleInputSchema } from './CircleAimCreateNestedManyWithoutCircleInputSchema';
import { CirclesToRolesCreateNestedManyWithoutCircleInputSchema } from './CirclesToRolesCreateNestedManyWithoutCircleInputSchema';

export const CircleCreateInputSchema: z.ZodType<Prisma.CircleCreateInput> = z.object({
  name: z.string(),
  mission: z.string(),
  description: z.string(),
  domains: z.union([ z.lazy(() => CircleCreatedomainsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedBy: z.coerce.date(),
  isActive: z.boolean(),
  aims: z.lazy(() => CircleAimCreateNestedManyWithoutCircleInputSchema).optional(),
  roles: z.lazy(() => CirclesToRolesCreateNestedManyWithoutCircleInputSchema).optional()
}).strict();

export default CircleCreateInputSchema;
