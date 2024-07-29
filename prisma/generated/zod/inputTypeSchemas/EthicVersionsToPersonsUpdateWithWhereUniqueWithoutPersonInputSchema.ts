import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsWhereUniqueInputSchema } from './EthicVersionsToPersonsWhereUniqueInputSchema';
import { EthicVersionsToPersonsUpdateWithoutPersonInputSchema } from './EthicVersionsToPersonsUpdateWithoutPersonInputSchema';
import { EthicVersionsToPersonsUncheckedUpdateWithoutPersonInputSchema } from './EthicVersionsToPersonsUncheckedUpdateWithoutPersonInputSchema';

export const EthicVersionsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EthicVersionsToPersonsUpdateWithoutPersonInputSchema),z.lazy(() => EthicVersionsToPersonsUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export default EthicVersionsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema;
