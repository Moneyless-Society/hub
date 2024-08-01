import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleCreateWithoutAimsInputSchema } from './CircleCreateWithoutAimsInputSchema';
import { CircleUncheckedCreateWithoutAimsInputSchema } from './CircleUncheckedCreateWithoutAimsInputSchema';
import { CircleCreateOrConnectWithoutAimsInputSchema } from './CircleCreateOrConnectWithoutAimsInputSchema';
import { CircleUpsertWithoutAimsInputSchema } from './CircleUpsertWithoutAimsInputSchema';
import { CircleWhereInputSchema } from './CircleWhereInputSchema';
import { CircleWhereUniqueInputSchema } from './CircleWhereUniqueInputSchema';
import { CircleUpdateToOneWithWhereWithoutAimsInputSchema } from './CircleUpdateToOneWithWhereWithoutAimsInputSchema';
import { CircleUpdateWithoutAimsInputSchema } from './CircleUpdateWithoutAimsInputSchema';
import { CircleUncheckedUpdateWithoutAimsInputSchema } from './CircleUncheckedUpdateWithoutAimsInputSchema';

export const CircleUpdateOneWithoutAimsNestedInputSchema: z.ZodType<Prisma.CircleUpdateOneWithoutAimsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CircleCreateWithoutAimsInputSchema),z.lazy(() => CircleUncheckedCreateWithoutAimsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CircleCreateOrConnectWithoutAimsInputSchema).optional(),
  upsert: z.lazy(() => CircleUpsertWithoutAimsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CircleWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CircleWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CircleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CircleUpdateToOneWithWhereWithoutAimsInputSchema),z.lazy(() => CircleUpdateWithoutAimsInputSchema),z.lazy(() => CircleUncheckedUpdateWithoutAimsInputSchema) ]).optional(),
}).strict();

export default CircleUpdateOneWithoutAimsNestedInputSchema;
