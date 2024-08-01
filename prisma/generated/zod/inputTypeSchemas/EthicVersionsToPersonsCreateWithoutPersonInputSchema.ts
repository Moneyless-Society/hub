import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionCreateNestedOneWithoutResponsesInputSchema } from './EthicVersionCreateNestedOneWithoutResponsesInputSchema';

export const EthicVersionsToPersonsCreateWithoutPersonInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsCreateWithoutPersonInput> = z.object({
  consent: z.boolean().optional(),
  commentary: z.string().optional().nullable(),
  ethicVersion: z.lazy(() => EthicVersionCreateNestedOneWithoutResponsesInputSchema)
}).strict();

export default EthicVersionsToPersonsCreateWithoutPersonInputSchema;
