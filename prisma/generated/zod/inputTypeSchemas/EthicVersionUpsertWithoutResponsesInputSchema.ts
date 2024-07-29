import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionUpdateWithoutResponsesInputSchema } from './EthicVersionUpdateWithoutResponsesInputSchema';
import { EthicVersionUncheckedUpdateWithoutResponsesInputSchema } from './EthicVersionUncheckedUpdateWithoutResponsesInputSchema';
import { EthicVersionCreateWithoutResponsesInputSchema } from './EthicVersionCreateWithoutResponsesInputSchema';
import { EthicVersionUncheckedCreateWithoutResponsesInputSchema } from './EthicVersionUncheckedCreateWithoutResponsesInputSchema';
import { EthicVersionWhereInputSchema } from './EthicVersionWhereInputSchema';

export const EthicVersionUpsertWithoutResponsesInputSchema: z.ZodType<Prisma.EthicVersionUpsertWithoutResponsesInput> = z.object({
  update: z.union([ z.lazy(() => EthicVersionUpdateWithoutResponsesInputSchema),z.lazy(() => EthicVersionUncheckedUpdateWithoutResponsesInputSchema) ]),
  create: z.union([ z.lazy(() => EthicVersionCreateWithoutResponsesInputSchema),z.lazy(() => EthicVersionUncheckedCreateWithoutResponsesInputSchema) ]),
  where: z.lazy(() => EthicVersionWhereInputSchema).optional()
}).strict();

export default EthicVersionUpsertWithoutResponsesInputSchema;
