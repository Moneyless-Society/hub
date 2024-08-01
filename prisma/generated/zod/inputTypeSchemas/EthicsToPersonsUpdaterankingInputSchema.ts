import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EthicsToPersonsUpdaterankingInputSchema: z.ZodType<Prisma.EthicsToPersonsUpdaterankingInput> = z.object({
  set: z.number().array().optional(),
  push: z.union([ z.number(),z.number().array() ]).optional(),
}).strict();

export default EthicsToPersonsUpdaterankingInputSchema;
