import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonUpdateWithoutVolunteerResponsesInputSchema } from './PersonUpdateWithoutVolunteerResponsesInputSchema';
import { PersonUncheckedUpdateWithoutVolunteerResponsesInputSchema } from './PersonUncheckedUpdateWithoutVolunteerResponsesInputSchema';
import { PersonCreateWithoutVolunteerResponsesInputSchema } from './PersonCreateWithoutVolunteerResponsesInputSchema';
import { PersonUncheckedCreateWithoutVolunteerResponsesInputSchema } from './PersonUncheckedCreateWithoutVolunteerResponsesInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutVolunteerResponsesInputSchema: z.ZodType<Prisma.PersonUpsertWithoutVolunteerResponsesInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutVolunteerResponsesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutVolunteerResponsesInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutVolunteerResponsesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutVolunteerResponsesInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutVolunteerResponsesInputSchema;
