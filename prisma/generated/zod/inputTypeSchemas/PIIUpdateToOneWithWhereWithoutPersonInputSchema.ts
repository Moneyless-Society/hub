import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PIIWhereInputSchema } from './PIIWhereInputSchema';
import { PIIUpdateWithoutPersonInputSchema } from './PIIUpdateWithoutPersonInputSchema';
import { PIIUncheckedUpdateWithoutPersonInputSchema } from './PIIUncheckedUpdateWithoutPersonInputSchema';

export const PIIUpdateToOneWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.PIIUpdateToOneWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => PIIWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PIIUpdateWithoutPersonInputSchema),z.lazy(() => PIIUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export default PIIUpdateToOneWithWhereWithoutPersonInputSchema;
