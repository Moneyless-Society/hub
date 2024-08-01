import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionScalarWhereInputSchema } from './EthicVersionScalarWhereInputSchema';
import { EthicVersionUpdateManyMutationInputSchema } from './EthicVersionUpdateManyMutationInputSchema';
import { EthicVersionUncheckedUpdateManyWithoutEthicInputSchema } from './EthicVersionUncheckedUpdateManyWithoutEthicInputSchema';

export const EthicVersionUpdateManyWithWhereWithoutEthicInputSchema: z.ZodType<Prisma.EthicVersionUpdateManyWithWhereWithoutEthicInput> = z.object({
  where: z.lazy(() => EthicVersionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EthicVersionUpdateManyMutationInputSchema),z.lazy(() => EthicVersionUncheckedUpdateManyWithoutEthicInputSchema) ]),
}).strict();

export default EthicVersionUpdateManyWithWhereWithoutEthicInputSchema;
