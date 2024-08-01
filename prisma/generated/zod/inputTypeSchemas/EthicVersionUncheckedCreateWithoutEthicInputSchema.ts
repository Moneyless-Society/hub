import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsUncheckedCreateNestedManyWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsUncheckedCreateNestedManyWithoutEthicVersionInputSchema';

export const EthicVersionUncheckedCreateWithoutEthicInputSchema: z.ZodType<Prisma.EthicVersionUncheckedCreateWithoutEthicInput> = z.object({
  id: z.number().int().optional(),
  text: z.string(),
  submitterId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  responses: z.lazy(() => EthicVersionsToPersonsUncheckedCreateNestedManyWithoutEthicVersionInputSchema).optional()
}).strict();

export default EthicVersionUncheckedCreateWithoutEthicInputSchema;
