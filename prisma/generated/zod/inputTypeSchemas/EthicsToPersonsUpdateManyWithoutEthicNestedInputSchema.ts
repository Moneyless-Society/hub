import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsCreateWithoutEthicInputSchema } from './EthicsToPersonsCreateWithoutEthicInputSchema';
import { EthicsToPersonsUncheckedCreateWithoutEthicInputSchema } from './EthicsToPersonsUncheckedCreateWithoutEthicInputSchema';
import { EthicsToPersonsCreateOrConnectWithoutEthicInputSchema } from './EthicsToPersonsCreateOrConnectWithoutEthicInputSchema';
import { EthicsToPersonsUpsertWithWhereUniqueWithoutEthicInputSchema } from './EthicsToPersonsUpsertWithWhereUniqueWithoutEthicInputSchema';
import { EthicsToPersonsCreateManyEthicInputEnvelopeSchema } from './EthicsToPersonsCreateManyEthicInputEnvelopeSchema';
import { EthicsToPersonsWhereUniqueInputSchema } from './EthicsToPersonsWhereUniqueInputSchema';
import { EthicsToPersonsUpdateWithWhereUniqueWithoutEthicInputSchema } from './EthicsToPersonsUpdateWithWhereUniqueWithoutEthicInputSchema';
import { EthicsToPersonsUpdateManyWithWhereWithoutEthicInputSchema } from './EthicsToPersonsUpdateManyWithWhereWithoutEthicInputSchema';
import { EthicsToPersonsScalarWhereInputSchema } from './EthicsToPersonsScalarWhereInputSchema';

export const EthicsToPersonsUpdateManyWithoutEthicNestedInputSchema: z.ZodType<Prisma.EthicsToPersonsUpdateManyWithoutEthicNestedInput> = z.object({
  create: z.union([ z.lazy(() => EthicsToPersonsCreateWithoutEthicInputSchema),z.lazy(() => EthicsToPersonsCreateWithoutEthicInputSchema).array(),z.lazy(() => EthicsToPersonsUncheckedCreateWithoutEthicInputSchema),z.lazy(() => EthicsToPersonsUncheckedCreateWithoutEthicInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EthicsToPersonsCreateOrConnectWithoutEthicInputSchema),z.lazy(() => EthicsToPersonsCreateOrConnectWithoutEthicInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EthicsToPersonsUpsertWithWhereUniqueWithoutEthicInputSchema),z.lazy(() => EthicsToPersonsUpsertWithWhereUniqueWithoutEthicInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EthicsToPersonsCreateManyEthicInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EthicsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EthicsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EthicsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EthicsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EthicsToPersonsUpdateWithWhereUniqueWithoutEthicInputSchema),z.lazy(() => EthicsToPersonsUpdateWithWhereUniqueWithoutEthicInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EthicsToPersonsUpdateManyWithWhereWithoutEthicInputSchema),z.lazy(() => EthicsToPersonsUpdateManyWithWhereWithoutEthicInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EthicsToPersonsScalarWhereInputSchema),z.lazy(() => EthicsToPersonsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EthicsToPersonsUpdateManyWithoutEthicNestedInputSchema;
