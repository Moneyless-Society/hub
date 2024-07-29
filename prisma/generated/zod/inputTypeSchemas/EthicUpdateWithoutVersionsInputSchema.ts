import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { EthicsToPersonsUpdateManyWithoutEthicNestedInputSchema } from './EthicsToPersonsUpdateManyWithoutEthicNestedInputSchema';

export const EthicUpdateWithoutVersionsInputSchema: z.ZodType<Prisma.EthicUpdateWithoutVersionsInput> = z.object({
  shortName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  coreValue: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  responses: z.lazy(() => EthicsToPersonsUpdateManyWithoutEthicNestedInputSchema).optional()
}).strict();

export default EthicUpdateWithoutVersionsInputSchema;
