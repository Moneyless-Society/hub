import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsCreateWithoutEditorInputSchema } from './CircleAimEditsCreateWithoutEditorInputSchema';
import { CircleAimEditsUncheckedCreateWithoutEditorInputSchema } from './CircleAimEditsUncheckedCreateWithoutEditorInputSchema';
import { CircleAimEditsCreateOrConnectWithoutEditorInputSchema } from './CircleAimEditsCreateOrConnectWithoutEditorInputSchema';
import { CircleAimEditsCreateManyEditorInputEnvelopeSchema } from './CircleAimEditsCreateManyEditorInputEnvelopeSchema';
import { CircleAimEditsWhereUniqueInputSchema } from './CircleAimEditsWhereUniqueInputSchema';

export const CircleAimEditsUncheckedCreateNestedManyWithoutEditorInputSchema: z.ZodType<Prisma.CircleAimEditsUncheckedCreateNestedManyWithoutEditorInput> = z.object({
  create: z.union([ z.lazy(() => CircleAimEditsCreateWithoutEditorInputSchema),z.lazy(() => CircleAimEditsCreateWithoutEditorInputSchema).array(),z.lazy(() => CircleAimEditsUncheckedCreateWithoutEditorInputSchema),z.lazy(() => CircleAimEditsUncheckedCreateWithoutEditorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CircleAimEditsCreateOrConnectWithoutEditorInputSchema),z.lazy(() => CircleAimEditsCreateOrConnectWithoutEditorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CircleAimEditsCreateManyEditorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CircleAimEditsWhereUniqueInputSchema),z.lazy(() => CircleAimEditsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CircleAimEditsUncheckedCreateNestedManyWithoutEditorInputSchema;
