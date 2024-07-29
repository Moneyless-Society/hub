import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutValueRankingsInputSchema } from './PersonCreateWithoutValueRankingsInputSchema';
import { PersonUncheckedCreateWithoutValueRankingsInputSchema } from './PersonUncheckedCreateWithoutValueRankingsInputSchema';

export const PersonCreateOrConnectWithoutValueRankingsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutValueRankingsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutValueRankingsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutValueRankingsInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutValueRankingsInputSchema;
