import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { EthicUpdateOneRequiredWithoutVersionsNestedInputSchema } from './EthicUpdateOneRequiredWithoutVersionsNestedInputSchema';
import { EthicVersionsToPersonsUpdateManyWithoutEthicVersionNestedInputSchema } from './EthicVersionsToPersonsUpdateManyWithoutEthicVersionNestedInputSchema';

export const EthicVersionUpdateWithoutSubmitterInputSchema: z.ZodType<Prisma.EthicVersionUpdateWithoutSubmitterInput> = z.object({
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ethic: z.lazy(() => EthicUpdateOneRequiredWithoutVersionsNestedInputSchema).optional(),
  responses: z.lazy(() => EthicVersionsToPersonsUpdateManyWithoutEthicVersionNestedInputSchema).optional()
}).strict();

export default EthicVersionUpdateWithoutSubmitterInputSchema;
