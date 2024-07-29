import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseCreateWithoutImportedByInputSchema } from './VolunteerResponseCreateWithoutImportedByInputSchema';
import { VolunteerResponseUncheckedCreateWithoutImportedByInputSchema } from './VolunteerResponseUncheckedCreateWithoutImportedByInputSchema';
import { VolunteerResponseCreateOrConnectWithoutImportedByInputSchema } from './VolunteerResponseCreateOrConnectWithoutImportedByInputSchema';
import { VolunteerResponseUpsertWithWhereUniqueWithoutImportedByInputSchema } from './VolunteerResponseUpsertWithWhereUniqueWithoutImportedByInputSchema';
import { VolunteerResponseCreateManyImportedByInputEnvelopeSchema } from './VolunteerResponseCreateManyImportedByInputEnvelopeSchema';
import { VolunteerResponseWhereUniqueInputSchema } from './VolunteerResponseWhereUniqueInputSchema';
import { VolunteerResponseUpdateWithWhereUniqueWithoutImportedByInputSchema } from './VolunteerResponseUpdateWithWhereUniqueWithoutImportedByInputSchema';
import { VolunteerResponseUpdateManyWithWhereWithoutImportedByInputSchema } from './VolunteerResponseUpdateManyWithWhereWithoutImportedByInputSchema';
import { VolunteerResponseScalarWhereInputSchema } from './VolunteerResponseScalarWhereInputSchema';

export const VolunteerResponseUpdateManyWithoutImportedByNestedInputSchema: z.ZodType<Prisma.VolunteerResponseUpdateManyWithoutImportedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => VolunteerResponseCreateWithoutImportedByInputSchema),z.lazy(() => VolunteerResponseCreateWithoutImportedByInputSchema).array(),z.lazy(() => VolunteerResponseUncheckedCreateWithoutImportedByInputSchema),z.lazy(() => VolunteerResponseUncheckedCreateWithoutImportedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VolunteerResponseCreateOrConnectWithoutImportedByInputSchema),z.lazy(() => VolunteerResponseCreateOrConnectWithoutImportedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VolunteerResponseUpsertWithWhereUniqueWithoutImportedByInputSchema),z.lazy(() => VolunteerResponseUpsertWithWhereUniqueWithoutImportedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VolunteerResponseCreateManyImportedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VolunteerResponseWhereUniqueInputSchema),z.lazy(() => VolunteerResponseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VolunteerResponseWhereUniqueInputSchema),z.lazy(() => VolunteerResponseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VolunteerResponseWhereUniqueInputSchema),z.lazy(() => VolunteerResponseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VolunteerResponseWhereUniqueInputSchema),z.lazy(() => VolunteerResponseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VolunteerResponseUpdateWithWhereUniqueWithoutImportedByInputSchema),z.lazy(() => VolunteerResponseUpdateWithWhereUniqueWithoutImportedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VolunteerResponseUpdateManyWithWhereWithoutImportedByInputSchema),z.lazy(() => VolunteerResponseUpdateManyWithWhereWithoutImportedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VolunteerResponseScalarWhereInputSchema),z.lazy(() => VolunteerResponseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default VolunteerResponseUpdateManyWithoutImportedByNestedInputSchema;
