import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EthicVersionsToPersonsCreateManyEthicVersionInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsCreateManyEthicVersionInput> = z.object({
  personId: z.string(),
  consent: z.boolean().optional(),
  commentary: z.string().optional().nullable()
}).strict();

export default EthicVersionsToPersonsCreateManyEthicVersionInputSchema;
