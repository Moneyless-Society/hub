import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsUncheckedCreateNestedManyWithoutCircleAimInputSchema } from './CircleAimEditsUncheckedCreateNestedManyWithoutCircleAimInputSchema';

export const CircleAimUncheckedCreateWithoutCircleInputSchema: z.ZodType<Prisma.CircleAimUncheckedCreateWithoutCircleInput> = z.object({
  id: z.number().int().optional(),
  text: z.string(),
  isActive: z.boolean(),
  edits: z.lazy(() => CircleAimEditsUncheckedCreateNestedManyWithoutCircleAimInputSchema).optional()
}).strict();

export default CircleAimUncheckedCreateWithoutCircleInputSchema;
