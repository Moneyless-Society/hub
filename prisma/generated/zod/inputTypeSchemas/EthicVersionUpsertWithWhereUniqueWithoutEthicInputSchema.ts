import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionWhereUniqueInputSchema } from './EthicVersionWhereUniqueInputSchema';
import { EthicVersionUpdateWithoutEthicInputSchema } from './EthicVersionUpdateWithoutEthicInputSchema';
import { EthicVersionUncheckedUpdateWithoutEthicInputSchema } from './EthicVersionUncheckedUpdateWithoutEthicInputSchema';
import { EthicVersionCreateWithoutEthicInputSchema } from './EthicVersionCreateWithoutEthicInputSchema';
import { EthicVersionUncheckedCreateWithoutEthicInputSchema } from './EthicVersionUncheckedCreateWithoutEthicInputSchema';

export const EthicVersionUpsertWithWhereUniqueWithoutEthicInputSchema: z.ZodType<Prisma.EthicVersionUpsertWithWhereUniqueWithoutEthicInput> = z.object({
  where: z.lazy(() => EthicVersionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EthicVersionUpdateWithoutEthicInputSchema),z.lazy(() => EthicVersionUncheckedUpdateWithoutEthicInputSchema) ]),
  create: z.union([ z.lazy(() => EthicVersionCreateWithoutEthicInputSchema),z.lazy(() => EthicVersionUncheckedCreateWithoutEthicInputSchema) ]),
}).strict();

export default EthicVersionUpsertWithWhereUniqueWithoutEthicInputSchema;
