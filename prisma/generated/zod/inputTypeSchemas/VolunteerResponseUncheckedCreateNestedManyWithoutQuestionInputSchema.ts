import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseCreateWithoutQuestionInputSchema } from './VolunteerResponseCreateWithoutQuestionInputSchema';
import { VolunteerResponseUncheckedCreateWithoutQuestionInputSchema } from './VolunteerResponseUncheckedCreateWithoutQuestionInputSchema';
import { VolunteerResponseCreateOrConnectWithoutQuestionInputSchema } from './VolunteerResponseCreateOrConnectWithoutQuestionInputSchema';
import { VolunteerResponseCreateManyQuestionInputEnvelopeSchema } from './VolunteerResponseCreateManyQuestionInputEnvelopeSchema';
import { VolunteerResponseWhereUniqueInputSchema } from './VolunteerResponseWhereUniqueInputSchema';

export const VolunteerResponseUncheckedCreateNestedManyWithoutQuestionInputSchema: z.ZodType<Prisma.VolunteerResponseUncheckedCreateNestedManyWithoutQuestionInput> = z.object({
  create: z.union([ z.lazy(() => VolunteerResponseCreateWithoutQuestionInputSchema),z.lazy(() => VolunteerResponseCreateWithoutQuestionInputSchema).array(),z.lazy(() => VolunteerResponseUncheckedCreateWithoutQuestionInputSchema),z.lazy(() => VolunteerResponseUncheckedCreateWithoutQuestionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VolunteerResponseCreateOrConnectWithoutQuestionInputSchema),z.lazy(() => VolunteerResponseCreateOrConnectWithoutQuestionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VolunteerResponseCreateManyQuestionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VolunteerResponseWhereUniqueInputSchema),z.lazy(() => VolunteerResponseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default VolunteerResponseUncheckedCreateNestedManyWithoutQuestionInputSchema;
