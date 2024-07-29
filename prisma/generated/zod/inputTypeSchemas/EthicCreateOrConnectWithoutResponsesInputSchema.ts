import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicWhereUniqueInputSchema } from './EthicWhereUniqueInputSchema';
import { EthicCreateWithoutResponsesInputSchema } from './EthicCreateWithoutResponsesInputSchema';
import { EthicUncheckedCreateWithoutResponsesInputSchema } from './EthicUncheckedCreateWithoutResponsesInputSchema';

export const EthicCreateOrConnectWithoutResponsesInputSchema: z.ZodType<Prisma.EthicCreateOrConnectWithoutResponsesInput> = z.object({
  where: z.lazy(() => EthicWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EthicCreateWithoutResponsesInputSchema),z.lazy(() => EthicUncheckedCreateWithoutResponsesInputSchema) ]),
}).strict();

export default EthicCreateOrConnectWithoutResponsesInputSchema;
