import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionWhereUniqueInputSchema } from './VolunteerQuestionWhereUniqueInputSchema';
import { VolunteerQuestionCreateWithoutEditsInputSchema } from './VolunteerQuestionCreateWithoutEditsInputSchema';
import { VolunteerQuestionUncheckedCreateWithoutEditsInputSchema } from './VolunteerQuestionUncheckedCreateWithoutEditsInputSchema';

export const VolunteerQuestionCreateOrConnectWithoutEditsInputSchema: z.ZodType<Prisma.VolunteerQuestionCreateOrConnectWithoutEditsInput> = z.object({
  where: z.lazy(() => VolunteerQuestionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VolunteerQuestionCreateWithoutEditsInputSchema),z.lazy(() => VolunteerQuestionUncheckedCreateWithoutEditsInputSchema) ]),
}).strict();

export default VolunteerQuestionCreateOrConnectWithoutEditsInputSchema;
