import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionCreateNestedOneWithoutEditsInputSchema } from './VolunteerQuestionCreateNestedOneWithoutEditsInputSchema';
import { PersonCreateNestedOneWithoutVolunteerQuestionEditsInputSchema } from './PersonCreateNestedOneWithoutVolunteerQuestionEditsInputSchema';

export const VolunteerQuestionEditsCreateInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsCreateInput> = z.object({
  updatedAt: z.coerce.date().optional(),
  question: z.lazy(() => VolunteerQuestionCreateNestedOneWithoutEditsInputSchema),
  editor: z.lazy(() => PersonCreateNestedOneWithoutVolunteerQuestionEditsInputSchema)
}).strict();

export default VolunteerQuestionEditsCreateInputSchema;
