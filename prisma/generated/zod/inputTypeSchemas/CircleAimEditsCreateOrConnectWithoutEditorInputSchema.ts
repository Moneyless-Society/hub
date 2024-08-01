import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsWhereUniqueInputSchema } from './CircleAimEditsWhereUniqueInputSchema';
import { CircleAimEditsCreateWithoutEditorInputSchema } from './CircleAimEditsCreateWithoutEditorInputSchema';
import { CircleAimEditsUncheckedCreateWithoutEditorInputSchema } from './CircleAimEditsUncheckedCreateWithoutEditorInputSchema';

export const CircleAimEditsCreateOrConnectWithoutEditorInputSchema: z.ZodType<Prisma.CircleAimEditsCreateOrConnectWithoutEditorInput> = z.object({
  where: z.lazy(() => CircleAimEditsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CircleAimEditsCreateWithoutEditorInputSchema),z.lazy(() => CircleAimEditsUncheckedCreateWithoutEditorInputSchema) ]),
}).strict();

export default CircleAimEditsCreateOrConnectWithoutEditorInputSchema;
