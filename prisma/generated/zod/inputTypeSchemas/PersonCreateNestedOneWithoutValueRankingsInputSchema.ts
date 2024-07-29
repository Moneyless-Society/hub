import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutValueRankingsInputSchema } from './PersonCreateWithoutValueRankingsInputSchema';
import { PersonUncheckedCreateWithoutValueRankingsInputSchema } from './PersonUncheckedCreateWithoutValueRankingsInputSchema';
import { PersonCreateOrConnectWithoutValueRankingsInputSchema } from './PersonCreateOrConnectWithoutValueRankingsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutValueRankingsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutValueRankingsInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutValueRankingsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutValueRankingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutValueRankingsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutValueRankingsInputSchema;
