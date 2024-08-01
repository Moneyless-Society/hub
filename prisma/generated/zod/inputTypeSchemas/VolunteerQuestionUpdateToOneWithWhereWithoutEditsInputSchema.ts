import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionWhereInputSchema } from './VolunteerQuestionWhereInputSchema';
import { VolunteerQuestionUpdateWithoutEditsInputSchema } from './VolunteerQuestionUpdateWithoutEditsInputSchema';
import { VolunteerQuestionUncheckedUpdateWithoutEditsInputSchema } from './VolunteerQuestionUncheckedUpdateWithoutEditsInputSchema';

export const VolunteerQuestionUpdateToOneWithWhereWithoutEditsInputSchema: z.ZodType<Prisma.VolunteerQuestionUpdateToOneWithWhereWithoutEditsInput> = z.object({
  where: z.lazy(() => VolunteerQuestionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => VolunteerQuestionUpdateWithoutEditsInputSchema),z.lazy(() => VolunteerQuestionUncheckedUpdateWithoutEditsInputSchema) ]),
}).strict();

export default VolunteerQuestionUpdateToOneWithWhereWithoutEditsInputSchema;
