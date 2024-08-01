import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseScalarWhereInputSchema } from './VolunteerResponseScalarWhereInputSchema';
import { VolunteerResponseUpdateManyMutationInputSchema } from './VolunteerResponseUpdateManyMutationInputSchema';
import { VolunteerResponseUncheckedUpdateManyWithoutQuestionInputSchema } from './VolunteerResponseUncheckedUpdateManyWithoutQuestionInputSchema';

export const VolunteerResponseUpdateManyWithWhereWithoutQuestionInputSchema: z.ZodType<Prisma.VolunteerResponseUpdateManyWithWhereWithoutQuestionInput> = z.object({
  where: z.lazy(() => VolunteerResponseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VolunteerResponseUpdateManyMutationInputSchema),z.lazy(() => VolunteerResponseUncheckedUpdateManyWithoutQuestionInputSchema) ]),
}).strict();

export default VolunteerResponseUpdateManyWithWhereWithoutQuestionInputSchema;
