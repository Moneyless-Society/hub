import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicCreateWithoutResponsesInputSchema } from './EthicCreateWithoutResponsesInputSchema';
import { EthicUncheckedCreateWithoutResponsesInputSchema } from './EthicUncheckedCreateWithoutResponsesInputSchema';
import { EthicCreateOrConnectWithoutResponsesInputSchema } from './EthicCreateOrConnectWithoutResponsesInputSchema';
import { EthicWhereUniqueInputSchema } from './EthicWhereUniqueInputSchema';

export const EthicCreateNestedOneWithoutResponsesInputSchema: z.ZodType<Prisma.EthicCreateNestedOneWithoutResponsesInput> = z.object({
  create: z.union([ z.lazy(() => EthicCreateWithoutResponsesInputSchema),z.lazy(() => EthicUncheckedCreateWithoutResponsesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EthicCreateOrConnectWithoutResponsesInputSchema).optional(),
  connect: z.lazy(() => EthicWhereUniqueInputSchema).optional()
}).strict();

export default EthicCreateNestedOneWithoutResponsesInputSchema;
