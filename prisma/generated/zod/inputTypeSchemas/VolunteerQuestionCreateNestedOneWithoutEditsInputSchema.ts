import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionCreateWithoutEditsInputSchema } from './VolunteerQuestionCreateWithoutEditsInputSchema';
import { VolunteerQuestionUncheckedCreateWithoutEditsInputSchema } from './VolunteerQuestionUncheckedCreateWithoutEditsInputSchema';
import { VolunteerQuestionCreateOrConnectWithoutEditsInputSchema } from './VolunteerQuestionCreateOrConnectWithoutEditsInputSchema';
import { VolunteerQuestionWhereUniqueInputSchema } from './VolunteerQuestionWhereUniqueInputSchema';

export const VolunteerQuestionCreateNestedOneWithoutEditsInputSchema: z.ZodType<Prisma.VolunteerQuestionCreateNestedOneWithoutEditsInput> = z.object({
  create: z.union([ z.lazy(() => VolunteerQuestionCreateWithoutEditsInputSchema),z.lazy(() => VolunteerQuestionUncheckedCreateWithoutEditsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VolunteerQuestionCreateOrConnectWithoutEditsInputSchema).optional(),
  connect: z.lazy(() => VolunteerQuestionWhereUniqueInputSchema).optional()
}).strict();

export default VolunteerQuestionCreateNestedOneWithoutEditsInputSchema;
