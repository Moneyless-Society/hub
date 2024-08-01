import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutVolunteerResponsesInputSchema } from './PersonCreateWithoutVolunteerResponsesInputSchema';
import { PersonUncheckedCreateWithoutVolunteerResponsesInputSchema } from './PersonUncheckedCreateWithoutVolunteerResponsesInputSchema';
import { PersonCreateOrConnectWithoutVolunteerResponsesInputSchema } from './PersonCreateOrConnectWithoutVolunteerResponsesInputSchema';
import { PersonUpsertWithoutVolunteerResponsesInputSchema } from './PersonUpsertWithoutVolunteerResponsesInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutVolunteerResponsesInputSchema } from './PersonUpdateToOneWithWhereWithoutVolunteerResponsesInputSchema';
import { PersonUpdateWithoutVolunteerResponsesInputSchema } from './PersonUpdateWithoutVolunteerResponsesInputSchema';
import { PersonUncheckedUpdateWithoutVolunteerResponsesInputSchema } from './PersonUncheckedUpdateWithoutVolunteerResponsesInputSchema';

export const PersonUpdateOneRequiredWithoutVolunteerResponsesNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutVolunteerResponsesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutVolunteerResponsesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutVolunteerResponsesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutVolunteerResponsesInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutVolunteerResponsesInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutVolunteerResponsesInputSchema),z.lazy(() => PersonUpdateWithoutVolunteerResponsesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutVolunteerResponsesInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutVolunteerResponsesNestedInputSchema;
