import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimCreateNestedOneWithoutEditsInputSchema } from './CircleAimCreateNestedOneWithoutEditsInputSchema';

export const CircleAimEditsCreateWithoutEditorInputSchema: z.ZodType<Prisma.CircleAimEditsCreateWithoutEditorInput> = z.object({
  circleAim: z.lazy(() => CircleAimCreateNestedOneWithoutEditsInputSchema)
}).strict();

export default CircleAimEditsCreateWithoutEditorInputSchema;
