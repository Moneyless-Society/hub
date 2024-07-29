import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionEditsWhereUniqueInputSchema } from './VolunteerQuestionEditsWhereUniqueInputSchema';
import { VolunteerQuestionEditsCreateWithoutEditorInputSchema } from './VolunteerQuestionEditsCreateWithoutEditorInputSchema';
import { VolunteerQuestionEditsUncheckedCreateWithoutEditorInputSchema } from './VolunteerQuestionEditsUncheckedCreateWithoutEditorInputSchema';

export const VolunteerQuestionEditsCreateOrConnectWithoutEditorInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsCreateOrConnectWithoutEditorInput> = z.object({
  where: z.lazy(() => VolunteerQuestionEditsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VolunteerQuestionEditsCreateWithoutEditorInputSchema),z.lazy(() => VolunteerQuestionEditsUncheckedCreateWithoutEditorInputSchema) ]),
}).strict();

export default VolunteerQuestionEditsCreateOrConnectWithoutEditorInputSchema;
