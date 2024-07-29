import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AvailabilityCreateWithoutPersonInputSchema } from './AvailabilityCreateWithoutPersonInputSchema';
import { AvailabilityUncheckedCreateWithoutPersonInputSchema } from './AvailabilityUncheckedCreateWithoutPersonInputSchema';
import { AvailabilityCreateOrConnectWithoutPersonInputSchema } from './AvailabilityCreateOrConnectWithoutPersonInputSchema';
import { AvailabilityUpsertWithWhereUniqueWithoutPersonInputSchema } from './AvailabilityUpsertWithWhereUniqueWithoutPersonInputSchema';
import { AvailabilityCreateManyPersonInputEnvelopeSchema } from './AvailabilityCreateManyPersonInputEnvelopeSchema';
import { AvailabilityWhereUniqueInputSchema } from './AvailabilityWhereUniqueInputSchema';
import { AvailabilityUpdateWithWhereUniqueWithoutPersonInputSchema } from './AvailabilityUpdateWithWhereUniqueWithoutPersonInputSchema';
import { AvailabilityUpdateManyWithWhereWithoutPersonInputSchema } from './AvailabilityUpdateManyWithWhereWithoutPersonInputSchema';
import { AvailabilityScalarWhereInputSchema } from './AvailabilityScalarWhereInputSchema';

export const AvailabilityUncheckedUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.AvailabilityUncheckedUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => AvailabilityCreateWithoutPersonInputSchema),z.lazy(() => AvailabilityCreateWithoutPersonInputSchema).array(),z.lazy(() => AvailabilityUncheckedCreateWithoutPersonInputSchema),z.lazy(() => AvailabilityUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AvailabilityCreateOrConnectWithoutPersonInputSchema),z.lazy(() => AvailabilityCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AvailabilityUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => AvailabilityUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AvailabilityCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AvailabilityUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => AvailabilityUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AvailabilityUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => AvailabilityUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AvailabilityScalarWhereInputSchema),z.lazy(() => AvailabilityScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AvailabilityUncheckedUpdateManyWithoutPersonNestedInputSchema;
