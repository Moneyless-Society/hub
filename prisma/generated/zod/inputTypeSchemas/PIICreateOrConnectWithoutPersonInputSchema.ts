import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PIIWhereUniqueInputSchema } from './PIIWhereUniqueInputSchema';
import { PIICreateWithoutPersonInputSchema } from './PIICreateWithoutPersonInputSchema';
import { PIIUncheckedCreateWithoutPersonInputSchema } from './PIIUncheckedCreateWithoutPersonInputSchema';

export const PIICreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.PIICreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => PIIWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PIICreateWithoutPersonInputSchema),z.lazy(() => PIIUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PIICreateOrConnectWithoutPersonInputSchema;
