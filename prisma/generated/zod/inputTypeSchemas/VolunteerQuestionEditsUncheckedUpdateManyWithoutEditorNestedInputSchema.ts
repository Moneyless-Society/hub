import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionEditsCreateWithoutEditorInputSchema } from './VolunteerQuestionEditsCreateWithoutEditorInputSchema';
import { VolunteerQuestionEditsUncheckedCreateWithoutEditorInputSchema } from './VolunteerQuestionEditsUncheckedCreateWithoutEditorInputSchema';
import { VolunteerQuestionEditsCreateOrConnectWithoutEditorInputSchema } from './VolunteerQuestionEditsCreateOrConnectWithoutEditorInputSchema';
import { VolunteerQuestionEditsUpsertWithWhereUniqueWithoutEditorInputSchema } from './VolunteerQuestionEditsUpsertWithWhereUniqueWithoutEditorInputSchema';
import { VolunteerQuestionEditsCreateManyEditorInputEnvelopeSchema } from './VolunteerQuestionEditsCreateManyEditorInputEnvelopeSchema';
import { VolunteerQuestionEditsWhereUniqueInputSchema } from './VolunteerQuestionEditsWhereUniqueInputSchema';
import { VolunteerQuestionEditsUpdateWithWhereUniqueWithoutEditorInputSchema } from './VolunteerQuestionEditsUpdateWithWhereUniqueWithoutEditorInputSchema';
import { VolunteerQuestionEditsUpdateManyWithWhereWithoutEditorInputSchema } from './VolunteerQuestionEditsUpdateManyWithWhereWithoutEditorInputSchema';
import { VolunteerQuestionEditsScalarWhereInputSchema } from './VolunteerQuestionEditsScalarWhereInputSchema';

export const VolunteerQuestionEditsUncheckedUpdateManyWithoutEditorNestedInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUncheckedUpdateManyWithoutEditorNestedInput> = z.object({
  create: z.union([ z.lazy(() => VolunteerQuestionEditsCreateWithoutEditorInputSchema),z.lazy(() => VolunteerQuestionEditsCreateWithoutEditorInputSchema).array(),z.lazy(() => VolunteerQuestionEditsUncheckedCreateWithoutEditorInputSchema),z.lazy(() => VolunteerQuestionEditsUncheckedCreateWithoutEditorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VolunteerQuestionEditsCreateOrConnectWithoutEditorInputSchema),z.lazy(() => VolunteerQuestionEditsCreateOrConnectWithoutEditorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VolunteerQuestionEditsUpsertWithWhereUniqueWithoutEditorInputSchema),z.lazy(() => VolunteerQuestionEditsUpsertWithWhereUniqueWithoutEditorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VolunteerQuestionEditsCreateManyEditorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema),z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema),z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema),z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema),z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VolunteerQuestionEditsUpdateWithWhereUniqueWithoutEditorInputSchema),z.lazy(() => VolunteerQuestionEditsUpdateWithWhereUniqueWithoutEditorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VolunteerQuestionEditsUpdateManyWithWhereWithoutEditorInputSchema),z.lazy(() => VolunteerQuestionEditsUpdateManyWithWhereWithoutEditorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VolunteerQuestionEditsScalarWhereInputSchema),z.lazy(() => VolunteerQuestionEditsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default VolunteerQuestionEditsUncheckedUpdateManyWithoutEditorNestedInputSchema;
