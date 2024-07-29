import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleCreatedomainsInputSchema } from './CircleCreatedomainsInputSchema';
import { CircleAimUncheckedCreateNestedManyWithoutCircleInputSchema } from './CircleAimUncheckedCreateNestedManyWithoutCircleInputSchema';
import { CirclesToRolesUncheckedCreateNestedManyWithoutCircleInputSchema } from './CirclesToRolesUncheckedCreateNestedManyWithoutCircleInputSchema';

export const CircleUncheckedCreateInputSchema: z.ZodType<Prisma.CircleUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  mission: z.string(),
  description: z.string(),
  domains: z.union([ z.lazy(() => CircleCreatedomainsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedBy: z.coerce.date(),
  isActive: z.boolean(),
  aims: z.lazy(() => CircleAimUncheckedCreateNestedManyWithoutCircleInputSchema).optional(),
  roles: z.lazy(() => CirclesToRolesUncheckedCreateNestedManyWithoutCircleInputSchema).optional()
}).strict();

export default CircleUncheckedCreateInputSchema;
