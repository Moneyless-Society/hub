import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { VolunteerQuestionUpdatetextInputSchema } from './VolunteerQuestionUpdatetextInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { VolunteerQuestionEditsUncheckedUpdateManyWithoutQuestionNestedInputSchema } from './VolunteerQuestionEditsUncheckedUpdateManyWithoutQuestionNestedInputSchema';

export const VolunteerQuestionUncheckedUpdateWithoutResponsesInputSchema: z.ZodType<Prisma.VolunteerQuestionUncheckedUpdateWithoutResponsesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.lazy(() => VolunteerQuestionUpdatetextInputSchema),z.string().array() ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  edits: z.lazy(() => VolunteerQuestionEditsUncheckedUpdateManyWithoutQuestionNestedInputSchema).optional()
}).strict();

export default VolunteerQuestionUncheckedUpdateWithoutResponsesInputSchema;
