import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionCreateNestedManyWithoutEthicInputSchema } from './EthicVersionCreateNestedManyWithoutEthicInputSchema';

export const EthicCreateWithoutResponsesInputSchema: z.ZodType<Prisma.EthicCreateWithoutResponsesInput> = z.object({
  shortName: z.string().optional().nullable(),
  activeId: z.number().int(),
  coreValue: z.boolean().optional(),
  versions: z.lazy(() => EthicVersionCreateNestedManyWithoutEthicInputSchema).optional()
}).strict();

export default EthicCreateWithoutResponsesInputSchema;
