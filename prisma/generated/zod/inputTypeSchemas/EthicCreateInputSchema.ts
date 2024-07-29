import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionCreateNestedManyWithoutEthicInputSchema } from './EthicVersionCreateNestedManyWithoutEthicInputSchema';
import { EthicsToPersonsCreateNestedManyWithoutEthicInputSchema } from './EthicsToPersonsCreateNestedManyWithoutEthicInputSchema';

export const EthicCreateInputSchema: z.ZodType<Prisma.EthicCreateInput> = z.object({
  shortName: z.string().optional().nullable(),
  activeId: z.number().int(),
  coreValue: z.boolean().optional(),
  versions: z.lazy(() => EthicVersionCreateNestedManyWithoutEthicInputSchema).optional(),
  responses: z.lazy(() => EthicsToPersonsCreateNestedManyWithoutEthicInputSchema).optional()
}).strict();

export default EthicCreateInputSchema;
