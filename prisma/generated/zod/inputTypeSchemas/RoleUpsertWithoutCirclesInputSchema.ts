import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleUpdateWithoutCirclesInputSchema } from './RoleUpdateWithoutCirclesInputSchema';
import { RoleUncheckedUpdateWithoutCirclesInputSchema } from './RoleUncheckedUpdateWithoutCirclesInputSchema';
import { RoleCreateWithoutCirclesInputSchema } from './RoleCreateWithoutCirclesInputSchema';
import { RoleUncheckedCreateWithoutCirclesInputSchema } from './RoleUncheckedCreateWithoutCirclesInputSchema';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';

export const RoleUpsertWithoutCirclesInputSchema: z.ZodType<Prisma.RoleUpsertWithoutCirclesInput> = z.object({
  update: z.union([ z.lazy(() => RoleUpdateWithoutCirclesInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutCirclesInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutCirclesInputSchema),z.lazy(() => RoleUncheckedCreateWithoutCirclesInputSchema) ]),
  where: z.lazy(() => RoleWhereInputSchema).optional()
}).strict();

export default RoleUpsertWithoutCirclesInputSchema;
