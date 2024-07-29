import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicWhereInputSchema } from './EthicWhereInputSchema';
import { EthicUpdateWithoutResponsesInputSchema } from './EthicUpdateWithoutResponsesInputSchema';
import { EthicUncheckedUpdateWithoutResponsesInputSchema } from './EthicUncheckedUpdateWithoutResponsesInputSchema';

export const EthicUpdateToOneWithWhereWithoutResponsesInputSchema: z.ZodType<Prisma.EthicUpdateToOneWithWhereWithoutResponsesInput> = z.object({
  where: z.lazy(() => EthicWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EthicUpdateWithoutResponsesInputSchema),z.lazy(() => EthicUncheckedUpdateWithoutResponsesInputSchema) ]),
}).strict();

export default EthicUpdateToOneWithWhereWithoutResponsesInputSchema;
