import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PersonUpdateOneRequiredWithoutValueResponsesNestedInputSchema } from './PersonUpdateOneRequiredWithoutValueResponsesNestedInputSchema';

export const EthicVersionsToPersonsUpdateWithoutEthicVersionInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsUpdateWithoutEthicVersionInput> = z.object({
  consent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  commentary: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  person: z.lazy(() => PersonUpdateOneRequiredWithoutValueResponsesNestedInputSchema).optional()
}).strict();

export default EthicVersionsToPersonsUpdateWithoutEthicVersionInputSchema;
