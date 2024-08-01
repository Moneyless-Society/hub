import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { EthicVersionUncheckedUpdateManyWithoutEthicNestedInputSchema } from './EthicVersionUncheckedUpdateManyWithoutEthicNestedInputSchema';

export const EthicUncheckedUpdateWithoutResponsesInputSchema: z.ZodType<Prisma.EthicUncheckedUpdateWithoutResponsesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  shortName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  coreValue: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  versions: z.lazy(() => EthicVersionUncheckedUpdateManyWithoutEthicNestedInputSchema).optional()
}).strict();

export default EthicUncheckedUpdateWithoutResponsesInputSchema;
