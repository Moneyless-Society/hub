import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsUncheckedCreateNestedManyWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsUncheckedCreateNestedManyWithoutEthicVersionInputSchema';

export const EthicVersionUncheckedCreateWithoutSubmitterInputSchema: z.ZodType<Prisma.EthicVersionUncheckedCreateWithoutSubmitterInput> = z.object({
  id: z.number().int().optional(),
  text: z.string(),
  ethicId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  responses: z.lazy(() => EthicVersionsToPersonsUncheckedCreateNestedManyWithoutEthicVersionInputSchema).optional()
}).strict();

export default EthicVersionUncheckedCreateWithoutSubmitterInputSchema;
