import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionEditsCreateWithoutQuestionInputSchema } from './VolunteerQuestionEditsCreateWithoutQuestionInputSchema';
import { VolunteerQuestionEditsUncheckedCreateWithoutQuestionInputSchema } from './VolunteerQuestionEditsUncheckedCreateWithoutQuestionInputSchema';
import { VolunteerQuestionEditsCreateOrConnectWithoutQuestionInputSchema } from './VolunteerQuestionEditsCreateOrConnectWithoutQuestionInputSchema';
import { VolunteerQuestionEditsUpsertWithWhereUniqueWithoutQuestionInputSchema } from './VolunteerQuestionEditsUpsertWithWhereUniqueWithoutQuestionInputSchema';
import { VolunteerQuestionEditsCreateManyQuestionInputEnvelopeSchema } from './VolunteerQuestionEditsCreateManyQuestionInputEnvelopeSchema';
import { VolunteerQuestionEditsWhereUniqueInputSchema } from './VolunteerQuestionEditsWhereUniqueInputSchema';
import { VolunteerQuestionEditsUpdateWithWhereUniqueWithoutQuestionInputSchema } from './VolunteerQuestionEditsUpdateWithWhereUniqueWithoutQuestionInputSchema';
import { VolunteerQuestionEditsUpdateManyWithWhereWithoutQuestionInputSchema } from './VolunteerQuestionEditsUpdateManyWithWhereWithoutQuestionInputSchema';
import { VolunteerQuestionEditsScalarWhereInputSchema } from './VolunteerQuestionEditsScalarWhereInputSchema';

export const VolunteerQuestionEditsUncheckedUpdateManyWithoutQuestionNestedInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUncheckedUpdateManyWithoutQuestionNestedInput> = z.object({
  create: z.union([ z.lazy(() => VolunteerQuestionEditsCreateWithoutQuestionInputSchema),z.lazy(() => VolunteerQuestionEditsCreateWithoutQuestionInputSchema).array(),z.lazy(() => VolunteerQuestionEditsUncheckedCreateWithoutQuestionInputSchema),z.lazy(() => VolunteerQuestionEditsUncheckedCreateWithoutQuestionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VolunteerQuestionEditsCreateOrConnectWithoutQuestionInputSchema),z.lazy(() => VolunteerQuestionEditsCreateOrConnectWithoutQuestionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VolunteerQuestionEditsUpsertWithWhereUniqueWithoutQuestionInputSchema),z.lazy(() => VolunteerQuestionEditsUpsertWithWhereUniqueWithoutQuestionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VolunteerQuestionEditsCreateManyQuestionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema),z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema),z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema),z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema),z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VolunteerQuestionEditsUpdateWithWhereUniqueWithoutQuestionInputSchema),z.lazy(() => VolunteerQuestionEditsUpdateWithWhereUniqueWithoutQuestionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VolunteerQuestionEditsUpdateManyWithWhereWithoutQuestionInputSchema),z.lazy(() => VolunteerQuestionEditsUpdateManyWithWhereWithoutQuestionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VolunteerQuestionEditsScalarWhereInputSchema),z.lazy(() => VolunteerQuestionEditsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default VolunteerQuestionEditsUncheckedUpdateManyWithoutQuestionNestedInputSchema;
