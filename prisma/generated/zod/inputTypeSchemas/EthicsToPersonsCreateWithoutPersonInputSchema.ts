import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsCreaterankingInputSchema } from './EthicsToPersonsCreaterankingInputSchema';
import { EthicCreateNestedOneWithoutResponsesInputSchema } from './EthicCreateNestedOneWithoutResponsesInputSchema';

export const EthicsToPersonsCreateWithoutPersonInputSchema: z.ZodType<Prisma.EthicsToPersonsCreateWithoutPersonInput> = z.object({
  ranking: z.union([ z.lazy(() => EthicsToPersonsCreaterankingInputSchema),z.number().int().array() ]).optional(),
  updatedAt: z.coerce.date().optional(),
  ethic: z.lazy(() => EthicCreateNestedOneWithoutResponsesInputSchema)
}).strict();

export default EthicsToPersonsCreateWithoutPersonInputSchema;
