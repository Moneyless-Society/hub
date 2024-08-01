import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsCreaterankingInputSchema } from './EthicsToPersonsCreaterankingInputSchema';

export const EthicsToPersonsUncheckedCreateInputSchema: z.ZodType<Prisma.EthicsToPersonsUncheckedCreateInput> = z.object({
  ethicId: z.number().int(),
  personId: z.string(),
  ranking: z.union([ z.lazy(() => EthicsToPersonsCreaterankingInputSchema),z.number().int().array() ]).optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default EthicsToPersonsUncheckedCreateInputSchema;
