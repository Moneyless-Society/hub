import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionWhereUniqueInputSchema } from './EthicVersionWhereUniqueInputSchema';
import { EthicVersionUpdateWithoutEthicInputSchema } from './EthicVersionUpdateWithoutEthicInputSchema';
import { EthicVersionUncheckedUpdateWithoutEthicInputSchema } from './EthicVersionUncheckedUpdateWithoutEthicInputSchema';

export const EthicVersionUpdateWithWhereUniqueWithoutEthicInputSchema: z.ZodType<Prisma.EthicVersionUpdateWithWhereUniqueWithoutEthicInput> = z.object({
  where: z.lazy(() => EthicVersionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EthicVersionUpdateWithoutEthicInputSchema),z.lazy(() => EthicVersionUncheckedUpdateWithoutEthicInputSchema) ]),
}).strict();

export default EthicVersionUpdateWithWhereUniqueWithoutEthicInputSchema;
