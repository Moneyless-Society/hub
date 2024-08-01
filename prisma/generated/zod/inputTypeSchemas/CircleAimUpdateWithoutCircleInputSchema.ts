import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { CircleAimEditsUpdateManyWithoutCircleAimNestedInputSchema } from './CircleAimEditsUpdateManyWithoutCircleAimNestedInputSchema';

export const CircleAimUpdateWithoutCircleInputSchema: z.ZodType<Prisma.CircleAimUpdateWithoutCircleInput> = z.object({
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  edits: z.lazy(() => CircleAimEditsUpdateManyWithoutCircleAimNestedInputSchema).optional()
}).strict();

export default CircleAimUpdateWithoutCircleInputSchema;
