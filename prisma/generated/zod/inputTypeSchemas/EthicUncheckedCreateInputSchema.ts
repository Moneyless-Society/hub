import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionUncheckedCreateNestedManyWithoutEthicInputSchema } from './EthicVersionUncheckedCreateNestedManyWithoutEthicInputSchema';
import { EthicsToPersonsUncheckedCreateNestedManyWithoutEthicInputSchema } from './EthicsToPersonsUncheckedCreateNestedManyWithoutEthicInputSchema';

export const EthicUncheckedCreateInputSchema: z.ZodType<Prisma.EthicUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  shortName: z.string().optional().nullable(),
  activeId: z.number().int(),
  coreValue: z.boolean().optional(),
  versions: z.lazy(() => EthicVersionUncheckedCreateNestedManyWithoutEthicInputSchema).optional(),
  responses: z.lazy(() => EthicsToPersonsUncheckedCreateNestedManyWithoutEthicInputSchema).optional()
}).strict();

export default EthicUncheckedCreateInputSchema;
