import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';

export const EthicVersionsToPersonsUpdateManyMutationInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsUpdateManyMutationInput> = z.object({
  consent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  commentary: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export default EthicVersionsToPersonsUpdateManyMutationInputSchema;
