import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsWhereUniqueInputSchema } from './EthicsToPersonsWhereUniqueInputSchema';
import { EthicsToPersonsUpdateWithoutPersonInputSchema } from './EthicsToPersonsUpdateWithoutPersonInputSchema';
import { EthicsToPersonsUncheckedUpdateWithoutPersonInputSchema } from './EthicsToPersonsUncheckedUpdateWithoutPersonInputSchema';

export const EthicsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.EthicsToPersonsUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => EthicsToPersonsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EthicsToPersonsUpdateWithoutPersonInputSchema),z.lazy(() => EthicsToPersonsUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export default EthicsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema;
