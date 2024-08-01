import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { VolunteerQuestionUpdateOneRequiredWithoutEditsNestedInputSchema } from './VolunteerQuestionUpdateOneRequiredWithoutEditsNestedInputSchema';

export const VolunteerQuestionEditsUpdateWithoutEditorInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUpdateWithoutEditorInput> = z.object({
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  question: z.lazy(() => VolunteerQuestionUpdateOneRequiredWithoutEditsNestedInputSchema).optional()
}).strict();

export default VolunteerQuestionEditsUpdateWithoutEditorInputSchema;
