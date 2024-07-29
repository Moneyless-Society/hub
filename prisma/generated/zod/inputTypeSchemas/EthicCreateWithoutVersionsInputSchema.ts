import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsCreateNestedManyWithoutEthicInputSchema } from './EthicsToPersonsCreateNestedManyWithoutEthicInputSchema';

export const EthicCreateWithoutVersionsInputSchema: z.ZodType<Prisma.EthicCreateWithoutVersionsInput> = z.object({
  shortName: z.string().optional().nullable(),
  activeId: z.number().int(),
  coreValue: z.boolean().optional(),
  responses: z.lazy(() => EthicsToPersonsCreateNestedManyWithoutEthicInputSchema).optional()
}).strict();

export default EthicCreateWithoutVersionsInputSchema;
