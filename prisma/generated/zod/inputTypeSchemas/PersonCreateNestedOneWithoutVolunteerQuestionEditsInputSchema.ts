import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutVolunteerQuestionEditsInputSchema } from './PersonCreateWithoutVolunteerQuestionEditsInputSchema';
import { PersonUncheckedCreateWithoutVolunteerQuestionEditsInputSchema } from './PersonUncheckedCreateWithoutVolunteerQuestionEditsInputSchema';
import { PersonCreateOrConnectWithoutVolunteerQuestionEditsInputSchema } from './PersonCreateOrConnectWithoutVolunteerQuestionEditsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutVolunteerQuestionEditsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutVolunteerQuestionEditsInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutVolunteerQuestionEditsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutVolunteerQuestionEditsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutVolunteerQuestionEditsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutVolunteerQuestionEditsInputSchema;
