import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleCreatedomainsInputSchema } from './CircleCreatedomainsInputSchema';
import { CirclesToRolesUncheckedCreateNestedManyWithoutCircleInputSchema } from './CirclesToRolesUncheckedCreateNestedManyWithoutCircleInputSchema';

export const CircleUncheckedCreateWithoutAimsInputSchema: z.ZodType<Prisma.CircleUncheckedCreateWithoutAimsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  mission: z.string(),
  description: z.string(),
  domains: z.union([ z.lazy(() => CircleCreatedomainsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedBy: z.coerce.date(),
  isActive: z.boolean(),
  roles: z.lazy(() => CirclesToRolesUncheckedCreateNestedManyWithoutCircleInputSchema).optional()
}).strict();

export default CircleUncheckedCreateWithoutAimsInputSchema;
