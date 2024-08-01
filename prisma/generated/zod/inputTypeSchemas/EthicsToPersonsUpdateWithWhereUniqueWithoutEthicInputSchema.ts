import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsWhereUniqueInputSchema } from './EthicsToPersonsWhereUniqueInputSchema';
import { EthicsToPersonsUpdateWithoutEthicInputSchema } from './EthicsToPersonsUpdateWithoutEthicInputSchema';
import { EthicsToPersonsUncheckedUpdateWithoutEthicInputSchema } from './EthicsToPersonsUncheckedUpdateWithoutEthicInputSchema';

export const EthicsToPersonsUpdateWithWhereUniqueWithoutEthicInputSchema: z.ZodType<Prisma.EthicsToPersonsUpdateWithWhereUniqueWithoutEthicInput> = z.object({
  where: z.lazy(() => EthicsToPersonsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EthicsToPersonsUpdateWithoutEthicInputSchema),z.lazy(() => EthicsToPersonsUncheckedUpdateWithoutEthicInputSchema) ]),
}).strict();

export default EthicsToPersonsUpdateWithWhereUniqueWithoutEthicInputSchema;
