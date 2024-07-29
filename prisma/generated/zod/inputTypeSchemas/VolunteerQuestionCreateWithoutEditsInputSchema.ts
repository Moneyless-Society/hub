import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionCreatetextInputSchema } from './VolunteerQuestionCreatetextInputSchema';
import { VolunteerResponseCreateNestedManyWithoutQuestionInputSchema } from './VolunteerResponseCreateNestedManyWithoutQuestionInputSchema';

export const VolunteerQuestionCreateWithoutEditsInputSchema: z.ZodType<Prisma.VolunteerQuestionCreateWithoutEditsInput> = z.object({
  text: z.union([ z.lazy(() => VolunteerQuestionCreatetextInputSchema),z.string().array() ]).optional(),
  updatedAt: z.coerce.date().optional(),
  responses: z.lazy(() => VolunteerResponseCreateNestedManyWithoutQuestionInputSchema).optional()
}).strict();

export default VolunteerQuestionCreateWithoutEditsInputSchema;
