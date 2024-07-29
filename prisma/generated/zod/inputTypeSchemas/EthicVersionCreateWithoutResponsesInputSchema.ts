import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicCreateNestedOneWithoutVersionsInputSchema } from './EthicCreateNestedOneWithoutVersionsInputSchema';
import { PersonCreateNestedOneWithoutValuesWrittenInputSchema } from './PersonCreateNestedOneWithoutValuesWrittenInputSchema';

export const EthicVersionCreateWithoutResponsesInputSchema: z.ZodType<Prisma.EthicVersionCreateWithoutResponsesInput> = z.object({
  text: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ethic: z.lazy(() => EthicCreateNestedOneWithoutVersionsInputSchema),
  submitter: z.lazy(() => PersonCreateNestedOneWithoutValuesWrittenInputSchema).optional()
}).strict();

export default EthicVersionCreateWithoutResponsesInputSchema;
