import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateNestedOneWithoutVolunteerQuestionEditsInputSchema } from './PersonCreateNestedOneWithoutVolunteerQuestionEditsInputSchema';

export const VolunteerQuestionEditsCreateWithoutQuestionInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsCreateWithoutQuestionInput> = z.object({
  updatedAt: z.coerce.date().optional(),
  editor: z.lazy(() => PersonCreateNestedOneWithoutVolunteerQuestionEditsInputSchema)
}).strict();

export default VolunteerQuestionEditsCreateWithoutQuestionInputSchema;
