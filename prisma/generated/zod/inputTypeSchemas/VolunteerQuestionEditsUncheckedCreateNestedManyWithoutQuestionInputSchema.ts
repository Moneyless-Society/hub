import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionEditsCreateWithoutQuestionInputSchema } from './VolunteerQuestionEditsCreateWithoutQuestionInputSchema';
import { VolunteerQuestionEditsUncheckedCreateWithoutQuestionInputSchema } from './VolunteerQuestionEditsUncheckedCreateWithoutQuestionInputSchema';
import { VolunteerQuestionEditsCreateOrConnectWithoutQuestionInputSchema } from './VolunteerQuestionEditsCreateOrConnectWithoutQuestionInputSchema';
import { VolunteerQuestionEditsCreateManyQuestionInputEnvelopeSchema } from './VolunteerQuestionEditsCreateManyQuestionInputEnvelopeSchema';
import { VolunteerQuestionEditsWhereUniqueInputSchema } from './VolunteerQuestionEditsWhereUniqueInputSchema';

export const VolunteerQuestionEditsUncheckedCreateNestedManyWithoutQuestionInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsUncheckedCreateNestedManyWithoutQuestionInput> = z.object({
  create: z.union([ z.lazy(() => VolunteerQuestionEditsCreateWithoutQuestionInputSchema),z.lazy(() => VolunteerQuestionEditsCreateWithoutQuestionInputSchema).array(),z.lazy(() => VolunteerQuestionEditsUncheckedCreateWithoutQuestionInputSchema),z.lazy(() => VolunteerQuestionEditsUncheckedCreateWithoutQuestionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VolunteerQuestionEditsCreateOrConnectWithoutQuestionInputSchema),z.lazy(() => VolunteerQuestionEditsCreateOrConnectWithoutQuestionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VolunteerQuestionEditsCreateManyQuestionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema),z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default VolunteerQuestionEditsUncheckedCreateNestedManyWithoutQuestionInputSchema;
