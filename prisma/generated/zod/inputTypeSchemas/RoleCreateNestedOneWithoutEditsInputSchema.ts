import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateWithoutEditsInputSchema } from './RoleCreateWithoutEditsInputSchema';
import { RoleUncheckedCreateWithoutEditsInputSchema } from './RoleUncheckedCreateWithoutEditsInputSchema';
import { RoleCreateOrConnectWithoutEditsInputSchema } from './RoleCreateOrConnectWithoutEditsInputSchema';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';

export const RoleCreateNestedOneWithoutEditsInputSchema: z.ZodType<Prisma.RoleCreateNestedOneWithoutEditsInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutEditsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutEditsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutEditsInputSchema).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputSchema).optional()
}).strict();

export default RoleCreateNestedOneWithoutEditsInputSchema;
