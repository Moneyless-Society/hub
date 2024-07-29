import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutValueRankingsInputSchema } from './PersonUpdateWithoutValueRankingsInputSchema';
import { PersonUncheckedUpdateWithoutValueRankingsInputSchema } from './PersonUncheckedUpdateWithoutValueRankingsInputSchema';

export const PersonUpdateToOneWithWhereWithoutValueRankingsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutValueRankingsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutValueRankingsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutValueRankingsInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutValueRankingsInputSchema;
