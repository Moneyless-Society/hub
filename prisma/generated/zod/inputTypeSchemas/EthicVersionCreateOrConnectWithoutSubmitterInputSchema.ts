import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionWhereUniqueInputSchema } from './EthicVersionWhereUniqueInputSchema';
import { EthicVersionCreateWithoutSubmitterInputSchema } from './EthicVersionCreateWithoutSubmitterInputSchema';
import { EthicVersionUncheckedCreateWithoutSubmitterInputSchema } from './EthicVersionUncheckedCreateWithoutSubmitterInputSchema';

export const EthicVersionCreateOrConnectWithoutSubmitterInputSchema: z.ZodType<Prisma.EthicVersionCreateOrConnectWithoutSubmitterInput> = z.object({
  where: z.lazy(() => EthicVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EthicVersionCreateWithoutSubmitterInputSchema),z.lazy(() => EthicVersionUncheckedCreateWithoutSubmitterInputSchema) ]),
}).strict();

export default EthicVersionCreateOrConnectWithoutSubmitterInputSchema;
