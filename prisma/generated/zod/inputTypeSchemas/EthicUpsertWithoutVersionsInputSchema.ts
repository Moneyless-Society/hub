import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicUpdateWithoutVersionsInputSchema } from './EthicUpdateWithoutVersionsInputSchema';
import { EthicUncheckedUpdateWithoutVersionsInputSchema } from './EthicUncheckedUpdateWithoutVersionsInputSchema';
import { EthicCreateWithoutVersionsInputSchema } from './EthicCreateWithoutVersionsInputSchema';
import { EthicUncheckedCreateWithoutVersionsInputSchema } from './EthicUncheckedCreateWithoutVersionsInputSchema';
import { EthicWhereInputSchema } from './EthicWhereInputSchema';

export const EthicUpsertWithoutVersionsInputSchema: z.ZodType<Prisma.EthicUpsertWithoutVersionsInput> = z.object({
  update: z.union([ z.lazy(() => EthicUpdateWithoutVersionsInputSchema),z.lazy(() => EthicUncheckedUpdateWithoutVersionsInputSchema) ]),
  create: z.union([ z.lazy(() => EthicCreateWithoutVersionsInputSchema),z.lazy(() => EthicUncheckedCreateWithoutVersionsInputSchema) ]),
  where: z.lazy(() => EthicWhereInputSchema).optional()
}).strict();

export default EthicUpsertWithoutVersionsInputSchema;
