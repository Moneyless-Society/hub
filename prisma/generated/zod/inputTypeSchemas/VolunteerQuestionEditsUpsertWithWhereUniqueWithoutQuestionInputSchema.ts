import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionEditsWhereUniqueInputSchema } from './VolunteerQuestionEditsWhereUniqueInputSchema';
import { VolunteerQuestionEditsUpdateWithoutQuestionInputSchema } from './VolunteerQuestionEditsUpdateWithoutQuestionInputSchema';
import { VolunteerQuestionEditsUncheckedUpdateWithoutQuestionInputSchema } from './VolunteerQuestionEditsUncheckedUpdateWithoutQuestionInputSchema';
import { VolunteerQuestionEditsCreateWithoutQuestionInputSchema } from './VolunteerQuestionEditsCreateWithoutQuestionInputSchema';
import { VolunteerQuestionEditsUncheckedCreateWithoutQuestionInputSchema } from './VolunteerQuestionEditsUncheckedCreateWithoutQuestionInputSchema';

export const VolunteerQuestionEditsUpsertWithWhereUniqueWithoutQuestionInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUpsertWithWhereUniqueWithoutQuestionInput> = z.object({
  where: z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VolunteerQuestionEditsUpdateWithoutQuestionInputSchema),z.lazy(() => VolunteerQuestionEditsUncheckedUpdateWithoutQuestionInputSchema) ]),
  create: z.union([ z.lazy(() => VolunteerQuestionEditsCreateWithoutQuestionInputSchema),z.lazy(() => VolunteerQuestionEditsUncheckedCreateWithoutQuestionInputSchema) ]),
}).strict();

export default VolunteerQuestionEditsUpsertWithWhereUniqueWithoutQuestionInputSchema;
