import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsCreateWithoutPersonInputSchema } from './EthicVersionsToPersonsCreateWithoutPersonInputSchema';
import { EthicVersionsToPersonsUncheckedCreateWithoutPersonInputSchema } from './EthicVersionsToPersonsUncheckedCreateWithoutPersonInputSchema';
import { EthicVersionsToPersonsCreateOrConnectWithoutPersonInputSchema } from './EthicVersionsToPersonsCreateOrConnectWithoutPersonInputSchema';
import { EthicVersionsToPersonsCreateManyPersonInputEnvelopeSchema } from './EthicVersionsToPersonsCreateManyPersonInputEnvelopeSchema';
import { EthicVersionsToPersonsWhereUniqueInputSchema } from './EthicVersionsToPersonsWhereUniqueInputSchema';

export const EthicVersionsToPersonsUncheckedCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsUncheckedCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => EthicVersionsToPersonsCreateWithoutPersonInputSchema),z.lazy(() => EthicVersionsToPersonsCreateWithoutPersonInputSchema).array(),z.lazy(() => EthicVersionsToPersonsUncheckedCreateWithoutPersonInputSchema),z.lazy(() => EthicVersionsToPersonsUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EthicVersionsToPersonsCreateOrConnectWithoutPersonInputSchema),z.lazy(() => EthicVersionsToPersonsCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EthicVersionsToPersonsCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EthicVersionsToPersonsUncheckedCreateNestedManyWithoutPersonInputSchema;
