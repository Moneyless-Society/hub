import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionUpdatetextInputSchema } from './VolunteerQuestionUpdatetextInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { VolunteerResponseUpdateManyWithoutQuestionNestedInputSchema } from './VolunteerResponseUpdateManyWithoutQuestionNestedInputSchema';
import { VolunteerQuestionEditsUpdateManyWithoutQuestionNestedInputSchema } from './VolunteerQuestionEditsUpdateManyWithoutQuestionNestedInputSchema';

export const VolunteerQuestionUpdateInputSchema: z.ZodType<Prisma.VolunteerQuestionUpdateInput> = z.object({
  text: z.union([ z.lazy(() => VolunteerQuestionUpdatetextInputSchema),z.string().array() ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  responses: z.lazy(() => VolunteerResponseUpdateManyWithoutQuestionNestedInputSchema).optional(),
  edits: z.lazy(() => VolunteerQuestionEditsUpdateManyWithoutQuestionNestedInputSchema).optional()
}).strict();

export default VolunteerQuestionUpdateInputSchema;
