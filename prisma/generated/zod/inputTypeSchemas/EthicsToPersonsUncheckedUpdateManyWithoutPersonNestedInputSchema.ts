import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsCreateWithoutPersonInputSchema } from './EthicsToPersonsCreateWithoutPersonInputSchema';
import { EthicsToPersonsUncheckedCreateWithoutPersonInputSchema } from './EthicsToPersonsUncheckedCreateWithoutPersonInputSchema';
import { EthicsToPersonsCreateOrConnectWithoutPersonInputSchema } from './EthicsToPersonsCreateOrConnectWithoutPersonInputSchema';
import { EthicsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema } from './EthicsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema';
import { EthicsToPersonsCreateManyPersonInputEnvelopeSchema } from './EthicsToPersonsCreateManyPersonInputEnvelopeSchema';
import { EthicsToPersonsWhereUniqueInputSchema } from './EthicsToPersonsWhereUniqueInputSchema';
import { EthicsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema } from './EthicsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema';
import { EthicsToPersonsUpdateManyWithWhereWithoutPersonInputSchema } from './EthicsToPersonsUpdateManyWithWhereWithoutPersonInputSchema';
import { EthicsToPersonsScalarWhereInputSchema } from './EthicsToPersonsScalarWhereInputSchema';

export const EthicsToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.EthicsToPersonsUncheckedUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => EthicsToPersonsCreateWithoutPersonInputSchema),z.lazy(() => EthicsToPersonsCreateWithoutPersonInputSchema).array(),z.lazy(() => EthicsToPersonsUncheckedCreateWithoutPersonInputSchema),z.lazy(() => EthicsToPersonsUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EthicsToPersonsCreateOrConnectWithoutPersonInputSchema),z.lazy(() => EthicsToPersonsCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EthicsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => EthicsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EthicsToPersonsCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EthicsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EthicsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EthicsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EthicsToPersonsWhereUniqueInputSchema),z.lazy(() => EthicsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EthicsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => EthicsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EthicsToPersonsUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => EthicsToPersonsUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EthicsToPersonsScalarWhereInputSchema),z.lazy(() => EthicsToPersonsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EthicsToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema;
