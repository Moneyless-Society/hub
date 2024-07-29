import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionWhereUniqueInputSchema } from './EthicVersionWhereUniqueInputSchema';
import { EthicVersionUpdateWithoutSubmitterInputSchema } from './EthicVersionUpdateWithoutSubmitterInputSchema';
import { EthicVersionUncheckedUpdateWithoutSubmitterInputSchema } from './EthicVersionUncheckedUpdateWithoutSubmitterInputSchema';

export const EthicVersionUpdateWithWhereUniqueWithoutSubmitterInputSchema: z.ZodType<Prisma.EthicVersionUpdateWithWhereUniqueWithoutSubmitterInput> = z.object({
  where: z.lazy(() => EthicVersionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EthicVersionUpdateWithoutSubmitterInputSchema),z.lazy(() => EthicVersionUncheckedUpdateWithoutSubmitterInputSchema) ]),
}).strict();

export default EthicVersionUpdateWithWhereUniqueWithoutSubmitterInputSchema;
