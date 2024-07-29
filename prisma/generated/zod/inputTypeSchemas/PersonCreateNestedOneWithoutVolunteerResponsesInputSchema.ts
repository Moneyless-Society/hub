import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutVolunteerResponsesInputSchema } from './PersonCreateWithoutVolunteerResponsesInputSchema';
import { PersonUncheckedCreateWithoutVolunteerResponsesInputSchema } from './PersonUncheckedCreateWithoutVolunteerResponsesInputSchema';
import { PersonCreateOrConnectWithoutVolunteerResponsesInputSchema } from './PersonCreateOrConnectWithoutVolunteerResponsesInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutVolunteerResponsesInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutVolunteerResponsesInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutVolunteerResponsesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutVolunteerResponsesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutVolunteerResponsesInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutVolunteerResponsesInputSchema;
