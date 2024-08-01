import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionWhereUniqueInputSchema } from './EthicVersionWhereUniqueInputSchema';
import { EthicVersionCreateWithoutEthicInputSchema } from './EthicVersionCreateWithoutEthicInputSchema';
import { EthicVersionUncheckedCreateWithoutEthicInputSchema } from './EthicVersionUncheckedCreateWithoutEthicInputSchema';

export const EthicVersionCreateOrConnectWithoutEthicInputSchema: z.ZodType<Prisma.EthicVersionCreateOrConnectWithoutEthicInput> = z.object({
  where: z.lazy(() => EthicVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EthicVersionCreateWithoutEthicInputSchema),z.lazy(() => EthicVersionUncheckedCreateWithoutEthicInputSchema) ]),
}).strict();

export default EthicVersionCreateOrConnectWithoutEthicInputSchema;
