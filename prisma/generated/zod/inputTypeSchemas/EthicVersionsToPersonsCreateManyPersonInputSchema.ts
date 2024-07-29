import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EthicVersionsToPersonsCreateManyPersonInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsCreateManyPersonInput> = z.object({
  ethicVersionId: z.number().int(),
  consent: z.boolean().optional(),
  commentary: z.string().optional().nullable()
}).strict();

export default EthicVersionsToPersonsCreateManyPersonInputSchema;
