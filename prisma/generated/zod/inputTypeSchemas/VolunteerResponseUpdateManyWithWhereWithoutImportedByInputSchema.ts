import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseScalarWhereInputSchema } from './VolunteerResponseScalarWhereInputSchema';
import { VolunteerResponseUpdateManyMutationInputSchema } from './VolunteerResponseUpdateManyMutationInputSchema';
import { VolunteerResponseUncheckedUpdateManyWithoutImportedByInputSchema } from './VolunteerResponseUncheckedUpdateManyWithoutImportedByInputSchema';

export const VolunteerResponseUpdateManyWithWhereWithoutImportedByInputSchema: z.ZodType<Prisma.VolunteerResponseUpdateManyWithWhereWithoutImportedByInput> = z.object({
  where: z.lazy(() => VolunteerResponseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VolunteerResponseUpdateManyMutationInputSchema),z.lazy(() => VolunteerResponseUncheckedUpdateManyWithoutImportedByInputSchema) ]),
}).strict();

export default VolunteerResponseUpdateManyWithWhereWithoutImportedByInputSchema;
