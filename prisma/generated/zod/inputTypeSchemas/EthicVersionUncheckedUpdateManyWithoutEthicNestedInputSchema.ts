import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionCreateWithoutEthicInputSchema } from './EthicVersionCreateWithoutEthicInputSchema';
import { EthicVersionUncheckedCreateWithoutEthicInputSchema } from './EthicVersionUncheckedCreateWithoutEthicInputSchema';
import { EthicVersionCreateOrConnectWithoutEthicInputSchema } from './EthicVersionCreateOrConnectWithoutEthicInputSchema';
import { EthicVersionUpsertWithWhereUniqueWithoutEthicInputSchema } from './EthicVersionUpsertWithWhereUniqueWithoutEthicInputSchema';
import { EthicVersionCreateManyEthicInputEnvelopeSchema } from './EthicVersionCreateManyEthicInputEnvelopeSchema';
import { EthicVersionWhereUniqueInputSchema } from './EthicVersionWhereUniqueInputSchema';
import { EthicVersionUpdateWithWhereUniqueWithoutEthicInputSchema } from './EthicVersionUpdateWithWhereUniqueWithoutEthicInputSchema';
import { EthicVersionUpdateManyWithWhereWithoutEthicInputSchema } from './EthicVersionUpdateManyWithWhereWithoutEthicInputSchema';
import { EthicVersionScalarWhereInputSchema } from './EthicVersionScalarWhereInputSchema';

export const EthicVersionUncheckedUpdateManyWithoutEthicNestedInputSchema: z.ZodType<Prisma.EthicVersionUncheckedUpdateManyWithoutEthicNestedInput> = z.object({
  create: z.union([ z.lazy(() => EthicVersionCreateWithoutEthicInputSchema),z.lazy(() => EthicVersionCreateWithoutEthicInputSchema).array(),z.lazy(() => EthicVersionUncheckedCreateWithoutEthicInputSchema),z.lazy(() => EthicVersionUncheckedCreateWithoutEthicInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EthicVersionCreateOrConnectWithoutEthicInputSchema),z.lazy(() => EthicVersionCreateOrConnectWithoutEthicInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EthicVersionUpsertWithWhereUniqueWithoutEthicInputSchema),z.lazy(() => EthicVersionUpsertWithWhereUniqueWithoutEthicInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EthicVersionCreateManyEthicInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EthicVersionWhereUniqueInputSchema),z.lazy(() => EthicVersionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EthicVersionWhereUniqueInputSchema),z.lazy(() => EthicVersionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EthicVersionWhereUniqueInputSchema),z.lazy(() => EthicVersionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EthicVersionWhereUniqueInputSchema),z.lazy(() => EthicVersionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EthicVersionUpdateWithWhereUniqueWithoutEthicInputSchema),z.lazy(() => EthicVersionUpdateWithWhereUniqueWithoutEthicInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EthicVersionUpdateManyWithWhereWithoutEthicInputSchema),z.lazy(() => EthicVersionUpdateManyWithWhereWithoutEthicInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EthicVersionScalarWhereInputSchema),z.lazy(() => EthicVersionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EthicVersionUncheckedUpdateManyWithoutEthicNestedInputSchema;
