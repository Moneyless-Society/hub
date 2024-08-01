import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseCreateWithoutImportedByInputSchema } from './VolunteerResponseCreateWithoutImportedByInputSchema';
import { VolunteerResponseUncheckedCreateWithoutImportedByInputSchema } from './VolunteerResponseUncheckedCreateWithoutImportedByInputSchema';
import { VolunteerResponseCreateOrConnectWithoutImportedByInputSchema } from './VolunteerResponseCreateOrConnectWithoutImportedByInputSchema';
import { VolunteerResponseCreateManyImportedByInputEnvelopeSchema } from './VolunteerResponseCreateManyImportedByInputEnvelopeSchema';
import { VolunteerResponseWhereUniqueInputSchema } from './VolunteerResponseWhereUniqueInputSchema';

export const VolunteerResponseUncheckedCreateNestedManyWithoutImportedByInputSchema: z.ZodType<Prisma.VolunteerResponseUncheckedCreateNestedManyWithoutImportedByInput> = z.object({
  create: z.union([ z.lazy(() => VolunteerResponseCreateWithoutImportedByInputSchema),z.lazy(() => VolunteerResponseCreateWithoutImportedByInputSchema).array(),z.lazy(() => VolunteerResponseUncheckedCreateWithoutImportedByInputSchema),z.lazy(() => VolunteerResponseUncheckedCreateWithoutImportedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VolunteerResponseCreateOrConnectWithoutImportedByInputSchema),z.lazy(() => VolunteerResponseCreateOrConnectWithoutImportedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VolunteerResponseCreateManyImportedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VolunteerResponseWhereUniqueInputSchema),z.lazy(() => VolunteerResponseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default VolunteerResponseUncheckedCreateNestedManyWithoutImportedByInputSchema;
