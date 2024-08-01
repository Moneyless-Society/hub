import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionEditsScalarWhereInputSchema } from './VolunteerQuestionEditsScalarWhereInputSchema';
import { VolunteerQuestionEditsUpdateManyMutationInputSchema } from './VolunteerQuestionEditsUpdateManyMutationInputSchema';
import { VolunteerQuestionEditsUncheckedUpdateManyWithoutQuestionInputSchema } from './VolunteerQuestionEditsUncheckedUpdateManyWithoutQuestionInputSchema';

export const VolunteerQuestionEditsUpdateManyWithWhereWithoutQuestionInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUpdateManyWithWhereWithoutQuestionInput> = z.object({
  where: z.lazy(() => VolunteerQuestionEditsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VolunteerQuestionEditsUpdateManyMutationInputSchema),z.lazy(() => VolunteerQuestionEditsUncheckedUpdateManyWithoutQuestionInputSchema) ]),
}).strict();

export default VolunteerQuestionEditsUpdateManyWithWhereWithoutQuestionInputSchema;
