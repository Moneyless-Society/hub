import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionCreateWithoutResponsesInputSchema } from './VolunteerQuestionCreateWithoutResponsesInputSchema';
import { VolunteerQuestionUncheckedCreateWithoutResponsesInputSchema } from './VolunteerQuestionUncheckedCreateWithoutResponsesInputSchema';
import { VolunteerQuestionCreateOrConnectWithoutResponsesInputSchema } from './VolunteerQuestionCreateOrConnectWithoutResponsesInputSchema';
import { VolunteerQuestionWhereUniqueInputSchema } from './VolunteerQuestionWhereUniqueInputSchema';

export const VolunteerQuestionCreateNestedOneWithoutResponsesInputSchema: z.ZodType<Prisma.VolunteerQuestionCreateNestedOneWithoutResponsesInput> = z.object({
  create: z.union([ z.lazy(() => VolunteerQuestionCreateWithoutResponsesInputSchema),z.lazy(() => VolunteerQuestionUncheckedCreateWithoutResponsesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VolunteerQuestionCreateOrConnectWithoutResponsesInputSchema).optional(),
  connect: z.lazy(() => VolunteerQuestionWhereUniqueInputSchema).optional()
}).strict();

export default VolunteerQuestionCreateNestedOneWithoutResponsesInputSchema;
