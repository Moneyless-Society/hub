import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { EthicsToPersonsUpdaterankingInputSchema } from './EthicsToPersonsUpdaterankingInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const EthicsToPersonsUncheckedUpdateWithoutPersonInputSchema: z.ZodType<Prisma.EthicsToPersonsUncheckedUpdateWithoutPersonInput> = z.object({
  ethicId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ranking: z.union([ z.lazy(() => EthicsToPersonsUpdaterankingInputSchema),z.number().int().array() ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default EthicsToPersonsUncheckedUpdateWithoutPersonInputSchema;
