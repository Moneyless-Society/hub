import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutVolunteerQuestionEditsInputSchema } from './PersonUpdateWithoutVolunteerQuestionEditsInputSchema';
import { PersonUncheckedUpdateWithoutVolunteerQuestionEditsInputSchema } from './PersonUncheckedUpdateWithoutVolunteerQuestionEditsInputSchema';

export const PersonUpdateToOneWithWhereWithoutVolunteerQuestionEditsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutVolunteerQuestionEditsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutVolunteerQuestionEditsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutVolunteerQuestionEditsInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutVolunteerQuestionEditsInputSchema;
