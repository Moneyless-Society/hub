import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionEditsScalarWhereInputSchema } from './VolunteerQuestionEditsScalarWhereInputSchema';
import { VolunteerQuestionEditsUpdateManyMutationInputSchema } from './VolunteerQuestionEditsUpdateManyMutationInputSchema';
import { VolunteerQuestionEditsUncheckedUpdateManyWithoutEditorInputSchema } from './VolunteerQuestionEditsUncheckedUpdateManyWithoutEditorInputSchema';

export const VolunteerQuestionEditsUpdateManyWithWhereWithoutEditorInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUpdateManyWithWhereWithoutEditorInput> = z.object({
  where: z.lazy(() => VolunteerQuestionEditsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VolunteerQuestionEditsUpdateManyMutationInputSchema),z.lazy(() => VolunteerQuestionEditsUncheckedUpdateManyWithoutEditorInputSchema) ]),
}).strict();

export default VolunteerQuestionEditsUpdateManyWithWhereWithoutEditorInputSchema;
