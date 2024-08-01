import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionEditsWhereUniqueInputSchema } from './VolunteerQuestionEditsWhereUniqueInputSchema';
import { VolunteerQuestionEditsUpdateWithoutEditorInputSchema } from './VolunteerQuestionEditsUpdateWithoutEditorInputSchema';
import { VolunteerQuestionEditsUncheckedUpdateWithoutEditorInputSchema } from './VolunteerQuestionEditsUncheckedUpdateWithoutEditorInputSchema';
import { VolunteerQuestionEditsCreateWithoutEditorInputSchema } from './VolunteerQuestionEditsCreateWithoutEditorInputSchema';
import { VolunteerQuestionEditsUncheckedCreateWithoutEditorInputSchema } from './VolunteerQuestionEditsUncheckedCreateWithoutEditorInputSchema';

export const VolunteerQuestionEditsUpsertWithWhereUniqueWithoutEditorInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUpsertWithWhereUniqueWithoutEditorInput> = z.object({
  where: z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VolunteerQuestionEditsUpdateWithoutEditorInputSchema),z.lazy(() => VolunteerQuestionEditsUncheckedUpdateWithoutEditorInputSchema) ]),
  create: z.union([ z.lazy(() => VolunteerQuestionEditsCreateWithoutEditorInputSchema),z.lazy(() => VolunteerQuestionEditsUncheckedCreateWithoutEditorInputSchema) ]),
}).strict();

export default VolunteerQuestionEditsUpsertWithWhereUniqueWithoutEditorInputSchema;
