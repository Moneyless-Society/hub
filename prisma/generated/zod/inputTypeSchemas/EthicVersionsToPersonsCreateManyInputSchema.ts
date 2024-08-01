import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EthicVersionsToPersonsCreateManyInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsCreateManyInput> = z.object({
  ethicVersionId: z.number().int(),
  personId: z.string(),
  consent: z.boolean().optional(),
  commentary: z.string().optional().nullable()
}).strict();

export default EthicVersionsToPersonsCreateManyInputSchema;
