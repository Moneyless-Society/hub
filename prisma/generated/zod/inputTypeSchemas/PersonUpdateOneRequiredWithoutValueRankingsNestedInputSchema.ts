import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutValueRankingsInputSchema } from './PersonCreateWithoutValueRankingsInputSchema';
import { PersonUncheckedCreateWithoutValueRankingsInputSchema } from './PersonUncheckedCreateWithoutValueRankingsInputSchema';
import { PersonCreateOrConnectWithoutValueRankingsInputSchema } from './PersonCreateOrConnectWithoutValueRankingsInputSchema';
import { PersonUpsertWithoutValueRankingsInputSchema } from './PersonUpsertWithoutValueRankingsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutValueRankingsInputSchema } from './PersonUpdateToOneWithWhereWithoutValueRankingsInputSchema';
import { PersonUpdateWithoutValueRankingsInputSchema } from './PersonUpdateWithoutValueRankingsInputSchema';
import { PersonUncheckedUpdateWithoutValueRankingsInputSchema } from './PersonUncheckedUpdateWithoutValueRankingsInputSchema';

export const PersonUpdateOneRequiredWithoutValueRankingsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutValueRankingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutValueRankingsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutValueRankingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutValueRankingsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutValueRankingsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutValueRankingsInputSchema),z.lazy(() => PersonUpdateWithoutValueRankingsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutValueRankingsInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutValueRankingsNestedInputSchema;
