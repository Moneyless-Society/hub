import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsCreateManyPersonInputSchema } from './EthicsToPersonsCreateManyPersonInputSchema';

export const EthicsToPersonsCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.EthicsToPersonsCreateManyPersonInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EthicsToPersonsCreateManyPersonInputSchema),z.lazy(() => EthicsToPersonsCreateManyPersonInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default EthicsToPersonsCreateManyPersonInputEnvelopeSchema;
