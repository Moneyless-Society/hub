import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsCreaterankingInputSchema } from './EthicsToPersonsCreaterankingInputSchema';
import { EthicCreateNestedOneWithoutResponsesInputSchema } from './EthicCreateNestedOneWithoutResponsesInputSchema';
import { PersonCreateNestedOneWithoutValueRankingsInputSchema } from './PersonCreateNestedOneWithoutValueRankingsInputSchema';

export const EthicsToPersonsCreateInputSchema: z.ZodType<Prisma.EthicsToPersonsCreateInput> = z.object({
  ranking: z.union([ z.lazy(() => EthicsToPersonsCreaterankingInputSchema),z.number().int().array() ]).optional(),
  updatedAt: z.coerce.date().optional(),
  ethic: z.lazy(() => EthicCreateNestedOneWithoutResponsesInputSchema),
  person: z.lazy(() => PersonCreateNestedOneWithoutValueRankingsInputSchema)
}).strict();

export default EthicsToPersonsCreateInputSchema;
