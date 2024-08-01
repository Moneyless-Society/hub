import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicWhereUniqueInputSchema } from './EthicWhereUniqueInputSchema';
import { EthicCreateWithoutVersionsInputSchema } from './EthicCreateWithoutVersionsInputSchema';
import { EthicUncheckedCreateWithoutVersionsInputSchema } from './EthicUncheckedCreateWithoutVersionsInputSchema';

export const EthicCreateOrConnectWithoutVersionsInputSchema: z.ZodType<Prisma.EthicCreateOrConnectWithoutVersionsInput> = z.object({
  where: z.lazy(() => EthicWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EthicCreateWithoutVersionsInputSchema),z.lazy(() => EthicUncheckedCreateWithoutVersionsInputSchema) ]),
}).strict();

export default EthicCreateOrConnectWithoutVersionsInputSchema;
