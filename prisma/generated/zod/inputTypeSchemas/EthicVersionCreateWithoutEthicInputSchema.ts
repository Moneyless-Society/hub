import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateNestedOneWithoutValuesWrittenInputSchema } from './PersonCreateNestedOneWithoutValuesWrittenInputSchema';
import { EthicVersionsToPersonsCreateNestedManyWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsCreateNestedManyWithoutEthicVersionInputSchema';

export const EthicVersionCreateWithoutEthicInputSchema: z.ZodType<Prisma.EthicVersionCreateWithoutEthicInput> = z.object({
  text: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  submitter: z.lazy(() => PersonCreateNestedOneWithoutValuesWrittenInputSchema).optional(),
  responses: z.lazy(() => EthicVersionsToPersonsCreateNestedManyWithoutEthicVersionInputSchema).optional()
}).strict();

export default EthicVersionCreateWithoutEthicInputSchema;
