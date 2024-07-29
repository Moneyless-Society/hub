import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleUpdateWithoutRolesInputSchema } from './CircleUpdateWithoutRolesInputSchema';
import { CircleUncheckedUpdateWithoutRolesInputSchema } from './CircleUncheckedUpdateWithoutRolesInputSchema';
import { CircleCreateWithoutRolesInputSchema } from './CircleCreateWithoutRolesInputSchema';
import { CircleUncheckedCreateWithoutRolesInputSchema } from './CircleUncheckedCreateWithoutRolesInputSchema';
import { CircleWhereInputSchema } from './CircleWhereInputSchema';

export const CircleUpsertWithoutRolesInputSchema: z.ZodType<Prisma.CircleUpsertWithoutRolesInput> = z.object({
  update: z.union([ z.lazy(() => CircleUpdateWithoutRolesInputSchema),z.lazy(() => CircleUncheckedUpdateWithoutRolesInputSchema) ]),
  create: z.union([ z.lazy(() => CircleCreateWithoutRolesInputSchema),z.lazy(() => CircleUncheckedCreateWithoutRolesInputSchema) ]),
  where: z.lazy(() => CircleWhereInputSchema).optional()
}).strict();

export default CircleUpsertWithoutRolesInputSchema;
