import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { EthicsToPersonsUpdaterankingInputSchema } from './EthicsToPersonsUpdaterankingInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const EthicsToPersonsUncheckedUpdateWithoutEthicInputSchema: z.ZodType<Prisma.EthicsToPersonsUncheckedUpdateWithoutEthicInput> = z.object({
  personId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ranking: z.union([ z.lazy(() => EthicsToPersonsUpdaterankingInputSchema),z.number().int().array() ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default EthicsToPersonsUncheckedUpdateWithoutEthicInputSchema;
