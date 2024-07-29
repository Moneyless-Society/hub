import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsUpdaterankingInputSchema } from './EthicsToPersonsUpdaterankingInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { EthicUpdateOneRequiredWithoutResponsesNestedInputSchema } from './EthicUpdateOneRequiredWithoutResponsesNestedInputSchema';
import { PersonUpdateOneRequiredWithoutValueRankingsNestedInputSchema } from './PersonUpdateOneRequiredWithoutValueRankingsNestedInputSchema';

export const EthicsToPersonsUpdateInputSchema: z.ZodType<Prisma.EthicsToPersonsUpdateInput> = z.object({
  ranking: z.union([ z.lazy(() => EthicsToPersonsUpdaterankingInputSchema),z.number().int().array() ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ethic: z.lazy(() => EthicUpdateOneRequiredWithoutResponsesNestedInputSchema).optional(),
  person: z.lazy(() => PersonUpdateOneRequiredWithoutValueRankingsNestedInputSchema).optional()
}).strict();

export default EthicsToPersonsUpdateInputSchema;
