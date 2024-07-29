import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { EthicVersionsToPersonsUncheckedUpdateManyWithoutEthicVersionNestedInputSchema } from './EthicVersionsToPersonsUncheckedUpdateManyWithoutEthicVersionNestedInputSchema';

export const EthicVersionUncheckedUpdateWithoutSubmitterInputSchema: z.ZodType<Prisma.EthicVersionUncheckedUpdateWithoutSubmitterInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ethicId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  responses: z.lazy(() => EthicVersionsToPersonsUncheckedUpdateManyWithoutEthicVersionNestedInputSchema).optional()
}).strict();

export default EthicVersionUncheckedUpdateWithoutSubmitterInputSchema;
