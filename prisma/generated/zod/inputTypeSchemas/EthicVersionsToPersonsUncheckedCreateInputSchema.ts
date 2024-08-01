import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EthicVersionsToPersonsUncheckedCreateInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsUncheckedCreateInput> = z.object({
  ethicVersionId: z.number().int(),
  personId: z.string(),
  consent: z.boolean().optional(),
  commentary: z.string().optional().nullable()
}).strict();

export default EthicVersionsToPersonsUncheckedCreateInputSchema;
