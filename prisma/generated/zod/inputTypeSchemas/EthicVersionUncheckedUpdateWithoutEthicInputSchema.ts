import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { EthicVersionsToPersonsUncheckedUpdateManyWithoutEthicVersionNestedInputSchema } from './EthicVersionsToPersonsUncheckedUpdateManyWithoutEthicVersionNestedInputSchema';

export const EthicVersionUncheckedUpdateWithoutEthicInputSchema: z.ZodType<Prisma.EthicVersionUncheckedUpdateWithoutEthicInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  submitterId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  responses: z.lazy(() => EthicVersionsToPersonsUncheckedUpdateManyWithoutEthicVersionNestedInputSchema).optional()
}).strict();

export default EthicVersionUncheckedUpdateWithoutEthicInputSchema;
