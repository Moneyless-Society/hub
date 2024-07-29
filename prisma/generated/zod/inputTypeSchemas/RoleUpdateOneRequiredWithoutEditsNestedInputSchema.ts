import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateWithoutEditsInputSchema } from './RoleCreateWithoutEditsInputSchema';
import { RoleUncheckedCreateWithoutEditsInputSchema } from './RoleUncheckedCreateWithoutEditsInputSchema';
import { RoleCreateOrConnectWithoutEditsInputSchema } from './RoleCreateOrConnectWithoutEditsInputSchema';
import { RoleUpsertWithoutEditsInputSchema } from './RoleUpsertWithoutEditsInputSchema';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleUpdateToOneWithWhereWithoutEditsInputSchema } from './RoleUpdateToOneWithWhereWithoutEditsInputSchema';
import { RoleUpdateWithoutEditsInputSchema } from './RoleUpdateWithoutEditsInputSchema';
import { RoleUncheckedUpdateWithoutEditsInputSchema } from './RoleUncheckedUpdateWithoutEditsInputSchema';

export const RoleUpdateOneRequiredWithoutEditsNestedInputSchema: z.ZodType<Prisma.RoleUpdateOneRequiredWithoutEditsNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutEditsInputSchema),z.lazy(() => RoleUncheckedCreateWithoutEditsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutEditsInputSchema).optional(),
  upsert: z.lazy(() => RoleUpsertWithoutEditsInputSchema).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RoleUpdateToOneWithWhereWithoutEditsInputSchema),z.lazy(() => RoleUpdateWithoutEditsInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutEditsInputSchema) ]).optional(),
}).strict();

export default RoleUpdateOneRequiredWithoutEditsNestedInputSchema;
