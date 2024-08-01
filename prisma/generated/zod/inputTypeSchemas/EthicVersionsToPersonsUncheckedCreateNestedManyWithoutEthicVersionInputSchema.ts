import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsCreateWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsCreateWithoutEthicVersionInputSchema';
import { EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInputSchema';
import { EthicVersionsToPersonsCreateOrConnectWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsCreateOrConnectWithoutEthicVersionInputSchema';
import { EthicVersionsToPersonsCreateManyEthicVersionInputEnvelopeSchema } from './EthicVersionsToPersonsCreateManyEthicVersionInputEnvelopeSchema';
import { EthicVersionsToPersonsWhereUniqueInputSchema } from './EthicVersionsToPersonsWhereUniqueInputSchema';

export const EthicVersionsToPersonsUncheckedCreateNestedManyWithoutEthicVersionInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsUncheckedCreateNestedManyWithoutEthicVersionInput> = z.object({
  create: z.union([ z.lazy(() => EthicVersionsToPersonsCreateWithoutEthicVersionInputSchema),z.lazy(() => EthicVersionsToPersonsCreateWithoutEthicVersionInputSchema).array(),z.lazy(() => EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInputSchema),z.lazy(() => EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EthicVersionsToPersonsCreateOrConnectWithoutEthicVersionInputSchema),z.lazy(() => EthicVersionsToPersonsCreateOrConnectWithoutEthicVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EthicVersionsToPersonsCreateManyEthicVersionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EthicVersionsToPersonsUncheckedCreateNestedManyWithoutEthicVersionInputSchema;
