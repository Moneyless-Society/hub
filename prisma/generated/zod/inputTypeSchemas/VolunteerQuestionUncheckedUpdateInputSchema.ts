import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { VolunteerQuestionUpdatetextInputSchema } from './VolunteerQuestionUpdatetextInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { VolunteerResponseUncheckedUpdateManyWithoutQuestionNestedInputSchema } from './VolunteerResponseUncheckedUpdateManyWithoutQuestionNestedInputSchema';
import { VolunteerQuestionEditsUncheckedUpdateManyWithoutQuestionNestedInputSchema } from './VolunteerQuestionEditsUncheckedUpdateManyWithoutQuestionNestedInputSchema';

export const VolunteerQuestionUncheckedUpdateInputSchema: z.ZodType<Prisma.VolunteerQuestionUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.lazy(() => VolunteerQuestionUpdatetextInputSchema),z.string().array() ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  responses: z.lazy(() => VolunteerResponseUncheckedUpdateManyWithoutQuestionNestedInputSchema).optional(),
  edits: z.lazy(() => VolunteerQuestionEditsUncheckedUpdateManyWithoutQuestionNestedInputSchema).optional()
}).strict();

export default VolunteerQuestionUncheckedUpdateInputSchema;
