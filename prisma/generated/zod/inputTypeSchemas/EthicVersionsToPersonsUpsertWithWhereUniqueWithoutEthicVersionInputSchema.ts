import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsWhereUniqueInputSchema } from './EthicVersionsToPersonsWhereUniqueInputSchema';
import { EthicVersionsToPersonsUpdateWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsUpdateWithoutEthicVersionInputSchema';
import { EthicVersionsToPersonsUncheckedUpdateWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsUncheckedUpdateWithoutEthicVersionInputSchema';
import { EthicVersionsToPersonsCreateWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsCreateWithoutEthicVersionInputSchema';
import { EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInputSchema';

export const EthicVersionsToPersonsUpsertWithWhereUniqueWithoutEthicVersionInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsUpsertWithWhereUniqueWithoutEthicVersionInput> = z.object({
  where: z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EthicVersionsToPersonsUpdateWithoutEthicVersionInputSchema),z.lazy(() => EthicVersionsToPersonsUncheckedUpdateWithoutEthicVersionInputSchema) ]),
  create: z.union([ z.lazy(() => EthicVersionsToPersonsCreateWithoutEthicVersionInputSchema),z.lazy(() => EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInputSchema) ]),
}).strict();

export default EthicVersionsToPersonsUpsertWithWhereUniqueWithoutEthicVersionInputSchema;
