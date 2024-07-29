import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionWhereInputSchema } from './VolunteerQuestionWhereInputSchema';
import { VolunteerQuestionUpdateWithoutResponsesInputSchema } from './VolunteerQuestionUpdateWithoutResponsesInputSchema';
import { VolunteerQuestionUncheckedUpdateWithoutResponsesInputSchema } from './VolunteerQuestionUncheckedUpdateWithoutResponsesInputSchema';

export const VolunteerQuestionUpdateToOneWithWhereWithoutResponsesInputSchema: z.ZodType<Prisma.VolunteerQuestionUpdateToOneWithWhereWithoutResponsesInput> = z.object({
  where: z.lazy(() => VolunteerQuestionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => VolunteerQuestionUpdateWithoutResponsesInputSchema),z.lazy(() => VolunteerQuestionUncheckedUpdateWithoutResponsesInputSchema) ]),
}).strict();

export default VolunteerQuestionUpdateToOneWithWhereWithoutResponsesInputSchema;
