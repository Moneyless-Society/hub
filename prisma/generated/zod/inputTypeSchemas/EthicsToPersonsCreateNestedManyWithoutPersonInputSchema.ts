import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsCreateWithoutPersonInputSchema } from './EthicsToPersonsCreateWithoutPersonInputSchema';
import { EthicsToPersonsUncheckedCreateWithoutPersonInputSchema } from './EthicsToPersonsUncheckedCreateWithoutPersonInputSchema';
import { EthicsToPersonsCreateOrConnectWithoutPersonInputSchema } from './EthicsToPersonsCreateOrConnectWithoutPersonInputSchema';
import { EthicsToPersonsCreateManyPersonInputEnvelopeSchema } from './EthicsToPersonsCreateManyPersonInputEnvelopeSchema';
import { EthicsToPersonsWhereUniqueInputSchema } from './EthicsToPersonsWhereUniqueInputSchema';

export const EthicsToPersonsCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.EthicsToPersonsCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => EthicsToPersonsCreateWithoutPersonInputSchema),z.lazy(() => EthicsToPersonsCreateWithoutPersonInputSchema).array(),z.lazy(() => EthicsToPersonsUncheckedCreateWithoutPersonInputSchema),z.lazy(() => EthicsToPersonsUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EthicsToPersonsCreateOrConnectWithoutPersonInputSchema),z.lazy(() => EthicsToPersonsCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EthicsToPersonsCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EthicsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicsToPersonsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EthicsToPersonsCreateNestedManyWithoutPersonInputSchema;
