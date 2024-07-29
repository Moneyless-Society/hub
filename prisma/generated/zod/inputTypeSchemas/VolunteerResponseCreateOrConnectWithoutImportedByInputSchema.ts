import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseWhereUniqueInputSchema } from './VolunteerResponseWhereUniqueInputSchema';
import { VolunteerResponseCreateWithoutImportedByInputSchema } from './VolunteerResponseCreateWithoutImportedByInputSchema';
import { VolunteerResponseUncheckedCreateWithoutImportedByInputSchema } from './VolunteerResponseUncheckedCreateWithoutImportedByInputSchema';

export const VolunteerResponseCreateOrConnectWithoutImportedByInputSchema: z.ZodType<Prisma.VolunteerResponseCreateOrConnectWithoutImportedByInput> = z.object({
  where: z.lazy(() => VolunteerResponseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VolunteerResponseCreateWithoutImportedByInputSchema),z.lazy(() => VolunteerResponseUncheckedCreateWithoutImportedByInputSchema) ]),
}).strict();

export default VolunteerResponseCreateOrConnectWithoutImportedByInputSchema;
