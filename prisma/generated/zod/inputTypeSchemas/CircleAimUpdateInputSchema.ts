import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { CircleUpdateOneWithoutAimsNestedInputSchema } from './CircleUpdateOneWithoutAimsNestedInputSchema';
import { CircleAimEditsUpdateManyWithoutCircleAimNestedInputSchema } from './CircleAimEditsUpdateManyWithoutCircleAimNestedInputSchema';

export const CircleAimUpdateInputSchema: z.ZodType<Prisma.CircleAimUpdateInput> = z.object({
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  circle: z.lazy(() => CircleUpdateOneWithoutAimsNestedInputSchema).optional(),
  edits: z.lazy(() => CircleAimEditsUpdateManyWithoutCircleAimNestedInputSchema).optional()
}).strict();

export default CircleAimUpdateInputSchema;
