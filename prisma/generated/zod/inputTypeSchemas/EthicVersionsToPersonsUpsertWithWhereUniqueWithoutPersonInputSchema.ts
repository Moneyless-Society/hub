import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsWhereUniqueInputSchema } from './EthicVersionsToPersonsWhereUniqueInputSchema';
import { EthicVersionsToPersonsUpdateWithoutPersonInputSchema } from './EthicVersionsToPersonsUpdateWithoutPersonInputSchema';
import { EthicVersionsToPersonsUncheckedUpdateWithoutPersonInputSchema } from './EthicVersionsToPersonsUncheckedUpdateWithoutPersonInputSchema';
import { EthicVersionsToPersonsCreateWithoutPersonInputSchema } from './EthicVersionsToPersonsCreateWithoutPersonInputSchema';
import { EthicVersionsToPersonsUncheckedCreateWithoutPersonInputSchema } from './EthicVersionsToPersonsUncheckedCreateWithoutPersonInputSchema';

export const EthicVersionsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EthicVersionsToPersonsUpdateWithoutPersonInputSchema),z.lazy(() => EthicVersionsToPersonsUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => EthicVersionsToPersonsCreateWithoutPersonInputSchema),z.lazy(() => EthicVersionsToPersonsUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default EthicVersionsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema;
