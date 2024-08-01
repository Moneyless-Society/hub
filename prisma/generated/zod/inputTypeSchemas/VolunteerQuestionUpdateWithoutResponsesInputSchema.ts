import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionUpdatetextInputSchema } from './VolunteerQuestionUpdatetextInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { VolunteerQuestionEditsUpdateManyWithoutQuestionNestedInputSchema } from './VolunteerQuestionEditsUpdateManyWithoutQuestionNestedInputSchema';

export const VolunteerQuestionUpdateWithoutResponsesInputSchema: z.ZodType<Prisma.VolunteerQuestionUpdateWithoutResponsesInput> = z.object({
  text: z.union([ z.lazy(() => VolunteerQuestionUpdatetextInputSchema),z.string().array() ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  edits: z.lazy(() => VolunteerQuestionEditsUpdateManyWithoutQuestionNestedInputSchema).optional()
}).strict();

export default VolunteerQuestionUpdateWithoutResponsesInputSchema;
