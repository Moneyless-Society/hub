import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutVolunteerQuestionEditsInputSchema } from './PersonCreateWithoutVolunteerQuestionEditsInputSchema';
import { PersonUncheckedCreateWithoutVolunteerQuestionEditsInputSchema } from './PersonUncheckedCreateWithoutVolunteerQuestionEditsInputSchema';
import { PersonCreateOrConnectWithoutVolunteerQuestionEditsInputSchema } from './PersonCreateOrConnectWithoutVolunteerQuestionEditsInputSchema';
import { PersonUpsertWithoutVolunteerQuestionEditsInputSchema } from './PersonUpsertWithoutVolunteerQuestionEditsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutVolunteerQuestionEditsInputSchema } from './PersonUpdateToOneWithWhereWithoutVolunteerQuestionEditsInputSchema';
import { PersonUpdateWithoutVolunteerQuestionEditsInputSchema } from './PersonUpdateWithoutVolunteerQuestionEditsInputSchema';
import { PersonUncheckedUpdateWithoutVolunteerQuestionEditsInputSchema } from './PersonUncheckedUpdateWithoutVolunteerQuestionEditsInputSchema';

export const PersonUpdateOneRequiredWithoutVolunteerQuestionEditsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutVolunteerQuestionEditsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutVolunteerQuestionEditsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutVolunteerQuestionEditsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutVolunteerQuestionEditsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutVolunteerQuestionEditsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutVolunteerQuestionEditsInputSchema),z.lazy(() => PersonUpdateWithoutVolunteerQuestionEditsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutVolunteerQuestionEditsInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutVolunteerQuestionEditsNestedInputSchema;
