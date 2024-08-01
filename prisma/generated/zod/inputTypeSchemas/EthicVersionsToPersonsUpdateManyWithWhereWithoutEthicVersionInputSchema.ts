import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsScalarWhereInputSchema } from './EthicVersionsToPersonsScalarWhereInputSchema';
import { EthicVersionsToPersonsUpdateManyMutationInputSchema } from './EthicVersionsToPersonsUpdateManyMutationInputSchema';
import { EthicVersionsToPersonsUncheckedUpdateManyWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsUncheckedUpdateManyWithoutEthicVersionInputSchema';

export const EthicVersionsToPersonsUpdateManyWithWhereWithoutEthicVersionInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsUpdateManyWithWhereWithoutEthicVersionInput> = z.object({
  where: z.lazy(() => EthicVersionsToPersonsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EthicVersionsToPersonsUpdateManyMutationInputSchema),z.lazy(() => EthicVersionsToPersonsUncheckedUpdateManyWithoutEthicVersionInputSchema) ]),
}).strict();

export default EthicVersionsToPersonsUpdateManyWithWhereWithoutEthicVersionInputSchema;
