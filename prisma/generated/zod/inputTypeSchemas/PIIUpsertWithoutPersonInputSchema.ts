import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PIIUpdateWithoutPersonInputSchema } from './PIIUpdateWithoutPersonInputSchema';
import { PIIUncheckedUpdateWithoutPersonInputSchema } from './PIIUncheckedUpdateWithoutPersonInputSchema';
import { PIICreateWithoutPersonInputSchema } from './PIICreateWithoutPersonInputSchema';
import { PIIUncheckedCreateWithoutPersonInputSchema } from './PIIUncheckedCreateWithoutPersonInputSchema';
import { PIIWhereInputSchema } from './PIIWhereInputSchema';

export const PIIUpsertWithoutPersonInputSchema: z.ZodType<Prisma.PIIUpsertWithoutPersonInput> = z.object({
  update: z.union([ z.lazy(() => PIIUpdateWithoutPersonInputSchema),z.lazy(() => PIIUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => PIICreateWithoutPersonInputSchema),z.lazy(() => PIIUncheckedCreateWithoutPersonInputSchema) ]),
  where: z.lazy(() => PIIWhereInputSchema).optional()
}).strict();

export default PIIUpsertWithoutPersonInputSchema;
