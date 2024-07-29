import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicCreateNestedOneWithoutVersionsInputSchema } from './EthicCreateNestedOneWithoutVersionsInputSchema';
import { PersonCreateNestedOneWithoutValuesWrittenInputSchema } from './PersonCreateNestedOneWithoutValuesWrittenInputSchema';
import { EthicVersionsToPersonsCreateNestedManyWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsCreateNestedManyWithoutEthicVersionInputSchema';

export const EthicVersionCreateInputSchema: z.ZodType<Prisma.EthicVersionCreateInput> = z.object({
  text: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ethic: z.lazy(() => EthicCreateNestedOneWithoutVersionsInputSchema),
  submitter: z.lazy(() => PersonCreateNestedOneWithoutValuesWrittenInputSchema).optional(),
  responses: z.lazy(() => EthicVersionsToPersonsCreateNestedManyWithoutEthicVersionInputSchema).optional()
}).strict();

export default EthicVersionCreateInputSchema;
