import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseWhereUniqueInputSchema } from './VolunteerResponseWhereUniqueInputSchema';
import { VolunteerResponseUpdateWithoutQuestionInputSchema } from './VolunteerResponseUpdateWithoutQuestionInputSchema';
import { VolunteerResponseUncheckedUpdateWithoutQuestionInputSchema } from './VolunteerResponseUncheckedUpdateWithoutQuestionInputSchema';
import { VolunteerResponseCreateWithoutQuestionInputSchema } from './VolunteerResponseCreateWithoutQuestionInputSchema';
import { VolunteerResponseUncheckedCreateWithoutQuestionInputSchema } from './VolunteerResponseUncheckedCreateWithoutQuestionInputSchema';

export const VolunteerResponseUpsertWithWhereUniqueWithoutQuestionInputSchema: z.ZodType<Prisma.VolunteerResponseUpsertWithWhereUniqueWithoutQuestionInput> = z.object({
  where: z.lazy(() => VolunteerResponseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VolunteerResponseUpdateWithoutQuestionInputSchema),z.lazy(() => VolunteerResponseUncheckedUpdateWithoutQuestionInputSchema) ]),
  create: z.union([ z.lazy(() => VolunteerResponseCreateWithoutQuestionInputSchema),z.lazy(() => VolunteerResponseUncheckedCreateWithoutQuestionInputSchema) ]),
}).strict();

export default VolunteerResponseUpsertWithWhereUniqueWithoutQuestionInputSchema;
