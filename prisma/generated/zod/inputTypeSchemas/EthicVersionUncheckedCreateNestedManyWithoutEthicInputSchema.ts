import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionCreateWithoutEthicInputSchema } from './EthicVersionCreateWithoutEthicInputSchema';
import { EthicVersionUncheckedCreateWithoutEthicInputSchema } from './EthicVersionUncheckedCreateWithoutEthicInputSchema';
import { EthicVersionCreateOrConnectWithoutEthicInputSchema } from './EthicVersionCreateOrConnectWithoutEthicInputSchema';
import { EthicVersionCreateManyEthicInputEnvelopeSchema } from './EthicVersionCreateManyEthicInputEnvelopeSchema';
import { EthicVersionWhereUniqueInputSchema } from './EthicVersionWhereUniqueInputSchema';

export const EthicVersionUncheckedCreateNestedManyWithoutEthicInputSchema: z.ZodType<Prisma.EthicVersionUncheckedCreateNestedManyWithoutEthicInput> = z.object({
  create: z.union([ z.lazy(() => EthicVersionCreateWithoutEthicInputSchema),z.lazy(() => EthicVersionCreateWithoutEthicInputSchema).array(),z.lazy(() => EthicVersionUncheckedCreateWithoutEthicInputSchema),z.lazy(() => EthicVersionUncheckedCreateWithoutEthicInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EthicVersionCreateOrConnectWithoutEthicInputSchema),z.lazy(() => EthicVersionCreateOrConnectWithoutEthicInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EthicVersionCreateManyEthicInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EthicVersionWhereUniqueInputSchema),z.lazy(() => EthicVersionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EthicVersionUncheckedCreateNestedManyWithoutEthicInputSchema;
