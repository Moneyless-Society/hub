import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicCreateWithoutVersionsInputSchema } from './EthicCreateWithoutVersionsInputSchema';
import { EthicUncheckedCreateWithoutVersionsInputSchema } from './EthicUncheckedCreateWithoutVersionsInputSchema';
import { EthicCreateOrConnectWithoutVersionsInputSchema } from './EthicCreateOrConnectWithoutVersionsInputSchema';
import { EthicWhereUniqueInputSchema } from './EthicWhereUniqueInputSchema';

export const EthicCreateNestedOneWithoutVersionsInputSchema: z.ZodType<Prisma.EthicCreateNestedOneWithoutVersionsInput> = z.object({
  create: z.union([ z.lazy(() => EthicCreateWithoutVersionsInputSchema),z.lazy(() => EthicUncheckedCreateWithoutVersionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EthicCreateOrConnectWithoutVersionsInputSchema).optional(),
  connect: z.lazy(() => EthicWhereUniqueInputSchema).optional()
}).strict();

export default EthicCreateNestedOneWithoutVersionsInputSchema;
