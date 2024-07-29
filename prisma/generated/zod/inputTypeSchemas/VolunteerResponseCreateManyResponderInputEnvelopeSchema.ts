import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseCreateManyResponderInputSchema } from './VolunteerResponseCreateManyResponderInputSchema';

export const VolunteerResponseCreateManyResponderInputEnvelopeSchema: z.ZodType<Prisma.VolunteerResponseCreateManyResponderInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => VolunteerResponseCreateManyResponderInputSchema),z.lazy(() => VolunteerResponseCreateManyResponderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default VolunteerResponseCreateManyResponderInputEnvelopeSchema;
