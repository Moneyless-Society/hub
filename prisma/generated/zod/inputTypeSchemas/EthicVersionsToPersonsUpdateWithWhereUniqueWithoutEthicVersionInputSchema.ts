import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsWhereUniqueInputSchema } from './EthicVersionsToPersonsWhereUniqueInputSchema';
import { EthicVersionsToPersonsUpdateWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsUpdateWithoutEthicVersionInputSchema';
import { EthicVersionsToPersonsUncheckedUpdateWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsUncheckedUpdateWithoutEthicVersionInputSchema';

export const EthicVersionsToPersonsUpdateWithWhereUniqueWithoutEthicVersionInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsUpdateWithWhereUniqueWithoutEthicVersionInput> = z.object({
  where: z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EthicVersionsToPersonsUpdateWithoutEthicVersionInputSchema),z.lazy(() => EthicVersionsToPersonsUncheckedUpdateWithoutEthicVersionInputSchema) ]),
}).strict();

export default EthicVersionsToPersonsUpdateWithWhereUniqueWithoutEthicVersionInputSchema;
