import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsUncheckedCreateNestedManyWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsUncheckedCreateNestedManyWithoutEthicVersionInputSchema';

export const EthicVersionUncheckedCreateInputSchema: z.ZodType<Prisma.EthicVersionUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  text: z.string(),
  ethicId: z.number().int(),
  submitterId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  responses: z.lazy(() => EthicVersionsToPersonsUncheckedCreateNestedManyWithoutEthicVersionInputSchema).optional()
}).strict();

export default EthicVersionUncheckedCreateInputSchema;
