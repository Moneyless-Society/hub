import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionCreateWithoutResponsesInputSchema } from './EthicVersionCreateWithoutResponsesInputSchema';
import { EthicVersionUncheckedCreateWithoutResponsesInputSchema } from './EthicVersionUncheckedCreateWithoutResponsesInputSchema';
import { EthicVersionCreateOrConnectWithoutResponsesInputSchema } from './EthicVersionCreateOrConnectWithoutResponsesInputSchema';
import { EthicVersionUpsertWithoutResponsesInputSchema } from './EthicVersionUpsertWithoutResponsesInputSchema';
import { EthicVersionWhereUniqueInputSchema } from './EthicVersionWhereUniqueInputSchema';
import { EthicVersionUpdateToOneWithWhereWithoutResponsesInputSchema } from './EthicVersionUpdateToOneWithWhereWithoutResponsesInputSchema';
import { EthicVersionUpdateWithoutResponsesInputSchema } from './EthicVersionUpdateWithoutResponsesInputSchema';
import { EthicVersionUncheckedUpdateWithoutResponsesInputSchema } from './EthicVersionUncheckedUpdateWithoutResponsesInputSchema';

export const EthicVersionUpdateOneRequiredWithoutResponsesNestedInputSchema: z.ZodType<Prisma.EthicVersionUpdateOneRequiredWithoutResponsesNestedInput> = z.object({
  create: z.union([ z.lazy(() => EthicVersionCreateWithoutResponsesInputSchema),z.lazy(() => EthicVersionUncheckedCreateWithoutResponsesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EthicVersionCreateOrConnectWithoutResponsesInputSchema).optional(),
  upsert: z.lazy(() => EthicVersionUpsertWithoutResponsesInputSchema).optional(),
  connect: z.lazy(() => EthicVersionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EthicVersionUpdateToOneWithWhereWithoutResponsesInputSchema),z.lazy(() => EthicVersionUpdateWithoutResponsesInputSchema),z.lazy(() => EthicVersionUncheckedUpdateWithoutResponsesInputSchema) ]).optional(),
}).strict();

export default EthicVersionUpdateOneRequiredWithoutResponsesNestedInputSchema;
