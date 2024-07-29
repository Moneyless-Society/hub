import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionCreateManySubmitterInputSchema } from './EthicVersionCreateManySubmitterInputSchema';

export const EthicVersionCreateManySubmitterInputEnvelopeSchema: z.ZodType<Prisma.EthicVersionCreateManySubmitterInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EthicVersionCreateManySubmitterInputSchema),z.lazy(() => EthicVersionCreateManySubmitterInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EthicVersionCreateManySubmitterInputEnvelopeSchema;
