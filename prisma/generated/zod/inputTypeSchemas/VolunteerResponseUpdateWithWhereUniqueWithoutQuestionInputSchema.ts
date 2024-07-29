import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseWhereUniqueInputSchema } from './VolunteerResponseWhereUniqueInputSchema';
import { VolunteerResponseUpdateWithoutQuestionInputSchema } from './VolunteerResponseUpdateWithoutQuestionInputSchema';
import { VolunteerResponseUncheckedUpdateWithoutQuestionInputSchema } from './VolunteerResponseUncheckedUpdateWithoutQuestionInputSchema';

export const VolunteerResponseUpdateWithWhereUniqueWithoutQuestionInputSchema: z.ZodType<Prisma.VolunteerResponseUpdateWithWhereUniqueWithoutQuestionInput> = z.object({
  where: z.lazy(() => VolunteerResponseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VolunteerResponseUpdateWithoutQuestionInputSchema),z.lazy(() => VolunteerResponseUncheckedUpdateWithoutQuestionInputSchema) ]),
}).strict();

export default VolunteerResponseUpdateWithWhereUniqueWithoutQuestionInputSchema;
