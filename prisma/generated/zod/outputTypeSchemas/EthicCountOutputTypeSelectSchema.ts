import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const EthicCountOutputTypeSelectSchema: z.ZodType<Prisma.EthicCountOutputTypeSelect> = z.object({
  versions: z.boolean().optional(),
  responses: z.boolean().optional(),
}).strict();

export default EthicCountOutputTypeSelectSchema;
