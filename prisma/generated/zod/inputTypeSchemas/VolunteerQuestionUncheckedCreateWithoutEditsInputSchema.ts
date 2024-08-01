import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionCreatetextInputSchema } from './VolunteerQuestionCreatetextInputSchema';
import { VolunteerResponseUncheckedCreateNestedManyWithoutQuestionInputSchema } from './VolunteerResponseUncheckedCreateNestedManyWithoutQuestionInputSchema';

export const VolunteerQuestionUncheckedCreateWithoutEditsInputSchema: z.ZodType<Prisma.VolunteerQuestionUncheckedCreateWithoutEditsInput> = z.object({
  id: z.number().int().optional(),
  text: z.union([ z.lazy(() => VolunteerQuestionCreatetextInputSchema),z.string().array() ]).optional(),
  updatedAt: z.coerce.date().optional(),
  responses: z.lazy(() => VolunteerResponseUncheckedCreateNestedManyWithoutQuestionInputSchema).optional()
}).strict();

export default VolunteerQuestionUncheckedCreateWithoutEditsInputSchema;
