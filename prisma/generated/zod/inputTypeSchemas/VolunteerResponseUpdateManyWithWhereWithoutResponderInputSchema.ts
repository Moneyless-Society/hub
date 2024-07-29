import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseScalarWhereInputSchema } from './VolunteerResponseScalarWhereInputSchema';
import { VolunteerResponseUpdateManyMutationInputSchema } from './VolunteerResponseUpdateManyMutationInputSchema';
import { VolunteerResponseUncheckedUpdateManyWithoutResponderInputSchema } from './VolunteerResponseUncheckedUpdateManyWithoutResponderInputSchema';

export const VolunteerResponseUpdateManyWithWhereWithoutResponderInputSchema: z.ZodType<Prisma.VolunteerResponseUpdateManyWithWhereWithoutResponderInput> = z.object({
  where: z.lazy(() => VolunteerResponseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VolunteerResponseUpdateManyMutationInputSchema),z.lazy(() => VolunteerResponseUncheckedUpdateManyWithoutResponderInputSchema) ]),
}).strict();

export default VolunteerResponseUpdateManyWithWhereWithoutResponderInputSchema;
