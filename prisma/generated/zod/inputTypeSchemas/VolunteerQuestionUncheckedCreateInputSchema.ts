import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionCreatetextInputSchema } from './VolunteerQuestionCreatetextInputSchema';
import { VolunteerResponseUncheckedCreateNestedManyWithoutQuestionInputSchema } from './VolunteerResponseUncheckedCreateNestedManyWithoutQuestionInputSchema';
import { VolunteerQuestionEditsUncheckedCreateNestedManyWithoutQuestionInputSchema } from './VolunteerQuestionEditsUncheckedCreateNestedManyWithoutQuestionInputSchema';

export const VolunteerQuestionUncheckedCreateInputSchema: z.ZodType<Prisma.VolunteerQuestionUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  text: z.union([ z.lazy(() => VolunteerQuestionCreatetextInputSchema),z.string().array() ]).optional(),
  updatedAt: z.coerce.date().optional(),
  responses: z.lazy(() => VolunteerResponseUncheckedCreateNestedManyWithoutQuestionInputSchema).optional(),
  edits: z.lazy(() => VolunteerQuestionEditsUncheckedCreateNestedManyWithoutQuestionInputSchema).optional()
}).strict();

export default VolunteerQuestionUncheckedCreateInputSchema;
