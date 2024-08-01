import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionCreateWithoutResponsesInputSchema } from './EthicVersionCreateWithoutResponsesInputSchema';
import { EthicVersionUncheckedCreateWithoutResponsesInputSchema } from './EthicVersionUncheckedCreateWithoutResponsesInputSchema';
import { EthicVersionCreateOrConnectWithoutResponsesInputSchema } from './EthicVersionCreateOrConnectWithoutResponsesInputSchema';
import { EthicVersionWhereUniqueInputSchema } from './EthicVersionWhereUniqueInputSchema';

export const EthicVersionCreateNestedOneWithoutResponsesInputSchema: z.ZodType<Prisma.EthicVersionCreateNestedOneWithoutResponsesInput> = z.object({
  create: z.union([ z.lazy(() => EthicVersionCreateWithoutResponsesInputSchema),z.lazy(() => EthicVersionUncheckedCreateWithoutResponsesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EthicVersionCreateOrConnectWithoutResponsesInputSchema).optional(),
  connect: z.lazy(() => EthicVersionWhereUniqueInputSchema).optional()
}).strict();

export default EthicVersionCreateNestedOneWithoutResponsesInputSchema;
