import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';
import { RoleUpdateWithoutCirclesInputSchema } from './RoleUpdateWithoutCirclesInputSchema';
import { RoleUncheckedUpdateWithoutCirclesInputSchema } from './RoleUncheckedUpdateWithoutCirclesInputSchema';

export const RoleUpdateToOneWithWhereWithoutCirclesInputSchema: z.ZodType<Prisma.RoleUpdateToOneWithWhereWithoutCirclesInput> = z.object({
  where: z.lazy(() => RoleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RoleUpdateWithoutCirclesInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutCirclesInputSchema) ]),
}).strict();

export default RoleUpdateToOneWithWhereWithoutCirclesInputSchema;
