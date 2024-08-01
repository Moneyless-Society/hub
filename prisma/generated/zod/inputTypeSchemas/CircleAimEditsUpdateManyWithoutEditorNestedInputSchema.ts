import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsCreateWithoutEditorInputSchema } from './CircleAimEditsCreateWithoutEditorInputSchema';
import { CircleAimEditsUncheckedCreateWithoutEditorInputSchema } from './CircleAimEditsUncheckedCreateWithoutEditorInputSchema';
import { CircleAimEditsCreateOrConnectWithoutEditorInputSchema } from './CircleAimEditsCreateOrConnectWithoutEditorInputSchema';
import { CircleAimEditsUpsertWithWhereUniqueWithoutEditorInputSchema } from './CircleAimEditsUpsertWithWhereUniqueWithoutEditorInputSchema';
import { CircleAimEditsCreateManyEditorInputEnvelopeSchema } from './CircleAimEditsCreateManyEditorInputEnvelopeSchema';
import { CircleAimEditsWhereUniqueInputSchema } from './CircleAimEditsWhereUniqueInputSchema';
import { CircleAimEditsUpdateWithWhereUniqueWithoutEditorInputSchema } from './CircleAimEditsUpdateWithWhereUniqueWithoutEditorInputSchema';
import { CircleAimEditsUpdateManyWithWhereWithoutEditorInputSchema } from './CircleAimEditsUpdateManyWithWhereWithoutEditorInputSchema';
import { CircleAimEditsScalarWhereInputSchema } from './CircleAimEditsScalarWhereInputSchema';

export const CircleAimEditsUpdateManyWithoutEditorNestedInputSchema: z.ZodType<Prisma.CircleAimEditsUpdateManyWithoutEditorNestedInput> = z.object({
  create: z.union([ z.lazy(() => CircleAimEditsCreateWithoutEditorInputSchema),z.lazy(() => CircleAimEditsCreateWithoutEditorInputSchema).array(),z.lazy(() => CircleAimEditsUncheckedCreateWithoutEditorInputSchema),z.lazy(() => CircleAimEditsUncheckedCreateWithoutEditorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CircleAimEditsCreateOrConnectWithoutEditorInputSchema),z.lazy(() => CircleAimEditsCreateOrConnectWithoutEditorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CircleAimEditsUpsertWithWhereUniqueWithoutEditorInputSchema),z.lazy(() => CircleAimEditsUpsertWithWhereUniqueWithoutEditorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CircleAimEditsCreateManyEditorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CircleAimEditsWhereUniqueInputSchema),z.lazy(() => CircleAimEditsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CircleAimEditsWhereUniqueInputSchema),z.lazy(() => CircleAimEditsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CircleAimEditsWhereUniqueInputSchema),z.lazy(() => CircleAimEditsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CircleAimEditsWhereUniqueInputSchema),z.lazy(() => CircleAimEditsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CircleAimEditsUpdateWithWhereUniqueWithoutEditorInputSchema),z.lazy(() => CircleAimEditsUpdateWithWhereUniqueWithoutEditorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CircleAimEditsUpdateManyWithWhereWithoutEditorInputSchema),z.lazy(() => CircleAimEditsUpdateManyWithWhereWithoutEditorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CircleAimEditsScalarWhereInputSchema),z.lazy(() => CircleAimEditsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CircleAimEditsUpdateManyWithoutEditorNestedInputSchema;
