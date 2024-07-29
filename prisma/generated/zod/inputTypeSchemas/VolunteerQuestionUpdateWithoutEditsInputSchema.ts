import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionUpdatetextInputSchema } from './VolunteerQuestionUpdatetextInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { VolunteerResponseUpdateManyWithoutQuestionNestedInputSchema } from './VolunteerResponseUpdateManyWithoutQuestionNestedInputSchema';

export const VolunteerQuestionUpdateWithoutEditsInputSchema: z.ZodType<Prisma.VolunteerQuestionUpdateWithoutEditsInput> = z.object({
  text: z.union([ z.lazy(() => VolunteerQuestionUpdatetextInputSchema),z.string().array() ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  responses: z.lazy(() => VolunteerResponseUpdateManyWithoutQuestionNestedInputSchema).optional()
}).strict();

export default VolunteerQuestionUpdateWithoutEditsInputSchema;
