import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EthicCreateManyInputSchema: z.ZodType<Prisma.EthicCreateManyInput> = z.object({
  id: z.number().int().optional(),
  shortName: z.string().optional().nullable(),
  activeId: z.number().int(),
  coreValue: z.boolean().optional()
}).strict();

export default EthicCreateManyInputSchema;
