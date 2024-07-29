import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { EthicUpdateOneRequiredWithoutVersionsNestedInputSchema } from './EthicUpdateOneRequiredWithoutVersionsNestedInputSchema';
import { PersonUpdateOneWithoutValuesWrittenNestedInputSchema } from './PersonUpdateOneWithoutValuesWrittenNestedInputSchema';

export const EthicVersionUpdateWithoutResponsesInputSchema: z.ZodType<Prisma.EthicVersionUpdateWithoutResponsesInput> = z.object({
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ethic: z.lazy(() => EthicUpdateOneRequiredWithoutVersionsNestedInputSchema).optional(),
  submitter: z.lazy(() => PersonUpdateOneWithoutValuesWrittenNestedInputSchema).optional()
}).strict();

export default EthicVersionUpdateWithoutResponsesInputSchema;
