import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleCreateNestedOneWithoutAimsInputSchema } from './CircleCreateNestedOneWithoutAimsInputSchema';
import { CircleAimEditsCreateNestedManyWithoutCircleAimInputSchema } from './CircleAimEditsCreateNestedManyWithoutCircleAimInputSchema';

export const CircleAimCreateInputSchema: z.ZodType<Prisma.CircleAimCreateInput> = z.object({
  text: z.string(),
  isActive: z.boolean(),
  circle: z.lazy(() => CircleCreateNestedOneWithoutAimsInputSchema).optional(),
  edits: z.lazy(() => CircleAimEditsCreateNestedManyWithoutCircleAimInputSchema).optional()
}).strict();

export default CircleAimCreateInputSchema;
