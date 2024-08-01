import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonUpdateWithoutValueRankingsInputSchema } from './PersonUpdateWithoutValueRankingsInputSchema';
import { PersonUncheckedUpdateWithoutValueRankingsInputSchema } from './PersonUncheckedUpdateWithoutValueRankingsInputSchema';
import { PersonCreateWithoutValueRankingsInputSchema } from './PersonCreateWithoutValueRankingsInputSchema';
import { PersonUncheckedCreateWithoutValueRankingsInputSchema } from './PersonUncheckedCreateWithoutValueRankingsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutValueRankingsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutValueRankingsInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutValueRankingsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutValueRankingsInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutValueRankingsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutValueRankingsInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutValueRankingsInputSchema;
