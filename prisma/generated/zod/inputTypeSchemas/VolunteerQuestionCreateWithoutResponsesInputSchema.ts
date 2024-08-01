import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionCreatetextInputSchema } from './VolunteerQuestionCreatetextInputSchema';
import { VolunteerQuestionEditsCreateNestedManyWithoutQuestionInputSchema } from './VolunteerQuestionEditsCreateNestedManyWithoutQuestionInputSchema';

export const VolunteerQuestionCreateWithoutResponsesInputSchema: z.ZodType<Prisma.VolunteerQuestionCreateWithoutResponsesInput> = z.object({
  text: z.union([ z.lazy(() => VolunteerQuestionCreatetextInputSchema),z.string().array() ]).optional(),
  updatedAt: z.coerce.date().optional(),
  edits: z.lazy(() => VolunteerQuestionEditsCreateNestedManyWithoutQuestionInputSchema).optional()
}).strict();

export default VolunteerQuestionCreateWithoutResponsesInputSchema;
