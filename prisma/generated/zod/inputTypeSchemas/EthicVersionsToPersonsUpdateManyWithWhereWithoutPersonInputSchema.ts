import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsScalarWhereInputSchema } from './EthicVersionsToPersonsScalarWhereInputSchema';
import { EthicVersionsToPersonsUpdateManyMutationInputSchema } from './EthicVersionsToPersonsUpdateManyMutationInputSchema';
import { EthicVersionsToPersonsUncheckedUpdateManyWithoutPersonInputSchema } from './EthicVersionsToPersonsUncheckedUpdateManyWithoutPersonInputSchema';

export const EthicVersionsToPersonsUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => EthicVersionsToPersonsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EthicVersionsToPersonsUpdateManyMutationInputSchema),z.lazy(() => EthicVersionsToPersonsUncheckedUpdateManyWithoutPersonInputSchema) ]),
}).strict();

export default EthicVersionsToPersonsUpdateManyWithWhereWithoutPersonInputSchema;
