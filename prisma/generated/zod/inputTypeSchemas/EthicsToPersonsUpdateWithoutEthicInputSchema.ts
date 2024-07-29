import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsUpdaterankingInputSchema } from './EthicsToPersonsUpdaterankingInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { PersonUpdateOneRequiredWithoutValueRankingsNestedInputSchema } from './PersonUpdateOneRequiredWithoutValueRankingsNestedInputSchema';

export const EthicsToPersonsUpdateWithoutEthicInputSchema: z.ZodType<Prisma.EthicsToPersonsUpdateWithoutEthicInput> = z.object({
  ranking: z.union([ z.lazy(() => EthicsToPersonsUpdaterankingInputSchema),z.number().int().array() ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  person: z.lazy(() => PersonUpdateOneRequiredWithoutValueRankingsNestedInputSchema).optional()
}).strict();

export default EthicsToPersonsUpdateWithoutEthicInputSchema;
