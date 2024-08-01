import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { PersonUpdateOneRequiredWithoutVolunteerResponsesNestedInputSchema } from './PersonUpdateOneRequiredWithoutVolunteerResponsesNestedInputSchema';
import { PersonUpdateOneWithoutVolunterResponsesImportedNestedInputSchema } from './PersonUpdateOneWithoutVolunterResponsesImportedNestedInputSchema';

export const VolunteerResponseUpdateWithoutQuestionInputSchema: z.ZodType<Prisma.VolunteerResponseUpdateWithoutQuestionInput> = z.object({
  answer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  submittedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  responder: z.lazy(() => PersonUpdateOneRequiredWithoutVolunteerResponsesNestedInputSchema).optional(),
  importedBy: z.lazy(() => PersonUpdateOneWithoutVolunterResponsesImportedNestedInputSchema).optional()
}).strict();

export default VolunteerResponseUpdateWithoutQuestionInputSchema;
