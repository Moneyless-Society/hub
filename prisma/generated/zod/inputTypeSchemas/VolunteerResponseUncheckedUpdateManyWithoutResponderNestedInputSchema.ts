import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseCreateWithoutResponderInputSchema } from './VolunteerResponseCreateWithoutResponderInputSchema';
import { VolunteerResponseUncheckedCreateWithoutResponderInputSchema } from './VolunteerResponseUncheckedCreateWithoutResponderInputSchema';
import { VolunteerResponseCreateOrConnectWithoutResponderInputSchema } from './VolunteerResponseCreateOrConnectWithoutResponderInputSchema';
import { VolunteerResponseUpsertWithWhereUniqueWithoutResponderInputSchema } from './VolunteerResponseUpsertWithWhereUniqueWithoutResponderInputSchema';
import { VolunteerResponseCreateManyResponderInputEnvelopeSchema } from './VolunteerResponseCreateManyResponderInputEnvelopeSchema';
import { VolunteerResponseWhereUniqueInputSchema } from './VolunteerResponseWhereUniqueInputSchema';
import { VolunteerResponseUpdateWithWhereUniqueWithoutResponderInputSchema } from './VolunteerResponseUpdateWithWhereUniqueWithoutResponderInputSchema';
import { VolunteerResponseUpdateManyWithWhereWithoutResponderInputSchema } from './VolunteerResponseUpdateManyWithWhereWithoutResponderInputSchema';
import { VolunteerResponseScalarWhereInputSchema } from './VolunteerResponseScalarWhereInputSchema';

export const VolunteerResponseUncheckedUpdateManyWithoutResponderNestedInputSchema: z.ZodType<Prisma.VolunteerResponseUncheckedUpdateManyWithoutResponderNestedInput> = z.object({
  create: z.union([ z.lazy(() => VolunteerResponseCreateWithoutResponderInputSchema),z.lazy(() => VolunteerResponseCreateWithoutResponderInputSchema).array(),z.lazy(() => VolunteerResponseUncheckedCreateWithoutResponderInputSchema),z.lazy(() => VolunteerResponseUncheckedCreateWithoutResponderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VolunteerResponseCreateOrConnectWithoutResponderInputSchema),z.lazy(() => VolunteerResponseCreateOrConnectWithoutResponderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VolunteerResponseUpsertWithWhereUniqueWithoutResponderInputSchema),z.lazy(() => VolunteerResponseUpsertWithWhereUniqueWithoutResponderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VolunteerResponseCreateManyResponderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VolunteerResponseWhereUniqueInputSchema),z.lazy(() => VolunteerResponseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VolunteerResponseWhereUniqueInputSchema),z.lazy(() => VolunteerResponseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VolunteerResponseWhereUniqueInputSchema),z.lazy(() => VolunteerResponseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VolunteerResponseWhereUniqueInputSchema),z.lazy(() => VolunteerResponseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VolunteerResponseUpdateWithWhereUniqueWithoutResponderInputSchema),z.lazy(() => VolunteerResponseUpdateWithWhereUniqueWithoutResponderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VolunteerResponseUpdateManyWithWhereWithoutResponderInputSchema),z.lazy(() => VolunteerResponseUpdateManyWithWhereWithoutResponderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VolunteerResponseScalarWhereInputSchema),z.lazy(() => VolunteerResponseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default VolunteerResponseUncheckedUpdateManyWithoutResponderNestedInputSchema;
