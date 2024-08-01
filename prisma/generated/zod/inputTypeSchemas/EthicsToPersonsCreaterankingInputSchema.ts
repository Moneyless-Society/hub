import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EthicsToPersonsCreaterankingInputSchema: z.ZodType<Prisma.EthicsToPersonsCreaterankingInput> = z.object({
  set: z.number().array()
}).strict();

export default EthicsToPersonsCreaterankingInputSchema;
