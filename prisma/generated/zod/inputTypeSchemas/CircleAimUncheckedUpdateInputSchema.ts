import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { CircleAimEditsUncheckedUpdateManyWithoutCircleAimNestedInputSchema } from './CircleAimEditsUncheckedUpdateManyWithoutCircleAimNestedInputSchema';

export const CircleAimUncheckedUpdateInputSchema: z.ZodType<Prisma.CircleAimUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  circleId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  edits: z.lazy(() => CircleAimEditsUncheckedUpdateManyWithoutCircleAimNestedInputSchema).optional()
}).strict();

export default CircleAimUncheckedUpdateInputSchema;
