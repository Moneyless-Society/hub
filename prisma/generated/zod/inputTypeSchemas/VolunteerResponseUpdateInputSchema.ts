import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { VolunteerQuestionUpdateOneRequiredWithoutResponsesNestedInputSchema } from './VolunteerQuestionUpdateOneRequiredWithoutResponsesNestedInputSchema';
import { PersonUpdateOneRequiredWithoutVolunteerResponsesNestedInputSchema } from './PersonUpdateOneRequiredWithoutVolunteerResponsesNestedInputSchema';
import { PersonUpdateOneWithoutVolunterResponsesImportedNestedInputSchema } from './PersonUpdateOneWithoutVolunterResponsesImportedNestedInputSchema';

export const VolunteerResponseUpdateInputSchema: z.ZodType<Prisma.VolunteerResponseUpdateInput> = z.object({
  answer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  submittedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  question: z.lazy(() => VolunteerQuestionUpdateOneRequiredWithoutResponsesNestedInputSchema).optional(),
  responder: z.lazy(() => PersonUpdateOneRequiredWithoutVolunteerResponsesNestedInputSchema).optional(),
  importedBy: z.lazy(() => PersonUpdateOneWithoutVolunterResponsesImportedNestedInputSchema).optional()
}).strict();

export default VolunteerResponseUpdateInputSchema;
