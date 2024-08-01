import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EthicVersionCreateManySubmitterInputSchema: z.ZodType<Prisma.EthicVersionCreateManySubmitterInput> = z.object({
  id: z.number().int().optional(),
  text: z.string(),
  ethicId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default EthicVersionCreateManySubmitterInputSchema;
