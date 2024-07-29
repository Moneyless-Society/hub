import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionCreateManyEthicInputSchema } from './EthicVersionCreateManyEthicInputSchema';

export const EthicVersionCreateManyEthicInputEnvelopeSchema: z.ZodType<Prisma.EthicVersionCreateManyEthicInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EthicVersionCreateManyEthicInputSchema),z.lazy(() => EthicVersionCreateManyEthicInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EthicVersionCreateManyEthicInputEnvelopeSchema;
