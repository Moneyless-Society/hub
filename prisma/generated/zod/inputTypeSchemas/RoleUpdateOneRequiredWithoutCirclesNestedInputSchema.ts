import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateWithoutCirclesInputSchema } from './RoleCreateWithoutCirclesInputSchema';
import { RoleUncheckedCreateWithoutCirclesInputSchema } from './RoleUncheckedCreateWithoutCirclesInputSchema';
import { RoleCreateOrConnectWithoutCirclesInputSchema } from './RoleCreateOrConnectWithoutCirclesInputSchema';
import { RoleUpsertWithoutCirclesInputSchema } from './RoleUpsertWithoutCirclesInputSchema';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleUpdateToOneWithWhereWithoutCirclesInputSchema } from './RoleUpdateToOneWithWhereWithoutCirclesInputSchema';
import { RoleUpdateWithoutCirclesInputSchema } from './RoleUpdateWithoutCirclesInputSchema';
import { RoleUncheckedUpdateWithoutCirclesInputSchema } from './RoleUncheckedUpdateWithoutCirclesInputSchema';

export const RoleUpdateOneRequiredWithoutCirclesNestedInputSchema: z.ZodType<Prisma.RoleUpdateOneRequiredWithoutCirclesNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutCirclesInputSchema),z.lazy(() => RoleUncheckedCreateWithoutCirclesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutCirclesInputSchema).optional(),
  upsert: z.lazy(() => RoleUpsertWithoutCirclesInputSchema).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RoleUpdateToOneWithWhereWithoutCirclesInputSchema),z.lazy(() => RoleUpdateWithoutCirclesInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutCirclesInputSchema) ]).optional(),
}).strict();

export default RoleUpdateOneRequiredWithoutCirclesNestedInputSchema;
