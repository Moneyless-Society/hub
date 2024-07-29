import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionEditsCreateWithoutEditorInputSchema } from './VolunteerQuestionEditsCreateWithoutEditorInputSchema';
import { VolunteerQuestionEditsUncheckedCreateWithoutEditorInputSchema } from './VolunteerQuestionEditsUncheckedCreateWithoutEditorInputSchema';
import { VolunteerQuestionEditsCreateOrConnectWithoutEditorInputSchema } from './VolunteerQuestionEditsCreateOrConnectWithoutEditorInputSchema';
import { VolunteerQuestionEditsCreateManyEditorInputEnvelopeSchema } from './VolunteerQuestionEditsCreateManyEditorInputEnvelopeSchema';
import { VolunteerQuestionEditsWhereUniqueInputSchema } from './VolunteerQuestionEditsWhereUniqueInputSchema';

export const VolunteerQuestionEditsUncheckedCreateNestedManyWithoutEditorInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUncheckedCreateNestedManyWithoutEditorInput> = z.object({
  create: z.union([ z.lazy(() => VolunteerQuestionEditsCreateWithoutEditorInputSchema),z.lazy(() => VolunteerQuestionEditsCreateWithoutEditorInputSchema).array(),z.lazy(() => VolunteerQuestionEditsUncheckedCreateWithoutEditorInputSchema),z.lazy(() => VolunteerQuestionEditsUncheckedCreateWithoutEditorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VolunteerQuestionEditsCreateOrConnectWithoutEditorInputSchema),z.lazy(() => VolunteerQuestionEditsCreateOrConnectWithoutEditorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VolunteerQuestionEditsCreateManyEditorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema),z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default VolunteerQuestionEditsUncheckedCreateNestedManyWithoutEditorInputSchema;
