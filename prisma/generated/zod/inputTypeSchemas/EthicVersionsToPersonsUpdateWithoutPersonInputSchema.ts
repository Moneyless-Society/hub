import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EthicVersionUpdateOneRequiredWithoutResponsesNestedInputSchema } from './EthicVersionUpdateOneRequiredWithoutResponsesNestedInputSchema';

export const EthicVersionsToPersonsUpdateWithoutPersonInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsUpdateWithoutPersonInput> = z.object({
  consent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  commentary: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ethicVersion: z.lazy(() => EthicVersionUpdateOneRequiredWithoutResponsesNestedInputSchema).optional()
}).strict();

export default EthicVersionsToPersonsUpdateWithoutPersonInputSchema;
