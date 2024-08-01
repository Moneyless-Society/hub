import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { EthicsToPersonsUpdaterankingInputSchema } from './EthicsToPersonsUpdaterankingInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const EthicsToPersonsUncheckedUpdateInputSchema: z.ZodType<Prisma.EthicsToPersonsUncheckedUpdateInput> = z.object({
  ethicId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  personId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ranking: z.union([ z.lazy(() => EthicsToPersonsUpdaterankingInputSchema),z.number().int().array() ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default EthicsToPersonsUncheckedUpdateInputSchema;
