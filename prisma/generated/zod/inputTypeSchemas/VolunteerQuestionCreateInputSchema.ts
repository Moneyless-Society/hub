import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionCreatetextInputSchema } from './VolunteerQuestionCreatetextInputSchema';
import { VolunteerResponseCreateNestedManyWithoutQuestionInputSchema } from './VolunteerResponseCreateNestedManyWithoutQuestionInputSchema';
import { VolunteerQuestionEditsCreateNestedManyWithoutQuestionInputSchema } from './VolunteerQuestionEditsCreateNestedManyWithoutQuestionInputSchema';

export const VolunteerQuestionCreateInputSchema: z.ZodType<Prisma.VolunteerQuestionCreateInput> = z.object({
  text: z.union([ z.lazy(() => VolunteerQuestionCreatetextInputSchema),z.string().array() ]).optional(),
  updatedAt: z.coerce.date().optional(),
  responses: z.lazy(() => VolunteerResponseCreateNestedManyWithoutQuestionInputSchema).optional(),
  edits: z.lazy(() => VolunteerQuestionEditsCreateNestedManyWithoutQuestionInputSchema).optional()
}).strict();

export default VolunteerQuestionCreateInputSchema;
