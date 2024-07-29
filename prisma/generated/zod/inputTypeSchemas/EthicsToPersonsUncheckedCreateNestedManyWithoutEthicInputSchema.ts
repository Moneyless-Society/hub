import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsCreateWithoutEthicInputSchema } from './EthicsToPersonsCreateWithoutEthicInputSchema';
import { EthicsToPersonsUncheckedCreateWithoutEthicInputSchema } from './EthicsToPersonsUncheckedCreateWithoutEthicInputSchema';
import { EthicsToPersonsCreateOrConnectWithoutEthicInputSchema } from './EthicsToPersonsCreateOrConnectWithoutEthicInputSchema';
import { EthicsToPersonsCreateManyEthicInputEnvelopeSchema } from './EthicsToPersonsCreateManyEthicInputEnvelopeSchema';
import { EthicsToPersonsWhereUniqueInputSchema } from './EthicsToPersonsWhereUniqueInputSchema';

export const EthicsToPersonsUncheckedCreateNestedManyWithoutEthicInputSchema: z.ZodType<Prisma.EthicsToPersonsUncheckedCreateNestedManyWithoutEthicInput> = z.object({
  create: z.union([ z.lazy(() => EthicsToPersonsCreateWithoutEthicInputSchema),z.lazy(() => EthicsToPersonsCreateWithoutEthicInputSchema).array(),z.lazy(() => EthicsToPersonsUncheckedCreateWithoutEthicInputSchema),z.lazy(() => EthicsToPersonsUncheckedCreateWithoutEthicInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EthicsToPersonsCreateOrConnectWithoutEthicInputSchema),z.lazy(() => EthicsToPersonsCreateOrConnectWithoutEthicInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EthicsToPersonsCreateManyEthicInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EthicsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicsToPersonsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EthicsToPersonsUncheckedCreateNestedManyWithoutEthicInputSchema;
