import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseCreateManyImportedByInputSchema } from './VolunteerResponseCreateManyImportedByInputSchema';

export const VolunteerResponseCreateManyImportedByInputEnvelopeSchema: z.ZodType<Prisma.VolunteerResponseCreateManyImportedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => VolunteerResponseCreateManyImportedByInputSchema),z.lazy(() => VolunteerResponseCreateManyImportedByInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default VolunteerResponseCreateManyImportedByInputEnvelopeSchema;
