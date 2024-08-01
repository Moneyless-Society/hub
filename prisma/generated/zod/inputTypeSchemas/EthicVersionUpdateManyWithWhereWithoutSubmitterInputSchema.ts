import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionScalarWhereInputSchema } from './EthicVersionScalarWhereInputSchema';
import { EthicVersionUpdateManyMutationInputSchema } from './EthicVersionUpdateManyMutationInputSchema';
import { EthicVersionUncheckedUpdateManyWithoutSubmitterInputSchema } from './EthicVersionUncheckedUpdateManyWithoutSubmitterInputSchema';

export const EthicVersionUpdateManyWithWhereWithoutSubmitterInputSchema: z.ZodType<Prisma.EthicVersionUpdateManyWithWhereWithoutSubmitterInput> = z.object({
  where: z.lazy(() => EthicVersionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EthicVersionUpdateManyMutationInputSchema),z.lazy(() => EthicVersionUncheckedUpdateManyWithoutSubmitterInputSchema) ]),
}).strict();

export default EthicVersionUpdateManyWithWhereWithoutSubmitterInputSchema;
