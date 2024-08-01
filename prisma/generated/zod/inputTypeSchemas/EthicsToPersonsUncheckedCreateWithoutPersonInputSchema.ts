import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsCreaterankingInputSchema } from './EthicsToPersonsCreaterankingInputSchema';

export const EthicsToPersonsUncheckedCreateWithoutPersonInputSchema: z.ZodType<Prisma.EthicsToPersonsUncheckedCreateWithoutPersonInput> = z.object({
  ethicId: z.number().int(),
  ranking: z.union([ z.lazy(() => EthicsToPersonsCreaterankingInputSchema),z.number().int().array() ]).optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default EthicsToPersonsUncheckedCreateWithoutPersonInputSchema;
