import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonUpdateWithoutVolunteerQuestionEditsInputSchema } from './PersonUpdateWithoutVolunteerQuestionEditsInputSchema';
import { PersonUncheckedUpdateWithoutVolunteerQuestionEditsInputSchema } from './PersonUncheckedUpdateWithoutVolunteerQuestionEditsInputSchema';
import { PersonCreateWithoutVolunteerQuestionEditsInputSchema } from './PersonCreateWithoutVolunteerQuestionEditsInputSchema';
import { PersonUncheckedCreateWithoutVolunteerQuestionEditsInputSchema } from './PersonUncheckedCreateWithoutVolunteerQuestionEditsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutVolunteerQuestionEditsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutVolunteerQuestionEditsInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutVolunteerQuestionEditsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutVolunteerQuestionEditsInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutVolunteerQuestionEditsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutVolunteerQuestionEditsInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutVolunteerQuestionEditsInputSchema;
