import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleCreateNestedOneWithoutAimsInputSchema } from './CircleCreateNestedOneWithoutAimsInputSchema';

export const CircleAimCreateWithoutEditsInputSchema: z.ZodType<Prisma.CircleAimCreateWithoutEditsInput> = z.object({
  text: z.string(),
  isActive: z.boolean(),
  circle: z.lazy(() => CircleCreateNestedOneWithoutAimsInputSchema).optional()
}).strict();

export default CircleAimCreateWithoutEditsInputSchema;
