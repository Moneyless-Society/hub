import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicCreateNestedOneWithoutVersionsInputSchema } from './EthicCreateNestedOneWithoutVersionsInputSchema';
import { EthicVersionsToPersonsCreateNestedManyWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsCreateNestedManyWithoutEthicVersionInputSchema';

export const EthicVersionCreateWithoutSubmitterInputSchema: z.ZodType<Prisma.EthicVersionCreateWithoutSubmitterInput> = z.object({
  text: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ethic: z.lazy(() => EthicCreateNestedOneWithoutVersionsInputSchema),
  responses: z.lazy(() => EthicVersionsToPersonsCreateNestedManyWithoutEthicVersionInputSchema).optional()
}).strict();

export default EthicVersionCreateWithoutSubmitterInputSchema;
