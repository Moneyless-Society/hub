import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicWhereInputSchema } from './EthicWhereInputSchema';
import { EthicUpdateWithoutVersionsInputSchema } from './EthicUpdateWithoutVersionsInputSchema';
import { EthicUncheckedUpdateWithoutVersionsInputSchema } from './EthicUncheckedUpdateWithoutVersionsInputSchema';

export const EthicUpdateToOneWithWhereWithoutVersionsInputSchema: z.ZodType<Prisma.EthicUpdateToOneWithWhereWithoutVersionsInput> = z.object({
  where: z.lazy(() => EthicWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EthicUpdateWithoutVersionsInputSchema),z.lazy(() => EthicUncheckedUpdateWithoutVersionsInputSchema) ]),
}).strict();

export default EthicUpdateToOneWithWhereWithoutVersionsInputSchema;
