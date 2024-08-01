import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseCreateManyQuestionInputSchema } from './VolunteerResponseCreateManyQuestionInputSchema';

export const VolunteerResponseCreateManyQuestionInputEnvelopeSchema: z.ZodType<Prisma.VolunteerResponseCreateManyQuestionInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => VolunteerResponseCreateManyQuestionInputSchema),z.lazy(() => VolunteerResponseCreateManyQuestionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default VolunteerResponseCreateManyQuestionInputEnvelopeSchema;
