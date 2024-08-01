import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionEditsCreateManyQuestionInputSchema } from './VolunteerQuestionEditsCreateManyQuestionInputSchema';

export const VolunteerQuestionEditsCreateManyQuestionInputEnvelopeSchema: z.ZodType<Prisma.VolunteerQuestionEditsCreateManyQuestionInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => VolunteerQuestionEditsCreateManyQuestionInputSchema),z.lazy(() => VolunteerQuestionEditsCreateManyQuestionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default VolunteerQuestionEditsCreateManyQuestionInputEnvelopeSchema;
