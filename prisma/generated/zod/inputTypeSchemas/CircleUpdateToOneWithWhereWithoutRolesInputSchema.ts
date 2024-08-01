import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleWhereInputSchema } from './CircleWhereInputSchema';
import { CircleUpdateWithoutRolesInputSchema } from './CircleUpdateWithoutRolesInputSchema';
import { CircleUncheckedUpdateWithoutRolesInputSchema } from './CircleUncheckedUpdateWithoutRolesInputSchema';

export const CircleUpdateToOneWithWhereWithoutRolesInputSchema: z.ZodType<Prisma.CircleUpdateToOneWithWhereWithoutRolesInput> = z.object({
  where: z.lazy(() => CircleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CircleUpdateWithoutRolesInputSchema),z.lazy(() => CircleUncheckedUpdateWithoutRolesInputSchema) ]),
}).strict();

export default CircleUpdateToOneWithWhereWithoutRolesInputSchema;
