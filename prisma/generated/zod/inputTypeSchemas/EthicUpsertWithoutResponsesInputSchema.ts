import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicUpdateWithoutResponsesInputSchema } from './EthicUpdateWithoutResponsesInputSchema';
import { EthicUncheckedUpdateWithoutResponsesInputSchema } from './EthicUncheckedUpdateWithoutResponsesInputSchema';
import { EthicCreateWithoutResponsesInputSchema } from './EthicCreateWithoutResponsesInputSchema';
import { EthicUncheckedCreateWithoutResponsesInputSchema } from './EthicUncheckedCreateWithoutResponsesInputSchema';
import { EthicWhereInputSchema } from './EthicWhereInputSchema';

export const EthicUpsertWithoutResponsesInputSchema: z.ZodType<Prisma.EthicUpsertWithoutResponsesInput> = z.object({
  update: z.union([ z.lazy(() => EthicUpdateWithoutResponsesInputSchema),z.lazy(() => EthicUncheckedUpdateWithoutResponsesInputSchema) ]),
  create: z.union([ z.lazy(() => EthicCreateWithoutResponsesInputSchema),z.lazy(() => EthicUncheckedCreateWithoutResponsesInputSchema) ]),
  where: z.lazy(() => EthicWhereInputSchema).optional()
}).strict();

export default EthicUpsertWithoutResponsesInputSchema;
