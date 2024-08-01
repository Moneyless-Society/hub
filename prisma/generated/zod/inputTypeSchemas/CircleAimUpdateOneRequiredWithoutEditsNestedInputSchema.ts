import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimCreateWithoutEditsInputSchema } from './CircleAimCreateWithoutEditsInputSchema';
import { CircleAimUncheckedCreateWithoutEditsInputSchema } from './CircleAimUncheckedCreateWithoutEditsInputSchema';
import { CircleAimCreateOrConnectWithoutEditsInputSchema } from './CircleAimCreateOrConnectWithoutEditsInputSchema';
import { CircleAimUpsertWithoutEditsInputSchema } from './CircleAimUpsertWithoutEditsInputSchema';
import { CircleAimWhereUniqueInputSchema } from './CircleAimWhereUniqueInputSchema';
import { CircleAimUpdateToOneWithWhereWithoutEditsInputSchema } from './CircleAimUpdateToOneWithWhereWithoutEditsInputSchema';
import { CircleAimUpdateWithoutEditsInputSchema } from './CircleAimUpdateWithoutEditsInputSchema';
import { CircleAimUncheckedUpdateWithoutEditsInputSchema } from './CircleAimUncheckedUpdateWithoutEditsInputSchema';

export const CircleAimUpdateOneRequiredWithoutEditsNestedInputSchema: z.ZodType<Prisma.CircleAimUpdateOneRequiredWithoutEditsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CircleAimCreateWithoutEditsInputSchema),z.lazy(() => CircleAimUncheckedCreateWithoutEditsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CircleAimCreateOrConnectWithoutEditsInputSchema).optional(),
  upsert: z.lazy(() => CircleAimUpsertWithoutEditsInputSchema).optional(),
  connect: z.lazy(() => CircleAimWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CircleAimUpdateToOneWithWhereWithoutEditsInputSchema),z.lazy(() => CircleAimUpdateWithoutEditsInputSchema),z.lazy(() => CircleAimUncheckedUpdateWithoutEditsInputSchema) ]).optional(),
}).strict();

export default CircleAimUpdateOneRequiredWithoutEditsNestedInputSchema;
