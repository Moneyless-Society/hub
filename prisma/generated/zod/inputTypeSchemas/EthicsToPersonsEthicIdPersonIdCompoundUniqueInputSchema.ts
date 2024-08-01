import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EthicsToPersonsEthicIdPersonIdCompoundUniqueInputSchema: z.ZodType<Prisma.EthicsToPersonsEthicIdPersonIdCompoundUniqueInput> = z.object({
  ethicId: z.number(),
  personId: z.string()
}).strict();

export default EthicsToPersonsEthicIdPersonIdCompoundUniqueInputSchema;
