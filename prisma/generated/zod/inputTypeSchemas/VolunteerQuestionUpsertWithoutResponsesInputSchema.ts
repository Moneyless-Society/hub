import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionUpdateWithoutResponsesInputSchema } from './VolunteerQuestionUpdateWithoutResponsesInputSchema';
import { VolunteerQuestionUncheckedUpdateWithoutResponsesInputSchema } from './VolunteerQuestionUncheckedUpdateWithoutResponsesInputSchema';
import { VolunteerQuestionCreateWithoutResponsesInputSchema } from './VolunteerQuestionCreateWithoutResponsesInputSchema';
import { VolunteerQuestionUncheckedCreateWithoutResponsesInputSchema } from './VolunteerQuestionUncheckedCreateWithoutResponsesInputSchema';
import { VolunteerQuestionWhereInputSchema } from './VolunteerQuestionWhereInputSchema';

export const VolunteerQuestionUpsertWithoutResponsesInputSchema: z.ZodType<Prisma.VolunteerQuestionUpsertWithoutResponsesInput> = z.object({
  update: z.union([ z.lazy(() => VolunteerQuestionUpdateWithoutResponsesInputSchema),z.lazy(() => VolunteerQuestionUncheckedUpdateWithoutResponsesInputSchema) ]),
  create: z.union([ z.lazy(() => VolunteerQuestionCreateWithoutResponsesInputSchema),z.lazy(() => VolunteerQuestionUncheckedCreateWithoutResponsesInputSchema) ]),
  where: z.lazy(() => VolunteerQuestionWhereInputSchema).optional()
}).strict();

export default VolunteerQuestionUpsertWithoutResponsesInputSchema;
