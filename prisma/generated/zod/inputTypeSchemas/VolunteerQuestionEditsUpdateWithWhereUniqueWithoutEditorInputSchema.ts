import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionEditsWhereUniqueInputSchema } from './VolunteerQuestionEditsWhereUniqueInputSchema';
import { VolunteerQuestionEditsUpdateWithoutEditorInputSchema } from './VolunteerQuestionEditsUpdateWithoutEditorInputSchema';
import { VolunteerQuestionEditsUncheckedUpdateWithoutEditorInputSchema } from './VolunteerQuestionEditsUncheckedUpdateWithoutEditorInputSchema';

export const VolunteerQuestionEditsUpdateWithWhereUniqueWithoutEditorInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUpdateWithWhereUniqueWithoutEditorInput> = z.object({
  where: z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VolunteerQuestionEditsUpdateWithoutEditorInputSchema),z.lazy(() => VolunteerQuestionEditsUncheckedUpdateWithoutEditorInputSchema) ]),
}).strict();

export default VolunteerQuestionEditsUpdateWithWhereUniqueWithoutEditorInputSchema;
