import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionCreatetextInputSchema } from './VolunteerQuestionCreatetextInputSchema';
import { VolunteerQuestionEditsUncheckedCreateNestedManyWithoutQuestionInputSchema } from './VolunteerQuestionEditsUncheckedCreateNestedManyWithoutQuestionInputSchema';

export const VolunteerQuestionUncheckedCreateWithoutResponsesInputSchema: z.ZodType<Prisma.VolunteerQuestionUncheckedCreateWithoutResponsesInput> = z.object({
  id: z.number().int().optional(),
  text: z.union([ z.lazy(() => VolunteerQuestionCreatetextInputSchema),z.string().array() ]).optional(),
  updatedAt: z.coerce.date().optional(),
  edits: z.lazy(() => VolunteerQuestionEditsUncheckedCreateNestedManyWithoutQuestionInputSchema).optional()
}).strict();

export default VolunteerQuestionUncheckedCreateWithoutResponsesInputSchema;
