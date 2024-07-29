import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionWhereUniqueInputSchema } from './VolunteerQuestionWhereUniqueInputSchema';
import { VolunteerQuestionCreateWithoutResponsesInputSchema } from './VolunteerQuestionCreateWithoutResponsesInputSchema';
import { VolunteerQuestionUncheckedCreateWithoutResponsesInputSchema } from './VolunteerQuestionUncheckedCreateWithoutResponsesInputSchema';

export const VolunteerQuestionCreateOrConnectWithoutResponsesInputSchema: z.ZodType<Prisma.VolunteerQuestionCreateOrConnectWithoutResponsesInput> = z.object({
  where: z.lazy(() => VolunteerQuestionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VolunteerQuestionCreateWithoutResponsesInputSchema),z.lazy(() => VolunteerQuestionUncheckedCreateWithoutResponsesInputSchema) ]),
}).strict();

export default VolunteerQuestionCreateOrConnectWithoutResponsesInputSchema;
