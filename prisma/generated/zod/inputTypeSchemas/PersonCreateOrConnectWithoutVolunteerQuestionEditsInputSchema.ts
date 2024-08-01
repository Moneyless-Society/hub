import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutVolunteerQuestionEditsInputSchema } from './PersonCreateWithoutVolunteerQuestionEditsInputSchema';
import { PersonUncheckedCreateWithoutVolunteerQuestionEditsInputSchema } from './PersonUncheckedCreateWithoutVolunteerQuestionEditsInputSchema';

export const PersonCreateOrConnectWithoutVolunteerQuestionEditsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutVolunteerQuestionEditsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutVolunteerQuestionEditsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutVolunteerQuestionEditsInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutVolunteerQuestionEditsInputSchema;
