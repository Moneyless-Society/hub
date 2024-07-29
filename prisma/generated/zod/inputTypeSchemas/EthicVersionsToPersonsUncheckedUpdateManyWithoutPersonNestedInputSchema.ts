import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsCreateWithoutPersonInputSchema } from './EthicVersionsToPersonsCreateWithoutPersonInputSchema';
import { EthicVersionsToPersonsUncheckedCreateWithoutPersonInputSchema } from './EthicVersionsToPersonsUncheckedCreateWithoutPersonInputSchema';
import { EthicVersionsToPersonsCreateOrConnectWithoutPersonInputSchema } from './EthicVersionsToPersonsCreateOrConnectWithoutPersonInputSchema';
import { EthicVersionsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema } from './EthicVersionsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema';
import { EthicVersionsToPersonsCreateManyPersonInputEnvelopeSchema } from './EthicVersionsToPersonsCreateManyPersonInputEnvelopeSchema';
import { EthicVersionsToPersonsWhereUniqueInputSchema } from './EthicVersionsToPersonsWhereUniqueInputSchema';
import { EthicVersionsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema } from './EthicVersionsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema';
import { EthicVersionsToPersonsUpdateManyWithWhereWithoutPersonInputSchema } from './EthicVersionsToPersonsUpdateManyWithWhereWithoutPersonInputSchema';
import { EthicVersionsToPersonsScalarWhereInputSchema } from './EthicVersionsToPersonsScalarWhereInputSchema';

export const EthicVersionsToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsUncheckedUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => EthicVersionsToPersonsCreateWithoutPersonInputSchema),z.lazy(() => EthicVersionsToPersonsCreateWithoutPersonInputSchema).array(),z.lazy(() => EthicVersionsToPersonsUncheckedCreateWithoutPersonInputSchema),z.lazy(() => EthicVersionsToPersonsUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EthicVersionsToPersonsCreateOrConnectWithoutPersonInputSchema),z.lazy(() => EthicVersionsToPersonsCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EthicVersionsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => EthicVersionsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EthicVersionsToPersonsCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicVersionsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EthicVersionsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => EthicVersionsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EthicVersionsToPersonsUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => EthicVersionsToPersonsUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EthicVersionsToPersonsScalarWhereInputSchema),z.lazy(() => EthicVersionsToPersonsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EthicVersionsToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema;
