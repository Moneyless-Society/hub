import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsWhereUniqueInputSchema } from './EthicVersionsToPersonsWhereUniqueInputSchema';
import { EthicVersionsToPersonsCreateWithoutPersonInputSchema } from './EthicVersionsToPersonsCreateWithoutPersonInputSchema';
import { EthicVersionsToPersonsUncheckedCreateWithoutPersonInputSchema } from './EthicVersionsToPersonsUncheckedCreateWithoutPersonInputSchema';

export const EthicVersionsToPersonsCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EthicVersionsToPersonsCreateWithoutPersonInputSchema),z.lazy(() => EthicVersionsToPersonsUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default EthicVersionsToPersonsCreateOrConnectWithoutPersonInputSchema;
