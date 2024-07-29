import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutVolunteerResponsesInputSchema } from './PersonUpdateWithoutVolunteerResponsesInputSchema';
import { PersonUncheckedUpdateWithoutVolunteerResponsesInputSchema } from './PersonUncheckedUpdateWithoutVolunteerResponsesInputSchema';

export const PersonUpdateToOneWithWhereWithoutVolunteerResponsesInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutVolunteerResponsesInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutVolunteerResponsesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutVolunteerResponsesInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutVolunteerResponsesInputSchema;
