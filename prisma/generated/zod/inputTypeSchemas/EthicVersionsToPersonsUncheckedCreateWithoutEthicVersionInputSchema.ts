import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInput> = z.object({
  personId: z.string(),
  consent: z.boolean().optional(),
  commentary: z.string().optional().nullable()
}).strict();

export default EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInputSchema;
