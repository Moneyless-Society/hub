import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { EthicVersionUpdateManyWithoutEthicNestedInputSchema } from './EthicVersionUpdateManyWithoutEthicNestedInputSchema';

export const EthicUpdateWithoutResponsesInputSchema: z.ZodType<Prisma.EthicUpdateWithoutResponsesInput> = z.object({
  shortName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  activeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  coreValue: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  versions: z.lazy(() => EthicVersionUpdateManyWithoutEthicNestedInputSchema).optional()
}).strict();

export default EthicUpdateWithoutResponsesInputSchema;
