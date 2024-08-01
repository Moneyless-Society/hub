import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseCreateWithoutQuestionInputSchema } from './VolunteerResponseCreateWithoutQuestionInputSchema';
import { VolunteerResponseUncheckedCreateWithoutQuestionInputSchema } from './VolunteerResponseUncheckedCreateWithoutQuestionInputSchema';
import { VolunteerResponseCreateOrConnectWithoutQuestionInputSchema } from './VolunteerResponseCreateOrConnectWithoutQuestionInputSchema';
import { VolunteerResponseUpsertWithWhereUniqueWithoutQuestionInputSchema } from './VolunteerResponseUpsertWithWhereUniqueWithoutQuestionInputSchema';
import { VolunteerResponseCreateManyQuestionInputEnvelopeSchema } from './VolunteerResponseCreateManyQuestionInputEnvelopeSchema';
import { VolunteerResponseWhereUniqueInputSchema } from './VolunteerResponseWhereUniqueInputSchema';
import { VolunteerResponseUpdateWithWhereUniqueWithoutQuestionInputSchema } from './VolunteerResponseUpdateWithWhereUniqueWithoutQuestionInputSchema';
import { VolunteerResponseUpdateManyWithWhereWithoutQuestionInputSchema } from './VolunteerResponseUpdateManyWithWhereWithoutQuestionInputSchema';
import { VolunteerResponseScalarWhereInputSchema } from './VolunteerResponseScalarWhereInputSchema';

export const VolunteerResponseUncheckedUpdateManyWithoutQuestionNestedInputSchema: z.ZodType<Prisma.VolunteerResponseUncheckedUpdateManyWithoutQuestionNestedInput> = z.object({
  create: z.union([ z.lazy(() => VolunteerResponseCreateWithoutQuestionInputSchema),z.lazy(() => VolunteerResponseCreateWithoutQuestionInputSchema).array(),z.lazy(() => VolunteerResponseUncheckedCreateWithoutQuestionInputSchema),z.lazy(() => VolunteerResponseUncheckedCreateWithoutQuestionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VolunteerResponseCreateOrConnectWithoutQuestionInputSchema),z.lazy(() => VolunteerResponseCreateOrConnectWithoutQuestionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VolunteerResponseUpsertWithWhereUniqueWithoutQuestionInputSchema),z.lazy(() => VolunteerResponseUpsertWithWhereUniqueWithoutQuestionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VolunteerResponseCreateManyQuestionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VolunteerResponseWhereUniqueInputSchema),z.lazy(() => VolunteerResponseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VolunteerResponseWhereUniqueInputSchema),z.lazy(() => VolunteerResponseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VolunteerResponseWhereUniqueInputSchema),z.lazy(() => VolunteerResponseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VolunteerResponseWhereUniqueInputSchema),z.lazy(() => VolunteerResponseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VolunteerResponseUpdateWithWhereUniqueWithoutQuestionInputSchema),z.lazy(() => VolunteerResponseUpdateWithWhereUniqueWithoutQuestionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VolunteerResponseUpdateManyWithWhereWithoutQuestionInputSchema),z.lazy(() => VolunteerResponseUpdateManyWithWhereWithoutQuestionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VolunteerResponseScalarWhereInputSchema),z.lazy(() => VolunteerResponseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default VolunteerResponseUncheckedUpdateManyWithoutQuestionNestedInputSchema;
