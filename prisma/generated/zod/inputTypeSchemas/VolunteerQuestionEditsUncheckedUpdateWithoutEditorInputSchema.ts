import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const VolunteerQuestionEditsUncheckedUpdateWithoutEditorInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUncheckedUpdateWithoutEditorInput> = z.object({
  questionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default VolunteerQuestionEditsUncheckedUpdateWithoutEditorInputSchema;
