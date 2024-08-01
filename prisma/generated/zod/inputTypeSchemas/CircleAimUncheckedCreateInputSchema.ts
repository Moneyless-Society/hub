import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsUncheckedCreateNestedManyWithoutCircleAimInputSchema } from './CircleAimEditsUncheckedCreateNestedManyWithoutCircleAimInputSchema';

export const CircleAimUncheckedCreateInputSchema: z.ZodType<Prisma.CircleAimUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  circleId: z.number().int().optional().nullable(),
  text: z.string(),
  isActive: z.boolean(),
  edits: z.lazy(() => CircleAimEditsUncheckedCreateNestedManyWithoutCircleAimInputSchema).optional()
}).strict();

export default CircleAimUncheckedCreateInputSchema;
