import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionUncheckedCreateNestedManyWithoutEthicInputSchema } from './EthicVersionUncheckedCreateNestedManyWithoutEthicInputSchema';

export const EthicUncheckedCreateWithoutResponsesInputSchema: z.ZodType<Prisma.EthicUncheckedCreateWithoutResponsesInput> = z.object({
  id: z.number().int().optional(),
  shortName: z.string().optional().nullable(),
  activeId: z.number().int(),
  coreValue: z.boolean().optional(),
  versions: z.lazy(() => EthicVersionUncheckedCreateNestedManyWithoutEthicInputSchema).optional()
}).strict();

export default EthicUncheckedCreateWithoutResponsesInputSchema;
