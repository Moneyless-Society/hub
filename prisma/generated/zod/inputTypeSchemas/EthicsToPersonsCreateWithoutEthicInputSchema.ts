import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsCreaterankingInputSchema } from './EthicsToPersonsCreaterankingInputSchema';
import { PersonCreateNestedOneWithoutValueRankingsInputSchema } from './PersonCreateNestedOneWithoutValueRankingsInputSchema';

export const EthicsToPersonsCreateWithoutEthicInputSchema: z.ZodType<Prisma.EthicsToPersonsCreateWithoutEthicInput> = z.object({
  ranking: z.union([ z.lazy(() => EthicsToPersonsCreaterankingInputSchema),z.number().int().array() ]).optional(),
  updatedAt: z.coerce.date().optional(),
  person: z.lazy(() => PersonCreateNestedOneWithoutValueRankingsInputSchema)
}).strict();

export default EthicsToPersonsCreateWithoutEthicInputSchema;
