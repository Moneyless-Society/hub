import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsScalarWhereInputSchema } from './EthicsToPersonsScalarWhereInputSchema';
import { EthicsToPersonsUpdateManyMutationInputSchema } from './EthicsToPersonsUpdateManyMutationInputSchema';
import { EthicsToPersonsUncheckedUpdateManyWithoutPersonInputSchema } from './EthicsToPersonsUncheckedUpdateManyWithoutPersonInputSchema';

export const EthicsToPersonsUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.EthicsToPersonsUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => EthicsToPersonsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EthicsToPersonsUpdateManyMutationInputSchema),z.lazy(() => EthicsToPersonsUncheckedUpdateManyWithoutPersonInputSchema) ]),
}).strict();

export default EthicsToPersonsUpdateManyWithWhereWithoutPersonInputSchema;
