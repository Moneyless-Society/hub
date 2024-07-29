import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionCreateWithoutEditsInputSchema } from './VolunteerQuestionCreateWithoutEditsInputSchema';
import { VolunteerQuestionUncheckedCreateWithoutEditsInputSchema } from './VolunteerQuestionUncheckedCreateWithoutEditsInputSchema';
import { VolunteerQuestionCreateOrConnectWithoutEditsInputSchema } from './VolunteerQuestionCreateOrConnectWithoutEditsInputSchema';
import { VolunteerQuestionUpsertWithoutEditsInputSchema } from './VolunteerQuestionUpsertWithoutEditsInputSchema';
import { VolunteerQuestionWhereUniqueInputSchema } from './VolunteerQuestionWhereUniqueInputSchema';
import { VolunteerQuestionUpdateToOneWithWhereWithoutEditsInputSchema } from './VolunteerQuestionUpdateToOneWithWhereWithoutEditsInputSchema';
import { VolunteerQuestionUpdateWithoutEditsInputSchema } from './VolunteerQuestionUpdateWithoutEditsInputSchema';
import { VolunteerQuestionUncheckedUpdateWithoutEditsInputSchema } from './VolunteerQuestionUncheckedUpdateWithoutEditsInputSchema';

export const VolunteerQuestionUpdateOneRequiredWithoutEditsNestedInputSchema: z.ZodType<Prisma.VolunteerQuestionUpdateOneRequiredWithoutEditsNestedInput> = z.object({
  create: z.union([ z.lazy(() => VolunteerQuestionCreateWithoutEditsInputSchema),z.lazy(() => VolunteerQuestionUncheckedCreateWithoutEditsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VolunteerQuestionCreateOrConnectWithoutEditsInputSchema).optional(),
  upsert: z.lazy(() => VolunteerQuestionUpsertWithoutEditsInputSchema).optional(),
  connect: z.lazy(() => VolunteerQuestionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => VolunteerQuestionUpdateToOneWithWhereWithoutEditsInputSchema),z.lazy(() => VolunteerQuestionUpdateWithoutEditsInputSchema),z.lazy(() => VolunteerQuestionUncheckedUpdateWithoutEditsInputSchema) ]).optional(),
}).strict();

export default VolunteerQuestionUpdateOneRequiredWithoutEditsNestedInputSchema;
