import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsUncheckedCreateNestedManyWithoutEthicInputSchema } from './EthicsToPersonsUncheckedCreateNestedManyWithoutEthicInputSchema';

export const EthicUncheckedCreateWithoutVersionsInputSchema: z.ZodType<Prisma.EthicUncheckedCreateWithoutVersionsInput> = z.object({
  id: z.number().int().optional(),
  shortName: z.string().optional().nullable(),
  activeId: z.number().int(),
  coreValue: z.boolean().optional(),
  responses: z.lazy(() => EthicsToPersonsUncheckedCreateNestedManyWithoutEthicInputSchema).optional()
}).strict();

export default EthicUncheckedCreateWithoutVersionsInputSchema;
