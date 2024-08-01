import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const EthicVersionCountOutputTypeSelectSchema: z.ZodType<Prisma.EthicVersionCountOutputTypeSelect> = z.object({
  responses: z.boolean().optional(),
}).strict();

export default EthicVersionCountOutputTypeSelectSchema;
