import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsWhereUniqueInputSchema } from './EthicsToPersonsWhereUniqueInputSchema';
import { EthicsToPersonsUpdateWithoutPersonInputSchema } from './EthicsToPersonsUpdateWithoutPersonInputSchema';
import { EthicsToPersonsUncheckedUpdateWithoutPersonInputSchema } from './EthicsToPersonsUncheckedUpdateWithoutPersonInputSchema';
import { EthicsToPersonsCreateWithoutPersonInputSchema } from './EthicsToPersonsCreateWithoutPersonInputSchema';
import { EthicsToPersonsUncheckedCreateWithoutPersonInputSchema } from './EthicsToPersonsUncheckedCreateWithoutPersonInputSchema';

export const EthicsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.EthicsToPersonsUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => EthicsToPersonsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EthicsToPersonsUpdateWithoutPersonInputSchema),z.lazy(() => EthicsToPersonsUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => EthicsToPersonsCreateWithoutPersonInputSchema),z.lazy(() => EthicsToPersonsUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default EthicsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema;
