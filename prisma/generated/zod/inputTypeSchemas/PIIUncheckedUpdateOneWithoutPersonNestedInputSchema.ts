import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PIICreateWithoutPersonInputSchema } from './PIICreateWithoutPersonInputSchema';
import { PIIUncheckedCreateWithoutPersonInputSchema } from './PIIUncheckedCreateWithoutPersonInputSchema';
import { PIICreateOrConnectWithoutPersonInputSchema } from './PIICreateOrConnectWithoutPersonInputSchema';
import { PIIUpsertWithoutPersonInputSchema } from './PIIUpsertWithoutPersonInputSchema';
import { PIIWhereInputSchema } from './PIIWhereInputSchema';
import { PIIWhereUniqueInputSchema } from './PIIWhereUniqueInputSchema';
import { PIIUpdateToOneWithWhereWithoutPersonInputSchema } from './PIIUpdateToOneWithWhereWithoutPersonInputSchema';
import { PIIUpdateWithoutPersonInputSchema } from './PIIUpdateWithoutPersonInputSchema';
import { PIIUncheckedUpdateWithoutPersonInputSchema } from './PIIUncheckedUpdateWithoutPersonInputSchema';

export const PIIUncheckedUpdateOneWithoutPersonNestedInputSchema: z.ZodType<Prisma.PIIUncheckedUpdateOneWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => PIICreateWithoutPersonInputSchema),z.lazy(() => PIIUncheckedCreateWithoutPersonInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PIICreateOrConnectWithoutPersonInputSchema).optional(),
  upsert: z.lazy(() => PIIUpsertWithoutPersonInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PIIWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PIIWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PIIWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PIIUpdateToOneWithWhereWithoutPersonInputSchema),z.lazy(() => PIIUpdateWithoutPersonInputSchema),z.lazy(() => PIIUncheckedUpdateWithoutPersonInputSchema) ]).optional(),
}).strict();

export default PIIUncheckedUpdateOneWithoutPersonNestedInputSchema;
