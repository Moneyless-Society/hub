import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsCreateWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsCreateWithoutEthicVersionInputSchema';
import { EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInputSchema';
import { EthicVersionsToPersonsCreateOrConnectWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsCreateOrConnectWithoutEthicVersionInputSchema';
import { EthicVersionsToPersonsUpsertWithWhereUniqueWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsUpsertWithWhereUniqueWithoutEthicVersionInputSchema';
import { EthicVersionsToPersonsCreateManyEthicVersionInputEnvelopeSchema } from './EthicVersionsToPersonsCreateManyEthicVersionInputEnvelopeSchema';
import { EthicVersionsToPersonsWhereUniqueInputSchema } from './EthicVersionsToPersonsWhereUniqueInputSchema';
import { EthicVersionsToPersonsUpdateWithWhereUniqueWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsUpdateWithWhereUniqueWithoutEthicVersionInputSchema';
import { EthicVersionsToPersonsUpdateManyWithWhereWithoutEthicVersionInputSchema } from './EthicVersionsToPersonsUpdateManyWithWhereWithoutEthicVersionInputSchema';
import { EthicVersionsToPersonsScalarWhereInputSchema } from './EthicVersionsToPersonsScalarWhereInputSchema';

export const EthicVersionsToPersonsUncheckedUpdateManyWithoutEthicVersionNestedInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsUncheckedUpdateManyWithoutEthicVersionNestedInput> = z.object({
  create: z.union([ z.lazy(() => EthicVersionsToPersonsCreateWithoutEthicVersionInputSchema),z.lazy(() => EthicVersionsToPersonsCreateWithoutEthicVersionInputSchema).array(),z.lazy(() => EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInputSchema),z.lazy(() => EthicVersionsToPersonsUncheckedCreateWithoutEthicVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EthicVersionsToPersonsCreateOrConnectWithoutEthicVersionInputSchema),z.lazy(() => EthicVersionsToPersonsCreateOrConnectWithoutEthicVersionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EthicVersionsToPersonsUpsertWithWhereUniqueWithoutEthicVersionInputSchema),z.lazy(() => EthicVersionsToPersonsUpsertWithWhereUniqueWithoutEthicVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EthicVersionsToPersonsCreateManyEthicVersionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EthicVersionsToPersonsUpdateWithWhereUniqueWithoutEthicVersionInputSchema),z.lazy(() => EthicVersionsToPersonsUpdateWithWhereUniqueWithoutEthicVersionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EthicVersionsToPersonsUpdateManyWithWhereWithoutEthicVersionInputSchema),z.lazy(() => EthicVersionsToPersonsUpdateManyWithWhereWithoutEthicVersionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EthicVersionsToPersonsScalarWhereInputSchema),z.lazy(() => EthicVersionsToPersonsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EthicVersionsToPersonsUncheckedUpdateManyWithoutEthicVersionNestedInputSchema;
