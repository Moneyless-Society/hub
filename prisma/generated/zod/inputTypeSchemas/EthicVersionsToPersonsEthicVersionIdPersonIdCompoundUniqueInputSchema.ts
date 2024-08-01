import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EthicVersionsToPersonsEthicVersionIdPersonIdCompoundUniqueInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsEthicVersionIdPersonIdCompoundUniqueInput> = z.object({
  ethicVersionId: z.number(),
  personId: z.string()
}).strict();

export default EthicVersionsToPersonsEthicVersionIdPersonIdCompoundUniqueInputSchema;
