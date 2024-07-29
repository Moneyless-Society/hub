import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { CircleUpdateOneWithoutAimsNestedInputSchema } from './CircleUpdateOneWithoutAimsNestedInputSchema';

export const CircleAimUpdateWithoutEditsInputSchema: z.ZodType<Prisma.CircleAimUpdateWithoutEditsInput> = z.object({
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  circle: z.lazy(() => CircleUpdateOneWithoutAimsNestedInputSchema).optional()
}).strict();

export default CircleAimUpdateWithoutEditsInputSchema;
