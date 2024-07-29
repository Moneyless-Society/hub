import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AvailabilityCreateManyPersonInputSchema } from './AvailabilityCreateManyPersonInputSchema';

export const AvailabilityCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.AvailabilityCreateManyPersonInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AvailabilityCreateManyPersonInputSchema),z.lazy(() => AvailabilityCreateManyPersonInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AvailabilityCreateManyPersonInputEnvelopeSchema;
