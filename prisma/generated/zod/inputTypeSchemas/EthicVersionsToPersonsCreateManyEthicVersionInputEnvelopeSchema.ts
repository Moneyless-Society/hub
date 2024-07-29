import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsCreateManyEthicVersionInputSchema } from './EthicVersionsToPersonsCreateManyEthicVersionInputSchema';

export const EthicVersionsToPersonsCreateManyEthicVersionInputEnvelopeSchema: z.ZodType<Prisma.EthicVersionsToPersonsCreateManyEthicVersionInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EthicVersionsToPersonsCreateManyEthicVersionInputSchema),z.lazy(() => EthicVersionsToPersonsCreateManyEthicVersionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EthicVersionsToPersonsCreateManyEthicVersionInputEnvelopeSchema;
