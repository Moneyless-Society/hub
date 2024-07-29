import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionCreateWithoutSubmitterInputSchema } from './EthicVersionCreateWithoutSubmitterInputSchema';
import { EthicVersionUncheckedCreateWithoutSubmitterInputSchema } from './EthicVersionUncheckedCreateWithoutSubmitterInputSchema';
import { EthicVersionCreateOrConnectWithoutSubmitterInputSchema } from './EthicVersionCreateOrConnectWithoutSubmitterInputSchema';
import { EthicVersionCreateManySubmitterInputEnvelopeSchema } from './EthicVersionCreateManySubmitterInputEnvelopeSchema';
import { EthicVersionWhereUniqueInputSchema } from './EthicVersionWhereUniqueInputSchema';

export const EthicVersionUncheckedCreateNestedManyWithoutSubmitterInputSchema: z.ZodType<Prisma.EthicVersionUncheckedCreateNestedManyWithoutSubmitterInput> = z.object({
  create: z.union([ z.lazy(() => EthicVersionCreateWithoutSubmitterInputSchema),z.lazy(() => EthicVersionCreateWithoutSubmitterInputSchema).array(),z.lazy(() => EthicVersionUncheckedCreateWithoutSubmitterInputSchema),z.lazy(() => EthicVersionUncheckedCreateWithoutSubmitterInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EthicVersionCreateOrConnectWithoutSubmitterInputSchema),z.lazy(() => EthicVersionCreateOrConnectWithoutSubmitterInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EthicVersionCreateManySubmitterInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EthicVersionWhereUniqueInputSchema),z.lazy(() => EthicVersionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EthicVersionUncheckedCreateNestedManyWithoutSubmitterInputSchema;
