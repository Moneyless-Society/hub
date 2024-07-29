import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsCreateManyEthicInputSchema } from './EthicsToPersonsCreateManyEthicInputSchema';

export const EthicsToPersonsCreateManyEthicInputEnvelopeSchema: z.ZodType<Prisma.EthicsToPersonsCreateManyEthicInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EthicsToPersonsCreateManyEthicInputSchema),z.lazy(() => EthicsToPersonsCreateManyEthicInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EthicsToPersonsCreateManyEthicInputEnvelopeSchema;
