import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsWhereUniqueInputSchema } from './EthicsToPersonsWhereUniqueInputSchema';
import { EthicsToPersonsCreateWithoutPersonInputSchema } from './EthicsToPersonsCreateWithoutPersonInputSchema';
import { EthicsToPersonsUncheckedCreateWithoutPersonInputSchema } from './EthicsToPersonsUncheckedCreateWithoutPersonInputSchema';

export const EthicsToPersonsCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.EthicsToPersonsCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => EthicsToPersonsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EthicsToPersonsCreateWithoutPersonInputSchema),z.lazy(() => EthicsToPersonsUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default EthicsToPersonsCreateOrConnectWithoutPersonInputSchema;
