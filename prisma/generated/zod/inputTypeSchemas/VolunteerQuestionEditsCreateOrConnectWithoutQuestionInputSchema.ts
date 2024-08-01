import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionEditsWhereUniqueInputSchema } from './VolunteerQuestionEditsWhereUniqueInputSchema';
import { VolunteerQuestionEditsCreateWithoutQuestionInputSchema } from './VolunteerQuestionEditsCreateWithoutQuestionInputSchema';
import { VolunteerQuestionEditsUncheckedCreateWithoutQuestionInputSchema } from './VolunteerQuestionEditsUncheckedCreateWithoutQuestionInputSchema';

export const VolunteerQuestionEditsCreateOrConnectWithoutQuestionInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsCreateOrConnectWithoutQuestionInput> = z.object({
  where: z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VolunteerQuestionEditsCreateWithoutQuestionInputSchema),z.lazy(() => VolunteerQuestionEditsUncheckedCreateWithoutQuestionInputSchema) ]),
}).strict();

export default VolunteerQuestionEditsCreateOrConnectWithoutQuestionInputSchema;
