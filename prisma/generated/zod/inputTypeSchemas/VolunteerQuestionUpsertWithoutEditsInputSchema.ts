import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionUpdateWithoutEditsInputSchema } from './VolunteerQuestionUpdateWithoutEditsInputSchema';
import { VolunteerQuestionUncheckedUpdateWithoutEditsInputSchema } from './VolunteerQuestionUncheckedUpdateWithoutEditsInputSchema';
import { VolunteerQuestionCreateWithoutEditsInputSchema } from './VolunteerQuestionCreateWithoutEditsInputSchema';
import { VolunteerQuestionUncheckedCreateWithoutEditsInputSchema } from './VolunteerQuestionUncheckedCreateWithoutEditsInputSchema';
import { VolunteerQuestionWhereInputSchema } from './VolunteerQuestionWhereInputSchema';

export const VolunteerQuestionUpsertWithoutEditsInputSchema: z.ZodType<Prisma.VolunteerQuestionUpsertWithoutEditsInput> = z.object({
  update: z.union([ z.lazy(() => VolunteerQuestionUpdateWithoutEditsInputSchema),z.lazy(() => VolunteerQuestionUncheckedUpdateWithoutEditsInputSchema) ]),
  create: z.union([ z.lazy(() => VolunteerQuestionCreateWithoutEditsInputSchema),z.lazy(() => VolunteerQuestionUncheckedCreateWithoutEditsInputSchema) ]),
  where: z.lazy(() => VolunteerQuestionWhereInputSchema).optional()
}).strict();

export default VolunteerQuestionUpsertWithoutEditsInputSchema;
