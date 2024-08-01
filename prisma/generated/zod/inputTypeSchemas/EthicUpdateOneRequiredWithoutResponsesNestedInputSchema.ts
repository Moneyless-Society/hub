import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicCreateWithoutResponsesInputSchema } from './EthicCreateWithoutResponsesInputSchema';
import { EthicUncheckedCreateWithoutResponsesInputSchema } from './EthicUncheckedCreateWithoutResponsesInputSchema';
import { EthicCreateOrConnectWithoutResponsesInputSchema } from './EthicCreateOrConnectWithoutResponsesInputSchema';
import { EthicUpsertWithoutResponsesInputSchema } from './EthicUpsertWithoutResponsesInputSchema';
import { EthicWhereUniqueInputSchema } from './EthicWhereUniqueInputSchema';
import { EthicUpdateToOneWithWhereWithoutResponsesInputSchema } from './EthicUpdateToOneWithWhereWithoutResponsesInputSchema';
import { EthicUpdateWithoutResponsesInputSchema } from './EthicUpdateWithoutResponsesInputSchema';
import { EthicUncheckedUpdateWithoutResponsesInputSchema } from './EthicUncheckedUpdateWithoutResponsesInputSchema';

export const EthicUpdateOneRequiredWithoutResponsesNestedInputSchema: z.ZodType<Prisma.EthicUpdateOneRequiredWithoutResponsesNestedInput> = z.object({
  create: z.union([ z.lazy(() => EthicCreateWithoutResponsesInputSchema),z.lazy(() => EthicUncheckedCreateWithoutResponsesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EthicCreateOrConnectWithoutResponsesInputSchema).optional(),
  upsert: z.lazy(() => EthicUpsertWithoutResponsesInputSchema).optional(),
  connect: z.lazy(() => EthicWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EthicUpdateToOneWithWhereWithoutResponsesInputSchema),z.lazy(() => EthicUpdateWithoutResponsesInputSchema),z.lazy(() => EthicUncheckedUpdateWithoutResponsesInputSchema) ]).optional(),
}).strict();

export default EthicUpdateOneRequiredWithoutResponsesNestedInputSchema;
