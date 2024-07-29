import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { VolunteerQuestionUpdateOneRequiredWithoutEditsNestedInputSchema } from './VolunteerQuestionUpdateOneRequiredWithoutEditsNestedInputSchema';
import { PersonUpdateOneRequiredWithoutVolunteerQuestionEditsNestedInputSchema } from './PersonUpdateOneRequiredWithoutVolunteerQuestionEditsNestedInputSchema';

export const VolunteerQuestionEditsUpdateInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUpdateInput> = z.object({
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  question: z.lazy(() => VolunteerQuestionUpdateOneRequiredWithoutEditsNestedInputSchema).optional(),
  editor: z.lazy(() => PersonUpdateOneRequiredWithoutVolunteerQuestionEditsNestedInputSchema).optional()
}).strict();

export default VolunteerQuestionEditsUpdateInputSchema;
