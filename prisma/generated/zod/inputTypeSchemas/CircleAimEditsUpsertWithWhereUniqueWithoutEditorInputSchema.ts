import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsWhereUniqueInputSchema } from './CircleAimEditsWhereUniqueInputSchema';
import { CircleAimEditsUpdateWithoutEditorInputSchema } from './CircleAimEditsUpdateWithoutEditorInputSchema';
import { CircleAimEditsUncheckedUpdateWithoutEditorInputSchema } from './CircleAimEditsUncheckedUpdateWithoutEditorInputSchema';
import { CircleAimEditsCreateWithoutEditorInputSchema } from './CircleAimEditsCreateWithoutEditorInputSchema';
import { CircleAimEditsUncheckedCreateWithoutEditorInputSchema } from './CircleAimEditsUncheckedCreateWithoutEditorInputSchema';

export const CircleAimEditsUpsertWithWhereUniqueWithoutEditorInputSchema: z.ZodType<Prisma.CircleAimEditsUpsertWithWhereUniqueWithoutEditorInput> = z.object({
  where: z.lazy(() => CircleAimEditsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CircleAimEditsUpdateWithoutEditorInputSchema),z.lazy(() => CircleAimEditsUncheckedUpdateWithoutEditorInputSchema) ]),
  create: z.union([ z.lazy(() => CircleAimEditsCreateWithoutEditorInputSchema),z.lazy(() => CircleAimEditsUncheckedCreateWithoutEditorInputSchema) ]),
}).strict();

export default CircleAimEditsUpsertWithWhereUniqueWithoutEditorInputSchema;
