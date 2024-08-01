import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseWhereUniqueInputSchema } from './VolunteerResponseWhereUniqueInputSchema';
import { VolunteerResponseCreateWithoutQuestionInputSchema } from './VolunteerResponseCreateWithoutQuestionInputSchema';
import { VolunteerResponseUncheckedCreateWithoutQuestionInputSchema } from './VolunteerResponseUncheckedCreateWithoutQuestionInputSchema';

export const VolunteerResponseCreateOrConnectWithoutQuestionInputSchema: z.ZodType<Prisma.VolunteerResponseCreateOrConnectWithoutQuestionInput> = z.object({
  where: z.lazy(() => VolunteerResponseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VolunteerResponseCreateWithoutQuestionInputSchema),z.lazy(() => VolunteerResponseUncheckedCreateWithoutQuestionInputSchema) ]),
}).strict();

export default VolunteerResponseCreateOrConnectWithoutQuestionInputSchema;
