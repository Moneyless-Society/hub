import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { PersonUpdateOneRequiredWithoutVolunteerQuestionEditsNestedInputSchema } from './PersonUpdateOneRequiredWithoutVolunteerQuestionEditsNestedInputSchema';

export const VolunteerQuestionEditsUpdateWithoutQuestionInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUpdateWithoutQuestionInput> = z.object({
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  editor: z.lazy(() => PersonUpdateOneRequiredWithoutVolunteerQuestionEditsNestedInputSchema).optional()
}).strict();

export default VolunteerQuestionEditsUpdateWithoutQuestionInputSchema;
