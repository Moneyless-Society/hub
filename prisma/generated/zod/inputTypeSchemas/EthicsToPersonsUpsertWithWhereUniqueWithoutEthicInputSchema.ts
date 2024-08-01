import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsWhereUniqueInputSchema } from './EthicsToPersonsWhereUniqueInputSchema';
import { EthicsToPersonsUpdateWithoutEthicInputSchema } from './EthicsToPersonsUpdateWithoutEthicInputSchema';
import { EthicsToPersonsUncheckedUpdateWithoutEthicInputSchema } from './EthicsToPersonsUncheckedUpdateWithoutEthicInputSchema';
import { EthicsToPersonsCreateWithoutEthicInputSchema } from './EthicsToPersonsCreateWithoutEthicInputSchema';
import { EthicsToPersonsUncheckedCreateWithoutEthicInputSchema } from './EthicsToPersonsUncheckedCreateWithoutEthicInputSchema';

export const EthicsToPersonsUpsertWithWhereUniqueWithoutEthicInputSchema: z.ZodType<Prisma.EthicsToPersonsUpsertWithWhereUniqueWithoutEthicInput> = z.object({
  where: z.lazy(() => EthicsToPersonsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EthicsToPersonsUpdateWithoutEthicInputSchema),z.lazy(() => EthicsToPersonsUncheckedUpdateWithoutEthicInputSchema) ]),
  create: z.union([ z.lazy(() => EthicsToPersonsCreateWithoutEthicInputSchema),z.lazy(() => EthicsToPersonsUncheckedCreateWithoutEthicInputSchema) ]),
}).strict();

export default EthicsToPersonsUpsertWithWhereUniqueWithoutEthicInputSchema;
