import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleCreateWithoutEditsInputSchema } from './RoleCreateWithoutEditsInputSchema';
import { RoleUncheckedCreateWithoutEditsInputSchema } from './RoleUncheckedCreateWithoutEditsInputSchema';

export const RoleCreateOrConnectWithoutEditsInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutEditsInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutEditsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutEditsInputSchema) ]),
}).strict();

export default RoleCreateOrConnectWithoutEditsInputSchema;
