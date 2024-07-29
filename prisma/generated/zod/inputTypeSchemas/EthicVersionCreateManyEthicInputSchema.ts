import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EthicVersionCreateManyEthicInputSchema: z.ZodType<Prisma.EthicVersionCreateManyEthicInput> = z.object({
  id: z.number().int().optional(),
  text: z.string(),
  submitterId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default EthicVersionCreateManyEthicInputSchema;
