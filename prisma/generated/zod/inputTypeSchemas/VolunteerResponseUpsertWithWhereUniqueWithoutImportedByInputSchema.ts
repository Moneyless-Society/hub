import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseWhereUniqueInputSchema } from './VolunteerResponseWhereUniqueInputSchema';
import { VolunteerResponseUpdateWithoutImportedByInputSchema } from './VolunteerResponseUpdateWithoutImportedByInputSchema';
import { VolunteerResponseUncheckedUpdateWithoutImportedByInputSchema } from './VolunteerResponseUncheckedUpdateWithoutImportedByInputSchema';
import { VolunteerResponseCreateWithoutImportedByInputSchema } from './VolunteerResponseCreateWithoutImportedByInputSchema';
import { VolunteerResponseUncheckedCreateWithoutImportedByInputSchema } from './VolunteerResponseUncheckedCreateWithoutImportedByInputSchema';

export const VolunteerResponseUpsertWithWhereUniqueWithoutImportedByInputSchema: z.ZodType<Prisma.VolunteerResponseUpsertWithWhereUniqueWithoutImportedByInput> = z.object({
  where: z.lazy(() => VolunteerResponseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VolunteerResponseUpdateWithoutImportedByInputSchema),z.lazy(() => VolunteerResponseUncheckedUpdateWithoutImportedByInputSchema) ]),
  create: z.union([ z.lazy(() => VolunteerResponseCreateWithoutImportedByInputSchema),z.lazy(() => VolunteerResponseUncheckedCreateWithoutImportedByInputSchema) ]),
}).strict();

export default VolunteerResponseUpsertWithWhereUniqueWithoutImportedByInputSchema;
