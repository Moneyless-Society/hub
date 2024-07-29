import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionWhereUniqueInputSchema } from './EthicVersionWhereUniqueInputSchema';
import { EthicVersionUpdateWithoutSubmitterInputSchema } from './EthicVersionUpdateWithoutSubmitterInputSchema';
import { EthicVersionUncheckedUpdateWithoutSubmitterInputSchema } from './EthicVersionUncheckedUpdateWithoutSubmitterInputSchema';
import { EthicVersionCreateWithoutSubmitterInputSchema } from './EthicVersionCreateWithoutSubmitterInputSchema';
import { EthicVersionUncheckedCreateWithoutSubmitterInputSchema } from './EthicVersionUncheckedCreateWithoutSubmitterInputSchema';

export const EthicVersionUpsertWithWhereUniqueWithoutSubmitterInputSchema: z.ZodType<Prisma.EthicVersionUpsertWithWhereUniqueWithoutSubmitterInput> = z.object({
  where: z.lazy(() => EthicVersionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EthicVersionUpdateWithoutSubmitterInputSchema),z.lazy(() => EthicVersionUncheckedUpdateWithoutSubmitterInputSchema) ]),
  create: z.union([ z.lazy(() => EthicVersionCreateWithoutSubmitterInputSchema),z.lazy(() => EthicVersionUncheckedCreateWithoutSubmitterInputSchema) ]),
}).strict();

export default EthicVersionUpsertWithWhereUniqueWithoutSubmitterInputSchema;
