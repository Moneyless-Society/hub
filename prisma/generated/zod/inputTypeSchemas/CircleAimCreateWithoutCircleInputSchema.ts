import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsCreateNestedManyWithoutCircleAimInputSchema } from './CircleAimEditsCreateNestedManyWithoutCircleAimInputSchema';

export const CircleAimCreateWithoutCircleInputSchema: z.ZodType<Prisma.CircleAimCreateWithoutCircleInput> = z.object({
  text: z.string(),
  isActive: z.boolean(),
  edits: z.lazy(() => CircleAimEditsCreateNestedManyWithoutCircleAimInputSchema).optional()
}).strict();

export default CircleAimCreateWithoutCircleInputSchema;
