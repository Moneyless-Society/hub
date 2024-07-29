import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsScalarWhereInputSchema } from './CircleAimEditsScalarWhereInputSchema';
import { CircleAimEditsUpdateManyMutationInputSchema } from './CircleAimEditsUpdateManyMutationInputSchema';
import { CircleAimEditsUncheckedUpdateManyWithoutEditorInputSchema } from './CircleAimEditsUncheckedUpdateManyWithoutEditorInputSchema';

export const CircleAimEditsUpdateManyWithWhereWithoutEditorInputSchema: z.ZodType<Prisma.CircleAimEditsUpdateManyWithWhereWithoutEditorInput> = z.object({
  where: z.lazy(() => CircleAimEditsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CircleAimEditsUpdateManyMutationInputSchema),z.lazy(() => CircleAimEditsUncheckedUpdateManyWithoutEditorInputSchema) ]),
}).strict();

export default CircleAimEditsUpdateManyWithWhereWithoutEditorInputSchema;
