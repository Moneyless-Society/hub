import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsWhereUniqueInputSchema } from './EthicsToPersonsWhereUniqueInputSchema';
import { EthicsToPersonsCreateWithoutEthicInputSchema } from './EthicsToPersonsCreateWithoutEthicInputSchema';
import { EthicsToPersonsUncheckedCreateWithoutEthicInputSchema } from './EthicsToPersonsUncheckedCreateWithoutEthicInputSchema';

export const EthicsToPersonsCreateOrConnectWithoutEthicInputSchema: z.ZodType<Prisma.EthicsToPersonsCreateOrConnectWithoutEthicInput> = z.object({
  where: z.lazy(() => EthicsToPersonsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EthicsToPersonsCreateWithoutEthicInputSchema),z.lazy(() => EthicsToPersonsUncheckedCreateWithoutEthicInputSchema) ]),
}).strict();

export default EthicsToPersonsCreateOrConnectWithoutEthicInputSchema;
