import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsUpdaterankingInputSchema } from './EthicsToPersonsUpdaterankingInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const EthicsToPersonsUpdateManyMutationInputSchema: z.ZodType<Prisma.EthicsToPersonsUpdateManyMutationInput> = z.object({
  ranking: z.union([ z.lazy(() => EthicsToPersonsUpdaterankingInputSchema),z.number().int().array() ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default EthicsToPersonsUpdateManyMutationInputSchema;
