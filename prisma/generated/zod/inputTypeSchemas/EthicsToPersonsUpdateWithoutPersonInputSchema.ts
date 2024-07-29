import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsUpdaterankingInputSchema } from './EthicsToPersonsUpdaterankingInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { EthicUpdateOneRequiredWithoutResponsesNestedInputSchema } from './EthicUpdateOneRequiredWithoutResponsesNestedInputSchema';

export const EthicsToPersonsUpdateWithoutPersonInputSchema: z.ZodType<Prisma.EthicsToPersonsUpdateWithoutPersonInput> = z.object({
  ranking: z.union([ z.lazy(() => EthicsToPersonsUpdaterankingInputSchema),z.number().int().array() ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ethic: z.lazy(() => EthicUpdateOneRequiredWithoutResponsesNestedInputSchema).optional()
}).strict();

export default EthicsToPersonsUpdateWithoutPersonInputSchema;
