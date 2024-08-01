import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutVolunteerResponsesInputSchema } from './PersonCreateWithoutVolunteerResponsesInputSchema';
import { PersonUncheckedCreateWithoutVolunteerResponsesInputSchema } from './PersonUncheckedCreateWithoutVolunteerResponsesInputSchema';

export const PersonCreateOrConnectWithoutVolunteerResponsesInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutVolunteerResponsesInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutVolunteerResponsesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutVolunteerResponsesInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutVolunteerResponsesInputSchema;
