import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsCreateManyPersonInputSchema } from './EthicVersionsToPersonsCreateManyPersonInputSchema';

export const EthicVersionsToPersonsCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.EthicVersionsToPersonsCreateManyPersonInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EthicVersionsToPersonsCreateManyPersonInputSchema),z.lazy(() => EthicVersionsToPersonsCreateManyPersonInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EthicVersionsToPersonsCreateManyPersonInputEnvelopeSchema;
