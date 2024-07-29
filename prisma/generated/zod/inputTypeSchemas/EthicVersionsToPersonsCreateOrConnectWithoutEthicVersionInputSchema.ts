import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsWhereUniqueInputSchema } from './EthicVersionsToPersonsWhereUniqueInputSchema';
import { EthicVersionsToPersonsCreateWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsCreateWithoutEthicVersionInputSchema';
import { EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInputSchema';

export const EthicVersionsToPersonsCreateOrConnectWithoutEthicVersionInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsCreateOrConnectWithoutEthicVersionInput> = z.object({
  where: z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EthicVersionsToPersonsCreateWithoutEthicVersionInputSchema),z.lazy(() => EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInputSchema) ]),
}).strict();

export default EthicVersionsToPersonsCreateOrConnectWithoutEthicVersionInputSchema;
