import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { EthicsToPersonsUncheckedUpdateManyWithoutEthicNestedInputSchema } from './EthicsToPersonsUncheckedUpdateManyWithoutEthicNestedInputSchema';

export const EthicUncheckedUpdateWithoutVersionsInputSchema: z.ZodType<Prisma.EthicUncheckedUpdateWithoutVersionsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  shortName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  coreValue: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  responses: z.lazy(() => EthicsToPersonsUncheckedUpdateManyWithoutEthicNestedInputSchema).optional()
}).strict();

export default EthicUncheckedUpdateWithoutVersionsInputSchema;
