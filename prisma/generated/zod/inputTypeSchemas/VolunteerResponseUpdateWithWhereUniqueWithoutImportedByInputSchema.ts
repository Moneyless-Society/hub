import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseWhereUniqueInputSchema } from './VolunteerResponseWhereUniqueInputSchema';
import { VolunteerResponseUpdateWithoutImportedByInputSchema } from './VolunteerResponseUpdateWithoutImportedByInputSchema';
import { VolunteerResponseUncheckedUpdateWithoutImportedByInputSchema } from './VolunteerResponseUncheckedUpdateWithoutImportedByInputSchema';

export const VolunteerResponseUpdateWithWhereUniqueWithoutImportedByInputSchema: z.ZodType<Prisma.VolunteerResponseUpdateWithWhereUniqueWithoutImportedByInput> = z.object({
  where: z.lazy(() => VolunteerResponseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VolunteerResponseUpdateWithoutImportedByInputSchema),z.lazy(() => VolunteerResponseUncheckedUpdateWithoutImportedByInputSchema) ]),
}).strict();

export default VolunteerResponseUpdateWithWhereUniqueWithoutImportedByInputSchema;
