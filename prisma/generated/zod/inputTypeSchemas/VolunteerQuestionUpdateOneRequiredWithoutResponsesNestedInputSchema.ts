import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionCreateWithoutResponsesInputSchema } from './VolunteerQuestionCreateWithoutResponsesInputSchema';
import { VolunteerQuestionUncheckedCreateWithoutResponsesInputSchema } from './VolunteerQuestionUncheckedCreateWithoutResponsesInputSchema';
import { VolunteerQuestionCreateOrConnectWithoutResponsesInputSchema } from './VolunteerQuestionCreateOrConnectWithoutResponsesInputSchema';
import { VolunteerQuestionUpsertWithoutResponsesInputSchema } from './VolunteerQuestionUpsertWithoutResponsesInputSchema';
import { VolunteerQuestionWhereUniqueInputSchema } from './VolunteerQuestionWhereUniqueInputSchema';
import { VolunteerQuestionUpdateToOneWithWhereWithoutResponsesInputSchema } from './VolunteerQuestionUpdateToOneWithWhereWithoutResponsesInputSchema';
import { VolunteerQuestionUpdateWithoutResponsesInputSchema } from './VolunteerQuestionUpdateWithoutResponsesInputSchema';
import { VolunteerQuestionUncheckedUpdateWithoutResponsesInputSchema } from './VolunteerQuestionUncheckedUpdateWithoutResponsesInputSchema';

export const VolunteerQuestionUpdateOneRequiredWithoutResponsesNestedInputSchema: z.ZodType<Prisma.VolunteerQuestionUpdateOneRequiredWithoutResponsesNestedInput> = z.object({
  create: z.union([ z.lazy(() => VolunteerQuestionCreateWithoutResponsesInputSchema),z.lazy(() => VolunteerQuestionUncheckedCreateWithoutResponsesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VolunteerQuestionCreateOrConnectWithoutResponsesInputSchema).optional(),
  upsert: z.lazy(() => VolunteerQuestionUpsertWithoutResponsesInputSchema).optional(),
  connect: z.lazy(() => VolunteerQuestionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => VolunteerQuestionUpdateToOneWithWhereWithoutResponsesInputSchema),z.lazy(() => VolunteerQuestionUpdateWithoutResponsesInputSchema),z.lazy(() => VolunteerQuestionUncheckedUpdateWithoutResponsesInputSchema) ]).optional(),
}).strict();

export default VolunteerQuestionUpdateOneRequiredWithoutResponsesNestedInputSchema;
