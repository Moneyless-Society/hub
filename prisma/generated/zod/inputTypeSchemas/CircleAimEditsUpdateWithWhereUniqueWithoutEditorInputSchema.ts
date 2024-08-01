import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsWhereUniqueInputSchema } from './CircleAimEditsWhereUniqueInputSchema';
import { CircleAimEditsUpdateWithoutEditorInputSchema } from './CircleAimEditsUpdateWithoutEditorInputSchema';
import { CircleAimEditsUncheckedUpdateWithoutEditorInputSchema } from './CircleAimEditsUncheckedUpdateWithoutEditorInputSchema';

export const CircleAimEditsUpdateWithWhereUniqueWithoutEditorInputSchema: z.ZodType<Prisma.CircleAimEditsUpdateWithWhereUniqueWithoutEditorInput> = z.object({
  where: z.lazy(() => CircleAimEditsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CircleAimEditsUpdateWithoutEditorInputSchema),z.lazy(() => CircleAimEditsUncheckedUpdateWithoutEditorInputSchema) ]),
}).strict();

export default CircleAimEditsUpdateWithWhereUniqueWithoutEditorInputSchema;
