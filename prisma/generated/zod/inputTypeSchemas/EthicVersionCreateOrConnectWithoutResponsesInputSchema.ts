import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionWhereUniqueInputSchema } from './EthicVersionWhereUniqueInputSchema';
import { EthicVersionCreateWithoutResponsesInputSchema } from './EthicVersionCreateWithoutResponsesInputSchema';
import { EthicVersionUncheckedCreateWithoutResponsesInputSchema } from './EthicVersionUncheckedCreateWithoutResponsesInputSchema';

export const EthicVersionCreateOrConnectWithoutResponsesInputSchema: z.ZodType<Prisma.EthicVersionCreateOrConnectWithoutResponsesInput> = z.object({
  where: z.lazy(() => EthicVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EthicVersionCreateWithoutResponsesInputSchema),z.lazy(() => EthicVersionUncheckedCreateWithoutResponsesInputSchema) ]),
}).strict();

export default EthicVersionCreateOrConnectWithoutResponsesInputSchema;
