import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateNestedOneWithoutValueResponsesInputSchema } from './PersonCreateNestedOneWithoutValueResponsesInputSchema';

export const EthicVersionsToPersonsCreateWithoutEthicVersionInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsCreateWithoutEthicVersionInput> = z.object({
  consent: z.boolean().optional(),
  commentary: z.string().optional().nullable(),
  person: z.lazy(() => PersonCreateNestedOneWithoutValueResponsesInputSchema)
}).strict();

export default EthicVersionsToPersonsCreateWithoutEthicVersionInputSchema;
