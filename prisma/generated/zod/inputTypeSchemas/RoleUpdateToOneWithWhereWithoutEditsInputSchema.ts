import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';
import { RoleUpdateWithoutEditsInputSchema } from './RoleUpdateWithoutEditsInputSchema';
import { RoleUncheckedUpdateWithoutEditsInputSchema } from './RoleUncheckedUpdateWithoutEditsInputSchema';

export const RoleUpdateToOneWithWhereWithoutEditsInputSchema: z.ZodType<Prisma.RoleUpdateToOneWithWhereWithoutEditsInput> = z.object({
  where: z.lazy(() => RoleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RoleUpdateWithoutEditsInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutEditsInputSchema) ]),
}).strict();

export default RoleUpdateToOneWithWhereWithoutEditsInputSchema;
