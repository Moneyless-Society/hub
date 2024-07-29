import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PIICreateWithoutPersonInputSchema } from './PIICreateWithoutPersonInputSchema';
import { PIIUncheckedCreateWithoutPersonInputSchema } from './PIIUncheckedCreateWithoutPersonInputSchema';
import { PIICreateOrConnectWithoutPersonInputSchema } from './PIICreateOrConnectWithoutPersonInputSchema';
import { PIIWhereUniqueInputSchema } from './PIIWhereUniqueInputSchema';

export const PIIUncheckedCreateNestedOneWithoutPersonInputSchema: z.ZodType<Prisma.PIIUncheckedCreateNestedOneWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => PIICreateWithoutPersonInputSchema),z.lazy(() => PIIUncheckedCreateWithoutPersonInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PIICreateOrConnectWithoutPersonInputSchema).optional(),
  connect: z.lazy(() => PIIWhereUniqueInputSchema).optional()
}).strict();

export default PIIUncheckedCreateNestedOneWithoutPersonInputSchema;
