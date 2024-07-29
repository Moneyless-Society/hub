import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleCreateWithoutRolesInputSchema } from './CircleCreateWithoutRolesInputSchema';
import { CircleUncheckedCreateWithoutRolesInputSchema } from './CircleUncheckedCreateWithoutRolesInputSchema';
import { CircleCreateOrConnectWithoutRolesInputSchema } from './CircleCreateOrConnectWithoutRolesInputSchema';
import { CircleUpsertWithoutRolesInputSchema } from './CircleUpsertWithoutRolesInputSchema';
import { CircleWhereUniqueInputSchema } from './CircleWhereUniqueInputSchema';
import { CircleUpdateToOneWithWhereWithoutRolesInputSchema } from './CircleUpdateToOneWithWhereWithoutRolesInputSchema';
import { CircleUpdateWithoutRolesInputSchema } from './CircleUpdateWithoutRolesInputSchema';
import { CircleUncheckedUpdateWithoutRolesInputSchema } from './CircleUncheckedUpdateWithoutRolesInputSchema';

export const CircleUpdateOneRequiredWithoutRolesNestedInputSchema: z.ZodType<Prisma.CircleUpdateOneRequiredWithoutRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CircleCreateWithoutRolesInputSchema),z.lazy(() => CircleUncheckedCreateWithoutRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CircleCreateOrConnectWithoutRolesInputSchema).optional(),
  upsert: z.lazy(() => CircleUpsertWithoutRolesInputSchema).optional(),
  connect: z.lazy(() => CircleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CircleUpdateToOneWithWhereWithoutRolesInputSchema),z.lazy(() => CircleUpdateWithoutRolesInputSchema),z.lazy(() => CircleUncheckedUpdateWithoutRolesInputSchema) ]).optional(),
}).strict();

export default CircleUpdateOneRequiredWithoutRolesNestedInputSchema;
