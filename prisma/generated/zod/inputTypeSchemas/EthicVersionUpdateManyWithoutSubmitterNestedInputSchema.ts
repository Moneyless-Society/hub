import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionCreateWithoutSubmitterInputSchema } from './EthicVersionCreateWithoutSubmitterInputSchema';
import { EthicVersionUncheckedCreateWithoutSubmitterInputSchema } from './EthicVersionUncheckedCreateWithoutSubmitterInputSchema';
import { EthicVersionCreateOrConnectWithoutSubmitterInputSchema } from './EthicVersionCreateOrConnectWithoutSubmitterInputSchema';
import { EthicVersionUpsertWithWhereUniqueWithoutSubmitterInputSchema } from './EthicVersionUpsertWithWhereUniqueWithoutSubmitterInputSchema';
import { EthicVersionCreateManySubmitterInputEnvelopeSchema } from './EthicVersionCreateManySubmitterInputEnvelopeSchema';
import { EthicVersionWhereUniqueInputSchema } from './EthicVersionWhereUniqueInputSchema';
import { EthicVersionUpdateWithWhereUniqueWithoutSubmitterInputSchema } from './EthicVersionUpdateWithWhereUniqueWithoutSubmitterInputSchema';
import { EthicVersionUpdateManyWithWhereWithoutSubmitterInputSchema } from './EthicVersionUpdateManyWithWhereWithoutSubmitterInputSchema';
import { EthicVersionScalarWhereInputSchema } from './EthicVersionScalarWhereInputSchema';

export const EthicVersionUpdateManyWithoutSubmitterNestedInputSchema: z.ZodType<Prisma.EthicVersionUpdateManyWithoutSubmitterNestedInput> = z.object({
  create: z.union([ z.lazy(() => EthicVersionCreateWithoutSubmitterInputSchema),z.lazy(() => EthicVersionCreateWithoutSubmitterInputSchema).array(),z.lazy(() => EthicVersionUncheckedCreateWithoutSubmitterInputSchema),z.lazy(() => EthicVersionUncheckedCreateWithoutSubmitterInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EthicVersionCreateOrConnectWithoutSubmitterInputSchema),z.lazy(() => EthicVersionCreateOrConnectWithoutSubmitterInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EthicVersionUpsertWithWhereUniqueWithoutSubmitterInputSchema),z.lazy(() => EthicVersionUpsertWithWhereUniqueWithoutSubmitterInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EthicVersionCreateManySubmitterInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EthicVersionWhereUniqueInputSchema),z.lazy(() => EthicVersionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EthicVersionWhereUniqueInputSchema),z.lazy(() => EthicVersionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EthicVersionWhereUniqueInputSchema),z.lazy(() => EthicVersionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EthicVersionWhereUniqueInputSchema),z.lazy(() => EthicVersionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EthicVersionUpdateWithWhereUniqueWithoutSubmitterInputSchema),z.lazy(() => EthicVersionUpdateWithWhereUniqueWithoutSubmitterInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EthicVersionUpdateManyWithWhereWithoutSubmitterInputSchema),z.lazy(() => EthicVersionUpdateManyWithWhereWithoutSubmitterInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EthicVersionScalarWhereInputSchema),z.lazy(() => EthicVersionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EthicVersionUpdateManyWithoutSubmitterNestedInputSchema;
