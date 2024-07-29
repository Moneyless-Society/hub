import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicCreateWithoutVersionsInputSchema } from './EthicCreateWithoutVersionsInputSchema';
import { EthicUncheckedCreateWithoutVersionsInputSchema } from './EthicUncheckedCreateWithoutVersionsInputSchema';
import { EthicCreateOrConnectWithoutVersionsInputSchema } from './EthicCreateOrConnectWithoutVersionsInputSchema';
import { EthicUpsertWithoutVersionsInputSchema } from './EthicUpsertWithoutVersionsInputSchema';
import { EthicWhereUniqueInputSchema } from './EthicWhereUniqueInputSchema';
import { EthicUpdateToOneWithWhereWithoutVersionsInputSchema } from './EthicUpdateToOneWithWhereWithoutVersionsInputSchema';
import { EthicUpdateWithoutVersionsInputSchema } from './EthicUpdateWithoutVersionsInputSchema';
import { EthicUncheckedUpdateWithoutVersionsInputSchema } from './EthicUncheckedUpdateWithoutVersionsInputSchema';

export const EthicUpdateOneRequiredWithoutVersionsNestedInputSchema: z.ZodType<Prisma.EthicUpdateOneRequiredWithoutVersionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => EthicCreateWithoutVersionsInputSchema),z.lazy(() => EthicUncheckedCreateWithoutVersionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EthicCreateOrConnectWithoutVersionsInputSchema).optional(),
  upsert: z.lazy(() => EthicUpsertWithoutVersionsInputSchema).optional(),
  connect: z.lazy(() => EthicWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EthicUpdateToOneWithWhereWithoutVersionsInputSchema),z.lazy(() => EthicUpdateWithoutVersionsInputSchema),z.lazy(() => EthicUncheckedUpdateWithoutVersionsInputSchema) ]).optional(),
}).strict();

export default EthicUpdateOneRequiredWithoutVersionsNestedInputSchema;
