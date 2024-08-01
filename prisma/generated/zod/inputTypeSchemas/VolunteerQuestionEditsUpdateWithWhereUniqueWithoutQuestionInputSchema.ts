import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionEditsWhereUniqueInputSchema } from './VolunteerQuestionEditsWhereUniqueInputSchema';
import { VolunteerQuestionEditsUpdateWithoutQuestionInputSchema } from './VolunteerQuestionEditsUpdateWithoutQuestionInputSchema';
import { VolunteerQuestionEditsUncheckedUpdateWithoutQuestionInputSchema } from './VolunteerQuestionEditsUncheckedUpdateWithoutQuestionInputSchema';

export const VolunteerQuestionEditsUpdateWithWhereUniqueWithoutQuestionInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUpdateWithWhereUniqueWithoutQuestionInput> = z.object({
  where: z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VolunteerQuestionEditsUpdateWithoutQuestionInputSchema),z.lazy(() => VolunteerQuestionEditsUncheckedUpdateWithoutQuestionInputSchema) ]),
}).strict();

export default VolunteerQuestionEditsUpdateWithWhereUniqueWithoutQuestionInputSchema;
