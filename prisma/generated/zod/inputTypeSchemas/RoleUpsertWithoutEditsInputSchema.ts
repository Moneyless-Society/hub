import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleUpdateWithoutEditsInputSchema } from './RoleUpdateWithoutEditsInputSchema';
import { RoleUncheckedUpdateWithoutEditsInputSchema } from './RoleUncheckedUpdateWithoutEditsInputSchema';
import { RoleCreateWithoutEditsInputSchema } from './RoleCreateWithoutEditsInputSchema';
import { RoleUncheckedCreateWithoutEditsInputSchema } from './RoleUncheckedCreateWithoutEditsInputSchema';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';

export const RoleUpsertWithoutEditsInputSchema: z.ZodType<Prisma.RoleUpsertWithoutEditsInput> = z.object({
  update: z.union([ z.lazy(() => RoleUpdateWithoutEditsInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutEditsInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutEditsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutEditsInputSchema) ]),
  where: z.lazy(() => RoleWhereInputSchema).optional()
}).strict();

export default RoleUpsertWithoutEditsInputSchema;
