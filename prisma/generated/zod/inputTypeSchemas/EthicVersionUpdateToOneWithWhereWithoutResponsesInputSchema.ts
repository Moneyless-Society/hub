import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionWhereInputSchema } from './EthicVersionWhereInputSchema';
import { EthicVersionUpdateWithoutResponsesInputSchema } from './EthicVersionUpdateWithoutResponsesInputSchema';
import { EthicVersionUncheckedUpdateWithoutResponsesInputSchema } from './EthicVersionUncheckedUpdateWithoutResponsesInputSchema';

export const EthicVersionUpdateToOneWithWhereWithoutResponsesInputSchema: z.ZodType<Prisma.EthicVersionUpdateToOneWithWhereWithoutResponsesInput> = z.object({
  where: z.lazy(() => EthicVersionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EthicVersionUpdateWithoutResponsesInputSchema),z.lazy(() => EthicVersionUncheckedUpdateWithoutResponsesInputSchema) ]),
}).strict();

export default EthicVersionUpdateToOneWithWhereWithoutResponsesInputSchema;
