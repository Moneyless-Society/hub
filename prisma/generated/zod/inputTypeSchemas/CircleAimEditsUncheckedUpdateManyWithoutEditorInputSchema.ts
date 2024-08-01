import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const CircleAimEditsUncheckedUpdateManyWithoutEditorInputSchema: z.ZodType<Prisma.CircleAimEditsUncheckedUpdateManyWithoutEditorInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  circleAimId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default CircleAimEditsUncheckedUpdateManyWithoutEditorInputSchema;
