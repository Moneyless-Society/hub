import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EthicVersionsToPersonsUncheckedCreateWithoutPersonInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsUncheckedCreateWithoutPersonInput> = z.object({
  ethicVersionId: z.number().int(),
  consent: z.boolean().optional(),
  commentary: z.string().optional().nullable()
}).strict();

export default EthicVersionsToPersonsUncheckedCreateWithoutPersonInputSchema;
